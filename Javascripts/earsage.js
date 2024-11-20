
 const video = document.getElementById('video');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');

    playBtn.addEventListener('click', function() {
        video.play();
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline-block';
    });

    pauseBtn.addEventListener('click', function() {
        video.pause();
        playBtn.style.display = 'inline-block';
        pauseBtn.style.display = 'none';
    });
