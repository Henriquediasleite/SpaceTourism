// destination.js

const tabButtons = document.querySelectorAll('.tab-button');
const img = document.getElementById('destination-img');
const nameEl = document.getElementById('destination-name');
const descEl = document.getElementById('destination-description');
const distanceEl = document.getElementById('destination-distance');
const travelEl = document.getElementById('destination-travel');

// Dados dos destinos (usando as imagens corretas)
const destinations = {
    moon: {
        name: "MOON",
        image: "assets/destination/image-moon.png",
        description: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 KM",
        travel: "3 DAYS"
    },
    mars: {
        name: "MARS",
        image: "assets/destination/image-mars.png",
        description: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
        distance: "225 MIL. KM",
        travel: "9 MONTHS"
    },
    europa: {
        name: "EUROPA",
        image: "assets/destination/image-europa.png",
        description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 MIL. KM",
        travel: "3 YEARS"
    },
    titan: {
        name: "TITAN",
        image: "assets/destination/image-titan.png",
        description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 BIL. KM",
        travel: "7 YEARS"
    }
};

// Inicializar com Mars (como mostrado na imagem)
showDestination('mars');

// Event listeners para os botões
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const destination = button.getAttribute('data-destination');
        showDestination(destination);
        setActiveButton(button);
    });
});

function showDestination(destinationKey) {
    const dest = destinations[destinationKey];
    if (dest) {
        img.src = dest.image;
        img.alt = dest.name;
        nameEl.textContent = dest.name;
        descEl.textContent = dest.description;
        distanceEl.textContent = dest.distance;
        travelEl.textContent = dest.travel;
    }
}

function setActiveButton(activeBtn) {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
}

