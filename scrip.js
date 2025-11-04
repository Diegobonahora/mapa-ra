document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("assets/provincias/datos.json");
  const provincias = await response.json();

  const infoContainer = document.getElementById("provincia-info");
  const template = document.getElementById("provincia-template").innerHTML;

  // Mostramos una provincia al azar cada vez que se detecta el marcador
  const provincia = provincias[Math.floor(Math.random() * provincias.length)];
  const html = template
    .replace("{{nombre}}", provincia.nombre)
    .replace("{{clima}}", provincia.clima)
    .replace("{{bioma}}", provincia.bioma)
    .replace("{{dato}}", provincia.dato);

  infoContainer.innerHTML = html;
});
