document.addEventListener("DOMContentLoaded", () => {
  const navLinksForScroll = document.querySelectorAll("nav a[href^='#']");
  navLinksForScroll.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  const projects = [
    {
      title: "Integrated Prescription System",
      description: `A conceptual project for a system to streamline communication between doctors and pharmacies. The goal is to manage electronic prescriptions, reducing errors and improving efficiency in patient care.`,
      repoUrl: "https://github.com/stefaans101/prescription-system-project"
    },
    {
      title: "Relational Database Design",
      description: `Designed and implemented a normalized relational database using SQL. This project involved creating ERDs and writing complex queries to manage data for a fictional business, honing my skills in data integrity and logical schema design.`,
      repoUrl: "https://github.com/stefaans101/database-design-project"
    },
    {
        title: "This Portfolio Website",
        description: "My personal virtual CV, built from scratch using HTML, CSS, and vanilla JavaScript. It is fully responsive and hosted on GitHub Pages to showcase my skills and projects.",
        repoUrl: "https://github.com/stefaans101/virtual-cv"
    }
  ];

  const projectList = document.getElementById('project-list');
  
  if (projectList) {
    projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      
      const formattedDescription = project.description.replace(/\n/g, '<br />');

      projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${formattedDescription}</p>
        <a href="${project.repoUrl}" target="_blank">View on GitHub</a>
      `;
      projectList.appendChild(projectCard);
    });
  }

  const sections = document.querySelectorAll("main section[id]");
  const navLinksForActiveState = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 75) {
        current = section.getAttribute("id");
      }
    });

    navLinksForActiveState.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === '#' + current) {
        link.classList.add("active");
      }
    });
  });
});