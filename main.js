const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const yearTitleEl = document.getElementById('yearTitle');

function setNextYearTitle() {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  yearTitleEl.innerHTML = `New Year ${nextYear}`;
}

setNextYearTitle()

// Obtén la fecha actual y el próximo Año Nuevo
const currentDate = new Date();
let newYearsDate = new Date(currentDate.getFullYear() + 1, 0, 1);

function updateCounter() {
  const currentDate = new Date();
  let newYearsDate = new Date(currentDate.getFullYear() + 1, 0, 1);


  const totalSeconds = Math.floor((newYearsDate - currentDate) / 1000);

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? (`0${time}`) : time;
}

// Llama a la función countdown cada segundo
setInterval(updateCounter, 1000);

// Llama a countdown para la inicialización
updateCounter();
