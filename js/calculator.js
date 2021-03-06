
let btns = document.querySelectorAll('.btn');
let screen = document.querySelector('.screen');
let btnclr = document.querySelector('.btn-clear');
let btneql = document.querySelector('.btn-equal');

for(let i = 0; i < btns.length;i++){
  btns[i].addEventListener("click",function (){
    let number = btns[i].getAttribute('data-num');
    screen.value += number
  })
}
btneql.addEventListener("click",function (){
  if(screen.value === ""){
    alert('input is empty');
  } else {
  let value = eval(screen.value);
  screen.value = value;
}
})
btnclr.addEventListener("click",function(){
  screen.value = "";
})
