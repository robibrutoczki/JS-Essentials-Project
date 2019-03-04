// Declare and initialise our variables when the page is first loaded

let scoreTally = 0;
let answerHistory = [];
let gameType = 1;
let rightAnswer = 0;

// Declare variables to be assigned when the DOM has loaded

let historyDiv;
let scoreBox;
let questionBox;
let answerBox;

// When the DOM has loaded, initialise the variables and
// run the addition game

document.addEventListener("DOMContentLoaded", function() {
    historyDiv = document.getElementById("answer-history");
    scoreBox = document.getElementById("score");
    questionBox = document.getElementById("question");
    answerBox = document.getElementById("answer-box");

    runGame(gameType);
});

/*
 Functions that run when the corresponding button is clicked
 Change the game type:
 1 = Addition game
 2 = Subtraction game
 3 = Multiplication game
 Then call runGame with the appropriate type
*/

function setAdditionGame() {
    gameType = 1;
    runGame(gameType);
}

function setSubtractionGame() {
    gameType = 2;
    runGame(gameType);
}

function setMultiplicationGame() {
    gameType = 3;
    runGame(gameType);
}

// Optional code to detect Enter key press

function checkForEnterKey(keyPress) {
    if (keyPress.keyCode == 13) { // 13 is the key code for Enter
        answerSubmitted(); // If Enter was pressed, our answer was submitted
    }
}

// answerSubmitted() is called when our answer is submitted either 
// by clicking the Submit button or pressing the Enter key

function answerSubmitted() {
    let newScore = checkAnswer(); // Checks our answer
    setScore(newScore); // Sets the score
    setAnswerHistory(); // Display the smiley faces
    runGame(gameType); // Run the next game
}

function checkAnswer() {

    // Compare the submitted answer with the right answer
    // If correct, increase the score
    // Push a true or false value into the answerHistory array

    if (answerBox.value == rightAnswer) {
        alert("Hey! You got it right :)");
        scoreTally++;
        answerHistory.push(true);
    }
    else {
        alert("Awww...wrong this time :(");
        answerHistory.push(false);
    }

    return scoreTally;
}

function setScore(newScore) {
    scoreBox.textContent = newScore;
}

function setAnswerHistory() {

    // Iterates through the array and sets two classes in htmlString - 
    // either a happy face in green or a sad face in red

    let htmlString = "";
    for (let correctAnswer of answerHistory) {
        let answerClass;
        let answerFace;
        if (correctAnswer) {
            answerClass = "answer-correct";
            answerFace = "fa-grin-beam"
        }
        else {
            answerClass = "answer-incorrect";
            answerFace = "fa-frown-open"
        }
        htmlString += `<i class='fas ${answerFace} ${answerClass}'></i>`;
    }
    historyDiv.innerHTML = htmlString;
}

function runGame(gameSelect) {

    /*
     Runs the appropriate game.
     1 = Addition game
     2 = Subtraction game
     3 = Multiplication game
    */

    answerBox.value = ""; // Erases the last typed answer
    answerBox.focus(); // Puts the cursor in the answer box

    if (gameSelect == 1) {
        questionBox.textContent = runAdditionGame();
    }
    else
    if (gameSelect == 2) {
        // Subtraction game goes here
    }
    else
    if (gameSelect == 3) {
        // Multiplication game goes here
    }
}

function runAdditionGame() {
    // Create two random numbers between 1 and 50

    let num1 = Math.floor(Math.random() * 50) + 1;
    let num2 = Math.floor(Math.random() * 50) + 1;

    // Store the correct answer in rightAnswer

    rightAnswer = (num1 + num2);
    
    return `${num1} + ${num2}?`;
}
