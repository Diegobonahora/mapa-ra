document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const raContainer = document.getElementById("ra-container");

  startBtn.addEventListener("click", () => {
    startBtn.style.display = "none"; // Oculta el botón
    raContainer.style.display = "block"; // Muestra la escena

    // Solicitar permiso de cámara (necesario en algunos celulares)
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          console.log("✅ Cámara activada correctamente");
        })
        .catch((err) => {
          alert("❌ Error al acceder a la cámara: " + err.message);
        });
    } else {
      alert("Tu dispositivo no soporta acceso a la cámara.");
    }
  });
});
