
// js/script.js - Placeholder for animations or interactivity
// Example scroll animation logic
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            document.querySelector(link.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

// README.md - Basic project overview
# Stefan Venter Portfolio Website

This is my virtual CV built with HTML, CSS, and JavaScript.

## Sections
- About Me
- Resume
- Projects
- Skills
- Contact

## Hosting
Live: https://your-username.github.io/portfolio-site

## Technologies
- HTML
- CSS (Vanilla)
- JavaScript
