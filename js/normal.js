
let colors = ["pink","purple","magenta","green","#3456aa"];
let span = document.querySelector('#span');
let btn = document.querySelector("#btn");
let bd = document.querySelector('body');


function fun() {
  let randnum = Math.floor(Math.random() * colors.length);

  bd.style.backgroundColor = colors[randnum];
  span.textContent = colors[randnum];


}
btn.addEventListener("click",fun);
