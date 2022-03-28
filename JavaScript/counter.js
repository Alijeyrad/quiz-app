import {quiz} from './questions.js'

const timerContainer = document.getElementById('timer')
let sec = "00";
let min = `${quiz.info.timeMinutes}`;

// start and stop the counter
document.getElementById("modalSubmitButton")
  .addEventListener("click", () => {
    stopCounter();
});

var intervalId;
export const counter = function() {
  intervalId = setInterval(function count() {
    if (sec == 1 && min == 0) {
      document.getElementById("counter").innerHTML = "00:00";
      clearInterval(intervalId);
      modalSubmit();
    }
    if (sec == 0) {
      sec = 60;
      min -= 1;
    }
    sec = parseInt(sec) - 1;
    document.getElementById("counter").innerHTML = `${min
      .toString()
      .padStart(2, 0)}:${sec.toString().padStart(2, 0)}`;
  }, 1000);
}

function stopCounter() {
  clearInterval(intervalId);
  modalSubmit();
}


// happens after submit button in modal

const modalSubmit = function() {
  let score = 0;
  let selectedId = [];

  selected.forEach(choice => {
    selectedId.push(choice.id);
  });

  for (let item of selectedId) {
    if (answers.isCorrecr(item)) {
      score++;
    }
  }

  results.forEach(item => {item.style.display = 'flex'})

  totalQuestions.innerHTML = answers.length();
  answered.innerHTML = selected.length;
  yourScore.innerHTML = score;

  modal.style.display = 'none';

  document.querySelector('#submitButton').disabled = true;

  timerContainer.style.opacity = '0.5';
  let choices = document.querySelectorAll('input[type="radio"]');
  choices.forEach(item => {item.disabled = true;});

  document.querySelectorAll('#clearButton')
    .forEach((item) => {item.disabled = true;});

  document.querySelector('#resultsContainer').scrollIntoView({
    behavior: 'smooth'
  });
}