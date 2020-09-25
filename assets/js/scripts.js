var acierto = 0;

const imgFoto1 = document.getElementById("foto1");
const imgFoto2 = document.getElementById("foto2");
const imgFoto3 = document.getElementById("foto3");
const imgFoto4 = document.getElementById("foto4");
const imgFoto5 = document.getElementById("foto5");

const puntos = document.getElementById('campoPuntos');

imgFoto1.addEventListener("click", () => {
    validar1()
});

imgFoto2.addEventListener("click", () => {
    imgFoto2.classList.add('photo2');


});

imgFoto3.addEventListener("click", () => {
    imgFoto3.classList.add('photo3');

});

imgFoto4.addEventListener("click", () => {
    imgFoto4.classList.add('photo4');

});

imgFoto5.addEventListener("click", () => {
    imgFoto5.classList.add('photo5');

});

//contador 5 min
var seconds = 300;

function secondPassed() {
    var minutes = Math.round((seconds - 30) / 60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }
    document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        clearInterval(countdownTimer);
        document.getElementById('countdown').innerHTML = "Tiempo Finalizado";
    } else {
        seconds--;
    }
}
var countdownTimer = setInterval('secondPassed()', 1000);

//




function validar1() {
    imgFoto1.classList.add('photo1');

    nombre = "Kevin"
    if (nombre == document.getElementById(kevinModal1)) {

        alert('Entra al if')

        var puntos = 1;
        document.getElementById('puntos').innerHTML = puntos;

    } else {
        alert('No entro al if')
    }
}