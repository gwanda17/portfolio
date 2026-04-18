/**
 * WorkArchive
 * @class
 *
 * Renders the project list in the right panel.
 * Active item is full-focus; others are blurred and dimmed.
 * Clicking an item promotes it to active.
 */
import { PROJECTS } from "../data/portfolio.js";

export class WorkArchive {
  constructor(containerId = "work-archive") {
    this._container = document.getElementById(containerId);
    this._activeId = PROJECTS.find((p) => p.active)?.id ?? PROJECTS[0].id;
  }

  init() {
    this._render();
    return this;
  }

  _render() {
    if (!this._container) return;

    this._container.innerHTML = `
      <div class="archive-header">// Work Archive</div>
      ${PROJECTS.map((p) => this._renderItem(p)).join("")}
    `;

    this._container.querySelectorAll(".project-item").forEach((el) => {
      el.addEventListener("click", () =>
        this._setActive(Number(el.dataset.id)),
      );
    });
  }

  _renderItem(project) {
    const isActive = project.id === this._activeId;
    return `
      <div
        class="project-item ${isActive ? "is-active" : ""}"
        data-id="${project.id}"
      >
        <div class="project-info">
          <div class="project-name">${project.name}</div>
          <div class="project-meta">${project.role} · ${project.stack}</div>
        </div>
        <div class="project-year">${project.year}</div>
      </div>
    `;
  }

  _setActive(id) {
    this._activeId = id;
    this._render(); // full re-render keeps it simple; debounce if needed
  }
}
