---
title: Humanize
order: 5
genre: Expression-matching game
role: Game Designer
summary: "Pretend to be human by combining facial features under timing and energy pressure."
focus: [Facial Expression Gameplay, Humor, 48-Hour Game Jam, Scope Control]
accent: rust
year: 48-hour game jam
image: images/humanize/dinner.webp
imageAlt: A dinner scene with facial-expression controls and the disguised character's face.
tier: supporting
links:
  - label: Download on itch.io
    url: https://wanghuai-chen.itch.io/humanize
contribution: "Core idea, facial controls, timing, energy and feedback rules."
outcome: "Released jam game · 48 hours."
decision: "Build humor from combining facial features under pressure."
video: videos/humanize/demo-1.mp4
team: "Approximately 6–7 people"
platform: "Download on itch.io"
videoTitle: "Expression matching · 3 seconds"
---

## Problem

A 48-hour jam needed an idea that was recognizable, expressive and small enough to finish. I proposed pretending to be human by controlling facial expressions.

I worked as Game Designer in a team of approximately 6–7 people; I do not claim sole design ownership.

## Decision



I made three facial features independently controllable. A scene gives the social context; timing and energy constraints add pressure to choosing a face.

The intended humor comes from trying to respond appropriately while awkward combinations emerge.

## Controls & feedback

**I designed** the core idea, interactions, objective, expression rules, timing and energy constraints, UI/UX and audio experience requirements. Programming, art and sound asset production were team contributions.

The rules allow some imperfect matches; a face turning purple triggers immediate failure. The supplied footage shows the controls and face feedback in play.

<div class="human-details"><figure><div class="human-crop controls"><img src="../../images/humanize/expression-test.webp" alt="Enlarged three facial controls from expression test" loading="lazy"/></div><figcaption>Three controls: adjust facial features independently rather than choose one complete preset face.</figcaption></figure><figure><div class="human-crop failure"><img src="../../images/humanize/dinner.webp" alt="Enlarged purple face from dinner gameplay" loading="lazy"/></div><figcaption>Failure boundary: some errors are tolerated, but turning purple causes immediate failure.</figcaption></figure></div>

Time and energy constrain expression choices. Exact HUD indicator mapping is not confirmed in these captures, so no unverified meter labels have been added.

<figure><img src="../../images/humanize/expression-test.webp" alt="An expression test: a character holds up an angry face while three facial-feature controls appear on the right." width="2560" height="1440" loading="lazy" /><figcaption>Read the requested expression, then adjust three independent facial controls. Their combinations create the awkward expression at right.</figcaption></figure>

<figure><img src="../../images/humanize/dinner.webp" alt="The disguised character at a dinner table, with expression controls and a face preview on the right." width="2560" height="1440" loading="lazy" /><figcaption>The social setting changes while the same three-part expression mechanic remains.</figcaption></figure>

<figure><video controls playsinline preload="none" poster="../../images/humanize/dinner.webp" aria-label="Dinner scene and purple-face feedback"><source src="../../videos/humanize/demo-2.mp4" type="video/mp4" /><a href="../../videos/humanize/demo-2.mp4">Watch dinner scene</a></video><figcaption>Dinner scene & purple-face feedback · 9 seconds. A different context using the same facial controls.</figcaption></figure>

## Results & reflection

<span class="status accent">Released jam game</span>

The team completed a releasable game in 48 hours. We tested during development, with limited time for major direction changes.

Keeping one main mechanic supported a short, accessible experience. Humor and expressive experimentation remain design intentions; no measured audience response is claimed.

<details><summary>Evidence still to add</summary><p>The calendar date, complete role credits and specific test observations.</p></details>
