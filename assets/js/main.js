const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const navToggle = $("#navToggle");
const siteNav = $("#siteNav");
const cursorGlow = $("#cursorGlow");
const projectGrid = $("#projectGrid");
const contactForm = $("#contactForm");
const formResult = $("#formResult");

$("#year").textContent = new Date().getFullYear();

navToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

$$(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("pointermove", (event) => {
  if (!cursorGlow) return;
  cursorGlow.style.opacity = "1";
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

async function loadProjects() {
  try {
    const res = await fetch("/api/projects");
    if (!res.ok) throw new Error("Gagal fetch project");

    const data = await res.json();
    const projects = data.projects || [];

    projectGrid.innerHTML = projects.map((project, index) => `
      <article class="project-card reveal" style="transition-delay:${index * 65}ms">
        <span class="project-tag">${escapeHtml(project.tag)}</span>
        <h3>${escapeHtml(project.name)}</h3>
        <p>${escapeHtml(project.theme)}</p>
        <div class="project-meta">${escapeHtml(project.role)} · ${escapeHtml(project.status)}</div>
        <a class="btn btn-ghost" href="${project.url}" target="_blank" rel="noopener noreferrer">
          Preview Experience
        </a>
      </article>
    `).join("");

    observeReveal();
  } catch (error) {
    projectGrid.innerHTML = `
      <div class="loading-card">
        Project gagal dimuat dari backend. Cek endpoint <code>/api/projects</code>.
      </div>
    `;
  }
}

function observeReveal() {
  const items = $$(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  items.forEach((item) => observer.observe(item));
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

contactForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const payload = Object.fromEntries(new FormData(contactForm).entries());

  formResult.className = "form-result";
  formResult.textContent = "Mengirim request...";

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Request gagal diproses.");
    }

    formResult.classList.add("success");
    formResult.textContent = data.message;
    contactForm.reset();
  } catch (error) {
    formResult.classList.add("error");
    formResult.textContent = error.message || "Ada error di backend.";
  }
});

loadProjects();
observeReveal();
