// Only confirmed personal facts and URLs belong here. Empty values render as pending.
export const profile = {
  name: "Beiming Xu",
  title: "Game Designer | Producer",
  intro:
    "I design game systems, shape player decisions, and help teams turn ideas into playable experiences.",
  education:
    "Game Design & Interactive Media · University of California, Irvine",
  email: "",
  linkedin: "",
  github: "https://github.com/S1aury",
  resume: "", // Local example: 'resume/Beiming-Xu-Resume.pdf'; no leading slash.
};
export const otherProjects = [
  "Humanize",
  "StarHaven",
  "Inspiration.zip / 灵感.zip",
  "Multiplayer survival project",
];

// Add only activities and responsibilities approved for public display.
export const internship: {
  company: string;
  project: string;
  role: string;
  dates: string;
  responsibilities: string[];
  activities: { title: string; summary: string; contribution: string }[];
} = {
  company: "MiHoyo",
  project: "Genshin Impact",
  role: "Game Systems Design Intern",
  dates: "",
  responsibilities: [],
  activities: [],
};
