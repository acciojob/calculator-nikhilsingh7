//your code here
// get reference to input element
const input = document.getElementById('input');

// get references to all number buttons
const blocks = document.querySelectorAll('[id^="block"]');

// get references to operation buttons
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');

// get reference to decimal button
const dot = document.getElementById('dot');

// get reference to equals button
const ans = document.getElementById('ans');

// get reference to clear button
const clr = document.getElementById('clr');

// initialize variables to hold current and new input values and operator
let currentVal = '';
let newVal = '';
let operator = '';

// function to clear the input and reset variables
function clearInput() {
  input.value = '';
  currentVal = '';
  newVal = '';
  operator = '';
}

// function to perform arithmetic calculation and update input value
function calculate() {
  switch (operator) {
    case '+':
      currentVal = parseFloat(currentVal) + parseFloat(newVal);
      break;
    case '-':
      currentVal = parseFloat(currentVal) - parseFloat(newVal);
      break;
    case '*':
      currentVal = parseFloat(currentVal) * parseFloat(newVal);
      break;
    case '/':
      if (newVal === '0') {
        currentVal = 'Infinity';
      } else if (currentVal === '0' && newVal === '0') {
        currentVal = 'NaN';
      } else {
        currentVal = parseFloat(currentVal) / parseFloat(newVal);
      }
      break;
    default:
      currentVal = parseFloat(newVal);
  }
  input.value = currentVal;
  newVal = '';
}

// function to add a value to the current input and update display
function addInputValue(value) {
  currentVal += value;
  input.value = currentVal;
}

// add event listeners to number buttons
blocks.forEach(block => {
  block.addEventListener('click', () => {
    addInputValue(block.textContent);
  });
});

// add event listeners to operation buttons
plus.addEventListener('click', () => {
  operator = '+';
  newVal = currentVal;
  currentVal = '';
});

minus.addEventListener('click', () => {
  operator = '-';
  newVal = currentVal;
  currentVal = '';
});

multiply.addEventListener('click', () => {
  operator = '*';
  newVal = currentVal;
  currentVal = '';
});

divide.addEventListener('click', () => {
  operator = '/';
  newVal = currentVal;
  currentVal = '';
});

// add event listener to decimal button
dot.addEventListener('click', () => {
  if (!currentVal.includes('.')) {
    addInputValue('.');
  }
});

// add event listener to equals button
ans.addEventListener('click', () => {
  calculate();
});

// add event listener to clear button
clr.addEventListener('click', () => {
  clearInput();
});

