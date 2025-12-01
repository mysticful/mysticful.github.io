// took this from frogiee.one

const textElement = document.getElementById("text");
const overlay = document.getElementById("overlay");
const audio = document.getElementById("enter-sound");
let titleText = "myst.lat";
let opacity = 0;
let fadeIn = true;
let delay = 0.007;

function updateTitle() {
    let displayText = titleText.charAt(0) + titleText.slice(1, Math.floor(opacity * (titleText.length - 1)) + 1);
    document.title = displayText;

    if (fadeIn) {
        opacity += delay;
        if (opacity >= 1) {
            fadeIn = false;
        }
    } else {
        opacity -= delay;
        if (opacity <= 0) {
            fadeIn = true;
        }
    }

    requestAnimationFrame(updateTitle);
}

function enter(){
    let enterPopup = document.getElementById('enter-popup');
    let enterSound = document.getElementById('enter-sound');

    enterSound.play();
    enterPopup.style.transition = 'all 0.3s ease';
    enterPopup.style.opacity = '0';
    setTimeout(() => {
        enterPopup.style.display = 'none';
    }, 500); 

    requestAnimationFrame(updateTitle);
};

const phrases = [
    "",
    "they", 
    "they call", 
    "they call this", 
    "they call this guy SUPXR?", 
    "for", 
    "for what?",
    "he's",
    "he's not",
    "he's not super",
    "he's not super at",
    "he's not super at anything",
    "he",
    "he can't",
    "he can't make",
    "he can't make a",
    "he can't make a hit",
    "he can't make a hit for",
    "he can't make a hit for the",
    "he can't make a hit for the life",
    "he can't make a hit for the life of",
    "he can't make a hit for the life of him!",
    "...",
    "YEEEOUCH!",
    
];
const delays = [0, 0.2, 0.2, 0.2, 0.4, 0.2, 0.3, 0.2, 0.2, 0.1, 0.2, 0.3, 0.2, 0.23, 0.1, 0.21, 0.2, 0.1, 0.2, 0.2, 0.1, 0.7, 1.4];

document.querySelector('audio').addEventListener("play", () => {
    let i = 0;
    overlay.style.opacity = "1";
    function updateText() {
        if (i < phrases.length) {
            textElement.textContent = phrases[i];
            setTimeout(updateText, delays[i] * 1000);
            i++;
        } else {
            setTimeout(() => {
                overlay.style.opacity = "0";
                setTimeout(() => {
                    overlay.style.display = 'none';
                    }, 500); 
            }, 500);
        }
    }
    updateText();
});
