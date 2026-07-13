# 🧠 Gut-Brain Health Quiz - Mobile Exhibition App

## Overview
A beautiful, interactive mobile-optimized quiz application designed for health exhibitions. This app educates users about gut-brain health through a personalized, gamified experience.

## ✨ Features

### 📊 Personalized Scoring System
- 10 carefully designed lifestyle questions
- 5 options per question (0-10 points each)
- Scores reflect lifestyle habits, not right/wrong answers
- Maximum score: 100 points

### 🎯 Questions Cover
1. Sleep Schedule & Duration
2. Daily Vegetable Intake
3. Water Consumption
4. Exercise Frequency
5. Stress Levels
6. Processed Food Consumption
7. Fermented Food Intake
8. Screen Time
9. Relaxation Practices
10. Health Awareness

### 💡 Customized Feedback
- Individual feedback for EVERY question
- Shows user's answer and score (0-10)
- Health impact explanations with emojis
- Specific improvement tips tailored to responses
- Sorted by lowest scores first (priority areas)

### 🏆 Health Status Badges
- ⚠️ Needs Improvement (0-20)
- 📈 Getting There (21-40)
- ✅ Good Health (41-60)
- 🌟 Excellent (61-80)
- 👑 Outstanding (81-100)

### 🎨 Beautiful Design
- Vibrant animated gradient background (purple, pink, blue, cyan)
- 6 floating animated microbes representing gut bacteria
- Smooth transitions and animations
- Exhibition-ready professional visuals
- Fully mobile-responsive

### 📜 Downloadable Certificate
- Personalized with user's score and health status
- High-resolution PNG format
- Motivational messaging
- Beautiful gradient design
- Perfect for sharing

### 📱 QR Code Generator
- Generates scannable QR codes
- Perfect for exhibitions
- Easy sharing with visitors
- Direct link to quiz

### 📚 Educational Articles
- 6 informative articles about gut-brain health
- Topics include:
  - The Gut-Brain Axis
  - Microbiome Magic
  - Sleep & Digestion Connection
  - Fiber: The Prebiotic Powerhouse
  - Movement Matters
  - The Power of Fermented Foods

## 🛠️ Technology Stack
- **Frontend**: Pure HTML5, CSS3, JavaScript (no frameworks)
- **QR Code**: Embedded QR code library
- **Canvas**: For certificate generation
- **Responsive Design**: Mobile-first approach

## 📱 Device Compatibility
- ✅ Mobile phones (iOS & Android)
- ✅ Tablets
- ✅ Desktop browsers
- ✅ Touch-friendly interface
- ✅ Exhibition kiosks

## 🚀 Getting Started

### Installation
1. Clone the repository
```bash
git clone https://github.com/ELIXIR-2026-27/Gut-Brain-quiz.git
```

2. Open `index.html` in a web browser
   - No server required
   - Fully client-side application

### Usage
1. Click "Start Quiz" to begin
2. Answer all 10 questions
3. Review personalized feedback
4. Download your wellness certificate
5. Share the quiz via QR code
6. Learn more with educational articles

## 📁 File Structure
```
Gut-Brain-quiz/
├── index.html          # Main HTML structure
├── styles.css          # Styling and animations
├── script.js           # Quiz logic and interactions
├── quiz-data.js        # Questions, answers, and articles
├── qrcode.min.js       # QR code generation library
└── README.md           # This file
```

## 🎯 Key Features Breakdown

### Quiz Flow
1. **Home Screen** - Welcome with features overview
2. **Quiz Screen** - Progressive questionnaire with progress bar
3. **Results Screen** - Score, feedback, and actions
4. **Info Screen** - Educational articles

### Scoring Algorithm
- Each answer contributes 0-10 points
- Total possible: 100 points
- Personalized tips for each score range
- Priority-sorted feedback (lowest scores first)

### Animations
- Gradient background shift (15s cycle)
- Floating microbes with staggered animations
- Smooth screen transitions
- Button hover effects
- Progress bar updates

## 🎨 Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary: #7c3aed;      /* Purple */
    --secondary: #ec4899;    /* Pink */
    --tertiary: #06b6d4;     /* Cyan */
    --success: #10b981;      /* Green */
    /* ... more colors */
}
```

### Questions
Edit `quiz-data.js` to modify:
- Questions
- Answer options
- Scoring logic
- Tips and feedback

### Articles
Add or modify educational content in `quiz-data.js`:
```javascript
const educationalArticles = [
    {
        title: "Your Title",
        content: "Your content here"
    },
    // ...
];
```

## 📊 Score Interpretation

| Score | Status | Meaning |
|-------|--------|----------|
| 0-20 | ⚠️ Needs Improvement | Starting your wellness journey |
| 21-40 | 📈 Getting There | Making positive changes |
| 41-60 | ✅ Good Health | Solid wellness habits |
| 61-80 | 🌟 Excellent | Strong commitment to health |
| 81-100 | 👑 Outstanding | Exemplary wellness champion |

## 💡 Exhibition Tips

1. **Setup**
   - Deploy on a tablet or kiosk
   - Use touch-screen friendly settings
   - Display QR code prominently

2. **Engagement**
   - Generate QR codes for social media
   - Print certificates on the spot
   - Display top scores (anonymously)

3. **Accessibility**
   - Large touch targets (44px minimum)
   - Clear, readable fonts
   - High-contrast colors
   - Intuitive navigation

## 🔒 Privacy
- No data is collected or stored
- Fully client-side application
- No external API calls
- Results stay on user's device

## 📄 License
Open source - feel free to use and modify for your exhibitions!

## 🤝 Support
For issues or suggestions, please open an issue on GitHub.

---

**Created with ❤️ for health and wellness enthusiasts**
