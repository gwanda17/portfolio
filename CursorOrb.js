/**
 * CursorOrb
 * @class
 *
 * Creates a soft, lagging light orb that follows the cursor.
 * Sits behind glass panels via mix-blend-mode: screen.
 * Uses requestAnimationFrame + lerp for buttery motion.
 */
export class CursorOrb {
  constructor(containerId = "cursor-orb") {
    this._el = document.getElementById(containerId);
    this._mx = window.innerWidth / 2;
    this._my = window.innerHeight / 2;
    this._cx = this._mx;
    this._cy = this._my;
    this._raf = null;
    this._LERP_FACTOR = 0.08;
  }

  /** Attach event listener and start animation loop. */
  init() {
    document.addEventListener("mousemove", this._onMouseMove.bind(this));
    this._animate();
    return this; // fluent
  }

  /** Detach and clean up. */
  destroy() {
    document.removeEventListener("mousemove", this._onMouseMove.bind(this));
    cancelAnimationFrame(this._raf);
  }

  _onMouseMove(e) {
    this._mx = e.clientX;
    this._my = e.clientY;
  }

  _animate() {
    this._cx += (this._mx - this._cx) * this._LERP_FACTOR;
    this._cy += (this._my - this._cy) * this._LERP_FACTOR;

    if (this._el) {
      this._el.style.left = `${this._cx}px`;
      this._el.style.top = `${this._cy}px`;
    }

    this._raf = requestAnimationFrame(this._animate.bind(this));
  }
}
