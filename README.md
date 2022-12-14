# Quiz Master

![Quiz Master displayed on different screen sizes](assets/images/responsive.jpeg)

Live Website: [Quiz Master website](https://jmanager25.github.io/quiz-master/)

Quiz Master is an online quiz game that allows the players to test their trivial knowledge about a variety of topics. The quiz has 4 categories that the players can choose from. The categories are history, sports, science and geography. Once a categorie is selected the player has to answer 10 questions, displayed one by one. For each question the player has 20 seconds to answer, and they will be awarded 10 points for each correct answer. The Quiz is responsive and can be played in a variety of devices.

## Content


## User Experience

### User Stories

The first time users want a fun game that is easy to navigate and that works on different devices They want to test their knowledge across different topics and learn something along the way.   
The users want to test themselves on a time limit and see their own progress.

## Design
### Colour Scheme

The colour scheme and fonts for this project are based on my previous project. 

![Colour scheme](assets/images/color-pallet.jpeg)

This colour pallete is from Barbershop Landing Page by Dmitry Lauretsky

### Typography 

Google Fonts was used for the following fonts:

* Montserrat - for headings

* Roboto - for paragraphs

### Imagery

For the background image I used a chees board image. The main purpose of this image is to give a dark background to the game. 

## Features

The Quiz Master is composed of 6 sections: the landing page, the categories page, the play area, the feedback page, the high score page and the rules page.

### Existing Features
#### The Landing Page

The landing page is the first page that the users see when they enter the website. It welcomes you to the Quiz Master. It has an input field where the user should put the username, a play button, a rules button and the high score button.

![The landing page](assets/images/features/landing-page.png)

#### The Categories Page

The categories page displays the 4 categories that the user can choose from to start the quiz. The categories are: history, sports, science and geography.

![The categories page](assets/images/features/categories-page.png)

#### The Play Area

The Play area is the main area of the quiz, it is where the users test their knowledge. At the top of the page are the score, the timer and the question number. In the middle you have the question and below it the 4 answers that you can choose from. If the selected answer is correct the button turns green and 10 points are added to the score. If it is wrong, the button turns red. If the timer reaches 0, it moves on to the next question.

![The play area](assets/images/features/play-area.png)

#### The Feedback Page

The feedback page is a simple page where the player can see his/her total score. There is a play again button that leads the player to the landing.

![feedback page](assets/images/features/feedback-page.png)

#### The Rules Page

The rules page contains the rules of the game and a button to return to the landing page.

![The rules page](assets/images/features/rules-page.png)

#### The High Score Page

The high score page is where the player can see the 5 highest scores. There is also a button to return to the landing page.

![The high score page](assets/images/features/high%20score.png)

### Future Features

Future implementations are:
* Two more categories would be added: art/literature and music/cinema.
* Every category has its own background, related to the category.
* A positive sound for the right answer and a sad sound for the wrong one. The player could change the volume or turn it off. 
* When the wrong answer is chosen, the right answer will turn green. So that the player gets the chance to learn what the right answer is. 
* A high score per category. 
* Add more questions to every catgory. So that frequent players still get diverse questions.

## Technologies Used 

For this project I have used the following technologies: 

* HTML  -  To add structure to the webpage.
* CSS  -  To Style the Webpage.
* JavaScript  -  To add functionality to the Webpage.
* JSHint  -  To validate the JavaScript code.
* AM I Responsive  -  To check the responsiveness of the webpage.
* Git  -  For version control.
* GitHub  -  To store and deploy the webpage.
* Chrome Developer Tool  -  To debug and test the webpage.
* W3C Validator  -  To validate html code.
* Jigsaw CSS Validator  -  To validate CSS code.

## Testing 

### Manual Testing 

* All buttons works and opens to the correct sections.
* The website is fully responsive on all devices present on google dev tools.
* The data is stored and retrieved correctly from the localStorage.

### W3C Validator 
 
The W3C validator was used to validate the html file and it passed with no issue.

![W3C Validation image](assets/images/test/w3c-validator.png)

### W3C CSS Validator 

For the css file, w3c validator was used and it also passed with no issue.

[W3C CSS Validation image](assets/images/test/css-validator.png)

### JSHint Validator

JSHint Validator has been used to validate the 2 javaScript file and the result are below:

* ![Questions file](assets/images/test/questions.png)

For this file it stated that there are four unused variables, however those variables are being used on the scrip.js file. 

* ![Script file](assets/images/test/script.png)

For this file i got five warnings, six undefined variables, and two unused variables.
Regarding the "Functions declared within loops referencing an outer scoped variable may lead to confusing semantics", i didnt manage to find another way to write the code without getting those warning.

### Lighthouse

Lighthouse was used to test the performance, accessibility, best practices and SEO of the website:

* ![Lighthouse](assets/images/test/ligthouse.png)

### Bugs 

During the development of this project i encountered many bugs, i will list the main ones below:

* The nextQuestion function was not working properly, when I clicked on the questions the next question was not loading.  Solution - I fixed it by adding asRamdomQuestion function to it.

* The quiz only load 8 questions into the play area. Solution - created a separated function and moved the if statement from nextQuestion function to that new function(checkAnswer).

* The timer Runs too fast when I answer the question fast - Solution - I added the button disabled property when the user clicks on an answer.

* The play again button was not returning to the landing page. Solution - I set the windows.location.href with the url of the index.html.

## Deployment & Local Development

### Deployment 

Github Pages was used to deploy the live website. The instructions to achieve this are below:

* Log in (or sign up) to Github
* Find the repository for this project, Quiz Master
* Click on the Settings
* Click on the Pages, on the left side navigation bar
* Under "Branch" click the drop-down menu and select "main"
* click save, the site is now deployed and a link is provided

### How To Fork  

* Log in (or sign up) to Github and find this Project 
* Click the Fork button in the top right corner and create a copy in your repository

## Credits

### Content 

* Sports quiz questions:
  * (https://www.goal.com/en/news/best-football-quiz-questions-trivia-answers 1dfwcyp3388zg1lon8wlit8q42)
  * (https://parade.com/1182514/marynliles/sports-trivia/) 

* Science quiz questions:
  * (https://www.indiabix.com/general-knowledge/general-science/036013) 
  * (https://www.rd.com/list/science-trivia-questions/) 
  * (https://www.radiotimes.com/quizzes/pub-quiz-science/) 

* Geography quiz questions: 
  * (https://parade.com/1246355/marynliles/geography-trivia/) 

* history quiz questions:
  * (https://thoughtcatalog.com/katee-fletcher/2020/04/history-trivia-questions/)

### Media 

* Background image - unsplash.com

### Code 

* How to use localstorage:
  * (https://blog.logrocket.com/localstorage-javascript-complete-guide/) 
  * (https://michael-karen.medium.com/how-to-save-high-scores-in-local-storage-7860baca9d68)  

* function that returns a random question:
  * (https://stackoverflow.com/questions/69908649/the-random-question-generator-is-only-prompting-1-question-in-the-array-of-objec) 

* Build start and stop timer:
  * (https://www.youtube.com/watch?v=ubLC1JxMqfY&ab_channel=dcode) 

*  Code to save highScores in the localStorage:
  * (https://michael-karen.medium.com/how-to-save-high-scores-in-local-storage-7860baca9d68) 

* How to use windows.location:
  * (https://www.seoquake.com/blog/relative-or-absolute-urls/)
  * (https://stackoverflow.com/questions/503093/how-do-i-redirect-to-another-webpage) 

* How to disable a button:
  * (https://flaviocopes.com/how-to-disable-button-javascript/) 

* Hover effect:
  * (https://www.developerdrive.com/8-simple-css-hover-effects/)


## Acknowledgments

I would like to thank the following people:

* My girlfriend for her patience and support while I was working on the project
* My mentor, Mitko, for his guidance throughout the project
* My collegues from code institute for the support and motivation on Slack
  




