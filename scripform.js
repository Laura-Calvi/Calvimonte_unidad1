const selectStatus = document.getElementById('estado');
const estadoSeleccionado = document.getElementById('estadoSeleccionado');

selectStatus.addEventListener('change', (e) => {
    estadoSeleccionado.value = e.target.value;
})