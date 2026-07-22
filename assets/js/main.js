function renderChapter(chapterId) {
  const chapter = window.chaptersData[chapterId];
  if (!chapter) return;

  let html = `<h1 class="chapter-title">${chapter.title}</h1>`;
  html += `<p class="chapter-intro">${chapter.intro}</p>`;

  chapter.subsections.forEach((sub) => {
    html += `<div class="subsection">`;
    html += `<div class="subsection-title">${sub.title}</div>`;
    html += `<div class="subsection-content">`;

    if (sub.content) {
      html += `<p>${sub.content}</p>`;
    }

    if (sub.projects) {
      html += `<div class="project-list">`;
      sub.projects.forEach((proj) => {
        html += `<div class="project-item">`;
        html += `<div class="project-title">${proj.title}</div>`;
        html += `<div class="tags">${proj.tags.map((t) => `<span>${t}</span>`).join("")}</div>`;
        html += `</div>`;
      });
      html += `</div>`;
    }

    if (sub.skillsPreview) {
      html += `<div class="skills-list">${window.coreSkillsData.map((s) => `<span>${s}</span>`).join("")}</div>`;
    }

    if (sub.contact) {
      html += `
        <div class="contact-links">
          <a href="mailto:tejaschoudhary256@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/tejaskc" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://www.github.com/tejasc256" target="_blank" rel="noopener">GitHub</a>
        </div>
      `;
    }

    html += `</div></div>`;
  });

  document.getElementById("chapter-content").innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".chapter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".chapter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderChapter(btn.dataset.chapter);
    });
  });

  renderChapter("how-i-think");
});
