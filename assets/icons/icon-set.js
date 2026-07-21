/**
 * Shared line-icon set for The Nowak Insider.
 * Consistent style: 2px stroke, rounded caps/joins, 24x24 viewBox, no fill.
 * Referenced by /components.js so every page uses the same icon language.
 * Colored via CSS (currentColor) wherever the icon is placed.
 */
const ICONS = {
  phone: `<path d="M5 4h3.2l1.3 4.4-2 1.6a12 12 0 0 0 6.5 6.5l1.6-2 4.4 1.3V19a2 2 0 0 1-2 2C10.5 21 3 13.5 3 6a2 2 0 0 1 2-2Z"/>`,
  dollar: `<path d="M12 3v18M16.5 7.5c0-1.9-2-3-4.5-3s-4.5 1.1-4.5 3c0 4 9 2 9 6.5 0 1.9-2 3-4.5 3s-4.5-1.1-4.5-3"/>`,
  box: `<path d="M3 8.5 12 4l9 4.5-9 4.5-9-4.5Z"/><path d="M3 8.5V16l9 4.5 9-4.5V8.5"/><path d="M12 13v7.5"/>`,
  tooth: `<path d="M12 4c-2.2 0-3.6 1.4-5.4 1.4C4.9 5.4 3.5 6.8 3.5 9c0 3 .8 5.2 1.6 8.3.4 1.6 2.6 1.6 3-.2.4-1.8.6-3.1 1.9-3.1s1.5 1.3 1.9 3.1c.4 1.8 2.6 1.8 3 .2.8-3.1 1.6-5.3 1.6-8.3 0-2.2-1.4-3.6-3.1-3.6C15.6 5.4 14.2 4 12 4Z"/>`,
  cart: `<path d="M3 4h2l2.4 11.2A2 2 0 0 0 9.4 17h7.2a2 2 0 0 0 2-1.6L20 8H6"/><circle cx="10" cy="20.5" r="1.3"/><circle cx="17" cy="20.5" r="1.3"/>`,
  trending: `<path d="M3 17 9.5 10.5 13.5 14.5 21 6"/><path d="M15 6h6v6"/>`,
  laptop: `<path d="M4.5 5.5h15v9h-15z"/><path d="M2.5 18.5h19l-1.6-2.7a1 1 0 0 0-.9-.5H5a1 1 0 0 0-.9.5L2.5 18.5Z"/>`,
  headset: `<path d="M4 13v-1a8 8 0 0 1 16 0v1"/><path d="M4 13a2 2 0 0 1 2-2h1v6H6a2 2 0 0 1-2-2v-2Z"/><path d="M20 13a2 2 0 0 0-2-2h-1v6h1a2 2 0 0 0 2-2v-2Z"/><path d="M18 18a3 3 0 0 1-3 3h-2"/>`,
  briefcase: `<rect x="3" y="7.5" width="18" height="12" rx="1.5"/><path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5"/><path d="M3 12.5h18"/>`,
  eye: `<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>`,
  users: `<circle cx="9" cy="8" r="3.2"/><path d="M2.8 19a6.2 6.2 0 0 1 12.4 0"/><path d="M16 5.3a3.2 3.2 0 0 1 0 6.2"/><path d="M15.5 13a6.2 6.2 0 0 1 5.7 6"/>`,
  heart: `<path d="M12 20.5S3.5 15.3 3.5 9.4C3.5 6.4 5.9 4 8.8 4c1.7 0 3.2.9 3.2 2.4C12 4.9 13.5 4 15.2 4c2.9 0 5.3 2.4 5.3 5.4 0 5.9-8.5 11.1-8.5 11.1Z"/>`,
  handshake: `<path d="M2 12l4-3 4 3 2-1.5L20 12"/><path d="M6 9l4.5 4.5a1.6 1.6 0 0 0 2.3 0 1.6 1.6 0 0 0 0-2.3"/><path d="M20 12l-2 5-4 2-5-2"/><path d="M2 12v4l3 2"/><path d="M22 12v4l-2 1.5"/>`,
  star: `<path d="M12 3.5l2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6-4.4-4.2 6-.8Z"/>`,
  megaphone: `<path d="M3 11v2a2 2 0 0 0 2 2h1l1 4h2l-1-4h1l9 4V7l-9 4H5a2 2 0 0 0-2 2Z"/><path d="M19 8.5a4 4 0 0 1 0 7"/>`,
  target: `<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>`,
  calendar: `<rect x="3.5" y="5" width="17" height="15" rx="1.5"/><path d="M3.5 9.5h17"/><path d="M8 3v3.5M16 3v3.5"/>`,
  award: `<circle cx="12" cy="8.5" r="5.5"/><path d="M8.5 13.2 7 20.5l5-2.5 5 2.5-1.5-7.3"/>`,
  quote: `<path d="M8 7.5C5.8 8.4 4.5 10 4.5 12.5c0 2.4 1.6 4 3.8 4 1.7 0 3-1.2 3-3 0-1.6-1.1-2.8-2.6-2.9C8.9 9 9.7 8 11 7.3"/><path d="M17 7.5c-2.2.9-3.5 2.5-3.5 5 0 2.4 1.6 4 3.8 4 1.7 0 3-1.2 3-3 0-1.6-1.1-2.8-2.6-2.9C18 9 18.7 8 20 7.3"/>`,

  // Generic, non-copyrighted pop-culture-inspired icons for the quiz page.
  // Kept simple and unmistakable (rocket / star / magnifying glass / compass
  // / shield) rather than elaborate silhouettes, so they read clearly at
  // small sizes.
  spaceHero: `<path d="M12 2.2c2.4 2.1 3.8 5.4 3.8 8.8 0 2-.5 3.8-1.3 5.2L12 17.8l-2.5-1.6C8.7 14.8 8.2 13 8.2 11c0-3.4 1.4-6.7 3.8-8.8Z"/><circle cx="12" cy="9.6" r="1.5"/><path d="M8.6 14 6 17l2.8-.5"/><path d="M15.4 14 18 17l-2.8-.5"/><path d="M10.4 18 12 21.5 13.6 18"/>`,
  wizard: `<path d="M12 3.2l2.1 4.4 4.8.6-3.5 3.4.9 4.8-4.3-2.4-4.3 2.4.9-4.8-3.5-3.4 4.8-.6Z"/>`,
  detective: `<circle cx="10.3" cy="10.3" r="6.2"/><path d="M14.8 14.8 20.5 20.5"/>`,
  adventurer: `<circle cx="12" cy="12" r="9"/><path d="M16 8 13 13 8 16l3-5Z"/><circle cx="12" cy="12" r="1"/>`,
  superhero: `<path d="M12 3 6 5.5v5c0 5 2.6 8.3 6 9.5 3.4-1.2 6-4.5 6-9.5v-5L12 3Z"/><path d="M9.3 12.2 11 14l3.7-4"/>`,

  chevronRight: `<path d="M9 6l6 6-6 6"/>`,
  check: `<path d="M4 12.5l5 5L20 6"/>`
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = ICONS;
}
if (typeof window !== "undefined") {
  window.NOWAK_ICONS = ICONS;
}
