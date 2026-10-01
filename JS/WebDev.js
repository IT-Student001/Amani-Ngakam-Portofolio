const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.querySelector(".nav-links");


/* =========================
   MOBILE NAVIGATION
========================= */

if (menuButton) {

    menuButton.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle(
                "open"
            );

        }
    );

}


if (navLinks) {

    navLinks
        .querySelectorAll("a")
        .forEach((link) => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "open"
                    );

                }
            );

        });

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".hero-content, .section-heading, .project-card, .small-project, .process-item"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =========================
   PROJECT REDIRECTS
========================= */

/*
    Featured project
    → Appeal Client

    WEB / 01
    → Amani Pixel Art

    WEB / 02
    → Appeal Client

    WEB / 03
    → Cancer Website

    WEB / 04
    → Programming Hub
*/


/* FEATURED PROJECT */

const featuredLink =
    document.querySelector(
        ".project-link"
    );


if (featuredLink) {

    featuredLink.addEventListener(
        "click",
        (event) => {

            event.preventDefault();

            window.location.href =
                "../templates/Template.html?project=2";

        }
    );

}


/* OTHER PROJECTS */

const smallProjectLinks =
    document.querySelectorAll(
        ".small-project-info a"
    );


smallProjectLinks.forEach(
    (link, index) => {

        link.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                const projectNumber =
                    index + 1;

                window.location.href =
                    `../templates/Template.html?project=${projectNumber}`;

            }
        );

    }
);
