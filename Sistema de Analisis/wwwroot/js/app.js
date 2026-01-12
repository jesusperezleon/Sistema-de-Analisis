const btn = document.getElementById("btnEnviar");

btn.addEventListener("click", async () => {
    const texto = document.getElementById("texto").value;
    if (!texto.trim()) return alert("Introduce un texto");

    try {
        const respuesta = await fetch("/api/analiza", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ texto })
        });

        const data = await respuesta.json();
        console.log(data)

        // Mostrar resultados numéricos
        document.getElementById("num_palabras").innerText = data.num_palabras;
        document.getElementById("num_caracteres").innerText = data.num_caracteres;
        document.getElementById("longitud_media").innerText = data.longitud_media;
        document.getElementById("total_letras").innerText = data.total_letras;

        const lista = document.getElementById("listaPalabras");
        data.palabras_mas_frecuentes.forEach((element) => {
            lista.innerHTML += `<li> ${element} </li>`
        });

        // Graficar conteo de letras
        const letras = Object.keys(data.conteo_por_letra);
        const conteos = Object.values(data.conteo_por_letra);
        const ctxLetras = document.getElementById("graficaLetras").getContext("2d");
        new Chart(ctxLetras, {
            type: 'bar',
            data: {
                labels: letras,
                datasets: [{
                    label: 'Cantidad',
                    data: conteos,
                    backgroundColor: 'rgba(255, 99, 132, 0.6)'
                }]
            },
            options: { responsive: true, plugins: { legend: { display: false } } }
        });

    } catch (err) {
        console.error(err);
        alert("Error al analizar el texto");
    }
});