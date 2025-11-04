document.addEventListener("DOMContentLoaded", async () => {
  const boton = document.getElementById("btnCamara");
  const infoBox = document.getElementById("infoBox");
  const cerrar = document.getElementById("cerrarInfo");
  const nombre = document.getElementById("provinciaNombre");
  const info = document.getElementById("provinciaInfo");
  const arContainer = document.getElementById("arContainer");

  const provincias = await fetch("assets/data.json").then(r => r.json());

  boton.addEventListener("click", () => {
    // Ocultar botón
    boton.style.display = "none";

    // Crear escena AR
    const escena = document.createElement("a-scene");
    escena.setAttribute("embedded", "");
    escena.setAttribute("arjs", "sourceType: webcam; debugUIEnabled: false;");
    escena.setAttribute("renderer", "alpha: true; antialias: true");
    arContainer.appendChild(escena);

    // Crear marcador
    const marcador = document.createElement("a-marker");
    marcador.setAttribute("type", "pattern");
    marcador.setAttribute("url", "assets/marcador.patt");
    escena.appendChild(marcador);

    // Crear mapa
    const mapa = document.createElement("a-plane");
    mapa.setAttribute("id", "mapa");
    mapa.setAttribute("src", "assets/mapa-argentina.jpg");
    mapa.setAttribute("rotation", "-90 0 0");
    mapa.setAttribute("width", "2");
    mapa.setAttribute("height", "2");
    marcador.appendChild(mapa);

    // Crear cámara
    const camera = document.createElement("a-entity");
    camera.setAttribute("camera", "");
    escena.appendChild(camera);

    // Detectar click sobre el mapa
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
