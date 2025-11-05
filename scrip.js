// --- Pantalla de inicio ---
document.getElementById("btn-iniciar").addEventListener("click", () => {
  document.getElementById("pantalla-inicio").style.display = "none";
  document.getElementById("escenaRA").style.display = "block";
});

// --- Cargar provincias ---
let provincias = [];

fetch("provincias.json")
  .then(res => res.json())
  .then(data => {
    provincias = data;
    console.log("Provincias cargadas:", provincias.length);
  });

// --- Detectar clics sobre el mapa ---
const mapa = document.getElementById("mapa");
mapa.addEventListener("click", (e) => {
  const rect = mapa.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const xRel = x / rect.width;
  const yRel = y / rect.height;

  let prov = detectarProvincia(xRel, yRel);
  if (prov) mostrarInfo(prov);
});

// --- Detección por zonas (simplificada) ---
function detectarProvincia(x, y) {
  // Coordenadas relativas (0 a 1)
  // Estas zonas son aproximadas. Se pueden ajustar con precisión
  if (y < 0.2 && x < 0.3) return buscar("Jujuy");
  if (y < 0.25 && x > 0.3 && x < 0.5) return buscar("Salta");
  if (y < 0.35 && x > 0.5) return buscar("Formosa");
  if (y < 0.45 && x < 0.4) return buscar("Córdoba");
  if (y < 0.45 && x > 0.4 && x < 0.6) return buscar("Santa Fe");
  if (y > 0.6 && x < 0.3) return buscar("Buenos Aires");
  if (y > 0.6 && x > 0.3 && x < 0.5) return buscar("Entre Ríos");
  if (y > 0.7 && x < 0.3) return buscar("La Pampa");
  if (y > 0.7 && x > 0.4) return buscar("Río Negro");
  if (y > 0.8 && x > 0.5) return buscar("Santa Cruz");
  if (y > 0.85 && x < 0.4) return buscar("Tierra del Fuego");
  return null;
}

function buscar(nombre) {
  return provincias.find(p => p.nombre.toLowerCase().includes(nombre.toLowerCase())) || null;
}

// --- Mostrar información en panel ---
function mostrarInfo(prov) {
  document.getElementById("provincia-nombre").textContent = prov.nombre;
  document.getElementById("provincia-clima").textContent = prov.clima;
  document.getElementById("provincia-bioma").textContent = prov.bioma;
  document.getElementById("provincia-caracteristica").textContent = prov.caracteristica;
  document.getElementById("panel-info").classList.remove("oculto");
}

// --- Cerrar panel ---
document.getElementById("cerrar-panel").addEventListener("click", () => {
  document.getElementById("panel-info").classList.add("oculto");
});
