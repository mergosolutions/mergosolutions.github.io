let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

let langs = document.querySelector(".language");

let defaultLanguage = navigator.language.toUpperCase();
if(defaultLanguage != "HU" && defaultLanguage != "EN")
    defaultLanguage = "EN";

let typed = new Typed(".multiple-text", {
    strings: ["", "", ""],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

langs.addEventListener("click", () =>{
    console.log(langs.getAttribute("class"));
    if(langs.textContent == "HU"){
        langs.textContent = "EN";
    }
    else {
        langs.textContent = "HU";
    }

    setLanguage(langs.textContent);
})

const langData = {
    HU: {
        mlHome: "Kezdőlap",
        mlAbout: "Csapatunkról",
        mlAboutDesc: "Hosszú ideje rövid formátumú videók szerkesztésével foglalkozunk. Ez idő alatt számos technikát elsajátítottunk melyek segítségével garantáljuk a szocális médián való terjeszkedést. Több klienssel is dolgoztunk illetve dolgozunk pályafutásunk alatt, melyek referenciája megtekinthető a Referencia szekcióban.",
        mlRating: "Árak",
        mlPortfolio: "Referencia",
        mlContact: "Kapcsolat",
        mlWelcome: "Üdvözlünk, mi vagyunk a",
        mlName: "Mergo Solutions",
        mlShortIntro: "A programozáshoz való szenvedélyem miatt sok programnyelvet ismertem meg és sajátítottam el, valamint fogok is. Többek között a HTML, CSS, SQL és Javascript nyelvek, valamint az AMXX Pawn scriptnyelv áll hozzám a legközelebb.",
        mlDesc1: "És Én Egy",
        mlProf1: "Rövid videók",
        mlProf2: "Hosszú videók",
        mlProf3: "Videóvágók",
        mlTitleProf1: "Web Fejlesztés",
        mlTitleProf2: "CS 1.6 Fejlesztés",
        mlTitleProf3: "Videóvágás",
        mlDescProf1: "Első referencia munkám az általad látott weboldal. Javascript, HTML és CSS használatával sok kreatív munkát lehet létrehozni, és akár Te is igényelhetsz ilyet.",
        mlDescProf2: "Főbb referenciáim OnlyD2, Sniper és Zombi szerverek. Bonyolult, komplex, optimalizált pluginok, A* útvonalkeresés, NPC rendszer.",
        mlDescProf3: "Munkánkat 24 órán belüli határidóvel teljesítjük. A gyors kézbesítés mellett a precíz videó gyártása sem hanyagolt.",
        mlReference: "Referencia",
        mlRating2: "Árak",
        mlAbout2: "Csapatunkról",
        mlContact2: "Kapcsolat",
        mlFullName: "Teljes név",
        mlMobileNumber: "Telefonszám",
        mlSubject: "Tárgy",
        mlMessage: "Üzenet",
        mlDevinJatho: "Devin Jatho",
        mlMotivational: "Motiváció",
        mlPodcast: "Podcast",
        mlVoiceover: "Hangfelvétel",
        mlGameplay: "Játék",
        mlFunny: "Vicces",
        mlStoryTelling: "Történetmesélés",
        mlCarRamp: "Car ramp",
        mlColorGrading: "Színkorrekció",
        mlAI: "MI",
        mlSport: "Sport",

        mlCardservice1: "Alap csomag",
        mlCarddesc1: [
            "Havonta 20 videó",
            "24 órán belüli munka",
            "25-50 másodperc",
            "Közepes minőség"
        ],
        mlCardprice1: "3500 Ft / Perc",

        mlCardservice2: "Haladó csomag",
        mlCarddesc2: [
            "Havonta 30+ videó",
            "24 órán belüli munka",
            "25-60 másodperc",
            "Közepes minőség",
        ],
        mlCardprice2: "4000 Ft / Perc",

        mlCardservice3: "Profi csomag",
        mlCarddesc3: [
            "Havonta 30+ videó",
            "24 órán belüli munka",
            "25-60 másodperc",
            "Magas minőség",
        ],
        mlCardprice3: "6000 Ft / Perc",
    },

    EN: {
        mlHome: "Home",
        mlAbout: "About Our Team",
        mlAboutDesc: "For a long time, we have been engaged in the editing of short-format videos. During this period, we have mastered numerous techniques that ensure guaranteed expansion on social media. We have worked and are currently working with several clients throughout our career, and their references can be viewed in the References section.",
        mlRating: "Rating",
        mlPortfolio: "Reference",
        mlContact: "Contact",
        mlWelcome: "Welcome, we are the",
        mlName: "Mergo Solutions",
        mlShortIntro: "Due to my obsession with programming, I have mastered many languages and will continue to do so. Among others, mostly the HTML, CSS, SQL and Javascript languages, and the AMXX Pawn script language stands the closest to myself.",
        mlDesc1: "And I'm a",
        mlProf1: "Short Videos",
        mlProf2: "Long Videos",
        mlProf3: "Video Editors",
        mlTitleProf1: "Web Development",
        mlTitleProf2: "CS 1.6 Development",
        mlTitleProf3: "Video Editing",
        mlDescProf1: "The first reference here is the portfolio itself. I created it with the languages HTML, CSS, and Javascript. If you wish to, I can create your own.",
        mlDescProf2: "My main references are OnlyD2, Sniper, and Zombi servers. Hard, complex, optimized plugins. A* pathfinding, NPC system.",
        mlDescProf3: "We complete our work within a 24-hour deadline. In addition to swift delivery, we also prioritize precise video production.",
        mlReference: "Reference",
        mlRating2: "Rating",
        mlAbout2: "About Our Team",
        mlContact2: "Contact",
        mlFullName: "Full Name",
        mlMobileNumber: "Mobile Number",
        mlSubject: "Subject",
        mlMessage: "Message",
        mlDevinJatho: "Devin Jatho",
        mlMotivational: "Motivational",
        mlPodcast: "Podcast",
        mlVoiceover: "Voiceover",
        mlGameplay: "Gameplay",
        mlFunny: "Funny",
        mlStoryTelling: "Storytelling",
        mlCarRamp: "Car Ramp",
        mlColorGrading: "Color Grading",
        mlAI: "AI",
        mlSport: "Sport"
    }
    
    
}

setLanguage(defaultLanguage);

function initializeTyped(stringsArray) {
    if (typed) {
        typed.destroy(); // Destroy the existing instance before creating a new one
    }

    typed = new Typed(".multiple-text", {
        strings: stringsArray,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
}

function setLanguage(language){
    console.log(language);
    const languageData = langData[language];

    // Initialize the Typed.js instance with the new strings
    initializeTyped([languageData["mlProf3"], languageData["mlProf1"], languageData["mlProf2"]]);

    for (const key in languageData) {
        if (languageData.hasOwnProperty(key)) {
            const value = languageData[key];
            //console.log(`Language: ${language}, Key: ${key}, Value: ${value}`);

            if(document.getElementById(key)){
                document.getElementById(key).textContent = value;
            }
            // You can perform further operations with the language, key, and value here
        }
    }
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () =>{
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active")
            })
        }
    })

    
    let header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 100);

    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
}

ScrollReveal({
    //reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal(".home-content, .heading", {origin: "top"});
ScrollReveal().reveal(".home-img, .Rating-container, .portfolio-box, .contact form", {origin: "bottom"});
ScrollReveal().reveal(".home-content h1, .about-img", {origin: "left"});
ScrollReveal().reveal(".home-content p, .about-content", {origin: "right"});

const savedData = localStorage.getItem('userData');
console.log(savedData);
//
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
        src: '12.03.2023 Ghosts are dangerous.mp4',
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

const card = document.querySelector('.card');
const cardInner = document.querySelector('.card-content');

card.addEventListener('mousemove', (event) => {
    const cardRect = card.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const rotateX = ((mouseY - cardCenterY) / cardRect.height) * 15;
    const rotateY = ((mouseX - cardCenterX) / cardRect.width) * -15;

    cardInner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener('mouseleave', () => {
    cardInner.style.transform = 'rotateX(0deg) rotateY(0deg)';
});