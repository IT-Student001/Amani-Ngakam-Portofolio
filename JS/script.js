/* =========================================================
   01. HERO SLIDER CONFIGURATION
========================================================= */

const SLIDER_CONFIG = {

    /* =========================
       GENERAL
    ========================= */

    autoSlide: true,

    slideDuration: 7500,

    fadeDuration: 350,

    startSlide: 0,

    loopSlides: true,


    /* =========================
       BUTTONS
    ========================= */

    primaryButtonText: "See More",

    secondaryButtonText: "About Me",

    secondaryButtonLink: "#about",


    /* =========================
       SLIDE DATA
    ========================= */

    slides: [

        {
            image: "../Images/BACKGROUND/RobloxStudio.png",

            title: "Roblox Studio",

            description:
                "Creating games and interactive experiences with Luau, gameplay systems, environments, mechanics, and years of experimentation.",

            number: "01",

            link: "RobloxStudio.html",

            alt: "Roblox Studio"
        },


        {
            image: "../Images/BACKGROUND/Web Development.png",

            title: "Web Development",

            description:
                "Designing and developing modern websites with responsive layouts, interactive experiences, clean architecture, and attention to detail.",

            number: "02",

            link: "WebDev.html",

            alt: "Web Development"
        },


        {
            image: "../Images/BACKGROUND/Software Engineering and Development.png",

            title: "Software Engineering",

            description:
                "Building software systems with structured architecture, programming logic, automation, algorithms, and scalable solutions.",

            number: "03",

            link: "SoftwareEngineering.html",

            alt: "Software Engineering"
        },


        {
            image: "../Images/BACKGROUND/Adobe.png",

            title: "Adobe",

            description:
                "Creating polished digital work through visual design, editing, motion, graphics, and creative technology.",

            number: "04",

            link: "Adobe.html",

            alt: "Adobe",



        }

    ],


    /* =========================
       ANIMATION
    ========================= */

    animation: {

        resetTextAnimation: true,

        fadeImage: true,

        fadeText: true,

        resetCSSAnimation: true

    },


    /* =========================
       DOTS
    ========================= */

    dots: {

        enabled: true,

        updateActiveDot: true,

        useDataSlide: true

    },


    /* =========================
       MOBILE NAVIGATION
    ========================= */

    mobileNavigation: {

        enabled: true,

        openClass: "open",

        closeAfterClick: true

    }

};


/* =========================================================
   02. DOM ELEMENTS
========================================================= */

const heroImage =
    document.getElementById("heroImage");

const heroTitle =
    document.getElementById("heroTitle");

const heroDescription =
    document.getElementById("heroDescription");

const heroNumber =
    document.getElementById("heroNumber");


const heroPrimaryButton =
    document.getElementById("heroPrimaryButton");

const heroSecondaryButton =
    document.getElementById("heroSecondaryButton");


const dots =
    document.querySelectorAll(".slider-dot");


const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.getElementById("navLinks");


/* =========================================================
   03. SLIDER STATE
========================================================= */

let currentSlide =
    SLIDER_CONFIG.startSlide;

let slideTimer;


/* =========================================================
   04. TEXT ANIMATION RESET
========================================================= */

function resetTextAnimation() {

    if (!SLIDER_CONFIG.animation.resetTextAnimation) {
        return;
    }


    const elements = [

        heroNumber,

        heroTitle,

        heroDescription,

        heroPrimaryButton,

        heroSecondaryButton

    ];


    elements.forEach(element => {

        if (!element) {
            return;
        }


        element.style.animation = "none";

        void element.offsetWidth;

        element.style.animation = "";

    });

}


/* =========================================================
   05. CHANGE SLIDE
========================================================= */

