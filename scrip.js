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

  // Obtener marcador y escena
  const marcador = document.querySelector("a-marker");

  // Crear un cubo (o esfera) por cada provincia
  provincias.forEach((prov, index) => {
    // Crear entidad 3D
    const entity = document.createElement("a-box");
    entity.setAttribute("color", "#00ff00");
    entity.setAttribute("depth", "0.05");
    entity.setAttribute("height", "0.05");
    entity.setAttribute("width", "0.05");
    entity.setAttribute("position", `${(index % 5) * 0.15 - 0.3} 0.05 ${(Math.floor(index / 5)) * 0.15 - 0.3}`);
    entity.classList.add("provincia");

    // Guardar info en atributos
    entity.setAttribute("data-nombre", prov.nombre);
    entity.setAttribute("data-clima", prov.clima);
    entity.setAttribute("data-bioma", prov.bioma);
    entity.setAttribute("data-caracteristica", prov.caracteristica);

    // Añadir cursor para interactuar
    entity.setAttribute("cursor-listener", "");

    // Añadir al marcador
    marcador.appendChild(entity);
  });

  // Listener de A-Frame para detectar clicks en provincias
  AFRAME.registerComponent("cursor-listener", {
    init: function () {
      this.el.addEventListener("click", evt => {
        const el = evt.target;
        nombre.textContent = el.getAttribute("data-nombre");
        info.textContent = `Clima: ${el.getAttribute("data-clima")}\nBioma: ${el.getAttribute("data-bioma")}\nCaracterística: ${el.getAttribute("data-caracteristica")}`;
        infoBox.classList.remove("hidden");
      });
    }
  });

  // Cerrar infoBox
  cerrar.addEventListener("click", () => {
    infoBox.classList.add("hidden");
  });
});
