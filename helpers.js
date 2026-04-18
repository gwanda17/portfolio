/**
 * GwenPortfolio Utilities
 * @module utils/helpers
 *
 * Pure utility functions — no side effects, fully testable.
 */

/**
 * Returns the current time in WIB (Asia/Jakarta).
 * @returns {string} HH:MM format
 */
export function getWIBTime() {
  const now = new Date();
  const wib = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Jakarta" }),
  );
  const h = String(wib.getHours()).padStart(2, "0");
  const m = String(wib.getMinutes()).padStart(2, "0");
  return `${h}:${m}`;
}

/**
 * Creates a DOM ripple effect at the click position.
 * @param {MouseEvent} event
 * @param {HTMLElement} container
 */
export function createRipple(event, container) {
  const rect = container.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  const ripple = document.createElement("span");
  ripple.className = "ripple-wave";
  ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px;`;
  container.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());
}

/**
 * Smooth cursor-lag interpolation for the light orb.
 * @param {number} current - current position
 * @param {number} target  - target position
 * @param {number} factor  - lerp factor (0–1)
 * @returns {number}
 */
export function lerp(current, target, factor) {
  return current + (target - current) * factor;
}

/**
 * Debounce a function.
 * @param {Function} fn
 * @param {number} delay
 * @returns {Function}
 */
export function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Clamps a number between min and max.
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
