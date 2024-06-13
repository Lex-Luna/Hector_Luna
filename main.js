// Selecciona todos los elementos con la clase 'item' y agrega un evento de clic a cada uno
document.querySelectorAll('.item').forEach(function(item) {
    item.addEventListener('click', function() {
        // Captura los elementos del card específico que fue clickeado
        var titulo = item.querySelector('.TituloModal').textContent;
        var imagen = item.querySelector('img').src;
        var descripcion = item.querySelector('.Descrip').textContent;

        // Asigna los valores capturados a la modal
        document.getElementById('tituloModal').textContent = titulo;
        document.querySelector('.modal-body img').src = imagen;
        document.querySelector('.modal-body p').textContent = descripcion;

        // Muestra la modal
        myModal.show();
    });
});

var myModal = new bootstrap.Modal(document.getElementById('miModal'), {
    backdrop: 'static', // Esto asegura que el fondo sea oscuro y estático
    keyboard: false
});
// Selecciona todos los elementos con la clase 'item_sur' y agrega un evento de clic a cada uno
document.querySelectorAll('.item_sur').forEach(function(item) {
    item.addEventListener('click', function() {
        // Captura los elementos del card específico que fue clickeado
        var titulo = item.querySelector('.TituloModal').textContent;
        var imagen = item.querySelector('img').src;
        var descripcion = item.querySelector('.Descrip').textContent;

        // Asigna los valores capturados a la modal
        document.getElementById('tituloModal').textContent = titulo;
        document.querySelector('.modal-body img').src = imagen;
        document.querySelector('.modal-body p').textContent = descripcion;

        // Muestra la modal
        myModal.show();
    });
})