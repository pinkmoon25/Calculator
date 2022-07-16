const display = document.querySelector('.input-display');
const numBtn = document.querySelectorAll('input');

function displayInput(){
  numBtn.forEach((btn)=>{btn.addEventListener('click', ()=>{
    display.innerText += btn.value;
  })});
  display.innerText += display.innerText;
};

displayInput();
