// Script simplifié pour le site du Kasaï-Central
document.addEventListener('DOMContentLoaded', function() {
    console.log('Site du Kasaï-Central chargé');
    
    // S'assurer que la vidéo est bien chargée
    const kasaiVideo = document.getElementById('kasai-video');
    
    if (kasaiVideo) {
        kasaiVideo.load();
        console.log('Vidéo Kasaï chargée');
    }
});