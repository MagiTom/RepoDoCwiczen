alert("Hello")

const btn = document.querySelector('button');
const text = document.querySelector('textarea');
const div = document.querySelector('form div');


btn.addEventListener('click', (e)=>{
  e.preventDefault();
    div.innerHTML = text.value; 
})