// Abrir y cerrar el menú cuando se hace clic en el contenedor del menú
document.getElementById("contenedor-menu").addEventListener("click", function(event) {
    var menu = document.getElementById("menu-desplegable");
    menu.classList.toggle("show");
    event.stopPropagation(); // Evita que el evento se propague al documento
});

// Cerrar el menú cuando se hace clic fuera del contenedor del menú
document.addEventListener("click", function(event) {
    var menu = document.getElementById("menu-desplegable");
    var contenedorMenu = document.getElementById("contenedor-menu");

    // Verifica si el clic fue fuera del contenedor del menú
    if (!contenedorMenu.contains(event.target)) {
        menu.classList.remove("show");
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.lenguaje-container');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function showContainer(index) {
        containers.forEach((container, i) => {
            container.classList.toggle('active', i === index);
        });
    }

    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + containers.length) % containers.length;
        showContainer(currentIndex);
    });

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % containers.length;
        showContainer(currentIndex);
    });
    // Asegurarse de que el primer elemento esté visible al cargar la página
    showContainer(currentIndex);
});