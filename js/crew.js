// crew.js

const dots = document.querySelectorAll('.dot');
const img = document.getElementById('crew-img');
const roleEl = document.getElementById('crew-role');
const nameEl = document.getElementById('crew-name');
const bioEl = document.getElementById('crew-bio');

// Dados da tripulação (usando as imagens corretas)
const crew = [
    {
        name: "DOUGLAS HURLEY",
        role: "COMMANDER",
        image: "assets/crew/image-douglas-hurley.png",
        bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
        name: "MARK SHUTTLEWORTH",
        role: "MISSION SPECIALIST",
        image: "assets/crew/image-mark-shuttleworth.png",
        bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
        name: "VICTOR GLOVER",
        role: "PILOT",
        image: "assets/crew/image-victor-glover.png",
        bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
        name: "ANOUSHEH ANSARI",
        role: "FLIGHT ENGINEER",
        image: "assets/crew/image-anousheh-ansari.png",
        bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
];

// Inicializar com Anousheh Ansari (como mostrado na imagem)
showCrewMember(3);

// Event listeners para os dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showCrewMember(index);
        setActiveDot(dot);
    });
});

function showCrewMember(index) {
    const member = crew[index];
    if (member) {
        img.src = member.image;
        img.alt = member.name;
        roleEl.textContent = member.role;
        nameEl.textContent = member.name;
        bioEl.textContent = member.bio;
    }
}

function setActiveDot(activeDot) {
    dots.forEach(dot => dot.classList.remove('active'));
    activeDot.classList.add('active');
}

