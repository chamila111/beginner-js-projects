
let countnum = document.querySelector('.counter');
let incre = document.querySelector('#increment');
let decre = document.querySelector('#decrement');

let count = 0;

function increments(){
  count++;
  countnum.innerHTML = count;
  if(countnum.innerHTML > "0"){
    countnum.style.color = "#4caf50";
  } else if(countnum.innerHTML === '0'){
    countnum.style.color = "#fff";
  }
  countnum.animate([{opacity:0.2},{opacity:1}],{duration:1000,fill:'forwards'});
}
function decrement(){
  count--;
  countnum.textContent = count;
  if(countnum.innerHTML < "0"){
    countnum.style.color = "red";
  } else if(countnum.innerHTML === '0'){
    countnum.style.color = "#fff";
  }
    countnum.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
}
incre.addEventListener("click",increments);
decre.addEventListener("click",decrement);
