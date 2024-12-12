// Initialisation de la carte OpenStreetMap avec Leaflet.js
const map = L.map('map').setView([31.5112, -9.7600], 14);

// Ajouter une couche de tuiles depuis OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

// Ajouter un marqueur pour la scène de plage Essaouira
L.marker([31.5112, -9.7600]).addTo(map)
    .bindPopup('<b>Scène de la plage</b><br>Essaouira, Maroc.')
    .openPopup();

// Gestion de la soumission du formulaire de contact
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Votre message a été envoyé avec succès !");
        // Réinitialiser le formulaire après l'envoi
        document.getElementById('contactForm').reset();
    } else {
        alert("Veuillez remplir tous les champs.");
    }
});
