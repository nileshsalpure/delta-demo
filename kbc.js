const questions = [
    {
        question: "1. Who is the current Prime Minister of India ?",
        options: ["1) Steve Jobs", "2) Bill Gates", "3) Narendra Modi", "4) Elon Musk"],
        correct: "3) Narendra Modi"
    },
    {
        question: "2. Which is the national bird of India ?",
        options: ["1) Peacock", "2) Parrot", "3) Eagle", "4) Pigeon"],
        correct: "1) Peacock"
    },
    {
        question: "3. What is the capital of India?",
        options: ["1) Mumbai", "2) Delhi", "3) Kolkata", "4) Chennai"],
        correct: "2) Delhi"
    },
    {
        question: "4. Which is the largest planet in our solar system?",
        options: ["1) Mars", "2) Earth", "3) Jupiter", "4) Venus"],
        correct: "3) Jupiter"
    },
    {
        question: "5. What is the currency of the United States?",
        options: ["1) Dollar", "2) Euro", "3) Pound", "4) Yen"],
        correct: "1) Dollar"
    },
    {
        question: "6. Who discovered the law of gravity?",
        options: ["1) Albert Einstein", "2) Galileo Galilei", "3) Isaac Newton", "4) Nikola Tesla"],
        correct: "3) Isaac Newton"
    },
    {
        question: "7. Who was the first Indian to go to space?",
        options: ["1) Rakesh Sharma", "2) Kalpana Chawla", "3) Sunita Williams", "4) Vikram Sarabhai"],
        correct: "1) Rakesh Sharma"
    },
    {
        question: "8. In which year did India win its first Cricket World Cup?",
        options: ["1) 1975", "2) 1983", "3) 1996", "4) 2007"],
        correct: "2) 1983"
    },
        // Add more questions here...
];

let currentQuestion = 0;
let score = 0;
let timer;

function startTimer() {
    let timeLeft = 10; // 1 minute
    document.getElementById("timer").innerText = `Time Left: ${timeLeft}s`;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = `Time Left: ${timeLeft}s`;

        if (timeLeft === 0) {
            clearInterval(timer);
            nextQuestion(); // Move to next question when time runs out
        }
    }, 1000);
}

function loadQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById("question").innerText = questions[currentQuestion].question;
        const optionsContainer = document.getElementById("options");
        optionsContainer.innerHTML = "";

        questions[currentQuestion].options.forEach(option => {
            const button = document.createElement("button");
            button.innerText = option;
            button.onclick = () => checkAnswer(option);
            optionsContainer.appendChild(button);
        });

        clearInterval(timer); // Reset previous timer
        startTimer(); // Start new timer
    } else {
        document.getElementById("question").innerText = "Game Over!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("result").innerText = `Your Score: ${score}`;
    }
}

function checkAnswer(selected) {
    clearInterval(timer); // Stop timer when user selects an answer

    if (selected === questions[currentQuestion].correct) {
        score++;
        document.getElementById("result").innerText = "Correct! 🎉";
    } else {
        document.getElementById("result").innerText = "Wrong! ❌";
    }

    setTimeout(nextQuestion, 1000); // Move to next question after 1 second
}

function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}

loadQuestion();
