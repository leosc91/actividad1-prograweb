// Aquí lleva las funciones de agregar, borrar y poder ver una tarea
function crearManejador() {
    // Arreglo para almacenarlas
    let tareas = []; 
    
    // Revisa si hay tareas guardadas
    let guardado = localStorage.getItem("misTareas");
    if (guardado) {
        tareas = JSON.parse(guardado);
    }

    return {
        agregar: function(texto) {
            tareas.push(texto);
            localStorage.setItem("misTareas", JSON.stringify(tareas));
        },
        borrar: function(posicion) {
            tareas.splice(posicion, 1);
            localStorage.setItem("misTareas", JSON.stringify(tareas));
        },
        leer: function() {
            return tareas;
        }
    };
}

// Creamos un manejador
let manejador = crearManejador();

// renderizar sirve para actualizar el contenido que sale en la pantalla

function renderizarTareas() {
    let lista = document.getElementById("listaTareas");
    lista.innerHTML = ""; // Actualiza la pantalla

    let todas = manejador.leer();

    // Es para mostrar cada tarea
    for (let i = 0; i < todas.length; i++) {
        lista.innerHTML += "<li>" + todas[i] + " <button onclick='botonBorrar(" + i + ")'>Eliminar</button></li>";
    }
}

function botonAgregar() {
    let texto = document.getElementById("inputTarea").value;

    if (texto === "") {
        Swal.fire('Error', 'Escribe una tarea', 'error');
    } else {
        manejador.agregar(texto);
        document.getElementById("inputTarea").value = ""; 
        renderizarTareas(); // Actualiza la lista en pantalla
    }
}

function botonBorrar(posicion) {
    // Alerta de SweetAlert2
    Swal.fire({
        title: '¿Estás seguro?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, borrar',
        cancelButtonText: 'Cancelar'
    }).then((resultado) => {
        if (resultado.isConfirmed) {
            manejador.borrar(posicion);
            renderizarTareas();
            Swal.fire('Borrada', 'La tarea se eliminó', 'success');
        }
    });
}

// Carga las tareas cuando se actualiza la pantalla
renderizarTareas();