// STATE MANAGEMENT
let currentQuestion = 0;
let userAnswers = [];
let quizStarted = false;

// SCREEN NAVIGATION
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function startQuiz() {
    quizStarted = true;
    currentQuestion = 0;
    userAnswers = [];
    showScreen('quizScreen');
    displayQuestion();
}

function goHome() {
    showScreen('homeScreen');
}

function showInfo() {
    displayArticles();
    showScreen('infoScreen');
}

// QUIZ LOGIC
function displayQuestion() {
    const question = quizData[currentQuestion];
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    
    // Update progress bar
    document.getElementById('progressFill').style.width = progress + '%';
    
    // Update question counter
    document.getElementById('questionCounter').textContent = 
        `Question ${currentQuestion + 1} of ${quizData.length}`;
    
    // Display question
    document.getElementById('questionText').textContent = question.question;
    
    // Display options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        if (userAnswers[currentQuestion] === index) {
            optionDiv.classList.add('selected');
        }
        optionDiv.textContent = option.text;
        optionDiv.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionDiv);
    });
    
    // Update navigation buttons
    document.getElementById('prevBtn').style.display = 
        currentQuestion > 0 ? 'block' : 'none';
    
    const nextBtn = document.getElementById('nextBtn');
    if (currentQuestion === quizData.length - 1) {
        nextBtn.textContent = 'Finish 🏁';
    } else {
        nextBtn.textContent = 'Next →';
    }
}

function selectOption(index) {
    userAnswers[currentQuestion] = index;
    displayQuestion();
}

function nextQuestion() {
    if (userAnswers[currentQuestion] === undefined) {
        alert('Please select an answer!');
        return;
    }
    
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        finishQuiz();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

function finishQuiz() {
    calculateResults();
    showScreen('resultsScreen');
}

// RESULTS CALCULATION
function calculateResults() {
    let totalScore = 0;
    const feedbackData = [];
    
    quizData.forEach((question, index) => {
        const selectedOptionIndex = userAnswers[index];
        const selectedOption = question.options[selectedOptionIndex];
        const score = selectedOption.score;
        const tip = question.tips[score];
        
        totalScore += score;
        feedbackData.push({
            question: question.question,
            answer: selectedOption.text,
            score: score,
            tip: tip
        });
    });
    
    // Calculate percentage
    const maxScore = quizData.length * 10;
    const percentage = Math.round((totalScore / maxScore) * 100);
    
    // Sort feedback by score (lowest first)
    feedbackData.sort((a, b) => a.score - b.score);
    
    // Display results
    displayResults(totalScore, maxScore, percentage, feedbackData);
}

function displayResults(totalScore, maxScore, percentage, feedbackData) {
    // Display score
    document.getElementById('totalScore').textContent = percentage;
    
    // Determine health status
    const status = healthStatus.find(s => percentage >= s.min && percentage <= s.max);
    document.getElementById('healthStatus').textContent = 
        `${status.emoji} ${status.status}`;
    
    // Display feedback
    const feedbackContainer = document.getElementById('feedbackContainer');
    feedbackContainer.innerHTML = '';
    
    feedbackData.forEach((item, index) => {
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = 'feedback-item';
        feedbackDiv.innerHTML = `
            <div class="feedback-question">${item.question}</div>
            <div class="feedback-answer">Your answer: ${item.answer}</div>
            <span class="feedback-score">Score: ${item.score}/10</span>
            <div class="feedback-tip">${item.tip}</div>
        `;
        feedbackContainer.appendChild(feedbackDiv);
    });
}

// CERTIFICATE GENERATION
function downloadCertificate() {
    const canvas = document.getElementById('certificateCanvas');
    canvas.width = 1200;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');
    
    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#7c3aed');
    gradient.addColorStop(0.5, '#ec4899');
    gradient.addColorStop(1, '#06b6d4');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add decorative border
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 8;
    ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);
    
    // Add inner border
    ctx.lineWidth = 3;
    ctx.strokeRect(50, 50, canvas.width - 100, canvas.height - 100);
    
    // Add decorative elements
    ctx.font = '80px Arial';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.textAlign = 'center';
    ctx.fillText('🦠', 150, 200);
    ctx.fillText('🧠', canvas.width - 150, 200);
    ctx.fillText('✨', 150, canvas.height - 100);
    ctx.fillText('💚', canvas.width - 150, canvas.height - 100);
    
    // Title
    ctx.font = 'bold 60px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText('🏆 WELLNESS CHAMPION 🏆', canvas.width / 2, 150);
    
    // Message
    ctx.font = '32px Arial';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fillText('Certificate of Health & Wellness Achievement', canvas.width / 2, 250);
    
    // Score
    const scorePercent = document.getElementById('totalScore').textContent;
    ctx.font = '48px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText(`Score: ${scorePercent}%`, canvas.width / 2, 400);
    
    // Status
    const status = document.getElementById('healthStatus').textContent;
    ctx.font = '36px Arial';
    ctx.fillText(status, canvas.width / 2, 500);
    
    // Motivational message
    ctx.font = '28px italic Arial';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    ctx.fillText('You are taking charge of your gut-brain health!', canvas.width / 2, 600);
    
    // Date
    const date = new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    ctx.font = '20px Arial';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.fillText(`Date: ${date}`, canvas.width / 2, canvas.height - 60);
    
    // Download
    canvas.toBlob(blob => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `wellness-certificate-${Date.now()}.png`;
        link.click();
    }, 'image/png');
}

// QR CODE GENERATION
function generateQRCode() {
    const qrContainer = document.getElementById('qrContainer');
    const qrCode = document.getElementById('qrCode');
    
    // Clear previous
    qrCode.innerHTML = '';
    
    // Quiz URL
    const quizUrl = window.location.href.split('?')[0];
    
    // Create QR code
    const qr = qrcode(0, 'M');
    qr.addData(quizUrl);
    qr.make();
    
    const qrImage = qr.createImgTag(5);
    qrCode.innerHTML = qrImage;
    
    qrContainer.style.display = 'block';
}

// ARTICLES DISPLAY
function displayArticles() {
    const articlesContainer = document.getElementById('articlesContainer');
    articlesContainer.innerHTML = '';
    
    educationalArticles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.className = 'article';
        articleDiv.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.content}</p>
        `;
        articlesContainer.appendChild(articleDiv);
    });
}

// RESTART QUIZ
function restartQuiz() {
    startQuiz();
}

// Initialize on load
window.onload = function() {
    showScreen('homeScreen');
};
