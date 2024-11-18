let questionList = ['What is the largest mammal in the world?', 'Who painted the Mona Lisa?', 'Who was the first televised president?'];
let answerList = ['whale', 'da vinci', 'fdr'];
let score = 0;
let questionIndex = 0;

const question = document.querySelector('.qa');
const button = document.querySelector('.button');
const input = document.querySelector('.input-container');
let scoreContainer = document.querySelector('.score');

question.textContent = questionList[questionIndex];

let sumbitFunction = () => {
    button.addEventListener('click', () => {
        // Normalize user input and correct answer for comparison
        const userAnswer = input.value.trim().toLowerCase();
        const correctAnswer = answerList[questionIndex].toLowerCase();

        if (userAnswer === correctAnswer) {
            // Correct answer
            questionIndex += 1;
            score += 1;

            // Load next question if available
            if (questionIndex < questionList.length) {
                question.textContent = questionList[questionIndex];
            } else {
                endGame(); // No more questions, end game
            }
        } else {
            // Incorrect answer
            score -= 1;
        }

        // Update score display
        scoreContainer.textContent = "Score: " + score;

        // Clear the input field
        input.value = '';
    });
}

let endGame = () => {
    if (questionIndex >= questionList.length) {
        scoreContainer.textContent = "Final Score: " + score;
        question.textContent = "Congratulations, play again!";
        input.style.display = "none";
        button.style.display = "none";
    }
}

// Attach the submit function
sumbitFunction();



