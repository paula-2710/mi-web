document.addEventListener("DOMContentLoaded", function () {
    cargarNoticias();
});

function cargarNoticias() {
    fetch("js/noticias.json")
        .then(response => response.json())
        .then(noticias => {
            const newsContainer = document.getElementById("news-container");
            newsContainer.innerHTML = ""; // Limpiamos el mensaje de "Cargando..."

            noticias.forEach(noticia => {
                const noticiaDiv = document.createElement("div");
                noticiaDiv.classList.add("noticia");

                noticiaDiv.innerHTML = `
                    <h3>${noticia.titulo}</h3>
                    <p>${noticia.descripcion}</p>
                    <a href="${noticia.url}" target="_blank">Leer más</a>
                `;

                newsContainer.appendChild(noticiaDiv);
            });
        })
        .catch(error => {
            console.error("Error al cargar noticias:", error);
            document.getElementById("news-container").innerHTML = "<p>No se pudieron cargar las noticias.</p>";
        });
}
