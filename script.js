let questionList = ['What is the largest mammal in the world?', 'Who painted the Mona Lisa?', 'Who was the first televised president?'];
let answerList = ['whales', 'da vinci', 'FDR'];
let score = 0;
let questionIndex = 0;

const question = document.querySelector('.qa');
const button = document.querySelector('.button');
const input = document.querySelector('.input-container');
let scoreContainer = document.querySelector('.score');

question.textContent = questionList[questionIndex];
console.log(question);

let sumbitFunction = () => {
    button.addEventListener('click', () => {
        if (input.value === answerList[questionIndex]) {
            questionIndex += 1;
            score += 1;
            question.textContent = questionList[questionIndex];
            scoreContainer.textContent = "Score: " + score;
        } else {
            score -= 1;
            scoreContainer.textContent = "Score: " + score;
        }
        //Put endgame function here
        endGame();
    });
}

let endGame = () => {
    if (questionIndex > 2) {
        scoreContainer.textContent = "Final Score: " + score;
        question.textContent = "Congratulations, play again!";
        input.style.display = "none";
        button.style.display = "none";
    }
}


sumbitFunction();
