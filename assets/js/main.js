function renderChapter(chapterId) {
  const chapter = window.chaptersData[chapterId];
  if (!chapter) return;

  let html = `<h1 class="chapter-title">${chapter.title}</h1>`;
  html += `<p class="chapter-intro">${chapter.intro}</p>`;
  html += `<div class="subsections-grid">`;

  chapter.subsections.forEach((sub, idx) => {
    html += `
      <div class="subsection-card" data-chapter="${chapterId}" data-subsection="${idx}">
        <div>
          <div class="card-title">${sub.title}</div>
          <div class="card-snippet">${sub.snippet || ""}</div>
        </div>
        <div class="card-footer">
          <span class="card-cta">View Details</span>
          <span class="card-arrow">&rarr;</span>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  document.getElementById("chapter-content").innerHTML = html;

  document.querySelectorAll(".subsection-card").forEach((card) => {
    card.addEventListener("click", () => {
      const chapterKey = card.dataset.chapter;
      const subsectionIdx = parseInt(card.dataset.subsection, 10);
      openSubsectionModal(chapterKey, subsectionIdx);
    });
  });
}

function openSubsectionModal(chapterKey, subsectionIdx) {
  const chapter = window.chaptersData[chapterKey];
  const sub = chapter.subsections[subsectionIdx];

  let html = `<h2 class="modal-title">${sub.title}</h2><div class="modal-body">`;

  if (sub.content) {
    html += sub.content
      .split("\n\n")
      .map((para) => `<p>${para}</p>`)
      .join("");
  }

  if (sub.projects) {
    html += `<div class="modal-projects"><div class="modal-projects-title">Projects</div><div class="modal-project-list">`;
    sub.projects.forEach((proj) => {
      html += `
        <div class="modal-project-item">
          <div class="modal-project-title">${proj.title}</div>
          <div class="modal-tags">${proj.tags.map((t) => `<span>${t}</span>`).join("")}</div>
        </div>
      `;
    });
    html += `</div></div>`;
  }

  if (sub.skillsPreview) {
    html += `<div class="modal-skills">${window.coreSkillsData.map((s) => `<span>${s}</span>`).join("")}</div>`;
  }

  if (sub.contact) {
    html += `
      <div class="modal-contact">
        <a href="mailto:tejaschoudhary256@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/tejaskc" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://www.github.com/tejasc256" target="_blank" rel="noopener">GitHub</a>
      </div>
    `;
  }

  html += `</div>`;

  document.getElementById("modal-body").innerHTML = html;
  document.getElementById("subsection-modal").classList.add("active");
}

function closeModal() {
  document.getElementById("subsection-modal").classList.remove("active");
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("modal-close-btn").addEventListener("click", closeModal);

  document.getElementById("subsection-modal").addEventListener("click", (e) => {
    if (e.target.id === "subsection-modal") {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.getElementById("subsection-modal").classList.contains("active")) {
      closeModal();
    }
  });

  document.querySelectorAll(".tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      closeModal();
      document.querySelectorAll(".tab").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderChapter(btn.dataset.chapter);
    });
  });

  renderChapter("how-i-think");
});
