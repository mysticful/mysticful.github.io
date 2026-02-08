document.addEventListener('DOMContentLoaded', () => {

  const overlay = document.getElementById('overlay');
  const clickEnter = document.getElementById('enter-text');
  const animationText = document.getElementById('animationText');
  const siteContent = document.getElementById('content');
  const audio = document.getElementById('bg-music');

  clickEnter.addEventListener('click', () => {

    clickEnter.style.display = 'none';

    audio.volume = 0;
    audio.play();

    let vol = 0;
    const fade = setInterval(() => {
      vol += 0.03;
      audio.volume = Math.min(vol, 1);
      if (vol >= 1) clearInterval(fade);
    }, 60);

    const words = [
  { text: 'drop', time: 0 },
  { text: 'drop', time: 350 },
  { text: 'drop', time: 700 },
  { text: 'drop', time: 1050 },
  { text: 'it!',   time: 1450 },
];

    animationText.innerHTML = '';

    words.forEach((wordObj) => {
      const spanWord = document.createElement('span');
      spanWord.style.display = 'inline-block';
      spanWord.style.margin = '0 3px';
      spanWord.style.opacity = 0;
      spanWord.style.transition = 'opacity 0.5s ease';

      spanWord.textContent = wordObj.text;
      animationText.appendChild(spanWord);
      animationText.appendChild(document.createTextNode(' '));

      setTimeout(() => {
        spanWord.style.opacity = 1;
      }, wordObj.time);
    });

    const totalDuration = words[words.length - 1].time + 800;

    setTimeout(() => {
      overlay.style.opacity = 0;
      siteContent.style.opacity = 1;

      setTimeout(() => {
        overlay.style.display = 'none';
      }, 800);

    }, totalDuration);

  });

});


// read something<3.js
