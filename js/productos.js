document.addEventListener("DOMContentLoaded", function () {
    const productos = document.querySelectorAll(".item");

    productos.forEach((producto) => {
        producto.addEventListener("click", () => {
            // Verifica si ya está seleccionado
            if (producto.classList.contains("seleccionado")) {
                // Si ya está seleccionado, lo deseleccionamos
                producto.classList.remove("seleccionado");
                productos.forEach((p) => p.classList.remove("difuminado"));
            } else {
                // Primero, quitar la selección de cualquier otro producto
                productos.forEach((p) => {
                    p.classList.remove("seleccionado");
                    p.classList.add("difuminado");
                });
                producto.classList.add("seleccionado");
            }
        });

        producto.addEventListener("dblclick", () => {
            // Obtener el nombre del producto
            const nombreProducto = producto.querySelector("p").textContent;

            // Buscar el desplegable en presupuesto.html
            const select = document.getElementById("producto");

            // Verificar si el producto ya está en la lista
            let existe = false;
            for (let i = 0; i < select.options.length; i++) {
                if (select.options[i].text.includes(nombreProducto)) {
                    existe = true;
                    break;
                }
            }

            // Si no existe, lo añadimos
            if (!existe) {
                const option = document.createElement("option");
                option.value = nombreProducto;
                option.textContent = `${nombreProducto} - Precio a definir`;
                select.appendChild(option);
            }
        });
    });

    // Código para Swiper.js
    const swiper = new Swiper(".swiper-container", {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: { slidesPerView: 3 },
            480: { slidesPerView: 2 },
            320: { slidesPerView: 1 },
        },
    });

    // Deseleccionar producto al hacer clic en las flechas de navegación
    const swiperButtons = document.querySelectorAll(".swiper-button-next, .swiper-button-prev");

    swiperButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Eliminar la clase 'seleccionado' de todos los productos cuando se hace clic en las flechas
            productos.forEach((producto) => {
                producto.classList.remove("seleccionado");
                producto.classList.remove("difuminado");
            });
        });
    });
});
