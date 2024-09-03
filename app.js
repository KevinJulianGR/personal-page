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
