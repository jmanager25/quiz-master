// Variables 
// Landing page
const rules = document.getElementById("rules");
const play = document.getElementById("play");
let hiscoreBtn = document.getElementById("hiscore-button");
const landingPage = document.getElementById("initial-page");
let userName = document.getElementById("username");

// Categories
const history = document.getElementById("history");
const sports = document.getElementById("sports");
const science = document.getElementById("science");
const musicCinema = document.getElementById("music-cinema");
const geography = document.getElementById("geography");
const artLiterature = document.getElementById("art-literatue");
const categoriesPage = document.getElementById("categories-page");

// Play area
const soundOn = document.getElementById("sound-on");
const SoundOff = document.getElementById("sound-off");
let timer = document.getElementById("timer");
const question = document.getElementById("question");
const answerA = document.getElementById("answer-a");
const answerB = document.getElementById("answer-b");
const answerC = document.getElementById("answer-c");
const answerD = document.getElementById("answer-d");
const next = document.getElementById("next-question");
const playArea = document.getElementById("play-area");
let questionNumber = document.getElementById("question-number");
let questionCounter = 0;
const points = 10;
let totalQuestions = 10;
let score = 0;
let availableQuestions;
let sortQuestion = [];
let selectanswer = false;

// Feedback area
let feedbackQuestion = document.getElementsByClassName("feedback-content-question");
let feedbackAnswer = document.getElementsByClassName("feedback-content-result");
const playAgain = document.getElementById("play-again");
const feedbackPage = document.getElementById("feedback-page");

// Hiscore
const close = document.getElementById("close")
const hiscorePage = document.getElementById("hiscore-page");

// Rules 
const rulesPage = document.getElementById("rules-section");

// Add username to the localStorage, hides the landing page and shows up the categories page 
play.addEventListener("click", function () {
    let playerName = userName.value;
    if (playerName) {
        localStorage.setItem("Name", playerName);
        landingPage.classList.add("display");
        categoriesPage.classList.remove("display");
    }
})

// shows the rules page and the hiscore page when users click the rules and the hiscore button
function viewPages () {
    rules.addEventListener("click", function () {
        landingPage.classList.add("display");
        rulesPage.classList.remove("display");
    })

    hiscoreBtn.addEventListener("click", function () {
        landingPage.classList.add("display");
        hiscorePage.classList.remove("display");
    })
}

/* When player clicks on desired categorie it sorts the corresponding 
categorie questions to display on the play area */
function getQuestions () {
    let categories = document.getElementsByClassName("categories");
    for (let categorie of categories) {
        categorie.addEventListener("click", function () {
            if (this.getAttribute('data-type') === "history") {
                sortQuestion = historyQuestions;
                askRamdomQuestion();
                playArea.classList.remove("display"); 
                runGame();
            } else if (this.getAttribute('data-type') === "sports") {
                sortQuestion = sportsQuestions;
                askRamdomQuestion();
                playArea.classList.remove("display");
                runGame();
            } else if (this.getAttribute('data-type') === "science") {
                sortQuestion = scienceQuestions;
                askRamdomQuestion();
                playArea.classList.remove("display");
                runGame();
            } else if (this.getAttribute('data-type') === "geography") {
                sortQuestion = geographyQuestions;
                askRamdomQuestion();
                playArea.classList.remove("display");
                runGame();
        }
        })
    }
}

/* function that goes to all the questions and returns random questions.
code from stockoverflow - link in readme file */
function askRamdomQuestion () {
    const index = Math.floor(Math.random() * sortQuestion.length);
    availableQuestions = sortQuestion.splice(index, 1);
}

/* Loops through the questions and answers and loads 
them into the play area. */
function loadQuestion () {
    questionCounter ++
    questionNumber.innerText = questionCounter
    for (questionOption in availableQuestions) {
        question.innerHTML = availableQuestions[questionOption].question;
        answerA.innerHTML = availableQuestions[questionOption].A; 
        answerB.innerHTML = availableQuestions[questionOption].B;
        answerC.innerHTML = availableQuestions[questionOption].C; 
        answerD.innerHTML = availableQuestions[questionOption].D;
    } 
}

function nextQuestion () {
    let answerButtons = document.getElementsByClassName('answer')
    for (let answerButton of answerButtons) {
        answerButton.addEventListener('click', function () {
            if (this.getAttribute('data-type') === availableQuestions[questionOption].Answer) {
               this.classList.add('correct');
               setTimeout( () =>  { 
                this.classList.remove('correct');
                askRamdomQuestion();
                loadQuestion(); 
               }, 2000)                
            } else {
               this.classList.add('incorrect');
               setTimeout( () =>  { 
                this.classList.remove('incorrect');
                askRamdomQuestion();
                loadQuestion(); 
            loadQuestion(); 
                loadQuestion(); 
               }, 2000)   
            }
        });
    }
} 

function runGame () {
    categoriesPage.classList.add("display");
    
    loadQuestion();
    totalQuestions = 10;
   
}


   
runGame();

