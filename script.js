// Variable globale pour suivre l'état du mode
let isDayMode = false;

// Fonction pour basculer entre le mode jour et nuit
function toggleMode() {
    console.log('toggleMode appelée');
    
    // Inverser l'état
    isDayMode = !isDayMode;
    console.log('isDayMode:', isDayMode);
    
    // Sélectionner les vidéos
    const nightVideo = document.getElementById('night-video');
    const dayVideo = document.getElementById('day-video');
    
    console.log('nightVideo trouvée:', nightVideo);
    console.log('dayVideo trouvée:', dayVideo);
    
    if (nightVideo && dayVideo) {
        if (isDayMode) {
            // Passer au mode jour
            console.log('Avant changement - nightVideo classes:', nightVideo.className);
            console.log('Avant changement - dayVideo classes:', dayVideo.className);
            
            nightVideo.classList.remove('active');
            dayVideo.classList.add('active');
            
            console.log('Après changement - nightVideo classes:', nightVideo.className);
            console.log('Après changement - dayVideo classes:', dayVideo.className);
            
            document.getElementById('mode-switch').innerHTML = '<i class="fas fa-sun"></i> Mode Nuit';
            console.log('Mode jour activé');
        } else {
            // Passer au mode nuit
            console.log('Avant changement - nightVideo classes:', nightVideo.className);
            console.log('Avant changement - dayVideo classes:', dayVideo.className);
            
            dayVideo.classList.remove('active');
            nightVideo.classList.add('active');
            
            console.log('Après changement - nightVideo classes:', nightVideo.className);
            console.log('Après changement - dayVideo classes:', dayVideo.className);
            
            document.getElementById('mode-switch').innerHTML = '<i class="fas fa-moon"></i> Mode Jour';
            console.log('Mode nuit activé');
        }
    } else {
        console.error('Une ou plusieurs vidéos non trouvées!');
    }
}

// Initialiser le bouton quand la page est chargée
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM chargé');
    
    // Attendre un peu pour s'assurer que tout est chargé
    setTimeout(function() {
        // Vérifier si le bouton existe
        const button = document.getElementById('mode-switch');
        console.log('Bouton trouvé:', button);
        
        // Définir le texte initial du bouton
        if (button) {
            button.innerHTML = '<i class="fas fa-moon"></i> Mode Jour';
            console.log('Texte du bouton défini');
            
            // Ajouter l'événement click
            button.addEventListener('click', toggleMode);
            console.log('Événement click ajouté');
        }
        
        // S'assurer que les vidéos sont bien chargées
        const nightVideo = document.getElementById('night-video');
        const dayVideo = document.getElementById('day-video');
        
        console.log('Vidéos trouvées après timeout:', nightVideo, dayVideo);
        
        if (nightVideo) {
            nightVideo.load();
            console.log('Vidéo nuit chargée');
        }
        if (dayVideo) {
            dayVideo.load();
            console.log('Vidéo jour chargée');
        }
    }, 100);
});