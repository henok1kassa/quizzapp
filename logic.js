let indexQuestion = -1; // Current index of question we are on
// let timer = 0;  // A clock that goes up by 1 every second
let timeLastSubmit = 0;  // the time we last submitted an answer
let timeExpired = false;  // Did time expire for current question?

// number of seconds to wait for each question
let WAIT_TIME = 30;

// all questions to be used on the website
let QUESTIONS = [
    {
        "question": "Which city is the capital of Ontario?",
        "choices": ["New York", "Toronto", "Berlin", "Kuala Lumpur"],
        "answer": 1
    },
    {
        "question": "Which city is the capital of Canada?",
        "choices": ["New York", "Toronto", "Ottawa", "Vancouver"],
        "answer": 2
    },
    {
        "question": "Which continent does the south pole reside?",
        "choices": ["Africa", "Antarctica", "Asia", "Australia", "Europe", "North America", "South America"],
        "answer": 1
    },
    {
        "question": "Which continent does the south pole reside?",
        "choices": ["Africa", "Antarctica", "Asia", "Australia", "Europe", "North America", "South America"],
        "answer": 1
    },
    {
        "question": "Which continent does the south pole reside?",
        "choices": ["Africa", "Antarctica", "Asia", "Australia", "Europe", "North America", "South America"],
        "answer": 1
    },
];

function progressBarHandler() {
    ++indexQuestion
    const progressBar = document.getElementById('score')
    progressBar.textContent = `${indexQuestion + 1} / ${QUESTIONS.length}`
    if (indexQuestion === QUESTIONS.length) {
        alert("hi you finshed the quizz wait for the results")
    }
}
progressBarHandler()

//  added more code!

// next question handler:
const myBtn = document.getElementById('myBtn');
function clickToNextQuestion() {

    progressBarHandler()
}
myBtn.addEventListener('click', clickToNextQuestion);

// changing the button color when clickd 
let isButtonClicked = false
let lastAnswer = null
const op1 = document.querySelector(".op1");
function buttonColorChange(cl) {
    const op1 = document.querySelector(cl);


    if (isButtonClicked == true) {
        resetPrevAnswer()

    }

    lastAnswer = cl
    isButtonClicked = true
    op1.classList.toggle('active')

}

// reseting the answer 
function resetPrevAnswer() {
    let lastAnswerElement = document.querySelector(lastAnswer)
    lastAnswerElement.classList.toggle('active')
}

op1.addEventListener('click', () => buttonColorChange(".op1"))

const op2 = document.querySelector(".op2");
op2.addEventListener('click', () => buttonColorChange(".op2"))

const op3 = document.querySelector(".op3");
op3.addEventListener('click', () => buttonColorChange(".op3"))

const op4 = document.querySelector(".op4");
op4.addEventListener('click', () => buttonColorChange(".op4"))

// timer
//  progressBar.textContent = `${indexQuestion + 1} / ${QUESTIONS.length}`
let timeBar = document.querySelector(".seconds")

let timerStart = 30
let intervalID = null
function timer() {
    if (timerStart <= 0) {
        clearInterval(intervalID)
        return
    }
   
    intervalID = setInterval(() => {
        if(!timerStart) return 
        timerStart -= 1
        timeBar.textContent = `${timerStart}`
    }, 100)

}
timer()