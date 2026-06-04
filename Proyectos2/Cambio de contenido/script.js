document.addEventListener('DOMContentLoaded', () => {

    const tituloTematica = document.querySelector('.tarjeta h3');
    const tarjeta = document.querySelector('.tarjeta');
    const parrafoMensaje = document.getElementById('mensaje');
    const btnNavidad = document.getElementById('Navidad');
    const btnSanValentin = document.getElementById('SValentin');
    const btnMadre = document.getElementById('DiadeLaMadre');
    const btnPadre = document.getElementById('DiadelPadre');
    function cambiarTematica(titulo, claseFondo, textoMensaje) {
        tituloTematica.textContent = titulo;
        tarjeta.className = 'tarjeta ' + claseFondo;
        parrafoMensaje.textContent = textoMensaje; 
    } 
    btnNavidad.addEventListener('click', () => {
        cambiarTematica(
            'Temática: Navidad 🎄', 
            'fondo-navidad', 
            '¡Que la paz y la alegría de estas fiestas inunden tu hogar! Felices fiestas.'
        );
    });
    btnSanValentin.addEventListener('click', () => {
        cambiarTematica(
            'Temática: San Valentín ❤️', 
            'fondo-valentin', 
            'Hoy es un día para celebrar el amor y la amistad que nos une. ¡Te quiero mucho!'
        );
    });
    btnMadre.addEventListener('click', () => {
        cambiarTematica(
            'Temática: Día de la Madre 🌸', 
            'fondo-madre', 
            'Gracias por tu amor incondicional, tu paciencia y por ser mi mayor guía. ¡Felicidades, mamá!'
        );
    });
    btnPadre.addEventListener('click', () => {
        cambiarTematica(
            'Temática: Día del Padre 👔', 
            'fondo-padre', 
            'A mi gran ejemplo, amigo y protector. ¡Gracias por todo, papá! Que pases un gran día.'
        );
    });
});