/* Para el Popup*/
var agregar = document.getElementById('agregar'),
    ConPop = document.getElementById('Contenedor-Popup'),
    Popup = document.getElementById('Popup'),
    cerrar = document.getElementById('boton-cerrar');

agregar.addEventListener('click', function(){
    ConPop.classList.add('active');
    Popup.classList.add('active');
});

cerrar.addEventListener('click', function(){
    ConPop.classList.remove('active');
    Popup.classList.remove('active');
});

/*Mini Menu para seleccionar */

