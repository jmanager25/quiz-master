// Variables 
// Landing page
const rules = document.getElementById("rules");
const play = document.getElementById("play");
let hiscore = document.getElementsByClassName("hiscore");

// Categories
const history = document.getElementById("history");
const sports = document.getElementById("sports");
const science = document.getElementById("science");
const musicCinema = document.getElementById("music-cinema");
const geography = document.getElementById("geography");
const artLiterature = document.getElementById("art-literatue");

// Play area
const soundOn = document.getElementById("sound-on");
const SoundOff = document.getElementById("sound-off");
let timer = document.getElementById("timer");
const question = document.getElementById("question");
const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");
const answerC = document.getElementById("answerC");
const answerD = document.getElementById("answerD");
const nextQuestion = document.getElementById("next-question");

// Feedback area
let feedbackQuestion = document.getElementsByClassName("feedback-content-question");
let feedbackAnswer = document.getElementsByClassName("feedback-content-result");
const playAgain = document.getElementById("play-again");

// Hiscore
const close = document.getElementById("close")



// Questions
// History Questions
const historyQuestions = [
    {
        question : "What was the shortest war in human history?",
        A : "England and Zanzibar",
        B : "France and England",
        C : "USA and Canada",
        D : "Portugal and Guinea",
        Answer : "A"  
    },
    {
        question : "In which year did Hitler commit suicide?",
        A : "1939",
        B : "1944",
        C : "1945",
        D : "1946",
        Answer : "C", 
    },
    {
        question : "In which year was John F. Kennedy assassinated",
        A : "1953",
        B : "1963",
        C : "1975",
        D : "1966",
        Answer : "B", 
    },
    {
        question : "Greenland was a colony of which country until 1981?",
        A : "Sweden",
        B : "Denmark",
        C : "Iceland",
        D : "Canada",
        Answer : "B",  
    },
    {
        question : "How many U.S. presidents have been assassinated??",
        A : "5",
        B : "4",
        C : "7",
        D : "8",
        Answer : "B",  
    },
    {
        question : "Which Greek historian is known as the “Father of History”?",
        A : "Aristotle",
        B : "Plato",
        C : "Herodotus",
        D : "Socrates",
        Answer : "C",  
    },
    {
        question : "Where were the first modern Olympics held?",
        A : "Athens, Greece",
        B : "London, UK",
        C : "Paris, France",
        D : "Beijin, China",
        Answer : "A",  
    },
    {
        question : "Which war took place between 1950 and 1953?",
        A : "The Korean War",
        B : "The Vietnam War",
        C : "The World War II",
        D : "The Cold War",
        Answer : "A",  
    },
    {
        question : "What is the name of the first human civilization??",
        A : "Maya",
        B : "Greece",
        C : "Egypt",
        D : "Mesopotamia",
        Answer : "D",  
    },
    {
        question : "Who is known for running through the streets crying Eureka?",
        A : "Socrates",
        B : "Archimedes",
        C : "Horus",
        D : "Pythagoras",
        Answer : "B",  
    },
    {
        question : "How many times has the Mona Lisa been stolen?",
        A : "One",
        B : "Three",
        C : "Two",
        D : "Five",
        Answer : "A",  
    },
    {
        question : "Which century did the French Revolution take place in?",
        A : "The 16th Century",
        B : "The 18th Century",
        C : "The 17th Century",
        D : "The 19th Century",
        Answer : "B", 
    },
    {
        question : "In which year was the Berlin Wall torn down?",
        A : "1987",
        B : "1989",
        C : "1990",
        D : "1991",
        Answer : "B",  
    },
    {
        question : "Who led the USSR from 1917-1922?",
        A : "Mikhail Gorbachev",
        B : "Joseph Stalin",
        C : "Nikita Khrushchev",
        D : "Vladimir Lenin",
        Answer : "D",  
    },
    {
        question : "The Incan Empire is located in which modern-day country?",
        A : "Mexico",
        B : "Peru",
        C : "Chile",
        D : "Equador",
        Answer : "B",  
    },
    {
        question : "In which year did WWI begin?",
        A : "1914",
        B : "1917",
        C : "1929",
        D : "1939",
        Answer : "A",  
    },
    {
        question : "Where was Adolf Hitler born?",
        A : "Germany",
        B : "France",
        C : "Austria",
        D : "Hungary",
        Answer : "C",  
    },
    {
        question : "What is the longest war in U.S. history?",
        A : "American Civil War",
        B : "World War I",
        C : "Iraq War",
        D : "Afghan War",
        Answer : "D",  
    },
    {
        question : "The ancient Mayan civilization existed in which modern-day country?",
        A : "El Salvador",
        B : "Mexico",
        C : "Peru",
        D : "Guatemala",
        Answer : "D",  
    },
    {
        question : "When was the television invented?",
        A : "1927",
        B : "1929",
        C : "1937",
        D : "1963",
        Answer : "A",  
    },
    {
        question : "How old was Philo Farnsworth when he invented the television?",
        A : "39",
        B : "29",
        C : "21",
        D : "33",
        Answer : "C",  
    },
]
// Sports Questions
const sportsQuestions = [
    {
        
    }
]
// Science Questions
const scienceQuestions = [
    {
        
    }
]
// Music and Cinema Questions
const musicCinemaQuestions = [
    {
        
    }
]
// Geography Questions
const geographyQuestions = [
    {
        
    }
]
// Art and Literature Questions
const artLiteratureQuestions = [
    {
        
    }
]