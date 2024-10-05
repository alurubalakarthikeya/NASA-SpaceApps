const cards = document.querySelectorAll(".card");
const summaryText = document.getElementById("summary-text");
const cardListModal = document.getElementById("card-list-modal");
const listAllBtn = document.getElementById("list-all-btn");
const closeModalBtn = document.getElementById("close-modal-btn");

let currentIndex = 0;

function updateCardDisplay(index) {
  cards.forEach((card, i) => {
    card.classList.remove("active", "inactive-left", "inactive-right");
    if (i === index) {
      card.classList.add("active");
      summaryText.innerText = card.getAttribute("data-summary");
    } else if (i < index) {
      card.classList.add("inactive-left");
    } else {
      card.classList.add("inactive-right");
    }
  });
}

function selectCard(index) {
  currentIndex = index - 1;
  updateCardDisplay(currentIndex);
  cardListModal.style.display = "none";
}

document.querySelectorAll(".next-btn").forEach((button) => {
  button.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCardDisplay(currentIndex);
  });
});

document.querySelectorAll(".prev-btn").forEach((button) => {
  button.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCardDisplay(currentIndex);
  });
});

listAllBtn.addEventListener("click", () => {
  cardListModal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
  cardListModal.style.display = "none";
});

updateCardDisplay(currentIndex);