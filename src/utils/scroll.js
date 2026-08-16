export const NAVBAR_OFFSET = 88;

export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
}

export function sectionIdFromLink(link) {
  if (link === "Home") return "top";
  return link.toLowerCase().replace(/\s+/g, "-");
}
