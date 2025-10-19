    const audio = document.getElementById('audioPlayer');
    function togglePlay() {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }