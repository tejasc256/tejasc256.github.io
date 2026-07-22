document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.getElementById("timeline");
  if (timeline) {
    (window.experienceData || []).forEach((item) => {
      const el = document.createElement("div");
      el.className = "timeline-item";
      el.innerHTML = `
        <span class="timeline-date">${item.date}</span>
        <div class="timeline-content">
          <h3>${item.title}</h3>
          <span class="role">${item.role}</span>
          <ul>${item.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
          <div class="tags">${item.tags.map((t) => `<span>${t}</span>`).join("")}</div>
        </div>
      `;
      timeline.appendChild(el);
    });
  }

  const projects = document.getElementById("projects-grid");
  if (projects) {
    (window.projectsData || []).forEach((item) => {
      const el = document.createElement("div");
      el.className = "project-card";
      el.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="tags">${item.tags.map((t) => `<span>${t}</span>`).join("")}</div>
      `;
      projects.appendChild(el);
    });
  }

  const core = document.getElementById("core-skills");
  if (core) {
    core.innerHTML = (window.coreSkillsData || [])
      .map((t) => `<span>${t}</span>`)
      .join("");
  }

  const skills = document.getElementById("skills-grid");
  if (skills) {
    (window.skillsData || []).forEach((group) => {
      const el = document.createElement("div");
      el.className = "skill-group";
      el.innerHTML = `
        <h3>${group.group}</h3>
        <div class="tags">${group.items.map((t) => `<span>${t}</span>`).join("")}</div>
      `;
      skills.appendChild(el);
    });
  }
});
