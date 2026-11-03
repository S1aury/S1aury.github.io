---
title: Waltz of Weights
order: 3
genre: 3D puzzle game
role: Gameplay Designer / Level Designer
summary: "Two controllable characters, three weight states, and puzzles built around combining their abilities. Designed and prototyped with a three-person team in three days."
focus: [Three-Weight Mechanic, Dual-Character Interaction, Rapid Prototyping]
accent: olive
year: 'Nov 2025'
image: images/waltz-of-weights/level-1.webp
imageAlt: A floating puzzle level with colored blocks, gates, and pressure plates.
tier: supporting
---

## 01 — Overview

A fixed top-down 3D puzzle game made in Unity during a three-day miHoYo game jam. I worked as Gameplay Designer / Level Designer with two programmers; the team released the game on itch.io.

| Project | Details |
| --- | --- |
| Date / duration | November 2025 · Three days |
| Team | 3 people |
| Tools / platform | Unity / Windows |
| My role | Gameplay Designer / Level Designer |

## 02 — Design Problem

For the theme “Dance with the World,” I focused on coordination: how could one player combine two characters' different abilities to solve a puzzle within a small, rapidly buildable game?

## 03 — My Decision: One Rule, Two Characters

The keyboard controls the main character, while the mouse controls a separate lightweight character. Possession lets the mouse-controlled character change the main character's weight, connecting the two inputs through a shared rule.

| Weight | State |
| --- | --- |
| Heavy · Red | The mouse-controlled character possesses the main character. |
| Medium · Yellow | The main character acts without possession. |
| Light · Blue | The mouse-controlled character acts independently. |

Heavier weights can affect lighter ones. Blocks and pressure plates turn this relationship into puzzle requirements.

## 04 — Interaction in Play

- **Keyboard:** move the main character; press F to push a box and R to restart.
- **Mouse:** hold a blue pressure plate, or select a blue box and drag its arrows.

<figure>
<video controls playsinline preload="none" poster="../../images/waltz-of-weights/level-1.webp" aria-label="Waltz of Weights gameplay demo 1">
<source src="../../videos/waltz-of-weights/demo-1.mp4" type="video/mp4" />
<a href="../../videos/waltz-of-weights/demo-1.mp4">Watch gameplay demo 1</a>
</video>
<figcaption>A level with separated platforms, movable blocks, and colored gates.</figcaption>
</figure>

## 05 — Puzzle Design

I designed and built maps around choosing which character, weight, and interaction to use. The intended pleasure comes from combining abilities to find a solution, with the fixed overhead view keeping the puzzle space visible.

<figure>
<video controls playsinline preload="none" poster="../../images/waltz-of-weights/level-2.webp" aria-label="Waltz of Weights gameplay demo 2">
<source src="../../videos/waltz-of-weights/demo-2.mp4" type="video/mp4" />
<a href="../../videos/waltz-of-weights/demo-2.mp4">Watch gameplay demo 2</a>
</video>
<figcaption>A second level brings all three weight colors into the same puzzle.</figcaption>
</figure>

<figure>
<a href="../../images/waltz-of-weights/level-3.webp"><img src="../../images/waltz-of-weights/level-3.webp" alt="A pink floating level with raised paths and red, yellow, and blue puzzle objects." loading="lazy" width="2560" height="1440" /></a>
<figcaption>An additional level with raised paths and objects at different heights.</figcaption>
</figure>

## 06 — My Contribution

I defined the gameplay logic and puzzle structure, built the maps, and worked with two programmers to bring the mechanics into the prototype.

## 07 — Three-Day Scope

I kept the design centered on the three-weight mechanic and the relationship between the two characters. That gave the team a shared foundation for building interactions and puzzles within the jam's time limit.

## 08 — Delivered Work

The team released a playable puzzle game on itch.io. The project shows how I can take a clear mechanic, define its interaction logic, and turn it into a focused puzzle experience under a short deadline.
