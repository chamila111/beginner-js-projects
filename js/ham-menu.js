
let btn = document.querySelector(".navbar-btn");
let list = document.querySelector(".navbar-links");

function fun (){
list.classList.toggle('navbar-collapse');
btn.classList.toggle('change');
}
btn.addEventListener("click",fun);
