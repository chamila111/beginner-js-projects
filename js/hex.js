const hex = [0,1,2,3,4,5,6,7,8,9,"A",'B',"C","D","E","F"];
let btn = document.getElementById("btn");
let span = document.getElementById("span");
let section = document.querySelector('section');
btn.addEventListener("click",change);
function change(){
  let hexcolor = "#";
  for(let i = 0; i < 6;i++){
    hexcolor += hex[getrandom()]
  }
  span.textContent = hexcolor;
  document.body.style.backgroundColor = hexcolor;
}
function getrandom(){
return  Math.floor(Math.random() * hex.length)
}
