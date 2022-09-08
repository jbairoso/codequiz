var questionWrapper = document.getElementById("question-wrapper");
var totalSeconds = 75;
var questionEL = document.getElementById("question-title-1");
var answerList = document.querySelector(".questions");
var questionCounter = 0;
var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("startQuiz");
var startDiv = document.getElementById("begin-quiz");

var questions = [
  {
    questionText: "What do software developers do?",
    answers: [
      "1. They develop soft things",
      "2. They play softball",
      "3. They create computer software",
      "4.They install your cable",
    ],
    answer: "3. They create computer software",
  },
  {
    questionText: "In JavaScript, whats an array?",
    answers: [
      "1. A type of function.",
      "2. A single variable that is used to store different elements.",
      "3. Multiple variables in one element.",
      "4. A sea creature.",
    ],
    answer: "2.  A single variable that is used to store different elements.",
  },
  {
    questionText: "What does HTML stand for?",
    answers: [
      "1. Hyper Tools Makeup Language",
      "2. Xanga language",
      "3. Hello Tom Myspace Language ",
      "4. HyperText Markup Language",
    ],
    answer: "4. HyperText Markup Language",
  },
  {
    questionText: "What does CSS stand for?",
    answers: [
      "1. Casual Style Syntax",
      "2. Cascading Style Sheets",
      "3. Correct Stand Still",
      "4. Cyber Software Spy",
    ],
    answer: "2. Cascading Style Sheets",
  },
  {
    question: "Where should a CSS file be referenced in a HTML file?",
    options: [
      "1.Before any HTML code",
      "2.After all HTML code",
      "3.Inside the head section",
      "4. In the cloud",
    ],
    answer: "3. Inside the head section",
  },
];

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  setInterval(function () {
    timerEl.innerHTML = "Timer: " + totalSeconds;
    totalSeconds--;
  }, 1000);

  askQuestions();

  questionWrapper.style.display = "block";
  startDiv.style.display = "none";
  submitIntials.style.display = "none";
}

function askQuestions() {
  questionEL.innerHTML = questions[0].question;

  answerList.innerHTML = `
    <li><button class = "answer">${questions[0].options[0]}</button></li>
    <br/>
    <li><button class = "answer">${questions[0].options[1]}</button></li>
    <br/>
    <li><button class = "answer">${questions[0].options[2]}</button></li>
    <br/>
    `;
  document
    .querySelectorAll(".answer")
    .forEach((el) => el.addEventListener("click", checkAnswer));
}

function checkAnswer() {
  var userAnswer = this.innerHTML;
  var answer = questions[questionCounter].answer;
  if (userAnswer == answer) {
    console.log("correct");
  } else {
    console.log("wrong");
  }
}

/*solve for questions not showing after clicking start, high score click, timer going negative */