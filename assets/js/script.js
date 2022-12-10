// Variables 
// Landing page
const rules = document.getElementById("rules");
const play = document.getElementById("play");
let highscoreBtn = document.getElementById("highscore-button");
const landingPage = document.getElementById("initial-page");
let userName = document.getElementById("username");
const highscorePage = document.getElementById("highscore-page");

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
let scorePoints = document.getElementById("score-points");
let timerDisplayer = document.getElementById("timer");
let questionCounter = 0;
let totalQuestions = 10;
let score = 0;
let availableQuestions;
let sortQuestion = [];
let timeToAnswer = 30;
let countDown;

// Feedback area
let feedbackQuestion = document.getElementsByClassName("feedback-content-question");
let feedbackAnswer = document.getElementsByClassName("feedback-content-result");
const playAgain = document.getElementById("play-again");
const feedbackPage = document.getElementById("feedback-page");
const totalScore = document.getElementById("total-score");

// Highscore
const close = document.getElementById("close")
const noOfHighScore = 5;
const higherScores = 'highscores';
const highScores = JSON.parse(localStorage.getItem(higherScores)) ?? [];

// Rules 
const rulesPage = document.getElementById("rules-section");

// Add username to the localStorage, hides the landing page and shows up the categories page 
play.addEventListener("click", function () {
    let playerName = userName.value;
    if (playerName) {
        landingPage.classList.add("display");
        categoriesPage.classList.remove("display");    
    }
})

// shows the rules page when users clicks the rules button.
    rules.addEventListener("click", function () {
        landingPage.classList.add("display");
        rulesPage.classList.remove("display");
    })

// shows the highscore page when users click the hiscore button.
    highscoreBtn.addEventListener("click", function () {
        landingPage.classList.add("display");
        highscorePage.classList.remove("display");
    }) 


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
                categoriesPage.classList.add("display");
                loadQuestion(); 
                startTimer();
            } else if (this.getAttribute('data-type') === "sports") {
                sortQuestion = sportsQuestions;
                askRamdomQuestion();
                playArea.classList.remove("display");
                categoriesPage.classList.add("display");
                loadQuestion();
                startTimer(); 
            } else if (this.getAttribute('data-type') === "science") {
                sortQuestion = scienceQuestions;
                askRamdomQuestion();
                playArea.classList.remove("display");
                categoriesPage.classList.add("display");
                loadQuestion();
                startTimer(); 
            } else if (this.getAttribute('data-type') === "geography") {
                sortQuestion = geographyQuestions;
                askRamdomQuestion();
                playArea.classList.remove("display");
                categoriesPage.classList.add("display");
                loadQuestion();
                startTimer(); 
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

/* when the players select their answer moves on to the next question. */
function nextQuestion () {
    answerButtons = document.getElementsByClassName('answer')
    for (let answerButton of answerButtons) {
        answerButton.addEventListener('click', checkAnswer)
    }
}

// Checks if the asnwer is correct.
function checkAnswer () {
    disabled();
    stopTimer();
    if (this.getAttribute('data-type') === availableQuestions[questionOption].Answer) {
        this.classList.add('correct');
        addScore();
        setTimeout( () =>  { 
            startTimer();
            this.classList.remove('correct');     
            finishGame();
            askRamdomQuestion();
            loadQuestion();                
        }, 2000)                
    } else {
        this.classList.add('incorrect');
        setTimeout( () =>  { 
            startTimer();
            this.classList.remove('incorrect');     
            finishGame();
            askRamdomQuestion(); 
            loadQuestion(); 
        }, 2000)
    }
}   

/* Adds 10 points to the score each time the player gets the correct answer. */
function addScore () {
    score += 10
    scorePoints.innerHTML = score
    totalScore.innerHTML = score
}

/* When the question number reaches the total question number, hides the play area and
display the feedback page. */
function finishGame () {
    if (questionCounter >= totalQuestions) {
        playArea.classList.add('display');
        feedbackPage.classList.remove('display'); 
        saveHighScore(); 
    }
}

// starts the countdown
/* code based on a youtube tutorial - https://www.youtube.com/watch?v=ubLC1JxMqfY&ab_channel=dcode */
function startTimer () {
    timeToAnswer = 30;
    countDown = setInterval(function () {
        timeToAnswer -= 1;
        timerDisplayer.innerHTML = timeToAnswer;
        if (timeToAnswer === 0) {
            stopTimer();
            disabled();
            setTimeout( () =>  { 
                startTimer();
                askRamdomQuestion();
                loadQuestion();
               }, 2000)            
        }
    }, 1000);
}
 
// Stops the countdown
function stopTimer () {
    clearInterval(countDown);
}

//highscores
/* Saves the username and the score in the localStorage.
Code from article - https://michael-karen.medium.com/how-to-save-high-scores-in-local-storage-7860baca9d68*/
function saveHighScore () {
    const newScore = {
        name : userName.value,
        score : score
    }
    highScores.push(newScore);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(noOfHighScore);
    localStorage.setItem(higherScores, JSON.stringify(highScores));
}

/* Gets scores and username from the localStorage an display them on the highScore Page */
const highScoresList = document.getElementById("highScores-list");

highScoresList.innerHTML = highScores
.map( (score) => `<li class="list">${score.name} - ${score.score}</li>`)
.join('');

/* When the users clicks on the home buttons, return to the landig page */
homeBtns = document.getElementsByClassName("home")
for (homeBtn of homeBtns) {
    homeBtn.addEventListener("click", function() {
        landingPage.classList.remove("display");
        rulesPage.classList.add("display");
        highscorePage.classList.add("display");
    })
}

/* When the user clicks on play again button on feedback page, reloads the 
page and return to home page */
playAgain.addEventListener("click", function() {
    window.location.assign("/index.html");
})

/* Disable the buttons once the users clicks on an answers or the time runs out
 and enables them for the next question. */
function disabled () {
    answerButtons = document.getElementsByClassName('answer');
    for (let answerButton of answerButtons) {
        answerButton.disabled = true;
        setTimeout( () =>  { 
           answerButton.disabled = false;
        }, 2000)
    }
}

