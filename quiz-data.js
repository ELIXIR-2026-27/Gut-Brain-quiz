const quizData = [
    {
        id: 1,
        question: "🛏️ What is your typical sleep schedule?",
        options: [
            { text: "Less than 5 hours", score: 2 },
            { text: "5-6 hours", score: 4 },
            { text: "6-7 hours", score: 6 },
            { text: "7-8 hours", score: 9 },
            { text: "More than 8 hours", score: 7 }
        ],
        tips: {
            2: "💡 Aim for 7-8 hours nightly. Poor sleep impacts gut health dramatically!",
            4: "💡 Try to add 30-60 mins to your sleep routine for better digestion.",
            6: "💡 Great! Consider maintaining consistent sleep times.",
            9: "💡 Excellent! You're giving your body the rest it needs.",
            7: "💡 Good sleep! Just ensure it's quality, not quantity."
        }
    },
    {
        id: 2,
        question: "🥗 How many servings of vegetables do you eat daily?",
        options: [
            { text: "None", score: 1 },
            { text: "1 serving", score: 3 },
            { text: "2 servings", score: 5 },
            { text: "3 servings", score: 8 },
            { text: "5+ servings", score: 10 }
        ],
        tips: {
            1: "💡 Vegetables are crucial for gut health! Start with one veggie per meal.",
            3: "💡 Great start! Try adding one more serving daily.",
            5: "💡 Good progress! Aim for more variety in colors.",
            8: "💡 Excellent! Your microbiome loves diversity.",
            10: "💡 Outstanding! You're nourishing your gut perfectly!"
        }
    },
    {
        id: 3,
        question: "💧 How much water do you drink daily?",
        options: [
            { text: "Less than 2 cups", score: 2 },
            { text: "2-4 cups", score: 4 },
            { text: "4-6 cups", score: 6 },
            { text: "6-8 cups", score: 9 },
            { text: "More than 8 cups", score: 8 }
        ],
        tips: {
            2: "💡 Dehydration affects digestion! Aim for at least 8 glasses daily.",
            4: "💡 You're on the right track! Try increasing to 6-8 cups.",
            6: "💡 Good hydration! This helps nutrient absorption.",
            9: "💡 Perfect! Optimal hydration supports gut health.",
            8: "💡 Great! Just enough water for proper digestion."
        }
    },
    {
        id: 4,
        question: "🏃 How often do you exercise?",
        options: [
            { text: "Never", score: 1 },
            { text: "Once a week", score: 3 },
            { text: "2-3 times a week", score: 6 },
            { text: "4-5 times a week", score: 9 },
            { text: "Daily", score: 10 }
        ],
        tips: {
            1: "💡 Movement is medicine! Start with 20-minute walks 3x per week.",
            3: "💡 Good effort! Try increasing to 3-4 sessions weekly.",
            6: "💡 Excellent! Exercise supports healthy digestion.",
            9: "💡 Outstanding! You're supporting gut motility perfectly.",
            10: "💡 Amazing! Daily movement is incredible for your system."
        }
    },
    {
        id: 5,
        question: "😰 How would you rate your stress levels?",
        options: [
            { text: "Very high", score: 1 },
            { text: "High", score: 3 },
            { text: "Moderate", score: 5 },
            { text: "Low", score: 8 },
            { text: "Very low", score: 10 }
        ],
        tips: {
            1: "💡 Chronic stress damages your gut! Try meditation or breathing exercises.",
            3: "💡 Work on stress management. Your gut-brain axis will thank you!",
            5: "💡 Good balance! Consider yoga or mindfulness practices.",
            8: "💡 Excellent stress management! Keep it up.",
            10: "💡 Perfect! You're nurturing your gut-brain health beautifully."
        }
    },
    {
        id: 6,
        question: "🍔 How often do you consume processed foods?",
        options: [
            { text: "Daily", score: 1 },
            { text: "4-5 times a week", score: 3 },
            { text: "2-3 times a week", score: 5 },
            { text: "Once a week", score: 8 },
            { text: "Rarely/Never", score: 10 }
        ],
        tips: {
            1: "💡 Processed foods harm your microbiome! Switch to whole foods gradually.",
            3: "💡 Reduce processed intake to 1-2 times weekly for better gut health.",
            5: "💡 Good moderation! Keep reducing for optimal results.",
            8: "💡 Excellent choices! Your microbiome is thriving.",
            10: "💡 Outstanding! You're fueling your body with real food!"
        }
    },
    {
        id: 7,
        question: "🥒 How often do you eat fermented foods?",
        options: [
            { text: "Never", score: 2 },
            { text: "Once a month", score: 4 },
            { text: "Once a week", score: 6 },
            { text: "2-3 times weekly", score: 9 },
            { text: "Daily", score: 10 }
        ],
        tips: {
            2: "💡 Fermented foods feed good bacteria! Try yogurt, kimchi, or sauerkraut.",
            4: "💡 Increase fermented foods to 2-3x weekly for probiotic benefits.",
            6: "💡 Good start! Add variety - yogurt, kefir, kombucha, tempeh.",
            9: "💡 Excellent! Your gut microbiome is well-nourished.",
            10: "💡 Perfect! You're a fermentation superstar!"
        }
    },
    {
        id: 8,
        question: "📱 How many hours of screen time daily?",
        options: [
            { text: "8+ hours", score: 2 },
            { text: "6-8 hours", score: 4 },
            { text: "4-6 hours", score: 6 },
            { text: "2-4 hours", score: 8 },
            { text: "Less than 2 hours", score: 10 }
        ],
        tips: {
            2: "💡 Too much screen time disrupts sleep & stress! Set digital boundaries.",
            4: "💡 Try reducing screen time by 1-2 hours daily.",
            6: "💡 Good balance! Just try limiting before bed.",
            8: "💡 Excellent! You're protecting your sleep quality.",
            10: "💡 Outstanding! Your brain and gut thank you!"
        }
    },
    {
        id: 9,
        question: "🧘 How often do you practice relaxation?",
        options: [
            { text: "Never", score: 1 },
            { text: "Rarely (once monthly)", score: 3 },
            { text: "Sometimes (once weekly)", score: 5 },
            { text: "Regularly (2-3x weekly)", score: 8 },
            { text: "Daily", score: 10 }
        ],
        tips: {
            1: "💡 Relaxation is medicine! Try daily 10-minute meditation.",
            3: "💡 Increase practices to weekly for better gut-brain connection.",
            5: "💡 Great! Add one more session weekly for optimal benefits.",
            8: "💡 Excellent! Your nervous system is well-regulated.",
            10: "💡 Perfect! Daily relaxation is transforming your health!"
        }
    },
    {
        id: 10,
        question: "🌟 Overall, how would you rate your health awareness?",
        options: [
            { text: "Very low - I don't think about it", score: 2 },
            { text: "Low - Rarely consider health", score: 4 },
            { text: "Moderate - Sometimes think about it", score: 6 },
            { text: "High - Often focus on wellness", score: 8 },
            { text: "Very high - Daily wellness focus", score: 10 }
        ],
        tips: {
            2: "💡 You're here! That's the first step. Keep learning!",
            4: "💡 Great start on your wellness journey!",
            6: "💡 Good awareness! Make wellness a priority.",
            8: "💡 Excellent! You're well on your path.",
            10: "💡 Amazing! Keep that momentum going!"
        }
    }
];

