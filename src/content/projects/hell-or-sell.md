---
title: Hell or Sell
order: 1
genre: Inventory & economy
role: Producer / Lead Game Designer
summary: "Inventory systems and a shop economy built around spatial choices. I led design and production, shifting complexity into inventory shapes and level constraints."
focus: [Inventory Systems, Game Economy, Spatial Constraints, Production Leadership]
accent: rust
year: 'Since Sep 2025'
image: images/hell-or-sell/inventory-shop.webp
imageAlt: "Current Hell or Sell build: shaped items in an irregular inventory beside shop choices and upgrades."
tier: main
---

## 01 — Overview

Hell or Sell connects spatial inventory decisions with a shop economy: players arrange shaped items in limited space, then switch to a selling phase. I designed the core loop and its connected systems while leading production for a 12-person team.

| Project | Details |
| --- | --- |
| Development | September 2025–present |
| Tools / platform | Unity / Windows |
| Team | 12 people |
| My role | Producer / Lead Game Designer |
| Delivered | Playable version released on itch.io |

<figure>
<video controls playsinline preload="none" poster="../../images/hell-or-sell/inventory-shop.webp" aria-label="Hell or Sell current build reference footage">
<source src="../../videos/hell-or-sell/current-build.mp4" type="video/mp4" />
<a href="../../videos/hell-or-sell/current-build.mp4">Download the current build footage.</a>
</video>
<figcaption>Gameplay footage of the inventory and shop systems in the existing build.</figcaption>
</figure>

## 02 — Design Problem

The original design combined buffs, specialized item effects, special inventory mechanics, and complex numerical interactions. Playtest feedback and development constraints exposed two connected problems: the systems asked too much of players learning the game, and they exceeded the team's programming capacity.

Adding more systems was not enough to create better decisions. I needed to keep the strategic value of inventory and economy choices while reducing the rules players had to track and the features the team had to implement.

## 03 — My Decision: Move Variation into Space

I cut high-cost systems and unnecessary numerical complexity, then placed more emphasis on different inventory shapes, level-specific spatial constraints, and inventory-management challenges.

That kept variation close to the central action: deciding what to fit into the available space and how that inventory supports the selling phase. A different inventory shape can change placement decisions without requiring another specialized effect system.

The trade-off was deliberate: less systemic complexity, with more of the challenge carried by spatial planning.

## 04 — Systems I Designed

I defined the core gameplay loop, inventory rules, shop economy, item combinations, progression, scoring, and level-specific rules. I also specified the UI/UX requirements needed to make those rules actionable for players and implementable by the team.

The loop links two kinds of decisions:

- **Inventory:** how to use limited space for shaped items and combinations.
- **Economy:** how the arranged inventory feeds into selling and subsequent choices.

My work covered design and implementation coordination; programmers and artists built their respective parts of the game.

## 05 — The Playable Loop

**Arrange items → manage limited inventory space → switch phases → sell items.**

The existing build brings inventory placement and shop interactions together. The selling screen below shows how the arranged items carry forward into the next phase.

<figure>
<img src="../../images/hell-or-sell/sales-phase.webp" width="1551" height="866" loading="lazy" alt="Current selling phase with inventory on the left and a customer beside a highlighted item on the right." />
<figcaption>The current selling phase. This capture documents the existing two-phase structure.</figcaption>
</figure>

## 06 — Production & Scope

As Producer, I organized weekly design, programming, and art subgroup meetings, plus at least one full-team meeting each week. I coordinated cross-disciplinary work, feature priorities, and the scope of what we could deliver.

The scope decision connected production with gameplay: I used the intended player choices, playtest feedback, and programming capacity to decide which systems justified their cost. The resulting direction focused on inventory shapes and spatial constraints instead of expanding the effect and buff systems.

<figure>
<img src="../../images/hell-or-sell/chapter-selection.webp" width="1570" height="872" loading="lazy" alt="Chapter selection interface with a central character and four chapter screens." />
<figcaption>Chapter-selection interface from the current build.</figcaption>
</figure>

## 07 — Delivered Work & Reflection

The team released a playable version on itch.io. My contribution combined systems design with the production decisions needed to move that design into a build.

This project made scope a design question as well as a scheduling question: when removing a feature, I had to decide where the remaining gameplay would get its variation and meaningful choices.

## 08 — Current Exploration

I am exploring Tetris-like elimination and timed combo clearing as a possible next iteration. This remains a design direction, separate from the released placement-and-selling gameplay shown here.
