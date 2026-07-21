/**
 * Flat, two/three-color illustrated badges for the 10 quiz personas.
 * Generic, non-copyrighted archetypes (no named characters), drawn only
 * with the Nowak brand palette: #185a7d (dark blue), #238dc1 (main blue),
 * #ffdd00 (yellow), #ffffff (white). ViewBox is 0 0 48 48 for all.
 */
const QUIZ_ILLUSTRATIONS = {
  spaceHero: `
    <path d="M24 6c6 5 9 12 9 19 0 4-1 7-3 10l-6 4-6-4c-2-3-3-6-3-10 0-7 3-14 9-19Z" fill="#ffffff"/>
    <circle cx="24" cy="20" r="4" fill="#238dc1"/>
    <path d="M17 30l-5 7 7-2Z" fill="#ffdd00"/>
    <path d="M31 30l5 7-7-2Z" fill="#ffdd00"/>
    <path d="M20 39l4 7 4-7Z" fill="#ffdd00"/>`,

  wizard: `
    <path d="M24 5l5.5 11.5 12.5 1.7-9 8.9 2.1 12.4L24 33.5 12.9 39.5 15 27.1l-9-8.9 12.5-1.7Z" fill="#ffdd00"/>
    <circle cx="37" cy="10" r="2" fill="#ffffff"/>
    <circle cx="9" cy="15" r="1.4" fill="#ffffff"/>`,

  detective: `
    <circle cx="20" cy="20" r="12" fill="none" stroke="#ffffff" stroke-width="4"/>
    <rect x="27" y="27" width="5" height="15" rx="2.5" transform="rotate(45 27 27)" fill="#ffdd00"/>`,

  adventurer: `
    <circle cx="24" cy="24" r="16" fill="none" stroke="#ffffff" stroke-width="3"/>
    <circle cx="24" cy="24" r="2.2" fill="#ffffff"/>
    <path d="M24 24 30 13 26 24Z" fill="#ffdd00"/>
    <path d="M24 24 18 35 22 24Z" fill="#ffffff"/>`,

  superhero: `
    <path d="M24 4 8 10v12c0 12 7 19 16 22 9-3 16-10 16-22V10Z" fill="#ffffff"/>
    <path d="M17 24l5 5 9-10" fill="none" stroke="#238dc1" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`,

  strategist: `
    <path d="M8 34h32l-3-14-8 7-5-11-5 11-8-7Z" fill="#ffdd00"/>
    <rect x="9" y="35" width="30" height="4" rx="2" fill="#ffdd00"/>`,

  rebel: `
    <path d="M27 4 12 26h9l-3 18 18-24h-10Z" fill="#ffdd00"/>`,

  healer: `
    <path d="M24 40S8 29 8 17.5C8 11.5 12.7 7 18.3 7c2.7 0 5.2 1.3 5.7 3.7C24.5 8.3 27 7 29.7 7 35.3 7 40 11.5 40 17.5 40 29 24 40 24 40Z" fill="#ffffff"/>
    <path d="M24 16v10M19 21h10" stroke="#238dc1" stroke-width="3" stroke-linecap="round"/>`,

  trickster: `
    <circle cx="24" cy="24" r="18" fill="#ffdd00"/>
    <circle cx="17" cy="21" r="2.2" fill="#185a7d"/>
    <circle cx="31" cy="21" r="2.2" fill="#185a7d"/>
    <path d="M15 29c3 4 15 4 18 0" fill="none" stroke="#185a7d" stroke-width="3" stroke-linecap="round"/>`,

  sage: `
    <path d="M24 12c-4-3-10-4-16-4v24c6 0 12 1 16 4 4-3 10-4 16-4V8c-6 0-12 1-16 4Z" fill="#ffffff"/>
    <path d="M24 12v24" stroke="#238dc1" stroke-width="2.5"/>`
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = QUIZ_ILLUSTRATIONS;
}
if (typeof window !== "undefined") {
  window.QUIZ_ILLUSTRATIONS = QUIZ_ILLUSTRATIONS;
}
