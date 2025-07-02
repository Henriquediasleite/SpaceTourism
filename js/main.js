// main.js - JavaScript para a página inicial

document.addEventListener('DOMContentLoaded', function() {
    // Adicionar animações ou interatividade se necessário
    const exploreButton = document.querySelector('.explore-button');
    
    if (exploreButton) {
        exploreButton.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        exploreButton.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // Navegação ativa
    const navLinks = document.querySelectorAll('.nav a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

