document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");

  if (!toggle || !nav) {
    return;
  }

  const setOpen = (isOpen) => {
    if (isOpen) {
      nav.classList.remove("hidden");
      nav.classList.add("flex", "flex-col", "absolute", "top-full", "left-0", "right-0", "bg-brand-bg", "border-b-4", "border-brand-navy", "p-4", "gap-4");
      document.body.classList.add("overflow-hidden");
    } else {
      nav.classList.add("hidden");
      nav.classList.remove("flex", "flex-col", "absolute", "top-full", "left-0", "right-0", "bg-brand-bg", "border-b-4", "border-brand-navy", "p-4", "gap-4");
      document.body.classList.remove("overflow-hidden");
    }
    toggle.setAttribute("aria-expanded", String(isOpen));
  };

  toggle.addEventListener("click", () => {
    setOpen(nav.classList.contains("hidden"));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      setOpen(false);
    }
  });
});
