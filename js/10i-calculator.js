
let calculation = localStorage.getItem('calculation') || '' ;

function updateCalculation(value) {
  calculation += value;
  display();
  localStorage.setItem('calculation', calculation);

}

function display() {
  document.querySelector('.js-displayCalculation')
  .innerHTML = calculation;
}
