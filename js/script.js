/*=========================================
        MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/*=========================================
        DARK MODE
=========================================*/

const themeToggle = document.querySelector(".theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        themeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

});

/*=========================================
        SCROLL TOP
=========================================*/

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

/*=========================================
        ACTIVE NAVBAR
=========================================*/

const sections = document.querySelectorAll("section");
const nav = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    nav.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*=========================================
        PROJECT MODAL
=========================================*/

const modal = document.getElementById("projectModal");

const modalTitle = document.getElementById("modalTitle");

const modalDescription = document.getElementById("modalDescription");

const close = document.querySelector(".close");

const buttons = document.querySelectorAll(".project-btn");

buttons.forEach(btn => {

    btn.addEventListener("click", () => {

        const project = btn.dataset.project;

        modal.style.display = "flex";

        if (project === "techmart") {

            modalTitle.innerHTML = "TechMart Enterprise";

            modalDescription.innerHTML =
                "Enterprise Web Application developed using Jakarta EE, JSP, Servlets, EJB, MySQL and Bootstrap.";

        }

        if (project === "burger") {

            modalTitle.innerHTML = "Burger Shop System";

            modalDescription.innerHTML =
                "Java Swing Desktop Application with CRUD Operations and Object-Oriented Programming.";

        }

        if (project === "portfolio") {

            modalTitle.innerHTML = "Responsive Portfolio";

            modalDescription.innerHTML =
                "Modern responsive portfolio developed using HTML, CSS and JavaScript with GitHub API.";

        }

    });

});

close.onclick = () => {

    modal.style.display = "none";

}

window.onclick = (e) => {

    if (e.target == modal) {

        modal.style.display = "none";

    }

}