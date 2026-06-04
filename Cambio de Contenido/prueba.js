// 1. SELECCIÓN DE ELEMENTOS DEL DOM
const inputNombre = document.getElementById('input-nombre');
const botonColor = document.getElementById('btn-color');
const botonFrase = document.getElementById('btn-frase');

const tarjetaContenedor = document.getElementById('tarjeta-contenedor');
const tarjetaTextoNombre = document.getElementById('tarjeta-nombre');
const tarjetaCuerpo = document.getElementById('tarjeta-cuerpo');

// Lista de frases para el generador
const frases = [
    "¡Que todos tus deseos se cumplan hoy y siempre! 🎉",
    "¡Un año más sabio, un año más increíble! ¡Felicidades! 🎂",
    "Te deseo un día lleno de risas, pastel y muchos abrazos. 🎁",
    "¡Disfruta de tu día al máximo, te lo mereces! 🌟"
];

// 2. CONFIGURACIÓN DE LOS EVENTOS

// Cambio de texto en tiempo real
inputNombre.addEventListener('input', () => {
    if (inputNombre.value.trim() === '') {
        tarjetaTextoNombre.textContent = "Nombre del Destinatario";
    } else {
        tarjetaTextoNombre.textContent = inputNombre.value;
    }
});

// Cambio de color de fondo al azar (Interactivo)
botonColor.addEventListener('click', () => {
    // Genera un color hexadecimal aleatorio
    const colorAleatorio = '#' + Math.floor(Math.random()*16777215).toString(16);
    tarjetaContenedor.style.backgroundColor = colorAleatorio;
});

// Inserción de estructura HTML con frase aleatoria
botonFrase.addEventListener('click', () => {
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    tarjetaCuerpo.innerHTML = `<p style="font-style: italic; font-size: 1.2rem;">"${fraseAleatoria}"</p>`;
});