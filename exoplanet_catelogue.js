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

document.querySelectorAll('.card, .summary').forEach(element => {
  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    element.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(${element.style.transform.split('translateY(')[1].split(')')[0]})`;
  });

  element.addEventListener('mouseleave', () => {
    element.style.transform = 'rotateX(0) rotateY(0) translateY(0)';
  });
});

document.querySelectorAll('.card, .summary').forEach(element => {
  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    element.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(${element.style.transform.split('translateY(')[1].split(')')[0]})`;
  });

  element.addEventListener('mouseleave', () => {
    element.style.transform = 'rotateX(0) rotateY(0) translateY(0)';
  });
});

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(${card.style.transform.split('translateY(')[1].split(')')[0]})`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0) translateY(0)';
  });
});

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