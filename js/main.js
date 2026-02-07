document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('overlay');
  const content = document.querySelector('.box');
  const bgMusic = document.getElementById('bg-music');

  overlay.addEventListener('click', () => {

    bgMusic.volume = 0;
    bgMusic.play();

    overlay.style.opacity = '0';

    content.style.opacity = '1';

    let vol = 0;
    const fade = setInterval(() => {
      vol += 0.03;
      bgMusic.volume = Math.min(vol, 1);
      if (vol >= 1) clearInterval(fade);
    }, 60);

    setTimeout(() => {
      overlay.style.display = 'none';
    }, 1200);

  });
});

// read something<3.js