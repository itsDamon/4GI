let data = new Date();
let ora = data.getHours();
if (ora < 10) ora = "0"+ ora
let min = data.getMinutes();
if (min < 10) min = "0" + min;
let msg = "Sono le " + ora + ":" + min;
document.getElementById("pOrario").innerHTML = msg;
