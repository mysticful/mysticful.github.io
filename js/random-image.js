    // YES this is skidded from brunys.org so what
    
    const images = [
      "/img/naegiri.png",
      "/img/eternalsugar.png",
      "/img/ame.png",
      "/img/coinpin.png"
    ];

    const img = document.getElementById("random-img");
    img.src = images[Math.floor(Math.random() * images.length)];