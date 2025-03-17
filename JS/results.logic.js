const s2sUsers = ["0539430984"];
const currentUser = localStorage.getItem("user");
const isS2SUser = s2sUsers.includes(JSON.parse(currentUser));
let QUESTIONS = [];

if (isS2SUser) {
  QUESTIONS = JSON.parse(localStorage.getItem("interview"));
} else {
  QUESTIONS = JSON.parse(localStorage.getItem("basicQuestions"));
}

console.log({ QUESTIONS });

function getCorrectAnswers() {
  const answers = QUESTIONS.map((answer) => answer.choices[answer.answer - 1]);
  return answers;
}

// Get stored answers and compare with correct answers
const userAnswers =
  JSON.parse(JSON.stringify(localStorage.getItem("userAnswers"))) ?? "";
const answers = userAnswers.split(",");
let indexQuestion = 0;
const correctAnswers = getCorrectAnswers();
let correctCount = 0;
answers.forEach((answer) => {
  if (correctAnswers.includes(answer)) {
    correctCount++;
  }
});

function isUserCorrect(answer, choice) {
  return answers.includes(choice) && !answers.includes(correctAnswers[answer]);
}

const totalQuestions = correctAnswers.length;
const scoreText = `You answered ${correctCount} out of ${totalQuestions} questions correctly.`;
const messageText =
  correctCount === totalQuestions ? "Well done!" : "Try again next time!";

document.getElementById("score").textContent = scoreText;
document.getElementById(
  "correct-answers"
).textContent = `Correct Answers: ${correctCount}`;
document.getElementById("message").textContent = messageText;
document.getElementById("back").addEventListener("click", () => {
  window.location.href = "/pages/home.html";
});
const showOptionsContainer = document.querySelector(".wrapper");

QUESTIONS.forEach((answer, index) => {
  const questionElement = document.createElement("div");
  questionElement.id = `question-${index}`;
  questionElement.classList.add("options");
  showQuestion(questionElement, answer);
  showOptionsContainer.append(questionElement);
  indexQuestion++;
});

function showQuestion(questionElement, answer) {
  const titleElement = document.createElement("h2");
  titleElement.textContent = answer.question;
  questionElement.append(titleElement);

  const answers = answer.choices.map((choice, index) => {
    const element = createQuestionAnswer(choice, index + 1);
    if (answer.answer === index + 1) {
      element.classList.add("active");
    }
    if (isUserCorrect(answer.answer, choice)) {
      element.classList.add("wrong");
    }
    return element;
  });

  const answersWrapper = document.createElement("div");
  answersWrapper.classList.add("answers-wrapper");
  answersWrapper.append(...answers);
  questionElement.append(answersWrapper);
}

// creating new elements for the answers:
function createQuestionAnswer(answer, index) {
  const button = document.createElement("button");
  const text = document.createElement("div");
  const mark = document.createElement("div");

  text.textContent = answer;

  text.classList.add(`text${index}`);
  button.classList.add(`op${index}`);
  mark.classList.add("mark");

  button.append(text, mark);
  return button;
}
