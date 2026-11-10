// Public portfolio content confirmed by Beiming Xu. Keep unapproved details out of this repository.
export const profile = {
  name: "Beiming Xu",
  title: "Systems & Gameplay Designer",
  intro: "I design mechanics, economies, and puzzles that give players meaningful choices—and help teams turn those designs into playable games.",
  education: "B.S. Game Design and Interactive Media · University of California, Irvine",
  educationDates: "Sep 2023 – Expected Mar 2027",
  about: "I'm Beiming Xu, a Game Design and Interactive Media undergraduate at UC Irvine. I make games because I enjoy the process of creating them. Working out how to make a game fun is something I find rewarding in itself.",
  email: "beimingxu5668@gmail.com",
  linkedin: "https://www.linkedin.com/in/beiming-xu-61318834a/",
  github: "https://github.com/S1aury",
  resume: "resume/beiming-xu-resume-en.pdf",
};
export const otherProjects = ["Multiplayer Capstone"];
export const otherProjectDetails: Record<string, { summary: string; role: string; status: string }> = {
  "Multiplayer Capstone": { summary: "A 3D multiplayer project in development, with networking, voice chat, and basic gameplay implemented. A future main case study will cover its systems and production as development progresses.", role: "", status: "In development" },
};

export const internship: {
  company: string; project: string; role: string; dates: string; location: string;
  summary: string; responsibilities: string[];
  activities: { title: string; summary: string; images: { src: string; alt: string; caption: string }[] }[];
} = {
  company: "miHoYo",
  project: "Genshin Impact",
  role: "Game Design Intern · Gameplay & Systems",
  dates: "Jun–Sep 2025 · Jun–Sep 2026",
  location: "Shanghai, China",
  summary: "My Genshin Impact work spans released bullet-dodging gameplay, Genius Invokation TCG character cards, and multiplayer UGC implementation and validation. I work from mechanics and configuration through testing, balance adjustments, and implementation follow-up with programmers and QA.",
  responsibilities: [
    "Designed enemy movement, projectile patterns, and player-enemy interactions for a released 2D bullet-dodging event.",
    "Designed and configured released TCG character cards, including skill effects, triggers, costs, and numerical values.",
    "Playtested cards internally, adjusted balance, discussed feasibility with programmers, and followed up on QA issues.",
    "Configured and validated multiplayer UGC flows, reviewed UI behavior against specifications, and communicated implementation feedback.",
  ],
  // Public screenshots supplied after the user confirmed HR permission. No internal process details.
  activities: [
    {
      title: "Released 2D Bullet-Dodging Gameplay",
      summary: "I designed enemy movement, projectile patterns, and player-enemy interactions around the dodging responses each encounter should invite. These designs were implemented in the released event.",
      images: [
        { src: "images/internship/live-event-waves.webp", alt: "Genshin Impact event combat with enemy-wave progress, a timer, and character upgrades.", caption: "Event gameplay · Wave encounter" },
        { src: "images/internship/live-event-boss.webp", alt: "Genshin Impact event boss encounter with projectile patterns and a character health display.", caption: "Event gameplay · Boss encounter" },
      ],
    },
    {
      title: "UGC & Multiplayer Content",
      summary: "I worked on lobby, party, and menu flows through configuration, UI implementation review, specification checks, and final gameplay validation. I communicated issues with programmers and other disciplines and also configured selected outfit, character-color, and component content.",
      images: [{ src: "images/internship/ugc-browser.webp", alt: "Genshin Impact user-generated stage browser showing player-created stages and category labels.", caption: "UGC · Public stage browser" }],
    },
    {
      title: "Genius Invokation TCG · Character Card Design",
      summary: "I took character cards from skill design through JSON and internal card-editor configuration, internal playtesting, balance adjustments, and release. The work connected skill effects, trigger conditions, resource costs, and numerical tuning with implementation feasibility.",
      images: [{ src: "images/internship/gcg-match.webp", alt: "Genshin Impact card match with character cards, effects, and a hand of action cards.", caption: "GCG · Card match" }],
    },
  ],
};
