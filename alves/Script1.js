// Duvan ALves Rodriguez 1111197732
// Obtenemos los elementos del DOM
const resultado = document.getElementById('resultado');
const botones = document.querySelectorAll('button');
const limpiar = document.getElementById('limpiar');
const igual = document.getElementById('igual');

// Iteramos por todos los botones y les asignamos un evento click
botones.forEach(function (boton) {
    boton.addEventListener('click', function () {
        // Si el bot�n es C, borramos el contenido del input
        if (this.id === 'limpiar') {
            resultado.value = '';
        }
        // Si el bot�n es =, evaluamos la expresi�n matem�tica en el input
        else if (this.id === 'igual') {
            resultado.value = eval(resultado.value);
        }
        // En otro caso, agregamos el valor del bot�n al input
        else {
            resultado.value += this.value;
        }
    });
});