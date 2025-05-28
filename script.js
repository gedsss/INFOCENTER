const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalInfo = document.querySelector(".modal-info p");
const closeBtn = document.querySelector(".modal-close");

const images = document.querySelectorAll(".img-modal");

// biome-ignore lint/complexity/noForEach: <explanation>
images.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
    modalInfo.textContent = img.getAttribute("data-desc") || "Sem descrição disponível.";
  });
});

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
