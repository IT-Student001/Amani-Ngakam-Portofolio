/* =========================================================
   PROJECT TEMPLATE SYSTEM
   Portfolio project data + dynamic Template.html loader
========================================================= */


/* =========================================================
   PROJECT DATA
========================================================= */

const projects = {

    /* =====================================================
       WEB DEVELOPMENT
    ===================================================== */

    "1": {
        number: "01",
        title: "Amani Pixel Art",
        intro: "A browser-based pixel art editor built with HTML, CSS, and JavaScript.",
        image: "../Images/PROJECTS/Amani-Pixel-Art.png",

        details: {
            type: "Web Application",
            technology: "HTML / CSS / JavaScript",
            status: "Completed",
            focus: "Interactive Design"
        },

        description: [
            "Amani Pixel Art is a pixel editor created as a web application.",
            "The project focuses on creating and editing pixel-based artwork directly inside the browser.",
            "It combines interface design with JavaScript functionality to create an interactive editing experience."
        ],

        gallery: [
            "../Images/PROJECTS/Amani-Pixel-Art.png"
        ]
    },


    "2": {
        number: "02",
        title: "Appeal Client",
        intro: "A finance and housing assistant designed to make complex information easier to understand.",
        image: "../Images/PROJECTS/Appeal-Client.png",

        details: {
            type: "Web Application",
            technology: "HTML / CSS / JavaScript",
            status: "In Development",
            focus: "Finance & Housing"
        },

        description: [
            "Appeal Client is a personal finance and housing assistant.",
            "The project is designed around presenting useful information through a simple interface.",
            "The goal is to combine practical tools with a clean and accessible user experience."
        ],

        gallery: [
            "../Images/PROJECTS/Appeal-Client.png"
        ]
    },


    "3": {
        number: "03",
        title: "Cancer Website",
        intro: "An educational website designed to present information in a clear and accessible format.",
        image: "../Images/PROJECTS/Cancer-Website.png",

        details: {
            type: "Educational Website",
            technology: "HTML / CSS",
            status: "Completed",
            focus: "Information Design"
        },

        description: [
            "The Cancer Website is an educational web project focused on presenting information clearly.",
            "The interface was designed to organize information into readable sections.",
            "The project helped develop my skills with page structure, styling, and visual communication."
        ],

        gallery: [
            "../Images/PROJECTS/Cancer-Website.png"
        ]
    },


    "4": {
        number: "04",
        title: "Programming Hub",
        intro: "A programming website designed around resources, examples, and interactive content.",
        image: "../Images/PROJECTS/Programming-Hub.png",

        details: {
            type: "Programming Website",
            technology: "HTML / CSS / JavaScript",
            status: "In Development",
            focus: "Programming Education"
        },

        description: [
            "Programming Hub is a web project focused on programming resources and educational content.",
            "The project explores different ways of organizing programming information inside a website.",
            "JavaScript is used to add functionality and make the experience more interactive."
        ],

        gallery: [
            "../Images/PROJECTS/Programming-Hub.png"
        ]
    },


    /* =====================================================
       SOFTWARE ENGINEERING
    ===================================================== */

    "5": {
        number: "05",
        title: "Ventrix",
        intro: "An educational platform built around structured lessons, learning paths, and interactive software.",
        image: "../Images/PROJECTS/SOFTWAREENGINEERING/VENTRIX/Ventrix1.png",

        details: {
            type: "Educational Platform",
            technology: "Python / JavaScript / AI",
            status: "In Development",
            focus: "Education Technology"
        },

        description: [
            "Ventrix is an educational platform designed around structured lessons and learning paths.",
            "The project combines software development with AI-assisted content creation.",
            "The system is being developed to support different types of learners through organized educational content."
        ],

        gallery: [
            "../Images/PROJECTS/SOFTWAREENGINEERING/VENTRIX/Ventrix1.png",
            "../Images/PROJECTS/SOFTWAREENGINEERING/VENTRIX/Ventrix2.png",
            "../Images/PROJECTS/SOFTWAREENGINEERING/VENTRIX/Ventrix3.png"
        ]
    },


    "6": {
        number: "06",
        title: "Aetherbound",
        intro: "A large-scale MMORPG project focused on systems, mechanics, progression, and world design.",
        image: "../Images/PROJECTS/SOFTWAREENGINEERING/AETHERBOUND/Aetherbound1.png",

        details: {
            type: "MMORPG",
            technology: "Luau / Roblox",
            status: "In Development",
            focus: "Game Systems"
        },

        description: [
            "Aetherbound is a large-scale MMORPG project being developed inside Roblox.",
            "The project focuses on custom gameplay systems, progression, mechanics, and world design.",
            "It combines programming and game development to create a larger interconnected experience."
        ],

        gallery: [
            "../Images/PROJECTS/SOFTWAREENGINEERING/AETHERBOUND/Aetherbound1.png",
            "../Images/PROJECTS/SOFTWAREENGINEERING/AETHERBOUND/Aetherbound2.png",
            "../Images/PROJECTS/SOFTWAREENGINEERING/AETHERBOUND/Aetherbound3.png"
        ]
    },


    "7": {
        number: "07",
        title: "FireFlow",
        intro: "An automation tool built around Python and filesystem operations.",
        image: "../Images/PROJECTS/SOFTWAREENGINEERING/VENTRIX/Ventrix1.png",

        details: {
            type: "Automation Tool",
            technology: "Python / Filesystem",
            status: "In Development",
            focus: "Automation"
        },

        description: [
            "FireFlow is an automation-focused software project.",
            "The project explores how Python can interact with files and automate repetitive operations.",
            "It focuses on turning multiple manual steps into a more efficient software workflow."
        ],

        gallery: [
            "../Images/PROJECTS/SOFTWAREENGINEERING/VENTRIX/Ventrix1.png"
        ]
    },


    "8": {
        number: "08",
        title: "LocalMind",
        intro: "An experimental AI interface built with HTML, CSS, and JavaScript.",
        image: "../Images/PROJECTS/SOFTWAREENGINEERING/LOCALMIND/LocalMind1.png",

        details: {
            type: "AI Experiment",
            technology: "HTML / CSS / JavaScript",
            status: "In Development",
            focus: "Artificial Intelligence"
        },

        description: [
            "LocalMind is an experimental project exploring AI interfaces.",
            "The project focuses on creating a simple interface for interacting with intelligent software.",
            "It also explores how frontend technologies can be combined to create a usable AI application."
        ],

        gallery: [
            "../Images/PROJECTS/SOFTWAREENGINEERING/LOCALMIND/LocalMind1.png",
            "../Images/PROJECTS/SOFTWAREENGINEERING/LOCALMIND/LocalMind2.png"
        ]
    },


    "9": {
        number: "09",
        title: "ChronoOS",
        intro: "An operating-system simulation created to explore interfaces, systems, and logic.",
        image: "../Images/PROJECTS/SOFTWAREENGINEERING/CHRONOOS/Scratch1.png",

        details: {
            type: "OS Simulation",
            technology: "Scratch",
            status: "Completed",
            focus: "Systems Simulation"
        },

        description: [
            "ChronoOS is an operating-system simulation project.",
            "The project explores how operating-system interfaces and systems can be represented through programming logic.",
            "It contains multiple screens and components designed to imitate the structure of an operating system."
        ],

        gallery: [
            "../Images/PROJECTS/SOFTWAREENGINEERING/CHRONOOS/Scratch1.png",
            "../Images/PROJECTS/SOFTWAREENGINEERING/CHRONOOS/Scratch2.png",
            "../Images/PROJECTS/SOFTWAREENGINEERING/CHRONOOS/Scratch3.png",
            "../Images/PROJECTS/SOFTWAREENGINEERING/CHRONOOS/Scratch4.png",
            "../Images/PROJECTS/SOFTWAREENGINEERING/CHRONOOS/Scratch5.png",
            "../Images/PROJECTS/SOFTWAREENGINEERING/CHRONOOS/Scratch6.png",
            "../Images/PROJECTS/SOFTWAREENGINEERING/CHRONOOS/Scratch7.png",
            "../Images/PROJECTS/SOFTWAREENGINEERING/CHRONOOS/Scratch8.png",
            "../Images/PROJECTS/SOFTWAREENGINEERING/CHRONOOS/Scratch9.png",
            "../Images/PROJECTS/SOFTWAREENGINEERING/CHRONOOS/Scratch10.png"
        ]
    },


    "10": {
        number: "10",
        title: "Combat Engine",
        intro: "A Roblox combat system focused on mechanics, interactions, and Luau programming.",
        image: "../Images/PROJECTS/SOFTWAREENGINEERING/AETHERBOUND/Aetherbound1.png",

        details: {
            type: "Game System",
            technology: "Luau / Roblox",
            status: "In Development",
            focus: "Combat Systems"
        },

        description: [
            "Combat Engine is a custom combat system developed for Roblox.",
            "The project focuses on gameplay mechanics, interactions, and responsive systems.",
            "It is designed as a reusable foundation for building combat-based experiences."
        ],

        gallery: [
            "../Images/PROJECTS/SOFTWAREENGINEERING/AETHERBOUND/Aetherbound1.png"
        ]
    },


    "11": {
        number: "11",
        title: "WorldSim",
        intro: "A simulation project exploring systems, interactions, and dynamic web-based logic.",
        image: "../Images/PROJECTS/SOFTWAREENGINEERING/LOCALMIND/LocalMind1.png",

        details: {
            type: "Simulation",
            technology: "HTML / CSS / JavaScript",
            status: "In Development",
            focus: "Simulation Systems"
        },

        description: [
            "WorldSim is a simulation project focused on creating dynamic systems.",
            "The project explores how objects and systems can interact with each other.",
            "JavaScript provides the logic that controls the simulation."
        ],

        gallery: [
            "../Images/PROJECTS/SOFTWAREENGINEERING/LOCALMIND/LocalMind1.png"
        ]
    },


    /* =====================================================
       ROBLOX STUDIO
    ===================================================== */

    "aetherbound": {
        number: "01",
        title: "Aetherbound",
        intro: "A large-scale MMORPG project focused on systems, mechanics, progression, and world design.",
        image: "../Images/PROJECTS/SOFTWAREENGINEERING/AETHERBOUND/Aetherbound1.png",

        details: {
            type: "MMORPG",
            technology: "Luau / Roblox Studio",
            status: "In Development",
            focus: "Game Development"
        },

        description: [
            "Aetherbound is a large-scale MMORPG project being developed inside Roblox.",
            "The project combines world design, gameplay programming, progression systems, and custom mechanics.",
            "The long-term goal is to create a large interconnected experience with its own systems and identity."
        ],

        gallery: [
            "../Images/PROJECTS/SOFTWAREENGINEERING/AETHERBOUND/Aetherbound1.png",
            "../Images/PROJECTS/SOFTWAREENGINEERING/AETHERBOUND/Aetherbound2.png",
            "../Images/PROJECTS/SOFTWAREENGINEERING/AETHERBOUND/Aetherbound3.png"
        ]
    },


    "lostnight": {
        number: "12",
        title: "Lost Night",
        intro: "A Roblox experience focused on atmosphere, gameplay, and environmental design.",
        image: "../Images/PROJECTS/ROBLOXSTUDIO/ROBLOX1.png",

        details: {
            type: "Roblox Experience",
            technology: "Luau / Roblox Studio",
            status: "In Development",
            focus: "Atmosphere & Gameplay"
        },

        description: [
            "Lost Night is a Roblox experience built around atmosphere and gameplay.",
            "The project explores environmental design and the use of Roblox Studio to create an immersive setting.",
            "Luau is used to bring the gameplay systems and interactions together."
        ],

        gallery: [
            "../Images/PROJECTS/ROBLOXSTUDIO/ROBLOX1.png",
            "../Images/PROJECTS/ROBLOXSTUDIO/ROBLOX2.png",
            "../Images/PROJECTS/ROBLOXSTUDIO/ROBLOX3.png",
            "../Images/PROJECTS/ROBLOXSTUDIO/ROBLOX4.png"
        ]
    },


    "claustrophobic": {
        number: "13",
        title: "Claustrophobic",
        intro: "A confined Roblox experience designed around atmosphere and environmental tension.",
        image: "../Images/PROJECTS/ROBLOXSTUDIO/Claustrophobic (1).png",

        details: {
            type: "Roblox Experience",
            technology: "Luau / Roblox Studio",
            status: "In Development",
            focus: "Environment & Atmosphere"
        },

        description: [
            "Claustrophobic is a Roblox experience centered around a confined environment.",
            "The project uses level design and atmosphere to create a distinct gameplay experience.",
            "Roblox Studio and Luau are used together to build the environment and gameplay."
        ],

        gallery: [
            "../Images/PROJECTS/ROBLOXSTUDIO/Claustrophobic (1).png",
            "../Images/PROJECTS/ROBLOXSTUDIO/Claustrophobic (2).png",
            "../Images/PROJECTS/ROBLOXSTUDIO/Claustrophobic (3).png"
        ]
    },


    "aliminal": {
        number: "14",
        title: "Aliminalend",
        intro: "A Roblox experience exploring unusual environments and experimental gameplay.",
        image: "../Images/PROJECTS/ROBLOXSTUDIO/ALiminalEnd.png",

        details: {
            type: "Roblox Experience",
            technology: "Luau / Roblox Studio",
            status: "In Development",
            focus: "Experimental Design"
        },

        description: [
            "Aliminalend is an experimental Roblox experience.",
            "The project explores unusual environments, gameplay concepts, and visual ideas.",
            "It is part of my experimentation with Roblox Studio and Luau."
        ],

        gallery: [
            "../Images/PROJECTS/ROBLOXSTUDIO/ALiminalEnd.png"
        ]
    },


    "forgottenwastelands": {
        number: "15",
        title: "Forgotten Wastelands",
        intro: "A Roblox project focused on exploration, environments, and world-building.",
        image: "../Images/PROJECTS/ROBLOXSTUDIO/ForgottenWastelands (1).png",

        details: {
            type: "Roblox Experience",
            technology: "Luau / Roblox Studio",
            status: "In Development",
            focus: "World Building"
        },

        description: [
            "Forgotten Wastelands is a Roblox world-building project.",
            "The project focuses on creating environments designed around exploration.",
            "Roblox Studio is used for the world while Luau provides the gameplay functionality."
        ],

        gallery: [
            "../Images/PROJECTS/ROBLOXSTUDIO/ForgottenWastelands (1).png",
            "../Images/PROJECTS/ROBLOXSTUDIO/ForgottenWastelands (2).png",
            "../Images/PROJECTS/ROBLOXSTUDIO/ForgottenWastelands (3).png",
            "../Images/PROJECTS/ROBLOXSTUDIO/ForgottenWastelands (4).png"
        ]
    },


    "reshined": {
        number: "16",
        title: "Reshined",
        intro: "A Roblox project focused on visual design, environments, and experimental gameplay.",
        image: "../Images/PROJECTS/ROBLOXSTUDIO/Reshined (1).png",

        details: {
            type: "Roblox Experience",
            technology: "Luau / Roblox Studio",
            status: "In Development",
            focus: "Visual & Gameplay Design"
        },

        description: [
            "Reshined is a Roblox project focused on experimentation with environments and gameplay.",
            "The project explores visual presentation and world design inside Roblox Studio.",
            "Luau is used to support the interactive systems behind the experience."
        ],

        gallery: [
            "../Images/PROJECTS/ROBLOXSTUDIO/Reshined (1).png",
            "../Images/PROJECTS/ROBLOXSTUDIO/Reshined (2).png"
        ]
    },


    "gunsystem": {
        number: "17",
        title: "Gun System",
        intro: "A Roblox weapon system focused on responsive mechanics, interactions, and gameplay programming.",
        image: "../Images/PROJECTS/ROBLOXSTUDIO/GunSystem.png",

        details: {
            type: "Game System",
            technology: "Luau / Roblox Studio",
            status: "In Development",
            focus: "Gameplay Systems"
        },

        description: [
            "Gun System is a custom Roblox gameplay system focused on weapon mechanics.",
            "The project explores responsive interactions and reusable gameplay functionality.",
            "Luau is used to control the underlying systems and player interactions."
        ],

        gallery: [
            "../Images/PROJECTS/ROBLOXSTUDIO/GunSystem.png",
            "../Images/PROJECTS/ROBLOXSTUDIO/GunSystem (2).png"
        ]
    },


    "randombuild": {
        number: "18",
        title: "Random Build",
        intro: "An experimental Roblox build exploring environment design and rapid development.",
        image: "../Images/PROJECTS/ROBLOXSTUDIO/RandomAhhBuild.png",

        details: {
            type: "Roblox Build",
            technology: "Roblox Studio",
            status: "Completed",
            focus: "Environment Design"
        },

        description: [
            "Random Build is an experimental Roblox Studio project.",
            "The project focuses on experimenting with environments, construction, and visual ideas.",
            "It represents rapid experimentation and development inside Roblox Studio."
        ],

        gallery: [
            "../Images/PROJECTS/ROBLOXSTUDIO/RandomAhhBuild.png"
        ]
    },


    /* =====================================================
       ADOBE / CREATIVE WORK
    ===================================================== */

    "adobe-video": {
        number: "19",
        title: "Adobe Video Production",
        intro: "A visual production focused on editing, pacing, sound, and motion design.",
        image: "../Images/Adobe (1).png",
        details: {
            type: "Video Production",
            technology: "Adobe Premiere Pro / After Effects",
            status: "Completed",
            focus: "Editing & Motion"
        },
        description: [
            "This project explores video editing and visual storytelling using Adobe tools.",
            "The workflow combines sequencing, pacing, transitions, sound, and motion design.",
            "It represents the creative side of my portfolio and my interest in multimedia production."
        ],
        gallery: ["../Images/Adobe (1).png"]
    },

    "adobe-design": {
        number: "20",
        title: "Adobe Graphic Design",
        intro: "A graphic design project focused on composition, branding, and visual communication.",
        image: "../Images/Adobe (2).png",
        details: {
            type: "Graphic Design",
            technology: "Adobe Photoshop / Illustrator",
            status: "Completed",
            focus: "Visual Design"
        },
        description: [
            "This project focuses on creating clear and intentional visual compositions.",
            "It explores branding, layout, typography, and the development of reusable design assets.",
            "The work combines creative direction with the same attention to detail used in my software projects."
        ],
        gallery: ["../Images/Adobe (2).png"]
    },

    "adobe-motion": {
        number: "21",
        title: "Adobe Motion Design",
        intro: "A motion graphics project built around animation, timing, and visual effects.",
        image: "../Images/Adobe (3).png",
        details: {
            type: "Motion Graphics",
            technology: "Adobe After Effects",
            status: "In Development",
            focus: "Animation & Effects"
        },
        description: [
            "This project explores animation and motion graphics as a way to communicate ideas.",
            "It focuses on timing, transitions, compositing, and visual effects.",
            "The project is an ongoing space for experimenting with movement and cinematic presentation."
        ],
        gallery: ["../Images/Adobe (3).png"]
    }

};


