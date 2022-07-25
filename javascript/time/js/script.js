let hour = 12;
let minute = 59;
let second = 55;

let timeout = hour >= 12 ? "PM" : "AM";

const time = document.querySelector(".time");

setInterval(() => {
  if (second === 60) {
    minute++;
    second = 0;
  } else if (second >= 0) {
    second++;
  }
  if (minute === 60) {
    minute = 0;
    hour++;
  }

  time.innerHTML = `${hour} : ${minute} : ${second} ${timeout}`;
  
  const dates = document.querySelector(".date");

  let date = new Date;
  let dateHour = date.getHours();

  if (dateHour > 12) {
    dateHour = dateHour - 12;
  }

  dates.innerHTML = `${dateHour} : ${date.getMinutes()} : ${date.getSeconds()} ${timeout}`;

}, 1000);
