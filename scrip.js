document.addEventListener("DOMContentLoaded", async () => {
  const boton = document.getElementById("btnCamara");
  const infoBox = document.getElementById("infoBox");
  const cerrar = document.getElementById("cerrarInfo");
  const nombre = document.getElementById("provinciaNombre");
  const info = document.getElementById("provinciaInfo");

  // Cargar datos desde JSON
  const provincias = await fetch("assets/data.json").then(r => r.json());

  // Botón para abrir cámara
  boton.addEventListener("click", () => {
    // Crear la escena AR dinámicamente
    const escena = document.createElement("a-scene");
    escena.setAttribute("embedded", "");
    escena.setAttribute("arjs", "sourceType: webcam; debugUIEnabled: false;");
    document.body.appendChild(escena);

    // Crear el marcador
    const marcador = document.createElement("a-marker");
    marcador.setAttribute("type", "pattern");
    marcador.setAttribute("url", "assets/marcador.patt");
    escena.appendChild(marcador);

    // Crear el plano del mapa
    const mapa = document.createElement("a-plane");
    mapa.setAttribute("id", "mapa");
    mapa.setAttribute("src", "assets/mapa-argentina.jpg");
    mapa.setAttribute("rotation", "-90 0 0");
    mapa.setAttribute("width", "2");
    mapa.setAttribute("height", "2");
    mapa.classList.add("clickable");
    marcador.appendChild(mapa);

    // Crear la cámara
    const camera = document.createElement("a-entity");
    camera.setAttribute("camera", "");
    marcador.appendChild(camera);

    // Ocultar botón
    boton.style.display = "none";

    // Detectar clic sobre el mapa
    mapa.addEventListener("click", () => {
      const provincia = provincias[Math.floor(Math.random() * provincias.length)];
      nombre.textContent = provincia.nombre;
      info.textContent = `Clima: ${provincia.clima}\nBioma: ${provincia.bioma}\nCaracterística: ${provincia.caracteristica}`;
      infoBox.classList.remove("hidden");
    });
  });

  cerrar.addEventListener("click", () => {
    infoBox.classList.add("hidden");
  });
});
