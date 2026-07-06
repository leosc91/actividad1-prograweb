// Seleccionar los elementos importantes del DOM
const input = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');

// Función para agregar un nuevo elemento a la lista
function agregarElemento() {
const texto = input.value.trim(); // Obtiene el valor del input y elimina espacios innecesarios
if (texto !== '') {
// Crear un nuevo elemento 'li' y un botón de eliminar
const li = document.createElement('li');
li.classList.add('elemento'); // Añadimos una clase al li

// De bootstrap Clases para que el elemento de la lista se vea moderno
li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

const textoNodo = document.createTextNode(texto);
li.appendChild(textoNodo); // Agrega el texto al li

// Crear el botón de eliminar
const botonEliminar = document.createElement('button');
botonEliminar.textContent = 'Eliminar';

// SE AGREGÓ BOOTSTRAP: Clases para el botón rojo (danger)
botonEliminar.classList.add('btn', 'btn-danger', 'btn-sm');

botonEliminar.addEventListener('click', function() {
li.remove(); // Eliminar el li al hacer clic en el botón de eliminar
});

// Añadir el botón al li
li.appendChild(botonEliminar);

// Agregar el li a la lista
lista.appendChild(li);

// Limpiar el campo de texto
input.value = '';
} else {
alert('Escribe algo para agregar a la lista.');
}
}

// Asignar la función al botón de agregar
botonAgregar.addEventListener('click', agregarElemento);