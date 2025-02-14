document.getElementById('playButton').addEventListener('click', function() {
    var videoContainer = document.getElementById('videoContainer');
    var loveVideo = document.getElementById('loveVideo');

    videoContainer.classList.remove('hidden');
    loveVideo.play();
});