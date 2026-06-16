const form = document.getElementById('miFormulario');
const salida = document.getElementById('mensajeSalida');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;
if (!nombre || !email|| !asunto || !mensaje) {
        alert("¡Error: Todos los campos son obligatorios!");
        return;
    }
    salida.innerHTML = `<h3>Registro exitoso</h3>
                        <p><strong>Nombre:</strong> ${nombre}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Asunto:</strong> ${asunto}</p>
                        <p><strong>Mensaje:</strong> ${mensaje}</p>`;

    form.reset(); // Limpieza automática
});