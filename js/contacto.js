window.addEventListener('DOMContentLoaded', () => {
    const mapaIframe = document.getElementById('mapaIframe');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                const url = `https://www.google.com/maps/embed/v1/view?key=TU_API_KEY&center=${lat},${lng}&zoom=15`;
                mapaIframe.src = url;
            },
            (error) => {
                console.log("Usuario no autorizó geolocalización o hubo error:", error);
            }
        );
    }
});
