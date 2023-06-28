var openButtons = document.getElementsByClassName('openButton');

for (var i = 0; i < openButtons.length; i++) {
    openButtons[i].addEventListener('click', function() {
        var videoPath = this.getAttribute('data-video');
        var videoPlayer = document.getElementById('videoPlayer');
        var videoSource = document.getElementById('videoSource');
        
        videoSource.setAttribute('src', videoPath);
        videoPlayer.load(); // Reload the video source
        document.getElementById('videoPopup').style.display = 'block';
        videoPlayer.play(); // Start playing the video
    });
}

document.getElementById('closeButton').addEventListener('click', closeVideoPopup);

document.addEventListener('click', function(event) {
    if (event.target.id === 'videoPopup') {
        closeVideoPopup();
    }
});

function closeVideoPopup() {
    var videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.pause(); // Pause the video
    videoPlayer.currentTime = 0; // Reset the playback position to the beginning
    document.getElementById('videoPopup').style.display = 'none';
}
