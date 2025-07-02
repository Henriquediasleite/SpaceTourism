// js/crew.js

const roleEl = document.getElementById('crew-role');
const nameEl = document.getElementById('crew-name');
const bioEl = document.getElementById('crew-bio');
const imgEl = document.getElementById('crew-img');
const dotsContainer = document.getElementById('crew-dots');

let crew = [];

fetch('data.json')
  .then(res => res.json())
  .then(data => {
    crew = data.crew;
    createDots();
    showCrew(0);
  });

function createDots() {
  crew.forEach((member, index) => {
    const btn = document.createElement('button');
    btn.addEventListener('click', () => {
      showCrew(index);
      setActiveDot(btn);
    });
    dotsContainer.appendChild(btn);
  });
  setActiveDot(dotsContainer.querySelector('button'));
}

function showCrew(index) {
  const member = crew[index];
  roleEl.textContent = member.role;
  nameEl.textContent = member.name;
  bioEl.textContent = member.bio;
  imgEl.src = member.images.png;
  imgEl.alt = member.name;
}

function setActiveDot(activeBtn) {
  dotsContainer.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
  activeBtn.classList.add('active');
}
