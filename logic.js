let indexQuestion = 0; // Current index of question we are on
// let timer = 0;  // A clock that goes up by 1 every second
let timeLastSubmit = 0;  // the time we last submitted an answer


// all questions to be used on the website
let QUESTIONS = [
    {
        "question": "Who created the heavens and the earth?",
        "choices": ["Moses", "Paul", "God", "Peter"],
        "answer": 3
    },
    {
        "question": "What is the first book of the Bible?",
        "choices": ["Psalms", "Genesis", "Matthew", "Revelation"],
        "answer": 2
    },
    {
        "question": "Who built the ark to survive the flood?",
        "choices": ["Abraham", "Noah", "David", "Solomon"],
        "answer": 2
    },
    {
        "question": "Who led the Israelites out of Egypt?",
        "choices": ["Joshua", "Elijah", "Moses", "Aaron"],
        "answer": 3
    },
    {
        "question": "What is the name of Jesus's mother?",
        "choices": ["Elizabeth", "Sarah", "Mary", "Martha"],
        "answer": 3
    },
    {
        "question": "How many disciples did Jesus have?",
        "choices": ["10", "12", "7", "15"],
        "answer": 2
    },
    {
        "question": "What did Jesus turn water into at a wedding in Cana?",
        "choices": ["Milk", "Oil", "Wine", "Honey"],
        "answer": 3
    },
    {
        "question": "What is the shortest verse in the Bible?",
        "choices": ["'Jesus wept.'", "'God is love.'", "'The Lord is my shepherd.'", "'Rejoice always.'"],
        "answer": 1
    },
    {
        "question": "Who betrayed Jesus for 30 pieces of silver?",
        "choices": ["Judas Iscariot", "Peter", "John", "Thomas"],
        "answer": 1
    },
    {
        "question": "What happened on the third day after Jesus was crucified?",
        "choices": ["He remained in the tomb", "He ascended to heaven", "He rose from the dead", "His body was stolen"],
        "answer": 3
    }
];

// progressbar:

function progressBarHandler() {
    const progressBar = document.getElementById('score')
    progressBar.textContent = `${indexQuestion + 1 } / ${QUESTIONS.length}`
    if (indexQuestion === QUESTIONS.length) {
      window.location.href = "/quizzapp/finalPage.html"
    }
}
progressBarHandler()

// next question handler:

const myBtn = document.getElementById('myBtn');
function clickToNextQuestion() {
    // if user didnt answer return
    if(isButtonClicked == false){
        alert("you have to answer first")
        return
    }
    indexQuestion += 1 
    progressBarHandler()
    resetTimer()
}
myBtn.addEventListener('click', clickToNextQuestion);

// questions update:
function emptyElementItems(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}
const questionElement = document.getElementById("question");

    const showOptionsContainer = document.querySelector(".options")

let isButtonClicked = false
let lastAnswer = null

// Function to show the current question
function showQuestion() {
    questionElement.textContent = QUESTIONS[indexQuestion].question;
    emptyElementItems(showOptionsContainer)
    // showing the new answers:
    QUESTIONS[indexQuestion].choices.forEach( (currentAnswer,i) => {
        const answer = createQuestionAnswer(currentAnswer,i + 1)
        isButtonClicked = false
        showOptionsContainer.append(answer)
        answer.addEventListener('click', () => buttonColorChange(`.op${i + 1}`))
    })

}

// creating new elements for the answers:
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
let timeBar = document.querySelector(".seconds")

let timeExpired = false;
let timerStart = 30
let intervalID = null
function timer() {
    if (timerStart <= 0) {
       
        showQuestion()
        clearInterval(intervalID)
        return
    }
   
    intervalID = setInterval(() => {
        if(!timerStart) {
            timerStart  = 30
            indexQuestion += 1 
            showQuestion() 
            return
        }
        timerStart -= 1
        timeBar.textContent = `${timerStart}`
    }, 1000)
  
}
timer()

function resetTimer() {
    clearInterval(intervalID); 
    timerStart = 30; 
    timeBar.textContent = `${timerStart}`; 
    timer(); 
}
