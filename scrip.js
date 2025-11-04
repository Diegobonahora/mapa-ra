// Datos de todas las provincias argentinas + CABA
const provincias = [
  { nombre: "Buenos Aires", clima: "Templado", bioma: "Pampa", caracteristica: "Capital: La Plata", pos: {x: 0.5, y: 0.2} },
  { nombre: "Catamarca", clima: "Árido", bioma: "Monte", caracteristica: "Sierras del Ambato", pos: {x: -0.6, y: 0.3} },
  { nombre: "Chaco", clima: "Tropical", bioma: "Bosque Chaqueño", caracteristica: "Río Bermejo", pos: {x: 0.3, y: 0.5} },
  { nombre: "Chubut", clima: "Frío", bioma: "Estepa Patagónica", caracteristica: "Península Valdés", pos: {x: -0.3, y: -0.6} },
  { nombre: "Córdoba", clima: "Templado", bioma: "Sierras", caracteristica: "Valle de Calamuchita", pos: {x: -0.1, y: 0.1} },
  { nombre: "Corrientes", clima: "Subtropical", bioma: "Selva Paranaense", caracteristica: "Esteros del Iberá", pos: {x: 0.5, y: 0.4} },
  { nombre: "Entre Ríos", clima: "Templado", bioma: "Pampa Húmeda", caracteristica: "Ríos Paraná y Uruguay", pos: {x: 0.4, y: 0.3} },
  { nombre: "Formosa", clima: "Cálido", bioma: "Bosque Chaqueño", caracteristica: "Río Pilcomayo", pos: {x: 0.4, y: 0.6} },
  { nombre: "Jujuy", clima: "Tropical de Altura", bioma: "Selva y Puna", caracteristica: "Quebrada de Humahuaca", pos: {x: -0.6, y: 0.6} },
  { nombre: "La Pampa", clima: "Semiárido", bioma: "Pampa Seca", caracteristica: "Capital: Santa Rosa", pos: {x: 0, y: -0.1} },
  { nombre: "La Rioja", clima: "Árido", bioma: "Monte", caracteristica: "Parque Talampaya", pos: {x: -0.5, y: 0.1} },
  { nombre: "Mendoza", clima: "Árido", bioma: "Monte", caracteristica: "Aconcagua", pos: {x: -0.4, y: -0.1} },
  { nombre: "Misiones", clima: "Subtropical", bioma: "Selva Paranaense", caracteristica: "Cataratas del Iguazú", pos: {x: 0.6, y: 0.5} },
  { nombre: "Neuquén", clima: "Frío", bioma: "Bosque Andino-Patagónico", caracteristica: "Volcán Lanín", pos: {x: -0.4, y: -0.4} },
  { nombre: "Río Negro", clima: "Frío", bioma: "Estepa Patagónica", caracteristica: "Bariloche", pos: {x: -0.2, y: -0.5} },
  { nombre: "Salta", clima: "Tropical de Altura", bioma: "Selva y Puna", caracteristica: "Tren a las Nubes", pos: {x: -0.5, y: 0.5} },
  { nombre: "San Juan", clima: "Árido", bioma: "Monte", caracteristica: "Observatorio El Leoncito", pos: {x: -0.3, y: 0} },
  { nombre: "San Luis", clima: "Templado árido", bioma: "Sierras", caracteristica: "Valle del Conlara", pos: {x: -0.2, y: 0} },
  { nombre: "Santa Cruz", clima: "Frío", bioma: "Estepa Patagónica", caracteristica: "Glaciar Perito Moreno", pos: {x: -0.4, y: -0.8} },
  { nombre: "Santa Fe", clima: "Templado", bioma: "Pampa", caracteristica: "Río Paraná", pos: {x: 0.3, y: 0.2} },
  { nombre: "Santiago del Estero", clima: "Cálido seco", bioma: "Monte Chaqueño", caracteristica: "Río Dulce", pos: {x: -0.2, y: 0.3} },
  { nombre: "Tierra del Fuego", clima: "Frío", bioma: "Bosque Subantártico", caracteristica: "Ushuaia", pos: {x: -0.3, y: -0.9} },
  { nombre: "Tucumán", clima: "Subtropical", bioma: "Selva Tucumano-Oranense", caracteristica: "Cerro San Javier", pos: {x: -0.4, y: 0.4} },
  { nombre: "CABA", clima: "Templado", bioma: "Urbano", caracteristica: "Capital Federal", pos: {x: 0.4, y: 0.1} },
];

// Agregar textos al marcador
const contenedor = document.querySelector("#contenedorProvincias");

provincias.forEach(prov => {
  const entidad = document.createElement("a-entity");
  entidad.setAttribute("position", `${prov.pos.x} ${prov.pos.y} 0`);
  
  const texto = document.createElement("a-text");
  texto.setAttribute("value", `${prov.nombre}\nClima: ${prov.clima}\nBioma: ${prov.bioma}\n${prov.caracteristica}`);
  texto.setAttribute("color", "yellow");
  texto.setAttribute("width", "3");
  texto.setAttribute("align", "center");
  texto.setAttribute("wrap-count", "25");
  
  entidad.appendChild(texto);
  contenedor.appendChild(entidad);
});
