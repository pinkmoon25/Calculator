const display = document.querySelector('.input-display');
const numBtn = document.querySelectorAll('input');
const clearBtn = document.querySelector('.clear');
const result = document.querySelector('.result-display');
const operators = document.querySelector('.operators');
const equalBtn = document.querySelector('.equal');

let store; 

function displayInput(){
  numBtn.forEach((btn)=>{btn.addEventListener('click', ()=>{
    display.innerText += btn.value;
    store = display.innerText;
  })});
};

displayInput();

clearBtn.addEventListener('click', ()=>{
  display.innerText = '';
});

function add(x, y){
  return parseInt(x) + parseInt(y);
};

function subtract(x, y){
  return parseInt(x) - parseInt(y);
};

function multiply(x, y){
  return parseInt(x) * parseInt(y);
};

function divide(x, y){
  return parseInt(x) / parseInt(y);
};

function operate(operator){
  let val;
  for(let i=0; i<store.length; i++){
    switch(store[i].charCodeAt()){
      case 43:
      val = store.split('+');
      if(val[0] === '' || val[1] === '') return;
      result.innerText = `${add(val[0], val[1])}`;
      display.innerText = `${add(val[0], val[1])}`;
      break;
      case 8722:
      val = store.split('−');
      if(val[0] === '' || val[1] === '') return;
      result.innerText = `${subtract(val[0], val[1])}`;
      display.innerText = `${subtract(val[0], val[1])}`;
      break;
      case 215:
      val = store.split('×');
      if(val[0] === '' || val[1] === '') return;
      result.innerText = `${multiply(val[0], val[1])}`;
      display.innerText = `${multiply(val[0], val[1])}`;
      break;
      case 247:
      val = store.split('÷');
      if(val[0] === '' || val[1] === '') return;
      result.innerText = `${divide(val[0], val[1])}`;
      display.innerText = `${divide(val[0], val[1])}`;
      break; 
    }
  }  
};

operators.addEventListener('click', operate);
equalBtn.addEventListener('click', operate);