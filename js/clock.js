
function showtime(){
  let date = new Date();
  let hours = date.getHours();//0-23
  let minutes = date.getMinutes();//0-59
  let seconds = date.getSeconds();//0-59
  let formathours = convertFormat(hours);
  hours = checktime(hours);
  hours = addzero(hours);
  minutes = addzero(minutes);
  seconds = addzero(seconds);
  document.getElementById('clock').innerHTML = `${hours} : ${minutes} : ${seconds} ${formathours}`;

}
function convertFormat(time){
  let format = "AM";
  if(time >= 12){
    format = "PM";
  }
  return format;
}
function checktime(time){
  if(time > 12){
    time = time - 12;
  }
  if(time === 0){
    time = 12;
  }
  return time;
}
function addzero(time){
  if(time < 10){
    time = "0" + time;
 }
 return time;
}
showtime()
setInterval(showtime,1000)
