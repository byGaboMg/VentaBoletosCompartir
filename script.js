document.addEventListener("DOMContentLoaded", function() {
    const mensajes = [
        "Haz Obtenido 1 boleto",
        "Haz Obtenido 2 boletos",
        "Haz Obtenido 3 boletos",
        "Haz Obtenido 4 boletos",
        "Haz Obtenido 5 boletos",
        "Haz Obtenido 6 boletos",
        "No has obtenido ningún boleto, más suerte para la próxima!",
        "No has obtenido ningún boleto, más suerte para la próxima!",
        "No has obtenido ningún boleto, más suerte para la próxima!"
        // Agrega más mensajes aquí
    ];

    const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
    document.getElementById("mensaje").textContent = mensajeAleatorio;

    if (mensajes.indexOf(mensajeAleatorio) <= 5) {
        const botonContainer = document.getElementById("boton-container");

        const botonDiv = document.createElement("div");
        botonDiv.className = "container";
        botonDiv.onclick = function() {
            window.location.href = "pago.html";
        };
        botonDiv.innerHTML = `
            <div class="left-side">
                <div class="card">
                    <div class="card-line"></div>
                    <div class="buttons"></div>
                </div>
                <div class="post">
                    <div class="post-line"></div>
                    <div class="screen">
                        <div class="dollar">$</div>
                    </div>
                    <div class="numbers"></div>
                    <div class="numbers-line2"></div>
                </div>
            </div>
            <div class="right-side">
                <div class="new">Pagar</div>
            </div>
        `;

        botonContainer.appendChild(botonDiv);
    }
});
