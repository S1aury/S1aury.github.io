---
title: Waltz of Weights
order: 4
genre: 3D puzzle game
role: Gameplay Designer / Level Designer
summary: "Separate or possess two characters to trade remote interaction for strength and jumping."
focus: [Three-Weight Mechanic, Dual-Character Interaction, Rapid Prototyping]
accent: olive
year: 'Nov 2025'
image: images/waltz-of-weights/level-1.webp
imageAlt: A floating puzzle level with colored blocks, gates, and pressure plates.
tier: supporting
contribution: "Three-weight rules, possession interactions and puzzle maps."
outcome: "Playable jam prototype · 3 people · 3 days."
decision: "Connect two characters through a shared weight rule."
video: videos/waltz-of-weights/demo-1.mp4
team: "3 people"
platform: "Unity prototype"
videoTitle: "Remote interaction and moving boxes · 9 seconds"
---

## Problem

For the jam theme “Dance with the World,” I wanted one player to coordinate two characters with complementary abilities. We had three people and three days.

## Decision



I connected the two characters through **three weight states** and possession. The keyboard controls the main character; the mouse controls a separate lightweight character.

<div class="state-compare"><div><h3>Separate</h3><p><b>Mouse · light / blue</b><br/>Moves freely and remotely interacts with light items, including blue boxes and plates.</p><p><b>Body · medium / yellow</b><br/>Moves with WASD and interacts with medium and light items.</p></div><div><h3>Possessed</h3><p><b>Combined body · heavy / red</b><br/>Can push heavy objects. This is the only state that can jump.</p><p><b>Cost:</b> the mouse temporarily loses independent remote interaction.</p></div></div>

**The choice is reach versus strength:** stay separate to operate a distant light object, or possess the body to move a heavy obstacle and jump. This rule diagram explains abilities, not a demonstrated full level solution.

## Implementation evidence

**I defined** gameplay logic and puzzle structure, built the maps, and worked with two programmers on the prototype. The player chooses which character, weight and interaction to use.

Keyboard: move; **F** pushes a box; **R** restarts. Mouse: hold a blue plate, or select a blue box and drag its arrows.

<figure>
<video controls playsinline preload="none" poster="../../images/waltz-of-weights/level-2.webp" aria-label="Waltz of Weights Three weight states and possession">
<source src="../../videos/waltz-of-weights/demo-2.mp4" type="video/mp4" />
<a href="../../videos/waltz-of-weights/demo-2.mp4">Watch Three weight states and possession</a>
</video>
<figcaption>Three-weight puzzle · 27 seconds. Watch the character relationship alongside the colored boxes and plates; possession changes available actions.</figcaption>
</figure>

<figure>
<a href="../../images/waltz-of-weights/level-3.webp"><img src="../../images/waltz-of-weights/level-3.webp" alt="A pink floating level with raised paths and red, yellow, and blue puzzle objects." loading="lazy" width="2560" height="1440" /></a>
<figcaption>An additional level with raised paths and objects at different heights.</figcaption>
</figure>

## Results & reflection

<span class="status accent">Playable jam prototype</span>

The team delivered a playable puzzle game in three days. Focusing on one shared rule gave the interactions and level puzzles a common foundation.

<details><summary>Evidence still to add</summary><p>The itch.io URL, a specific map revision and recorded playtest findings. The coordination experience is a design intent, not a measured outcome.</p></details>
