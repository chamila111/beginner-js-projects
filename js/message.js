
let msgin = document.querySelector('#msg');
let btn = document.querySelector('#btn');
let msgout = document.querySelector('#msgout');
btn.addEventListener("click",fun);
function fun(){
  let content = msgin.value;
  if(content === ""){
    alert("Please enter a valid value");
  }else{
  msgout.innerHTML = content;
  msgin.value = "";
}
}
