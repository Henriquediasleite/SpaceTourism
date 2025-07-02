// js/destination.js

const tabsContainer = document.getElementById('destination-tabs');
const img = document.getElementById('destination-img');
const nameEl = document.getElementById('destination-name');
const descEl = document.getElementById('destination-description');
const distanceEl = document.getElementById('destination-distance');
const travelEl = document.getElementById('destination-travel');

let destinations = [];

fetch('data.json')
  .then(res => res.json())
  .then(data => {
    destinations = data.destinations;
    createTabs();
    showDestination(destinations[0].name);
  });

function createTabs() {
  destinations.forEach(dest => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.textContent = dest.name;
    btn.addEventListener('click', () => {
      showDestination(dest.name);
      setActiveButton(btn);
    });
    li.appendChild(btn);
    tabsContainer.appendChild(li);
  });
  setActiveButton(tabsContainer.querySelector('button'));
}

function showDestination(name) {
  const dest = destinations.find(d => d.name === name);
  img.src = dest.images.png;
  img.alt = dest.name;
  nameEl.textContent = dest.name;
  descEl.textContent = dest.description;
  distanceEl.textContent = dest.distance;
  travelEl.textContent = dest.travel;
}

function setActiveButton(activeBtn) {
  tabsContainer.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
  activeBtn.classList.add('active');
}
