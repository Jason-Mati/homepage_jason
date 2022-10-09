const clock = document.querySelector("h2.clock");

function getClock() {
  const date = new Date();
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1);
  const getDate = String(date.getDate());
  const getDay = String(date.getDay());
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = days[getDay];
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${year} / ${month}.${getDate}.${day} / ${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