function changeSlide(index) {

    if (!SLIDER_CONFIG.slides[index]) {
        return;
    }


    if (index === currentSlide) {

        resetSlideTimer();

        return;

    }


    currentSlide = index;


    const slide =
        SLIDER_CONFIG.slides[index];


    /* =========================
       FADE OUT
    ========================= */

    if (SLIDER_CONFIG.animation.fadeImage) {

        heroImage.style.opacity = "0";

    }


    if (SLIDER_CONFIG.animation.fadeText) {

        heroNumber.style.opacity = "0";

        heroTitle.style.opacity = "0";

        heroDescription.style.opacity = "0";

        heroPrimaryButton.style.opacity = "0";

        heroSecondaryButton.style.opacity = "0";

    }


    /* =========================
       UPDATE CONTENT
    ========================= */

    setTimeout(() => {


        /* IMAGE */

        heroImage.src =
            slide.image;

        heroImage.alt =
            slide.alt || slide.title;


        /* NUMBER */

        heroNumber.textContent =
            slide.number;


        /* TITLE */

        heroTitle.textContent =
            slide.title;


        /* DESCRIPTION */

        heroDescription.textContent =
            slide.description;


        /* PRIMARY BUTTON */

        heroPrimaryButton.textContent =
            SLIDER_CONFIG.primaryButtonText;

        heroPrimaryButton.href =
            slide.link;


        /* SECONDARY BUTTON */

        heroSecondaryButton.textContent =
            SLIDER_CONFIG.secondaryButtonText;

        heroSecondaryButton.href =
            SLIDER_CONFIG.secondaryButtonLink;


        /* =========================
           UPDATE DOTS
        ========================= */

        if (
            SLIDER_CONFIG.dots.enabled &&
            SLIDER_CONFIG.dots.updateActiveDot
        ) {

            dots.forEach(dot => {

                dot.classList.remove("active");

            });


            if (dots[index]) {

                dots[index].classList.add("active");

            }

        }


        /* =========================
           RESET ANIMATION
        ========================= */

        resetTextAnimation();


        /* =========================
           FADE BACK IN
        ========================= */

        if (SLIDER_CONFIG.animation.fadeImage) {

            heroImage.style.opacity = "";

        }


        if (SLIDER_CONFIG.animation.fadeText) {

            heroNumber.style.opacity = "";

            heroTitle.style.opacity = "";

            heroDescription.style.opacity = "";

            heroPrimaryButton.style.opacity = "";

            heroSecondaryButton.style.opacity = "";

        }


    }, SLIDER_CONFIG.fadeDuration);


    resetSlideTimer();

}


/* =========================================================
   06. NEXT SLIDE
========================================================= */

function nextSlide() {

    let nextIndex =
        currentSlide + 1;


    if (
        nextIndex >=
        SLIDER_CONFIG.slides.length
    ) {

        if (SLIDER_CONFIG.loopSlides) {

            nextIndex = 0;

        } else {

            return;

        }

    }


    changeSlide(nextIndex);

}


/* =========================================================
   07. AUTO SLIDE
========================================================= */

function startSlideTimer() {

    if (!SLIDER_CONFIG.autoSlide) {
        return;
    }


    slideTimer = setInterval(() => {

        nextSlide();

    }, SLIDER_CONFIG.slideDuration);

}


/* =========================================================
   08. RESET SLIDE TIMER
========================================================= */

function resetSlideTimer() {

    if (!SLIDER_CONFIG.autoSlide) {
        return;
    }


    clearInterval(slideTimer);

    startSlideTimer();

}


/* =========================================================
   09. DOT CONTROLS
========================================================= */

if (SLIDER_CONFIG.dots.enabled) {

    dots.forEach(dot => {

        dot.addEventListener("click", () => {


            const index =
                Number(dot.dataset.slide);


            if (
                Number.isNaN(index) ||
                !SLIDER_CONFIG.slides[index]
            ) {

                return;

            }


            changeSlide(index);

        });

    });

}


/* =========================================================
   10. MOBILE NAVIGATION
========================================================= */

if (
    SLIDER_CONFIG.mobileNavigation.enabled &&
    menuButton &&
    navLinks
) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle(
            SLIDER_CONFIG.mobileNavigation.openClass
        );

    });


    navLinks
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener("click", () => {

                if (
                    SLIDER_CONFIG
                        .mobileNavigation
                        .closeAfterClick
                ) {

                    navLinks.classList.remove(
                        SLIDER_CONFIG
                            .mobileNavigation
                            .openClass
                    );

                }

            });

        });

}


/* =========================================================
   11. INITIALIZE
========================================================= */

function initializeSlider() {

    const firstSlide =
        SLIDER_CONFIG.slides[
            SLIDER_CONFIG.startSlide
        ];


    if (!firstSlide) {
        return;
    }


    heroImage.src =
        firstSlide.image;

    heroImage.alt =
        firstSlide.alt || firstSlide.title;

    heroNumber.textContent =
        firstSlide.number;

    heroTitle.textContent =
        firstSlide.title;

    heroDescription.textContent =
        firstSlide.description;

    heroPrimaryButton.textContent =
        SLIDER_CONFIG.primaryButtonText;

    heroPrimaryButton.href =
        firstSlide.link;

    heroSecondaryButton.textContent =
        SLIDER_CONFIG.secondaryButtonText;

    heroSecondaryButton.href =
        SLIDER_CONFIG.secondaryButtonLink;


    dots.forEach(dot => {

        dot.classList.remove("active");

    });


    if (dots[SLIDER_CONFIG.startSlide]) {

        dots[SLIDER_CONFIG.startSlide]
            .classList.add("active");

    }


    startSlideTimer();

}


/* =========================================================
   12. START
========================================================= */

initializeSlider();
