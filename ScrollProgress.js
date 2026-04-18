/**
 * ScrollProgress
 * @class
 *
 * Thin translucent bar at the top of the viewport that tracks
 * the user's scroll depth. Updates via CSS transform for GPU compositing.
 */
export class ScrollProgress {
  constructor(barId = "scroll-progress") {
    this._bar = document.getElementById(barId);
    this._scroller = null; // element that scrolls, set in init()
  }

  /** @param {HTMLElement} scrollerEl - the element with overflow:auto */
  init(scrollerEl) {
    this._scroller = scrollerEl || document.documentElement;
    this._scroller.addEventListener("scroll", this._onScroll.bind(this), {
      passive: true,
    });
    return this;
  }

  destroy() {
    if (this._scroller) {
      this._scroller.removeEventListener("scroll", this._onScroll.bind(this));
    }
  }

  _onScroll() {
    const el = this._scroller;
    const scrolled = el.scrollTop || el.documentElement?.scrollTop || 0;
    const total =
      (el.scrollHeight || el.documentElement?.scrollHeight || 0) -
      (el.clientHeight || el.documentElement?.clientHeight || 0);
    const pct = total > 0 ? (scrolled / total) * 100 : 0;

    if (this._bar) {
      this._bar.style.width = `${pct}%`;
    }
  }
}
