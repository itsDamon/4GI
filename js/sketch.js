let data = new Date();
let ora = data.getHours();
if (ora < 10) ora = "0"+ ora
let min = data.getMinutes();
if (min < 10) min = "0" + min;
let msg = "Sono le " + ora + ":" + min;
document.getElementById("pOrario").innerHTML = msg;



let imgBuongiono = document.getElementById("imgBuongiorno");
let pBuongiorno = document.getElementById("pBuongiorno");

let giorno = data.getDay();
imgBuongiorno.src = `../img/giorno${giorno}`;

let days = {
    0: "domenica",
    1: "lunedì",
    2: "martedì",
    3: "mercoledì",
    4: "giovedì",
    5: "venerdì",
    6: "sabato"
}

pBuongiorno.innerHTML = `Buon ${days[giorno]}`;