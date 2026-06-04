// Captura del formulario
const formTarea = document.getElementById("formTarea");

// Captura del espacio donde aparecerán los mensajes
const mensaje = document.getElementById("mensaje");

// Captura del cuerpo de la tabla
const tablaTareas = document.getElementById("tablaTareas");

// Arreglo donde se guardarán temporalmente las tareas
let tareas = [];

// Evento principal del formulario
formTarea.addEventListener("submit", function(evento) {

    evento.preventDefault();

    const nombreTarea = document.getElementById("tarea").value.trim();
    const responsable = document.getElementById("responsable").value.trim();
    const prioridad = document.getElementById("prioridad").value;
    const fecha=document.getElementById("fecha").value

    // Validación de campos vacíos
    if (nombreTarea === "" || responsable === "" || prioridad === "" || fecha === "") {
        mensaje.textContent = "Debe completar todos los campos antes de agregar la tarea.";
        mensaje.style.color = "red";
        return;
    }

    // Crear objeto tarea
    const nuevaTarea = {
        tarea: nombreTarea,
        responsable: responsable,
        prioridad: prioridad,
        fecha: fecha
    };

    // Agregar tarea al arreglo
    tareas.push(nuevaTarea);

    // Mostrar mensaje de confirmación
    mensaje.textContent = "Tarea agregada correctamente.";
    mensaje.style.color = "green";

    // Limpiar formulario
    formTarea.reset();

    // Actualizar tabla
    mostrarTareas();
});

// Función para mostrar tareas en la tabla
function mostrarTareas() {

    tablaTareas.textContent = "";

    tareas.forEach(function(item) {

        //Creamos la fila
        const fila = document.createElement("tr");

        //Creacion de celdas evitando el uso de innerHTML para bloquear la ejecucion de scrips maliciosos
        const tdTarea=document.createElement("td");
        tdTarea.textContent=item.tarea;

        const tdResponsable=document.createElement("td");
        tdResponsable.textContent=item.responsable;

        const tdPrioridad=document.createElement("td");
        tdPrioridad.textContent=item.prioridad;

        const tdFecha=document.createElement("td");
        tdFecha.textContent=item.fecha;

        //Metemos cada una de las celdas en una fila
        fila.appendChild(tdTarea);
        fila.appendChild(tdResponsable);
        fila.appendChild(tdPrioridad);
        fila.appendChild(tdFecha);

        tablaTareas.appendChild(fila);
    });
}