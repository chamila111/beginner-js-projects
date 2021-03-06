let container = document.querySelector('.images');
let prebtn = document.querySelector('.btn-pre');
let nextbtn = document.querySelector('.btn-next');
let counter = 0;
prebtn.addEventListener("click",preslide);
nextbtn.addEventListener("click",nextslide);

function nextslide(){
  container.animate([{opacity:0.1},{opacity:1.0}],{duration:1000,fill:"forwards"});
  if(counter === 4){
    counter = -1;
  }
  counter++;
  container.style.backgroundImage = `url(./images/img-${counter}.jpg)`;
}

function preslide(){
    container.animate([{opacity:0.1},{opacity:1.0}],{duration:1000,fill:"forwards"});
  if(counter === 0){
    counter = 5;
  }
  counter--;
  container.style.backgroundImage = `url(./images/img-${counter}.jpg)`;
}
