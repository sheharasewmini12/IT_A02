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

/*=========================================
        GITHUB API
=========================================*/

const repoContainer = document.getElementById("repo-container");

fetch("https://api.github.com/users/sheharasewmini12/repos?sort=updated")
.then(response => response.json())
.then(repos => {

    repoContainer.innerHTML = "";

    repos.slice(0,6).forEach(repo => {

        repoContainer.innerHTML += `

        <div class="skill-card">

            <h3>${repo.name}</h3>

            <p>${repo.description || "No description available."}</p>

            <p>⭐ ${repo.stargazers_count}</p>

            <a href="${repo.html_url}"
               target="_blank"
               class="btn">

                View Repository

            </a>

        </div>

        `;

    });

})
.catch(() => {

    repoContainer.innerHTML =
    "<p>Unable to load GitHub repositories.</p>";

});

/*=========================================
        CONTACT FORM
=========================================*/

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    contactForm.reset();

});

/*=========================================
        SCROLL REVEAL
=========================================*/

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{threshold:.2});

document.querySelectorAll("section").forEach(section=>{

    observer.observe(section);

});

/*=========================================
        TYPING EFFECT
=========================================*/

const subtitle = document.querySelector(".hero-content h2");

const words = [

    "Software Engineering Student",

    "Java Developer",

    "Web Developer",

    "Frontend Designer"

];

let wordIndex = 0;

function typingEffect(){

    subtitle.textContent = words[wordIndex];

    wordIndex++;

    if(wordIndex >= words.length){

        wordIndex = 0;

    }

}

setInterval(typingEffect,2500);

/*=========================================
        LOADING COMPLETE
=========================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});