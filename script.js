'use strict'

let container = document.querySelector('.rating__grades');
console.log(container);

let gradesList = document.querySelectorAll('.rating__grade-container');
console.log(gradesList);

let grade = null;

let checkedEl = null;

let buttonEl = document.querySelector('.rating__submit');
buttonEl.setAttribute('disabled', true);

container.addEventListener('click', event => {

  if (!event.target.classList.contains("rating__grade-container")) {
    return;
  } else {
    grade = event.target.dataset.value;
    console.log(grade);

    buttonEl.removeAttribute('disabled');

    gradesList.forEach(element => {
      element.classList.remove('rating__grade-checked');
    });

    event.target.classList.add('rating__grade-checked');
  }

})


const ratingBlock = document.querySelector('.rating');
const thankYouBlock = document.querySelector('.thankYou');
const expressionBlock = document.querySelector('.thankYou__expression');

buttonEl.addEventListener('click', event => {
  event.preventDefault();
  ratingBlock.classList.add('hidden');
  thankYouBlock.classList.remove('hidden');
  expressionBlock.innerHTML = `You selected ${grade} out of 5`;
})