// Récupération des éléments du formulaire et des champs
const form = document.getElementById('event-form');  // Le formulaire entier
const eventName = document.getElementById('event-name');  // Champ pour le nom de l'événement
const eventLocation = document.getElementById('event-location');  // Champ pour le lieu
const eventDate = document.getElementById('event-date');  // Champ pour la date
const eventType = document.getElementById('event-type');  // Champ pour le type d'événement
const eventDescription = document.getElementById('event-description');  // Champ pour la description

// Validation dynamique du formulaire
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche la soumission du formulaire, on va gérer la validation manuellement

    // Vérification des champs obligatoires

    // Si le nom de l'événement est vide
    if (!eventName.value.trim()) {
        alert("Le champ 'Nom de l'événement' est requis !");  // Affiche un message d'alerte
        eventName.focus();  // Met le focus sur ce champ
        return;  // Arrête l'exécution du code, le formulaire ne sera pas envoyé
    }

    // Si le lieu est vide
    if (!eventLocation.value.trim()) {
        alert("Le champ 'Lieu' est requis !");
        eventLocation.focus();
        return;
    }

    // Si la date est vide
    if (!eventDate.value) {
        alert("Le champ 'Date' est requis !");
        eventDate.focus();
        return;
    }

    // Si le type d'événement n'est pas sélectionné
    if (!eventType.value) {
        alert("Veuillez sélectionner un type d'événement !");
        eventType.focus();
        return;
    }

    // Si la description est vide
    if (!eventDescription.value.trim()) {
        alert("Le champ 'Description' est requis !");
        eventDescription.focus();
        return;
    }

    // Si tous les champs sont valides
    alert("Événement ajouté avec succès !");  // Affiche un message de succès
    form.reset();  // Réinitialise le formulaire après validation
});

