const quizQuestions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
        ],
    },
    {
        question: "How many sides does a triangle have?",
        answers: [
            { text: "6", correct: false },
            { text: "5", correct: false },
            { text: "4", correct: false },
            { text: "3", correct: true },
        ],
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Mercury", correct: false },
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Saturn", correct: false },
        ],
    },
    {
        question: "What is the largest mammal on Earth?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Hippopotamus", correct: false },
        ],
    },
    {
        question: "How many continents are there on Earth?",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: false },
            { text: "7", correct: true },
            { text: "8", correct: false },
        ],
    },
    {
        question: "What is the Farthest planet in our solar system?",
        answers: [
            { text: "Neptune", correct: true },
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false },
        ],
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Hydrogen", correct: false },
        ],
    },
    {
        question: "What is the smallest prime number?",
        answers: [
            { text: "0", correct: false },
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false },
        ],
    },
    {
        question: "Which bird is known for its beautiful tail feathers and courtship dance?",
        answers: [
            { text: "Penguin", correct: false },
            { text: "Emu", correct: false },
            { text: "Eagle", correct: false },
            { text: "Peacock", correct: true },
        ],
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Arctic Ocean", correct: false },
        ],
    },
];

const questionsElement = document.querySelector('.questions');
const answersContainer = document.querySelector('#answers');
const skipButton = document.querySelector('#skip');
const quizApp = document.querySelector('.app');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion(quizQuestions[currentQuestionIndex]);
}
function showQuestion(question) {
  questionsElement.innerText = question.question;
  answersContainer.innerHTML = '';

  question.answers.forEach((answer, index) => {
    const answerButton = document.createElement('button');
    answerButton.innerText = answer.text;
    answerButton.classList.add('btn');
    answerButton.addEventListener('click', () => handleAnswerClick(answer));
    answersContainer.appendChild(answerButton);
  });

  if (currentQuestionIndex === quizQuestions.length - 1) {
    skipButton.innerText = 'Finish';
  } else {
    skipButton.innerText = 'SKIP';
  }
}

function handleAnswerClick(answer) {
  if (answer.correct) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion(quizQuestions[currentQuestionIndex]);
  } else {
    showResults();
  }
}
function showResults() {
  quizApp.innerHTML = `
    <h1>Quiz Results</h1>
    <p>You got ${score} out of ${quizQuestions.length} questions correct!</p>
  `;
}

skipButton.addEventListener('click', () => {
  if (currentQuestionIndex === quizQuestions.length - 1) {
    showResults();
  } else {
    currentQuestionIndex++;
    showQuestion(quizQuestions[currentQuestionIndex]);
  }
});

startQuiz();