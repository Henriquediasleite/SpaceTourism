// technology.js

const techButtons = document.querySelectorAll('.tech-button');
const img = document.getElementById('tech-img');
const nameEl = document.getElementById('tech-name');
const descEl = document.getElementById('tech-description');

// Dados da tecnologia (usando as imagens corretas)
const technology = [
    {
        name: "LAUNCH VEHICLE",
        image: "assets/technology/image-launch-vehicle-portrait.jpg",
        description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
        name: "SPACEPORT",
        image: "assets/technology/image-spaceport-portrait.jpg",
        description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch."
    },
    {
        name: "SPACE CAPSULE",
        image: "assets/technology/image-space-capsule-portrait.jpg",
        description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
];

// Inicializar com Launch Vehicle (como mostrado na imagem)
showTechnology(0);

// Event listeners para os botões
techButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        showTechnology(index);
        setActiveButton(button);
    });
});

function showTechnology(index) {
    const tech = technology[index];
    if (tech) {
        // Use landscape images for mobile/tablet and portrait for desktop
        const isMobile = window.innerWidth <= 768;
        const imageType = isMobile ? 'landscape' : 'portrait';
        const imageName = tech.image.replace('portrait', imageType);
        
        img.src = imageName;
        img.alt = tech.name;
        nameEl.textContent = tech.name;
        descEl.textContent = tech.description;
    }
}

function setActiveButton(activeBtn) {
    techButtons.forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
}

// Update images on window resize
window.addEventListener('resize', () => {
    const activeButton = document.querySelector('.tech-button.active');
    if (activeButton) {
        const index = Array.from(techButtons).indexOf(activeButton);
        showTechnology(index);
    }
});

