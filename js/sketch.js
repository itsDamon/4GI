const moment = new Date();
const pOrario = document.getElementById("pOrario");

pOrario.innerHTML = "Sono le " + moment.getHours + ":" + moment.getMinutes + ":" + moment.getSecond;