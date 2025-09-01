document.addEventListener("DOMContentLoaded", () => {
  const galleryGrid = document.getElementById("galleryGrid");
  const destinataria = document.getElementById("destinataria");
  const modal = document.getElementById("photoModal");
  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalText = document.getElementById("modalText");
  const modalClose = document.getElementById("modalClose");
  const whatsappBtn = document.getElementById("whatsappShare");

  // Recuperamos nombre desde el formulario (solo para mostrarlo arriba)
  const formData = JSON.parse(localStorage.getItem("formData")) || {};
  if (formData.nombre) {
    destinataria.textContent = formData.nombre;
  }

  // Tus fotos + mensajes fijos ❤️
  const galleryItems = [
    {
      title: "El inicio de todo ✨",
      text: "Ese día entendí que mi vida cambió para siempre porque te conocí.",
      img: "assets/img/foto1.jpg",
    },
    {
      title: "Nuestro momento favorito 💕",
      text: "Cada instante contigo se siente como un sueño del que nunca quiero despertar.",
      img: "assets/img/foto2.jpg",
    },
    {
      title: "Tu sonrisa 😍",
      text: "Eres la razón por la que sonrío incluso en mis días más grises.",
      img: "assets/img/foto3.jpg",
    },
    {
      title: "Nuestro futuro juntos 🌎",
      text: "No importa dónde estemos, mientras sea contigo siempre será mi lugar favorito.",
      img: "assets/img/foto4.jpg",
    }
  ];

  // Renderizar galería
  function renderGallery() {
    galleryGrid.innerHTML = "";

    galleryItems.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("gallery-item");

      const img = document.createElement("img");
      img.src = item.img;
      img.alt = item.title;

      const content = document.createElement("div");
      content.classList.add("gallery-content");

      const title = document.createElement("h3");
      title.textContent = item.title;

      const text = document.createElement("p");
      text.textContent = item.text;

      content.appendChild(title);
      content.appendChild(text);

      card.appendChild(img);
      card.appendChild(content);

      // Abrir modal al hacer clic
      card.addEventListener("click", () => {
        modalImg.src = item.img;
        modalTitle.textContent = item.title;
        modalText.textContent = item.text;
        modal.showModal();
      });

      galleryGrid.appendChild(card);
    });
  }

  // Botón cerrar modal
  modalClose.addEventListener("click", () => modal.close());

  // Botón compartir por WhatsApp
  whatsappBtn.addEventListener("click", () => {
    const url = window.location.href;
    const mensaje = `Mira lo que preparé para ti 💖: ${url}`;
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappURL, "_blank");
  });

  // Inicializar
  renderGallery();
});
