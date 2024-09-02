const videoData = {
    devinjatho: {
        src: 'djatho.mp4',
        desc: 'After Effects',
        width: 250,
    },
    motivational: {
        src: 'dtrump motivation.mp4',
        desc: 'After Effects',
        width: 250,
    },
    podcast: {
        src: '01.17.2024 k-osz.mp4',
        //src: '12.03.2023 Ghosts are dangerous.mp4',
        desc: 'Premiere Pro',
        width: 250,
    },
    voiceover: {
        src: 'Universe.mp4',
        desc: 'After Effects + Premiere Pro',
        width: 250,
    },
    colorgrading: {
        src: 'patrick b cc.mp4',
        desc: 'After Effects',
        width: 250,
    },
    gameplay: {
        src: '10.04.2023.afk.fix.mp4',
        desc: 'Premiere Pro',
        width: 250,
    },
    funny: {
        src: 'Radek trial.mp4',
        desc: 'Premiere Pro',
        width: 600,
    },
    storytelling: {
        src: '09.10.2023.scam.music.mp4',
        desc: 'Premiere Pro',
        width: 250,
    },
    carramp: {
        src: 'carramp.mp4',
        desc: 'After Effects',
        width: 250,
    },
    ai: {
        src: 'How To Free Your Mind.mp4',
        desc: 'Premiere Pro',
        width: 250,
    },
    sport: {
        src: 'ufc sport.mp4',
        desc: 'Premiere Pro',
        width: 600,
    },
};



document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        const video = videoData[category];

        const videoElement = document.getElementById('portfolioVideo');
        const descriptionElement = document.getElementById('videoDescription');

        videoElement.setAttribute('src', video.src);
        videoElement.setAttribute('width', video.width); // Set the width
        descriptionElement.textContent = video.desc;

        videoElement.play();
    });
});

const videoKeys = Object.keys(videoData);
let currentIndex = 0;

const mainVideo = document.querySelector('.main-video video');
const prevVideo = document.querySelector('.prev-video video');
const nextVideo = document.querySelector('.next-video video');
const videoDescription = document.getElementById('videoDescription');

function updateVideos() {
    const currentVideo = videoData[videoKeys[currentIndex]];
    const prevIndex = (currentIndex - 1 + videoKeys.length) % videoKeys.length;
    const nextIndex = (currentIndex + 1) % videoKeys.length;

    const prevVideoData = videoData[videoKeys[prevIndex]];
    const nextVideoData = videoData[videoKeys[nextIndex]];

    mainVideo.src = currentVideo.src;
    mainVideo.setAttribute('width', currentVideo.width); // Itt állítjuk be a fő videó szélességét.
    videoDescription.textContent = currentVideo.desc;

    prevVideo.src = prevVideoData.src;
    /*prevVideo.setAttribute('width', 150); // Kisebb méretű előző videó
    prevVideo.style.filter = 'blur(4px)';
    prevVideo.style.opacity = '0.6';*/

    nextVideo.src = nextVideoData.src;
    /*nextVideo.setAttribute('width', 150); // Kisebb méretű következő videó
    nextVideo.style.filter = 'blur(4px)';
    nextVideo.style.opacity = '0.6';*/

    // Kiemelés frissítése
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.getAttribute('data-category') === videoKeys[currentIndex]) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + videoKeys.length) % videoKeys.length;
    updateVideos();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % videoKeys.length;
    updateVideos();
});

document.querySelectorAll('.filter-btn').forEach((button) => {
    button.addEventListener('click', () => {
        currentIndex = videoKeys.indexOf(button.getAttribute('data-category'));
        updateVideos();
    });
});

updateVideos(); // Inicializálás

document.addEventListener('DOMContentLoaded', function() {
    ResetVideos();
});

function ResetVideos(){
    // A hidden container for preloading videos
    const preloadContainer = document.createElement('div');
    preloadContainer.style.display = 'none'; // Hide the container
    document.body.appendChild(preloadContainer); // Append to body

    // Iterate over the videoData object
    for (const key in videoData) {
        if (videoData.hasOwnProperty(key)) {
            const video = videoData[key];

            // Create a new video element for preloading
            const preloadVideo = document.createElement('video');
            preloadVideo.src = video.src;
            preloadVideo.preload = 'auto'; // Set preload to 'auto'

            // Append the video element to the hidden container
            preloadContainer.appendChild(preloadVideo);

            // Optional: Add an event listener to confirm preload
            preloadVideo.addEventListener('loadeddata', () => {
                console.log(`Preloaded video: ${preloadVideo.src}`);
            });
        }
    }
}

/*Inspect letiltása*/

document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function(e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C' || e.key === 'J'))) {
        e.preventDefault();
        return false;
    }
};
