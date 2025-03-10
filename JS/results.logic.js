let QUESTIONS = [
  {
    question: "Who created the heavens and the earth?",
    choices: ["Moses", "Paul", "God", "Peter"],
    answer: 3,
  },
  {
    question: "What is the first book of the Bible?",
    choices: ["Psalms", "Genesis", "Matthew", "Revelation"],
    answer: 2,
  },
  {
    question: "Who built the ark to survive the flood?",
    choices: ["Abraham", "Noah", "David", "Solomon"],
    answer: 2,
  },
  {
    question: "Who led the Israelites out of Egypt?",
    choices: ["Joshua", "Elijah", "Moses", "Aaron"],
    answer: 3,
  },
  {
    question: "What is the name of Jesus's mother?",
    choices: ["Elizabeth", "Sarah", "Mary", "Martha"],
    answer: 3,
  },
  {
    question: "How many disciples did Jesus have?",
    choices: ["10", "12", "7", "15"],
    answer: 2,
  },
  {
    question: "What did Jesus turn water into at a wedding in Cana?",
    choices: ["Milk", "Oil", "Wine", "Honey"],
    answer: 3,
  },
  {
    question: "What is the shortest verse in the Bible?",
    choices: [
      "'Jesus wept.'",
      "'God is love.'",
      "'The Lord is my shepherd.'",
      "'Rejoice always.'",
    ],
    answer: 1,
  },
  {
    question: "Who betrayed Jesus for 30 pieces of silver?",
    choices: ["Judas Iscariot", "Peter", "John", "Thomas"],
    answer: 1,
  },
  {
    question: "What happened on the third day after Jesus was crucified?",
    choices: [
      "He remained in the tomb",
      "He ascended to heaven",
      "He rose from the dead",
      "His body was stolen",
    ],
    answer: 3,
  },
];

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
