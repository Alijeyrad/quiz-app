// handle choices and answers on the quiz section

const modal = document.querySelector('#submitModal');
const results = document.querySelectorAll('#resultsContainer');
const answered = document.querySelector('#answered');
const yourScore = document.querySelector('#yourScore');

//  not really necessary but wanted to do some OOP
class Answers {
  time = 5;
  #answers = ['q1c4', 'q2c2', 'q3c3', 'q4c1', 'q5c2', 'q6c4', 'q7c1', 'q8c4', 'q9c3', 'q10c4']
  isCorrecr(answer) {
    if (this.#answers.includes(answer)) {
      return true;
    } else {
      return false;
    }
  }
  length() {
    let number = this.#answers.length;
    return number;
  }
}
const answers = new Answers();

document.getElementById('counter').innerHTML = `${answers.time}:00`

// clear the grean button if answer is cleared
const clearSelected = (event) => {
  let questionNum = event.path[2].children[0].id;
  event.path[2].children[1].children[0].checked = false;
  event.path[2].children[2].children[0].checked = false;
  event.path[2].children[3].children[0].checked = false;
  event.path[2].children[4].children[0].checked = false;
  const paginationButtons = document.querySelectorAll('#paginationButton');
  for (button of paginationButtons) {
    if (button.innerHTML === questionNum) {
      button.style.backgroundColor = null;
    }
  }
  move();
}

// make pagination buttons green when answered
const input = (event) => {
  let questionNum = event.path[2].children[0].id.toString();
  const paginationButtons = document.querySelectorAll('#paginationButton');
  for (button of paginationButtons) {
    if (button.innerHTML === questionNum) {
      button.style.backgroundColor = 'rgb(204, 255, 204)';
    }
  }
  move();
}

// moves progress Bar
const move = () => {
  selected.splice(0, selected.length);
  let elem = document.getElementById("myBar");   
  let choices = document.querySelectorAll('input[type="radio"]');
  choices.forEach((choice) => {
    if (choice.checked){
      selected.push(choice);
    }
  })
  let width = (selected.length / answers.length()) * 100;
  elem.style.width = width + '%';
}

// submit button on the last card, opens modal
let selected = [];
const submit = (totalQuestions) => {
  selected.splice(0, selected.length);
  let choices = document.querySelectorAll('input[type="radio"]');
  choices.forEach(choice => {
    if (choice.checked){
      selected.push(choice);
    }
  })
  
  modal.style.display = 'block';
  let info = `You have ${totalQuestions - selected.length} unanswered questions, are you sure you want to submit?`;
  document.getElementById('modalInfo').innerHTML = info;
}