const questions = [
    {
        question: "Qual arte marcial foca em técnicas de chão e submissão?",
        options: ["Muay Thai", "Jiu-Jitsu", "Karate", "Taekwondo"],
        correct: 1
    },
    {
        question: "Qual arte marcial é conhecida como a 'arte das oito armas'?",
        options: ["Boxe", "Judô", "Muay Thai", "Krav Maga"],
        correct: 2
    },
    {
        question: "Qual arte marcial combina luta, acrobacias e música?",
        options: ["Capoeira", "Taekwondo", "Jiu-Jitsu", "Karate"],
        correct: 0
    },
    {
        question: "Qual sistema de defesa pessoal foi desenvolvido em Israel?",
        options: ["Karate", "Krav Maga", "Boxe", "Judô"],
        correct: 1
    },
    {
        question: "Qual arte marcial japonesa enfatiza arremessos e imobilizações?",
        options: ["Jiu-Jitsu", "Karate", "Judô", "Muay Thai"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;
let flipped = false;

function loadQuestion() {
    const questionEl = document.getElementById("question");
    const optionButtons = document.querySelectorAll(".option");

    const currentQ = questions[currentQuestion];

    questionEl.textContent = currentQ.question;
    optionButtons.forEach((button, index) => {
        button.textContent = currentQ.options[index];
        button.disabled = false;
    });

    document.getElementById("result").textContent = "";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("flashcard").classList.remove("flip");
}

function checkAnswer(selected) {
    const correctAnswer = questions[currentQuestion].correct;
    const resultEl = document.getElementById("result");
    const flashcard = document.getElementById("flashcard");

    if (selected === correctAnswer) {
        resultEl.textContent = "Correto!";
        resultEl.style.color = "green";
        score++;
    } else {
        resultEl.textContent = "Errado!";
        resultEl.style.color = "red";
    }

    document.querySelectorAll(".option").forEach(button => {
        button.disabled = true;
    });

    document.getElementById("next-btn").style.display = "block";

    // Exibe a resposta correta no flashcard e vira ele
    document.getElementById("answer").textContent = `Resposta correta: ${questions[currentQuestion].options[correctAnswer]}`;
    flashcard.classList.add("flip");
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz").innerHTML = `<p>Você terminou o quiz! Sua pontuação é ${score}/${questions.length}.</p>`;
    }
}

window.onload = loadQuestion;
