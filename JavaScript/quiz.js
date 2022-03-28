import {quiz} from './questions.js'
import {counter} from './counter.js'

const nameInput = document.getElementById('name');
const startButton = document.getElementById('startButton')
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const validName = document.getElementById('validName')
const updateSection = document.getElementById('updateSection')
const paginationSection = document.getElementById('paginationSection')
const timerContainer = document.getElementById('timer')


startButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (nameInput.value === '' || nameInput.value.trim() === '') {
    validName.style.display = 'block';
    return;
  }
  validName.style.display = 'none';
  startButton.disabled = true;
  nameInput.disabled = true;
  nextButton.setAttribute('onclick', 'plusDivs(1)');
  nextButton.style.cursor = 'pointer';
  prevButton.setAttribute('onclick', 'minusDivs(1)');
  prevButton.style.cursor = 'pointer';
  document.querySelectorAll('#paginationButton').forEach((button) => {
    button.disabled = false;
  });
  timerContainer.style.opacity = '1';
  document.querySelectorAll('.question').forEach((question) => {
    question.style.opacity = '1';
  });
  counter();
  window.scrollTo({
    top: document.querySelector('header').clientHeight,
    behavior: 'smooth'
  })
})

document.addEventListener('DOMContentLoaded', () => {
  // create the elements
  let element = 
    `<div class="question mySlides">
      <div class="w3-col w3-center ">
        <div class="w3-card w3-container" style="min-height:460px">
        <h2>${quiz.info.quizName}</h2><br>
        <i class="fa-solid fa-clipboard-question w3-margin-bottom w3-text-theme w3-animate-opacity" style="font-size:120px"></i>
        <p class="w3-animate-opacity">Your quiz is ready</p>
        <p class="w3-animate-opacity">There are ${quiz.info.totalQuestions} questions</p>
        <p class="w3-animate-opacity">You'll have ${quiz.info.timeMinutes} minutes to answer</p>
        <p class="w3-animate-opacity">Goog Luck</p>
        </div>
      </div>
    </div>
    `;
  
  for (let item of quiz.questions) {
    element += 
    `<div class="question mySlides">
      <div class="w3-col w3-center">
        <div class="w3-card w3-container" style="min-height:460px">
        <h2 class="">${quiz.info.quizName}</h2><br>
          <div class="container w3-padding" id="qContainer">
            <h4 id="${item.number}" class="w3-animate-opacity w3-left-align"><span class="w3-text-red">${item.number}) </span> ${item.content}</h4>
            
            <div style="margin:5px;" class="w3-animate-opacity">
              <input oninput="input(event)" class="w3-radio" type="radio" id="q${item.number}c1" name="quiestion${item.number}" value="1">
              <label for="q${item.number}c1">${item.option1}</label>
            </div>
            <div style="margin:5px;" class="w3-animate-opacity">
              <input oninput="input(event)" class="w3-radio" type="radio" id="q${item.number}c2" name="quiestion${item.number}" value="2">
              <label for="q${item.number}c2">${item.option2}</label>
            </div>
            <div style="margin:5px;" class="w3-animate-opacity">
              <input oninput="input(event)" class="w3-radio" type="radio" id="q${item.number}c3" name="quiestion${item.number}" value="3">
              <label for="q${item.number}c3">${item.option3}</label>
            </div>
            <div style="margin:5px;" class="w3-animate-opacity">
              <input oninput="input(event)" class="w3-radio" type="radio" id="q${item.number}c4" name="quiestion${item.number}" value="4">
              <label for="q${item.number}c4">${item.option4}</label>
            </div>
            <div style="margin-top:10px;">
              <button id="clearButton" onclick="clearSelected(event)" class="w3-button w3-ripple w3-padding-small w3-white w3-border w3-border-red w3-round-large w3-animate-opacity">Clear selected</button>
            </div>
          </div>
        </div>
      </div>
    </div>`
  }
  // last Card
  element += 
  `<div class="question mySlides">
  <div class="w3-col w3-center ">
  <div class="w3-card w3-container" style="min-height:460px">
  <h2>${quiz.info.quizName}</h2><br>
  <i class="fa-solid fa-clipboard-check w3-margin-bottom w3-text-theme w3-animate-opacity" style="font-size:120px"></i><br><br>
  <h4 class="w3-animate-opacity">submit your answers</h4>
  <button id="submitButton" onclick="submit(${quiz.info.totalQuestions})" class="w3-animate-opacity w3-btn w3-ripple w3-border w3-border-red w3-white w3-hover-red w3-xlarge w3-round">Submit</button>
  </div>
  </div>
  </div>`;
  // show questions
  updateSection.innerHTML = element;
  
  //  create pagination buttons
  let buttonsElement = 
    `<button id="paginationButton" disabled class="w3-button demo" onclick="currentDiv(1)">Start</button>`
  for (let i = 0; i < quiz.info.totalQuestions; i++) {
    buttonsElement += 
      `<button id="paginationButton" disabled class="w3-button demo" onclick="currentDiv(${i + 2})">${i + 1}</button>`
  }
  buttonsElement += 
    `<button id="paginationButton" disabled class="w3-button demo" onclick="currentDiv(${quiz.info.totalQuestions + 2})">Done</button>`
  
  paginationSection.innerHTML = buttonsElement;
})