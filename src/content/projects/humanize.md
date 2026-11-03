---
title: Humanize
order: 5
genre: Expression-matching game
role: Game Designer
summary: "A short comedy about matching facial expressions under timing and energy pressure. I originated the core mechanic and scoped the experience for a 48-hour jam."
focus: [Facial Expression Gameplay, Humor, 48-Hour Game Jam, Scope Control]
accent: rust
year: 48-hour game jam
image: images/humanize/dinner.webp
imageAlt: A dinner scene with facial-expression controls and the disguised character's face.
tier: supporting
links:
  - label: Download on itch.io
    url: https://wanghuai-chen.itch.io/humanize
---

## 01 — Overview

Humanize is a short comedy game about reacting to social situations through facial expressions. I proposed the core gameplay concept and worked as Game Designer in a team of approximately 6–7 people during a 48-hour game jam. The team released the game on itch.io.

## 02 — Design Problem

With only 48 hours, I needed a recognizable idea that the team could finish: easy to understand, expressive, and capable of creating humor through the player's actions.

## 03 — My Decision: Make Expressions Playable

Players observe a scene and control three facial features to form an appropriate expression within a time limit. Timing and an energy meter add pressure to the act of choosing a face.

The intended humor comes from reading a situation, trying to respond, and seeing awkward combinations emerge.

<figure><img src="../../images/humanize/expression-test.webp" alt="An expression test: a character holds up an angry face while three facial-feature controls appear on the right." width="2560" height="1440" loading="lazy" /><figcaption>An expression test with a visual prompt and three facial-feature controls.</figcaption></figure>

## 04 — Pressure & Error Tolerance

Players do not need to match every facial feature perfectly. Some mistakes are tolerated, but a face turning purple triggers immediate failure. I designed the timing, energy constraints, success and failure rules, and feedback around this balance between expressive experimentation and pressure.

<figure><video controls playsinline preload="none" poster="../../images/humanize/expression-test.webp" aria-label="Humanize gameplay demo 1"><source src="../../videos/humanize/demo-1.mp4" type="video/mp4" /><a href="../../videos/humanize/demo-1.mp4">Watch demo 1</a></video><figcaption>Gameplay recording from the supplied build.</figcaption></figure>

## 05 — My Design Contribution

I designed the core concept, player interactions, objective, facial-expression mechanics, and UI/UX. I also defined audio experience requirements to support the reactions and feedback. Programming, art, and sound asset production were team contributions.

<figure><img src="../../images/humanize/dinner.webp" alt="The disguised character at a dinner table, with expression controls and a face preview on the right." width="2560" height="1440" loading="lazy" /><figcaption>The same facial-feature interface in a dinner scene.</figcaption></figure>

## 06 — Scope for 48 Hours

I kept the game centered on one main mechanic and a short, accessible experience. We tested during development, with limited time for large changes in gameplay direction.

<figure><video controls playsinline preload="none" poster="../../images/humanize/dinner.webp" aria-label="Humanize gameplay demo 2"><source src="../../videos/humanize/demo-2.mp4" type="video/mp4" /><a href="../../videos/humanize/demo-2.mp4">Watch demo 2</a></video><figcaption>Gameplay recording from the supplied build.</figcaption></figure>

## 07 — Delivered Work

The team completed a releasable game within the jam. My work gave the central idea concrete controls, constraints, goals, and feedback that could be built within the deadline.

## 08 — Design Takeaway

Humanize demonstrates how I turn a creative idea into a focused playable experience: use a small set of rules to support a specific emotional goal, and keep the scope aligned with the time available.
