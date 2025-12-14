document.addEventListener('DOMContentLoaded', () => {
            const overlay = document.getElementById('overlay');
            const content = document.querySelector('.box');
            const bgMusic = document.getElementById('bg-music');

            overlay.addEventListener('click', () => {
                overlay.style.opacity = '0';
                setTimeout(() => {
                    overlay.style.display = 'none';
                        content.style.display = 'block';
                    bgMusic.play();
                }, 1000);
            })});
