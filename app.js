document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos la imagen dentro del contenedor con la clase .menu_mobil_imagen
    const menuMobilImagen = document.querySelector(".menu_mobil_imagen");

    // Verificamos si el elemento existe antes de agregar el evento
    if (menuMobilImagen) {
        menuMobilImagen.addEventListener("click", () => {
            window.location.href = "menu.html"; // Redirigir al hacer clic
        });
    }
});
