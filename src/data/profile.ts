// Public portfolio content confirmed by Beiming Xu. Keep unapproved details out of this repository.
export const profile = {
  name: "Beiming Xu",
  title: "Game Designer | Producer",
  intro: "I design connected game systems, build levels around how players learn, and turn design goals into rules and tasks a team can execute.",
  education: "B.S. Game Design and Interactive Media · University of California, Irvine",
  educationDates: "Sep 2023 – Expected Mar 2027",
  about: "I'm Beiming Xu, a Game Design and Interactive Media undergraduate at UC Irvine. My work focuses on systems design, level design, and project management. I contributed to systems design work on Genshin Impact at MiHoyo and have served as Lead Designer and Project Manager on student projects.",
  email: "beimingxu5668@gmail.com",
  linkedin: "https://www.linkedin.com/in/beiming-xu-61318834a/",
  github: "https://github.com/S1aury",
  resume: "resume/beiming-xu-resume-en.pdf",
};
export const otherProjects = ["Humanize", "StarHaven", "Inspiration.zip / 灵感.zip", "Multiplayer survival project"];
export const otherProjectDetails: Record<string, { summary: string; role: string; status: string }> = {
  Humanize: {
    summary: "A short game about posing as a human and controlling your facial features at the right moments to avoid detection. Distorted expressions and awkward timing create a humorous experience.",
    role: "Lead Designer · Theme-driven mechanics and implementation follow-through",
    status: "Completed game jam project · One-week development",
  },
};

export const internship: {
  company: string; project: string; role: string; dates: string; location: string;
  summary: string; responsibilities: string[];
  activities: { title: string; summary: string; images: { src: string; alt: string; caption: string }[] }[];
} = {
  company: "MiHoyo",
  project: "Genshin Impact",
  role: "Game Design Intern · Systems Design",
  dates: "Jun–Sep 2025 · Jun–Sep 2026",
  location: "Shanghai, China",
  summary: "My work involved translating design concepts into executable gameplay rules, checking functionality against specifications, and working with the team to refine mechanics using test feedback. I contributed to parts of team-owned features rather than independently owning complete modes or releases.",
  responsibilities: [
    "Contributed to gameplay behavior and player-interaction design based on activity requirements.",
    "Participated in systems design discussions and developed concepts into actionable rules.",
    "Supported configuration, functional testing, issue reporting, and follow-up against design specifications.",
    "Worked with the team to refine mechanics using player-experience considerations and internal test feedback.",
  ],
  // Public screenshots supplied after the user confirmed HR permission. No internal process details.
  activities: [
    {
      title: "Live Event Gameplay",
      summary: "Publicly released event gameplay, shown through combat and boss encounters.",
      images: [
        { src: "images/internship/live-event-waves.webp", alt: "Genshin Impact event combat with enemy-wave progress, a timer, and character upgrades.", caption: "Event gameplay · Wave encounter" },
        { src: "images/internship/live-event-boss.webp", alt: "Genshin Impact event boss encounter with projectile patterns and a character health display.", caption: "Event gameplay · Boss encounter" },
      ],
    },
    {
      title: "UGC & Multiplayer Content",
      summary: "A public view of the user-generated stage browser, including collaboration, party, and competitive multiplayer categories.",
      images: [{ src: "images/internship/ugc-browser.webp", alt: "Genshin Impact user-generated stage browser showing player-created stages and category labels.", caption: "UGC · Public stage browser" }],
    },
    {
      title: "GCG · Card Gameplay",
      summary: "A public card-match view showing character cards, supporting effects, and the player's hand.",
      images: [{ src: "images/internship/gcg-match.webp", alt: "Genshin Impact card match with character cards, effects, and a hand of action cards.", caption: "GCG · Card match" }],
    },
  ],
};
