let respuestaCorrecta = ["b", "a", "c", "a", "c", "c", "a", "b", "c", "a"];

// Primera : Welcome Student

function mostrarBienvenida() {
    let nombre = document.getElementById("nombre1").value;
    let mensaje = " Welcome " + nombre;
    document.getElementById("respuestaBienvenida").innerText = mensaje;

}


// Segunda: See Answer

function verRespuesta(numeroPregunta) {

    let respuesta = respuestaCorrecta[numeroPregunta];
    let mensaje = " The correct answer is " + respuesta.toUpperCase();

    document.getElementById("resultadoVerRespuesta" + numeroPregunta).innerText = mensaje;
}



//Tercera: Correct Question

function corregir(numeroPregunta) {
    let respuestaSeleccionada = document.getElementById("respuesta" + numeroPregunta).value;
    let mensaje = "";
    let puntuacion = 0;
    let respuesta = "";

    if (respuestaSeleccionada === respuestaCorrecta[numeroPregunta]) {
        puntuacion = 2;
        respuesta = "correct";
    } else if (respuestaSeleccionada === "") {
        puntuacion = 0;
        respuesta = "incorrect";
    } else {
        puntuacion = -1;
        respuesta = "incorrect";
    }
    mensaje = " The question is " + respuesta + " you recive " + puntuacion;
    document.getElementById("resultadoCorregir" + numeroPregunta).innerText = mensaje;
}
