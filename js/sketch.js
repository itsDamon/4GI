function weekEnd() {
  return !(giorno == 0 || giorno == 6);
}

let days = [
  "domenica",
  "lunedi",
  "martedi",
  "mercoledi",
  "giovedi",
  "venerdi",
  "sabato",
];

let data = new Date();
let imgBuongiono = document.getElementById("imgBuongiorno");
let pBuongiorno = document.getElementById("pBuongiorno");
let pOrario = document.getElementById("pOrario");

let ora = data.getHours();
if (ora < 10) ora = "0" + ora;
let min = data.getMinutes();
if (min < 10) min = "0" + min;
let sec = data.getSeconds();
if (sec < 10) sec = "0" + sec;

let msg = "Sono le " + ora + ":" + min + ":" + sec;
pOrario.innerHTML = msg;

let giorno = data.getDay();

imgBuongiorno.src = `../img/${days[giorno]}.jpg`;

pBuongiorno.innerHTML = weekEnd()
  ? `Mancano ${6 - giorno} giorni al Weekend`
  : "Buon Weekend :)";
