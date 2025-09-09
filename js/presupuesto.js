document.addEventListener("DOMContentLoaded", function () {
    const productoSelect = document.getElementById("producto");
    const plazoInput = document.getElementById("plazo");
    const extrasCheckboxes = document.querySelectorAll(".extra");
    const presupuestoTotalSpan = document.getElementById("presupuestoTotal");
    const productos = document.querySelectorAll(".item");

    function calcularPresupuesto() {
        let total = parseInt(productoSelect.value);

        // Calcular extras
        extrasCheckboxes.forEach(extra => {
            if (extra.checked) {
                total += parseInt(extra.value);
            }
        });

        // Aplicar descuento por plazo (Ejemplo: 5% de descuento si el plazo es mayor a 30 días)
        const plazo = parseInt(plazoInput.value) || 0;
        if (plazo >= 30) {
            total *= 0.95; // Descuento del 5%
        }

        // Mostrar total actualizado en euros
        presupuestoTotalSpan.textContent = total.toFixed(2) + " €";
    }

    function actualizarImagenSeleccionada() {
        // Primero, quitamos la selección de todas las imágenes
        productos.forEach(item => item.classList.remove("seleccionado"));

        // Obtenemos el producto seleccionado
        const productoSeleccionado = productoSelect.value;
        const idProducto = `producto${productoSeleccionado / 100}`; // Convierte 100 -> producto1, 200 -> producto2, etc.
        const productoElemento = document.getElementById(idProducto);

        if (productoElemento) {
            productoElemento.classList.add("seleccionado");
        }
    }

    function seleccionarProductoDesdeImagen(id) {
        const valorProducto = id.replace("producto", "") + "00"; // Convierte producto1 -> 100, producto2 -> 200, etc.
        productoSelect.value = valorProducto; // Actualizar el desplegable
        calcularPresupuesto(); // Actualizar el presupuesto
        actualizarImagenSeleccionada(); // Aplicar la clase de selección
    }

    // Evento cuando se cambia el select
    productoSelect.addEventListener("change", () => {
        calcularPresupuesto();
        actualizarImagenSeleccionada();
    });

    // Evento para seleccionar producto desde imagen
    productos.forEach(item => {
        item.addEventListener("click", function () {
            seleccionarProductoDesdeImagen(item.id);
        });
    });

    // Eventos para extras y plazo
    plazoInput.addEventListener("input", calcularPresupuesto);
    extrasCheckboxes.forEach(extra => {
        extra.addEventListener("change", calcularPresupuesto);
    });

    // Inicializar el cálculo y selección
    calcularPresupuesto();
    actualizarImagenSeleccionada();
});

