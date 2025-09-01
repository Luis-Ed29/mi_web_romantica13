// Esperar a que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loveForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Obtener datos del formulario
      const data = {
        nombre: document.getElementById("nombre").value,
        color: document.getElementById("color").value,
        cancion: document.getElementById("cancion").value,
        comida: document.getElementById("comida").value,
        lugar: document.getElementById("lugar").value,
        fechaEspecial: document.getElementById("fechaEspecial").value,
        deseo: document.getElementById("deseo").value,
        mensaje: document.getElementById("mensaje").value,
      };

      // Guardar en localStorage
      localStorage.setItem("formData", JSON.stringify(data));

      // Redirigir a la galería
      window.location.href = "gallery.html";
    });
  }
});
