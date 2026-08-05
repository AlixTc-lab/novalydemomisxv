/*======================================================
CUENTA REGRESIVA
======================================================*/

const fechaEvento = new Date("May 15, 2027 17:00:00").getTime();

function actualizarContador(){

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;

    if(diferencia <= 0){

        document.getElementById("dias").textContent = "00";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";

        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

}

actualizarContador();

setInterval(actualizarContador,1000);



/*======================================================
FORMULARIO CONFIRMACION
======================================================*/


const URL_SCRIPT = 
"https://script.google.com/macros/s/AKfycbz9Z9sP5RtmdDVkTqt0IYfV6rb4Uh8nK6A_ZPAS9P8prxwUJnPxPdw3LLvhzU1g1a9zGA/exec";


const formulario =
document.getElementById(
"formConfirmacion"
);



formulario.addEventListener(
"submit",
async function(e){


e.preventDefault();



const datos={


nombre:
document.getElementById("nombre").value,


invitados:
document.getElementById("invitados").value,


asistencia:
document.getElementById("asistencia").value,


mensaje:
document.getElementById("mensaje").value


};



await fetch(
URL_SCRIPT,
{

method:"POST",

body:
JSON.stringify(datos)

}
);



alert(
"¡Gracias por confirmar tu asistencia 💕!"
);



formulario.reset();



});

const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");


btn.addEventListener("click", () => {


    if(music.paused){

        music.play();

        btn.innerHTML="🔊";

    }else{

        music.pause();

        btn.innerHTML="🎵";

    }
});