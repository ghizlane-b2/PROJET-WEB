// Sélection des éléments
const prevBtn = document.getElementById('prev-btn'); // Bouton pour l'image précédente
const nextBtn = document.getElementById('next-btn'); // Bouton pour l'image suivante
const galleryContainer = document.getElementById('gallery-container'); // Conteneur de la galerie d'images
const images = document.querySelectorAll('.gallery-img'); // Toutes les images de la galerie

// Variables
let currentIndex = 0; // Index de l'image courante

// Fonction pour mettre à jour la position de la galerie
function updateGallery() {
    const offset = -currentIndex * galleryContainer.offsetWidth; // Calcule le décalage
    galleryContainer.style.transform = `translateX(${offset}px)`; // Applique la transformation de décalage
    galleryContainer.style.transition = 'transform 0.5s ease'; // Ajoute une transition douce
}

// Événement pour le bouton précédent
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1; // Décrémente l'index, ou passe à la dernière image si au début
    updateGallery(); // Met à jour la galerie
});

// Événement pour le bouton suivant
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1; // Incrémente l'index, ou revient à la première image si à la fin
    updateGallery(); // Met à jour la galerie
});

// Initialisation
updateGallery(); // Met à jour la galerie lors du chargement initial
