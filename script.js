const quizQuestions = [
    {question:"What is my name?", options:{ a: "Kylie", b: "Sara", c: "Carmen", d: "Niusha" }, answer: "d" },
    { question: "What is my last name?", options: { a: "Khodayar", b: "smith", c: "Ali", d: "brown" }, answer: "a" },
    { question: "Which country I was born in?", options: { a: "Japan", b: "Iraq", c: "United Kingdom", d: "Iran" }, answer: "d" },
    {question: "When is my birthday?", options:{ a: "04/27/2007", b: "06/26/2007", c: "04/26/2007", d: "09/26/2007" }, answer: "c" },
    {question: "What is my favorite color?", options: { a: "Red", b: "White", c: "Baby blue", d: "Green" }, answer: "c" },
    {question: "What is my favorite food?", options:{ a: "Pizza", b: "Hot dog", c: "BBQ ribs", d: "Fried chicken" }, answer: "a" },
    {question: "What is my zodiac sign?", options:{ a: "Taurus", b: "Aries", c: "Leo", d: "Cancer" }, answer: "a" },
    {question: "What is my height?", options: { a: "5'8", b: "5'4", c: "5'5", d: "5'6" }, answer: "c" },
    {question: "What is my first language?", options:{ a: "Arabic", b: "Turkish", c: "Urdu", d: "Farsi" }, answer: "d" },
    {question: "What is my favorite animal?", options: { a: "Cat", b: "Dog", c: "Bird", d: "Snake" }, answer: "c" },
    {question: "What is my favorite number?", options: { a: "10", b: "6", c: "4", d: "18" }, answer: "d" },
    { question: "Do I have brothers or sisters?", options: { a: "Yes", b: "No", c: "Maybe", d: "Both sister and brother" }, answer: "b" },
    {question: "What is my favorite song?", options: { a: "Anxiety by blackbear,FRND", b: "Crazy Over You by Blackpink", c: "TV by Billie Eilish", d: "BOLO by Penomeco,ydg" }, answer: "d" },
    {question: " What anime i like to watch?", options: { a: "Spy X family", b: "Your Name", c: "Ponyo", d: "One Punch Man" }, answer: "a" },
    {question: "What is my favorite season?", options: { a: "Winter", b: "Spring", c: "Summer", d: "Autumn" }, answer: "d" },
    {question: "What helps me to relax?", options: { a: "Sleep", b: "Food", c: "Hug", d: "Nothing" }, answer: "a" },
    {question: "What i fear the most?", options: { a: "Spiders", b: "Rats", c: "Dark room", d: "All three options" }, answer: "c" },
    {question: "What is my mom name?", options: { a: "Rose", b: "Mia", c: "Emma", d: "Khatereh" }, answer: "d" },
    {question: "What is my hobby?", options: { a: "knitting", b: "Painting", c: "Dance", d: "Gardening" }, answer: "b" },
    { question: "What is my favorite flower?", options: { a: "Dahlia", b: "Tulip", c: "Bleeding heart", d: "Cherry blossom" }, answer: "c" },
    
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');

    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    for (const key in currentQuestion.options) {
        if (currentQuestion.options.hasOwnProperty(key)) {
            const button = document.createElement('button');
            button.textContent = currentQuestion.options[key];
            button.onclick = () => checkAnswer(key);
            optionsElement.appendChild(button);
        }
    }

    document.getElementById('next-btn').disabled = true;
}

function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const buttons = document.querySelectorAll('#options button');

    buttons.forEach(button => {
        const optionKey = Object.keys(currentQuestion.options).find(key => currentQuestion.options[key] === button.textContent);
        if (optionKey === currentQuestion.answer) {
            button.classList.add('correct');
        } else {
            button.classList.add('incorrect');
        }
        button.disabled = true;
    });

    if (selectedOption === currentQuestion.answer) {
        score++;
    }

    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz').style.display = "none";
    document.getElementById('next-btn').style.display = "none";
    const resultElement = document.getElementById('result');
    resultElement.style.display = "block";
    document.getElementById('score').textContent = `${score}/${quizQuestions.length}`;
}

// Initialize quiz
loadQuestion();