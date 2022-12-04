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
const points = 10;
const totalQuestions = 10;
let score = 0;
let availableQuestions = [];
let sortQuestion = [];
let acceptingAnswers = true;
let questionNumber = 0;

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

/* When player clicks on desired categorie, hides the categories page, displays the
play area, sorts the corresponding categories questions */
function getQuestions () {
    let categories = document.getElementsByClassName("categories");
    // Hides categories page when clicked and shows play are page
    for (let categorie of categories) {
        categorie.addEventListener("click", function () {
            categoriesPage.classList.add("display");
            playArea.classList.remove("display");
            // Sorts the categories questions based on their data type
            if (this.getAttribute('data-type') === "history") {
                sortQuestion = historyQuestions.sort();
                askRamdomQuestion();          
                runGame();
            } else if (this.getAttribute('data-type') === "sports") {
                sortQuestion = sportsQuestions.sort();
                askRamdomQuestion();
                runGame();
            } else if (this.getAttribute('data-type') === "science") {
                sortQuestion = scienceQuestions.sort();
                askRamdomQuestion();
                runGame();
            } else if (this.getAttribute('data-type') === "geography") {
                sortQuestion = geographyQuestions.sort();
                askRamdomQuestion();
                runGame();
        }
        })
    }
}

function runGame () {
    
    nextQuestion();
}

/* Loops through the questions and answers and loads 
them into the play area. */
function nextQuestion () {
    for (let i = 0; i < availableQuestions.length; i++) {
        question.innerHTML = availableQuestions[i].question;
        answerA.innerHTML = availableQuestions[i].A; 
        answerB.innerHTML = availableQuestions[i].B;
        answerC.innerHTML = availableQuestions[i].C; 
        answerD.innerHTML = availableQuestions[i].D;
        questionNumber++
    }
}

   
runGame();

// function that goes to all the questions and returns random questions
function askRamdomQuestion () {
    const index = Math.floor(Math.random() * sortQuestion.length);
    availableQuestions = sortQuestion.splice(index, 1);
}