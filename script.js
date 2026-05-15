document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // GREETING
  // =========================
  const greeting = document.getElementById("greeting");
  const hour = new Date().getHours();

  if (hour < 12) {
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    greeting.textContent = "Good Afternoon";
  } else {
    greeting.textContent = "Good Evening";
  }

  // =========================
  // SEARCH BAR
  // =========================
  const search = document.querySelector('.search');

  if (search) {
    search.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        alert('Search feature can be added later!');
      }
    });
  }

  // =========================
  // LOAD JSON PROJECTS
  // =========================
  fetch("projects.json")
    .then(res => res.json())
    .then(data => {

      const container = document.getElementById("project-container");

      data.forEach(project => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
          <img src="${project.image}">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank">View Project</a>
        `;

        container.appendChild(card);

      });

      // run animation AFTER cards exist
      observeCards();

    })
    .catch(err => console.error("JSON load error:", err));

  // =========================
  // SCROLL ANIMATION (FIXED)
  // =========================
  function observeCards() {
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.2
    });

    cards.forEach(card => observer.observe(card));
  }

});