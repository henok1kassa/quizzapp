let indexQuestion = 0; // Current index of question we are on
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
        "choices": ["Africa", "Antarctica", "Asia", "Australia"],
        "answer": 1
    },
    {
        "question": "what is my name?",
        "choices": ["henok", "gideon", "manashe", "joshua"],
        "answer": 1
    },
    {
        "question": "how old is gideon?",
        "choices": ["10", "45", "80", "too old"],
        "answer": 1
    },
];

function progressBarHandler() {
    const progressBar = document.getElementById('score')
    progressBar.textContent = `${indexQuestion + 1 } / ${QUESTIONS.length}`
    if (indexQuestion === QUESTIONS.length) {
        alert("hi you finshed the quizz wait for the results")
    }
}
progressBarHandler()

// next question handler:
const myBtn = document.getElementById('myBtn');
function clickToNextQuestion() {
    indexQuestion += 1 
    progressBarHandler()
}
myBtn.addEventListener('click', clickToNextQuestion);

// added more code!
// questions update:

function emptyElementItems(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}
const questionElement = document.getElementById("question");

    const showOptionsContainer = document.querySelector(".options")
// Function to show the current question
function showQuestion() {
    questionElement.textContent = QUESTIONS[indexQuestion].question;
    emptyElementItems(showOptionsContainer)
    QUESTIONS[indexQuestion].choices.forEach( (currentAnswer,i) => {
        const answer = createQuestionAnswer(currentAnswer,i + 1)

        showOptionsContainer.append(answer)
        answer.addEventListener('click', () => buttonColorChange(`.op${i + 1}`))
    })
}
function createQuestionAnswer(answer,index){
    const button = document.createElement("button")
    const text = document.createElement("div")
    const mark = document.createElement("div")

    text.textContent= answer

    text.classList.add(`text${index}`)
    button.classList.add(`op${index}`)
    mark.classList.add("mark")
   

    button.append(text, mark)
    return button
}
myBtn.addEventListener("click", function () {
    showQuestion();
});
showQuestion()
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
    lastAnswerElement.classList.remove('active')
}


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