"use strict";
(() => {
  // assets/ts/theme-bootstrap.ts
  (function bootstrapTheme() {
    const root = document.documentElement;
    try {
      const stored = localStorage.getItem("theme");
      const mode = stored === "light" || stored === "dark" || stored === "system" ? stored : "system";
      const prefersDark = window.matchMedia !== void 0 && window.matchMedia("(prefers-color-scheme: dark)").matches;
      const theme = mode === "system" ? prefersDark ? "dark" : "light" : mode;
      root.setAttribute("data-theme", theme);
      root.setAttribute("data-theme-mode", mode);
    } catch {
      root.setAttribute("data-theme", "dark");
      root.setAttribute("data-theme-mode", "system");
    }
  })();
})();
