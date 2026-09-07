/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

});

/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

/* ==========================================
   ACTIVE NAV LINK
========================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 140;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ==========================================
   DARK MODE
========================================== */

const themeBtn = document.getElementById("theme-btn");

const body = document.body;

const icon = themeBtn.querySelector("i");

// Load Theme

if(localStorage.getItem("theme") === "dark"){

    body.classList.add("dark");

    icon.className = "fa-solid fa-sun";

}

// Toggle Theme

themeBtn.addEventListener("click",()=>{

    body.classList.toggle("dark");

    if(body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        icon.className="fa-solid fa-sun";

    }else{

        localStorage.setItem("theme","light");

        icon.className="fa-solid fa-moon";

    }

});

/* ==========================================
   HAMBURGER MENU
========================================== */

const hamburger = document.querySelector(".hamburger");

const menu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{

    menu.classList.toggle("active");

});

/* ==========================================
   CLOSE MENU WHEN CLICK
========================================== */

document.querySelectorAll(".nav-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        menu.classList.remove("active");

    });

});

/* ==========================================
   TYPING EFFECT
========================================== */

const typing = document.getElementById("typing");

const words = [

    "Web Developer",

    "Cyber Security Enthusiast",

    "Future DevSecOps Engineer",

    "Robotics Enthusiast"


];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent = currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }else{

        typing.textContent = currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 45 : 90);

}

typeEffect();

/* ==========================================
   SCROLL REVEAL
========================================== */

const reveals = document.querySelectorAll(".section");

function reveal(){

    const windowHeight = window.innerHeight;

    reveals.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < windowHeight - 120){

            item.classList.add("active");

        }

    });

}

reveals.forEach(item=>{

    item.classList.add("reveal");

});

window.addEventListener("scroll",reveal);

reveal();

/* ==========================================
   BACK TO TOP
========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ==========================================
   PARALLAX HERO
========================================== */

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("mousemove",(e)=>{

    const x=(window.innerWidth/2-e.pageX)/45;

    const y=(window.innerHeight/2-e.pageY)/45;

    heroImage.style.transform=

    `translate(${x}px,${y}px)`;

});

/* ==========================================
   PROJECT CARD HOVER
========================================== */

document.querySelectorAll(".project-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.background=

        `radial-gradient(circle at ${x}px ${y}px,
        rgba(37,99,235,.12),
        var(--surface) 60%)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="var(--surface)";

    });

});

/* ==========================================
   SKILL CARD FLOAT
========================================== */

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0)";

    });

});

/* ==========================================
   CONSOLE MESSAGE 😎
========================================== */

console.log("%cWelcome Developer 👋",

"font-size:22px;color:#2563eb;font-weight:bold");

console.log("%cPortfolio by Sandya Azri",

"font-size:15px;color:#888;");