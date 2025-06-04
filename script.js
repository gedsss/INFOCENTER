const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalInfo = document.querySelector(".modal-info p");
const modalTitle = document.querySelector(".modal-title p");
const closeBtn = document.querySelector(".modal-close");

const imagens = document.querySelectorAll(".img-modal");

// biome-ignore lint/complexity/noForEach: <explanation>
imagens.forEach(img => {
  img.addEventListener("click", () => {
    modalImg.src = img.src;
    modalTitle.textContent = img.getAttribute("data-title") || "Sem título";
    modalInfo.textContent = img.getAttribute("data-desc") || "Sem descrição disponível.";
    modal.style.opacity = 0;
    modal.style.display = "flex";
    setTimeout(() => {
      modal.style.opacity = 1;
    }, 200);
  });
});

closeBtn.onclick = () => {
  modal.style.opacity = 0;
  setTimeout(() => {
    modal.style.display = "none";
  }, 400);
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.opacity = 0;
    setTimeout(() => {
      modal.style.display = "none";
    }, 400);
  }
};
