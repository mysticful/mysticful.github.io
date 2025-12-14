    // YES this is skidded from brunys.org so what
    
    const images = [
      "/img/celeste.png",
      "/img/ame.png",
      "/img/chihiro.png",
      "/img/wither.png",
      "/img/pvc.png",
      "/img/esc.png"
    ];

    const img = document.getElementById("random-img");
    img.src = images[Math.floor(Math.random() * images.length)];