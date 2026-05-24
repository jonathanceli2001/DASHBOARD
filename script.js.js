// Seleccionar los elementos de la página HTML
const formulario = document.getElementById('formulario-datos');
const inputTexto = document.getElementById('input-texto');
const listaDatos = document.getElementById('lista-datos');

// 1. Cargar los datos existentes de la memoria al abrir la página
document.addEventListener('DOMContentLoaded', () => {
    const datosGuardados = obtenerDatosDeMemoria();
    datosGuardados.forEach(texto => agregarElementoALaLista(texto));
});

// 2. Escuchar cuando el usuario envía el formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que la página se recargue

    const nuevoTexto = inputTexto.value.trim();
    if (nuevoTexto === '') return;

    // Guardar en la memoria y mostrar en la pantalla
    guardarEnMemoria(nuevoTexto);
    agregarElementoALaLista(nuevoTexto);

    // Limpiar el campo de texto
    formulario.reset();
});

// FUNCIÓN: Agrega visualmente un elemento a la lista HTML
function agregarElementoALaLista(texto) {
    const li = document.createElement('li');
    li.textContent = texto;
    listaDatos.appendChild(li);
}

// FUNCIÓN: Obtiene el arreglo de datos de LocalStorage
function obtenerDatosDeMemoria() {
    const datos = localStorage.getItem('misNotasWeb');
    return datos ? JSON.parse(datos) : [];
}

// FUNCIÓN: Guarda un nuevo texto en el arreglo de LocalStorage
function guardarEnMemoria(nuevoTexto) {
    const datosActuales = obtenerDatosDeMemoria();
    datosActuales.push(nuevoTexto);
    localStorage.setItem('misNotasWeb', JSON.stringify(datosActuales));
}