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
    const escena = document.querySelector("a-scene");
    escena.style.display = "block";
    boton.style.display = "none";
  });

  // Detectar clic sobre el mapa
  const mapa = document.getElementById("mapa");
  mapa.addEventListener("click", () => {
    const provincia = provincias[Math.floor(Math.random() * provincias.length)];
    nombre.textContent = provincia.nombre;
    info.textContent = provincia.info;
    infoBox.classList.remove("hidden");
  });

  cerrar.addEventListener("click", () => {
    infoBox.classList.add("hidden");
  });
});
