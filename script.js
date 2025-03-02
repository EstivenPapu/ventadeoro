
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", () => {
        if (menu.classList.contains("active")) {
            menu.classList.add("hidden");
            setTimeout(() => {
                menu.classList.remove("active", "hidden");
            }, 400); // Espera la animación antes de ocultar
        } else {
            menu.classList.add("active");
        }

        menuToggle.classList.toggle("active");
    });
});