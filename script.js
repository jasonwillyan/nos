// Data do início do relacionamento
const startDate = new Date("2022-06-15");

function updateTime() {
  const now = new Date();
  let diff = now - startDate;
  const days = Math.floor(diff / (1000 * 3600 * 24));
  let remainingDays = days;
  const years = Math.floor(remainingDays / 365);
  remainingDays = remainingDays % 365;
  const months = Math.floor(remainingDays / 30);
  remainingDays = remainingDays % 30;
  const weeks = Math.floor(remainingDays / 7);
  const daysLeft = remainingDays % 7;

  document.getElementById("timeTogether").innerHTML = `
      <div class="count-breakdown-row">
        <div class="count-block">
          <span class="count-number">${years}</span>
          <span class="count-label">ano${years !== 1 ? "s" : ""}</span>
        </div>
        <div class="count-block">
          <span class="count-number">${months}</span>
          <span class="count-label">mês${months !== 1 ? "es" : ""}</span>
        </div>
      </div>
      <div class="count-breakdown-row">
        <div class="count-block">
          <span class="count-number">${weeks}</span>
          <span class="count-label">semana${weeks !== 1 ? "s" : ""}</span>
        </div>
        <div class="count-block">
          <span class="count-number">${daysLeft}</span>
          <span class="count-label">dia${daysLeft !== 1 ? "s" : ""}</span>
        </div>
      </div>
    `;
}

setInterval(updateTime, 1000);
updateTime();

// Carrossel
let slideIndex = 0;
const slides = document.querySelectorAll(".carousel img");

function moveSlide(n) {
  slideIndex += n;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  if (slideIndex >= slides.length) slideIndex = 0;

  slides.forEach((img, i) => {
    img.style.display = i === slideIndex ? "block" : "none";
  });
}

moveSlide(0);