/* =========================================================
   GET PROJECT FROM URL
========================================================= */

const params = new URLSearchParams(window.location.search);
const projectID = params.get("project");
const project = projects[projectID];


/* =========================================================
   HELPER FUNCTIONS
========================================================= */

function setText(selector, value) {

    const element = document.querySelector(selector);

    if (element && value !== undefined) {
        element.textContent = value;
    }

}


function setHTML(selector, value) {

    const element = document.querySelector(selector);

    if (element && value !== undefined) {
        element.innerHTML = value;
    }

}


/* =========================================================
   PROJECT NOT FOUND
========================================================= */

function showProjectError() {

    document.title = "Project Not Found | Amani Portfolio";

    document.body.insertAdjacentHTML(
        "beforeend",
        `
        <section class="project-error">

            <div class="project-error-content">

                <span>404</span>

                <h1>Project not found.</h1>

                <p>
                    The project you are looking for does not exist
                    or the project ID is incorrect.
                </p>

                <a href="../HTML/index.html">
                    Return Home
                </a>

            </div>

        </section>
        `
    );

}


/* =========================================================
   LOAD PROJECT
========================================================= */

function loadProject(project) {

    document.title =
        `${project.title} | Amani Portfolio`;


    /* =====================================================
       HERO
    ===================================================== */

    setText(
        ".project-number",
        `PROJECT ${project.number}`
    );


    setHTML(
        ".project-hero-content h1",
        project.title
    );


    setText(
        ".project-intro",
        project.intro
    );


    /* =====================================================
       MAIN IMAGE
    ===================================================== */

    const previewImage =
        document.querySelector(".preview-image img");


    if (previewImage) {

        previewImage.src =
            project.image;

        previewImage.alt =
            `${project.title} preview`;

    }


    /* =====================================================
       PROJECT DESCRIPTION
    ===================================================== */

    const descriptionParagraphs =
        document.querySelectorAll(".project-text p");


    descriptionParagraphs.forEach(
        (paragraph, index) => {

            if (project.description[index]) {

                paragraph.textContent =
                    project.description[index];

            }

        }
    );


    /* =====================================================
       PROJECT DETAILS
    ===================================================== */

    const detailCards =
        document.querySelectorAll(".detail-card");


    const detailValues = [

        project.details.type,

        project.details.technology,

        project.details.status,

        project.details.focus

    ];


    detailCards.forEach(
        (card, index) => {

            const heading =
                card.querySelector("h3");


            if (heading && detailValues[index]) {

                heading.textContent =
                    detailValues[index];

            }

        }
    );


    /* =====================================================
       GALLERY
    ===================================================== */

    const gallerySection =
        document.querySelector("#projectGallery");

    const galleryGrid =
        document.querySelector("#galleryGrid");


    if (gallerySection && galleryGrid) {

        galleryGrid.innerHTML = "";


        if (
            Array.isArray(project.gallery) &&
            project.gallery.length > 0
        ) {

            project.gallery.forEach(
                (image, index) => {

                    const item =
                        document.createElement("div");

                    item.className =
                        "gallery-item";


                    const img =
                        document.createElement("img");

                    img.src =
                        image;

                    img.alt =
                        `${project.title} screenshot ${index + 1}`;

                    img.loading =
                        "lazy";


                    item.appendChild(img);

                    galleryGrid.appendChild(item);

                }
            );
            //My template reaction


            gallerySection.style.display =
                "";

        } else {

            gallerySection.style.display =
                "none";

        }

    }


    /* =====================================================
       VIDEO
    ===================================================== */

    const videoSection =
        document.querySelector("#projectVideo");

    const videoPlayer =
        document.querySelector("#projectVideoPlayer");


    if (videoSection && videoPlayer) {

        if (project.video) {

            videoPlayer.src =
                project.video;

            videoSection.style.display =
                "";

        } else {

            videoPlayer.removeAttribute("src");

            videoPlayer.load();

            videoSection.style.display =
                "none";

        }

    }


    /* =====================================================
       CTA
    ===================================================== */

    const projectButton =
        document.querySelector(".project-button");


    if (projectButton) {

        projectButton.href =
            "../HTML/index.html";

        projectButton.innerHTML =
            `
            Back to Portfolio
            <span>↗</span>
            `;

    }

}


/* =========================================================
   START
========================================================= */

if (project) {

    loadProject(project);

} else {

    showProjectError();

}