const educationalArticles = [
    {
        title: "🧠 The Gut-Brain Axis",
        content: "Your gut and brain communicate bidirectionally through the vagus nerve. This powerful connection means that your digestive health directly affects your mental health and vice versa. When you stress, your digestion suffers. When your gut is healthy, your mood improves!"
    },
    {
        title: "🦠 Microbiome Magic",
        content: "Your gut contains trillions of microorganisms that form a unique ecosystem. A diverse microbiome supports immunity, mood, digestion, and even weight management. Feeding these beneficial bacteria with fiber and fermented foods is crucial for optimal health."
    },
    {
        title: "😴 Sleep & Digestion Connection",
        content: "Deep sleep allows your digestive system to repair and reset. Poor sleep disrupts your circadian rhythm, affecting nutrient absorption and gut health. Aim for 7-8 hours of quality sleep every night to support your microbiome!"
    },
    {
        title: "🥗 Fiber: The Prebiotic Powerhouse",
        content: "Fiber feeds your good gut bacteria, making them stronger and more abundant. A high-fiber diet rich in vegetables, fruits, and whole grains creates an environment where beneficial bacteria thrive. This leads to better immunity and mental health!"
    },
    {
        title: "💪 Movement Matters",
        content: "Regular exercise improves gut motility, helping food move through your system efficiently. Physical activity also reduces stress hormones that negatively impact digestion. Just 30 minutes of daily movement can transform your gut health!"
    },
    {
        title: "🌈 The Power of Fermented Foods",
        content: "Fermented foods like yogurt, sauerkraut, kimchi, and kombucha contain live probiotics that colonize your gut with beneficial bacteria. These functional foods are nature's supplement, supporting digestion, immunity, and brain health all at once!"
    }
];

const healthStatus = [
    { min: 0, max: 20, status: "⚠️ Needs Improvement", emoji: "🤔" },
    { min: 21, max: 40, status: "📈 Getting There", emoji: "💪" },
    { min: 41, max: 60, status: "✅ Good Health", emoji: "👍" },
    { min: 61, max: 80, status: "🌟 Excellent", emoji: "🎉" },
    { min: 81, max: 100, status: "🏆 Outstanding", emoji: "👑" }
];
