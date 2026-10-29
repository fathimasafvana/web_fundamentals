
const questions = [

    {
        question: "Which language is used for web development?",
        options: ["Python", "HTML", "Java", "C++"],
        answer: 1
    },

    {
        question: "Which framework is used with Python?",
        options: ["React", "Angular", "Django", "Vue"],
        answer: 2
    },

    {
        question: "What does CSS stand for?",
        options: [
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets"
        ],
        answer: 1
    },

    {
        question: "Which tag is used to create a paragraph in HTML?",
        options: ["<h1>", "<p>", "<div>", "<img>"],
        answer: 1
    },

    {
        question: "Which symbol is used for ID in CSS?",
        options: [".", "#", "*", "&"],
        answer: 1
    }

];


let currentIndex = 0;
let score = 0;


const StartScreen = document.getElementById("startscreen");
const quizScreen = document.getElementById("quizscreen");
const resultScreen = document.getElementById("resultscreen");

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");

const progressEl=document.getElementById("progress");
const scoreEl=document.getElementById("score");

const finalscoreEl = document.getElementById("finalscore");


function startQuiz() {

    currentIndex = 0;
    score = 0;
    StartScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    loadQuestion();
}


function loadQuestion() {

    const q = questions[currentIndex];

    console.log(q);

    questionEl.textContent = q.question;
    progressEl.textContent = `Question ${currentIndex + 1} / ${questions.length}`;
    scoreEl.textContent = `Score: ${score} / ${questions.length}`;
    optionsEl.innerHTML = "";

    q.options.forEach((opt, index) => {

        const div = document.createElement("div");

        div.className = "option";

        div.textContent = opt;

        div.onclick = () => selectAnswer(div, index);

        optionsEl.appendChild(div);

    });

}


function selectAnswer(selected, index) {

    const correctIndex = questions[currentIndex].answer;

    const options = document.querySelectorAll(".option");

    options.forEach(o => {
        o.style.pointerEvents = "none";
    });


    if (index === correctIndex) {

        selected.classList.add("correct");

        score++;

    } else {

        selected.classList.add("wrong");

        options[correctIndex].classList.add("correct");

    }

}


function nextQuestion() {

    currentIndex++;

    if (currentIndex < questions.length) {

        loadQuestion();

    } else {

        showResult();

    }

}


function showResult() {

    quizScreen.classList.add("hidden");

    resultScreen.classList.remove("hidden");
    finalscoreEl.textContent = `${score} / ${questions.length}`;



}


function restartQuiz() {

    currentIndex = 0;
    score = 0;
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    loadQuestion();

}
