document.addEventListener("DOMContentLoaded", function () {
    const productos = document.querySelectorAll(".item");

    productos.forEach((producto) => {
        producto.addEventListener("click", () => {
            if (producto.classList.contains("seleccionado")) {
                producto.classList.remove("seleccionado");
                productos.forEach((p) => p.classList.remove("difuminado"));
            } else {
                productos.forEach((p) => {
                    p.classList.remove("seleccionado");
                    p.classList.add("difuminado");
                });
                producto.classList.add("seleccionado");
            }
        });

        producto.addEventListener("dblclick", () => {
            const nombreProducto = producto.querySelector("p").textContent;

            const select = document.getElementById("producto");

            let existe = false;
            for (let i = 0; i < select.options.length; i++) {
                if (select.options[i].text.includes(nombreProducto)) {
                    existe = true;
                    break;
                }
            }

            if (!existe) {
                const option = document.createElement("option");
                option.value = nombreProducto;
                option.textContent = `${nombreProducto} - Precio a definir`;
                select.appendChild(option);
            }
        });
    });

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

    const swiperButtons = document.querySelectorAll(".swiper-button-next, .swiper-button-prev");

    swiperButtons.forEach((button) => {
        button.addEventListener("click", () => {
            productos.forEach((producto) => {
                producto.classList.remove("seleccionado");
                producto.classList.remove("difuminado");
            });
        });
    });
});
