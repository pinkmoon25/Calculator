const display = document.querySelector('.input-display');
const numBtn = document.querySelectorAll('input');
const clearBtn = document.querySelector('.clear');
const delBtn = document.querySelector('.delete');
const result = document.querySelector('.result-display');
const operators = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('.equal');

let store; 

function displayInput(){
  numBtn.forEach((btn)=>{btn.addEventListener('click', ()=>{
    display.innerText += btn.value;
    store = display.innerText;
  })});
};

displayInput();

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

function operate(){
  let val;
  if(isNaN(store[0])) {
    let result = store.replace(store[0], '');
    display.innerText = result;
    store = result;
  };
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

clearBtn.addEventListener('click', ()=>{
  display.innerText = '';
  result.innerText = '';
});

delBtn.addEventListener('click', ()=>{
let result = store.replace(store.charAt(store.length-1), '');
display.innerText = result;
store = result;
});

operators.forEach(operator=> operator.addEventListener('click', operate))
equalBtn.addEventListener('click', operate);
