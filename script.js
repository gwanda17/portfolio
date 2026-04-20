/**
 * CursorOrb - Smooth lagging light that follows the cursor.
 */
class CursorOrb {
  constructor() {
    this._el = document.getElementById("cursor-orb");
    this._mx = window.innerWidth / 2;
    this._my = window.innerHeight / 2;
    this._cx = this._mx;
    this._cy = this._my;
    this._LERP = 0.075;
  }
  init() {
    document.addEventListener("mousemove", (e) => {
      this._mx = e.clientX;
      this._my = e.clientY;
    });
    this._loop();
    return this;
  }
  _loop() {
    this._cx += (this._mx - this._cx) * this._LERP;
    this._cy += (this._my - this._cy) * this._LERP;
    this._el.style.left = `${this._cx}px`;
    this._el.style.top = `${this._cy}px`;
    requestAnimationFrame(() => this._loop());
  }
}

/**
 * WorkArchive - Active/blur focus interaction on project list.
 */
class WorkArchive {
  constructor(containerId) {
    const container = document.getElementById(containerId);
    this._items = container ? container.querySelectorAll("[data-project]") : [];
  }
  init() {
    this._items.forEach((item) => {
      item.addEventListener("click", () => this._setActive(item));
    });
    return this;
  }
  _setActive(target) {
    this._items.forEach((i) => i.classList.remove("is-active"));
    target.classList.add("is-active");
  }
}

/**
 * CTARipple - Water-drop ripple on button click.
 */
class CTARipple {
  constructor(btnId) {
    this._btn = document.getElementById(btnId);
  }
  init() {
    if (!this._btn) return this;
    this._btn.addEventListener("click", (e) => this._createRipple(e));
    return this;
  }
  _createRipple(e) {
    const rect = this._btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const wave = document.createElement("span");
    wave.className = "ripple-wave";
    wave.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px;`;
    this._btn.appendChild(wave);
    wave.addEventListener("animationend", () => wave.remove());
  }
}

/**
 * ThemeToggle - Manage Dark/Light mode state.
 */
class ThemeToggle {
  constructor(btnId) {
    this._btn = document.getElementById(btnId);
    this._theme = localStorage.getItem("theme") || "dark";
  }
  init() {
    if (!this._btn) return this;
    this._applyTheme();
    this._btn.addEventListener("click", () => {
      this._theme = this._theme === "dark" ? "light" : "dark";
      this._applyTheme();
      localStorage.setItem("theme", this._theme);
    });
    return this;
  }
  _applyTheme() {
    document.body.setAttribute("data-theme", this._theme);
  }
}

/**
 * AboutModal - Pop-up info card toggle.
 */
class AboutModal {
  constructor() {
    this._modal = document.getElementById("about-modal");
    this._btnBtn = document.getElementById("about-btn");
    this._closes = document.querySelectorAll(".about-close-trigger");
  }
  init() {
    if (!this._modal || !this._btnBtn) return this;
    this._btnBtn.addEventListener("click", () => this.open());
    this._closes.forEach((el) =>
      el.addEventListener("click", () => this.close()),
    );

    // ESC key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this._modal.classList.contains("is-open"))
        this.close();
    });
    return this;
  }
  open() {
    this._modal.classList.add("is-open");
  }
  close() {
    this._modal.classList.remove("is-open");
  }
}

/**
 * Localizer - Manage Language toggle and string injection.
 */
class Localizer {
  constructor() {
    this._btn = document.getElementById("lang-toggle");
    this._lang = localStorage.getItem("lang") || "en";
    this._dict = typeof TRANSLATIONS !== "undefined" ? TRANSLATIONS : null;
  }
  init() {
    if (!this._btn || !this._dict) return this;
    this._applyLang();
    this._btn.addEventListener("click", () => {
      this._lang = this._lang === "en" ? "id" : "en";
      localStorage.setItem("lang", this._lang);
      this._applyLang();
    });
    return this;
  }
  _applyLang() {
    this._btn.textContent = this._lang.toUpperCase();
    document.documentElement.lang = this._lang;
    const currentDict = this._dict[this._lang];
    if (!currentDict) return;

    // Process text nodes
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (currentDict[key]) el.textContent = currentDict[key];
    });

    // Process nodes that require HTML parsing
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (currentDict[key]) el.innerHTML = currentDict[key];
    });
  }
}

/**
 * AvatarZoom - Enlarge avatar on click.
 */
class AvatarZoom {
  constructor() {
    this._overlay = document.getElementById("avatar-zoom-overlay");
    this._avatars = document.querySelectorAll(".gwen-avatar");
  }
  init() {
    if (!this._overlay || this._avatars.length === 0) return this;
    this._avatars.forEach((av) => {
      av.addEventListener("click", () => this.open());
    });
    this._overlay.addEventListener("click", () => this.close());

    // ESC key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this._overlay.classList.contains("is-open"))
        this.close();
    });
    return this;
  }
  open() {
    this._overlay.classList.add("is-open");
  }
  close() {
    this._overlay.classList.remove("is-open");
  }
}

/**
 * App Bootstrap - Compose and initialise all modules.
 */
(function bootstrap() {
  new CursorOrb().init();
  new WorkArchive("work-archive").init();
  new CTARipple("cta-btn").init();
  new ThemeToggle("theme-toggle").init();
  new AboutModal().init();
  new Localizer().init();
  new AvatarZoom().init();
})();
