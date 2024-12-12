document.addEventListener('DOMContentLoaded', function() {
    // Filtrer les événements par type ou date
    document.getElementById('filter-type').addEventListener('change', filterEvents);
    document.getElementById('filter-date').addEventListener('input', filterEvents);

    // Fonction pour filtrer les événements
    function filterEvents() {
        let typeFilter = document.getElementById('filter-type').value; // Récupère la valeur du filtre de type
        let dateFilter = document.getElementById('filter-date').value; // Récupère la valeur du filtre de date

        let rows = document.querySelectorAll('#events-table tbody tr'); // Sélectionne toutes les lignes du tableau des événements
        rows.forEach(row => {
            let type = row.cells[3]?.textContent?.toLowerCase(); // Récupère le type de l'événement (en minuscule)
            let date = row.cells[1]?.textContent; // Récupère la date de l'événement

            let showRow = true;

            // Filtrer par type
            if (typeFilter !== 'all' && type !== typeFilter.toLowerCase()) {
                showRow = false; // Masque la ligne si le type ne correspond pas au filtre
            }

            // Filtrer par date
            if (dateFilter && date !== dateFilter) {
                showRow = false; // Masque la ligne si la date ne correspond pas au filtre
            }

            row.style.display = showRow ? '' : 'none'; // Affiche ou masque la ligne
        });
    }

    // Afficher/Masquer les détails
    document.querySelectorAll('.details-btn').forEach(button => {
        button.addEventListener('click', function() {
            let row = this.closest('tr'); // Trouve la ligne parente du bouton
            let detailsRow = document.getElementById(`details-${this.dataset.id}`); // Trouve la ligne de détails correspondante
            if (detailsRow) {
                // Basculer la visibilité de la ligne de détails
                detailsRow.style.display = (detailsRow.style.display === 'none' || detailsRow.style.display === '') ? 'table-row' : 'none';
            }
        });
    });

    // Supprimer l'événement
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function() {
            let row = this.closest('tr'); // Trouve la ligne parente du bouton "Supprimer"
            let detailsRow = document.getElementById(`details-${row.querySelector('.details-btn').dataset.id}`); // Trouve la ligne de détails correspondante
            
            // Supprime la ligne de l'événement
            row.remove();
            
            // Supprime la ligne de détails associée (si elle existe)
            if (detailsRow) {
                detailsRow.remove();
            }
        });
    });
});
