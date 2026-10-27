---
title: Hell or Sell
order: 1
genre: Inventory & economy
role: Producer / Lead Designer / Project Manager
summary: "Arrange shaped items in a limited inventory, then switch to a selling phase. A planned refactor explores timed combo clearing using the existing systems."
focus: [System Design, Inventory Management, Game Economy, Level Design, Production]
accent: rust
year: 'Since Sep 2025'
image: images/hell-or-sell/inventory-shop.webp
imageAlt: "Current Hell or Sell build: shaped items in an irregular inventory beside shop choices and upgrades."
---

## 01 — Overview

Hell or Sell currently uses two phases: players place items in a limited inventory, then switch phases to sell them. Item shapes and combinations connect spatial planning with the shop economy.

I am planning a refactor that retains the existing gameplay while exploring a different experience through the same systems: timed decisions, combo clearing, and space recovery. The captures below show the **current build**, not the proposed refactor.

| Project context | Details |
| --- | --- |
| Development | September 2025–present |
| Current status | Existing build; refactor direction planned |
| Tools / platform | Unity / Windows |
| Team | Approximately 15 people |
| My role | Producer / Lead Designer / Project Manager |

<figure>
<video controls playsinline preload="none" poster="../../images/hell-or-sell/inventory-shop.webp" aria-label="Hell or Sell current build reference footage">
<source src="../../videos/hell-or-sell/current-build.mp4" type="video/mp4" />
<a href="../../videos/hell-or-sell/current-build.mp4">Download the current build footage.</a>
</video>
<figcaption>Current build reference footage. This is an early gameplay recording, not a demonstration of the planned timed combo-clearing rules.</figcaption>
</figure>

## 02 — Design Challenge

The original direction aimed for deeper strategy, but several complex features exceeded the team's implementation capacity at the time. Cutting those features reduced complexity, yet also weakened the experience I wanted the systems to support.

I adjusted the direction to the team's capacity and circumstances, leading to the current version. That decision addressed what we could build, but left a design question: how could the existing framework support a more distinct and engaging decision loop?

This account reflects my production decisions and design assessment. It is not a measured playtest finding.

## 03 — Design Goals & Constraints

The next direction takes inspiration from the compact, time-sensitive decisions of Tetris. It keeps item shapes and combos, with the emphasis on making timely placement choices.

| Current build | Planned direction |
| --- | --- |
| Place items, then switch to selling | Form item combos within a time limit |
| Slower economy and inventory planning | Faster decisions under time pressure |
| Inventory supports planning and adjustment | Remove the ability to revise inventory arrangements |
| Space is managed across the two phases | Clear completed combos to make room for new items |

The intended experience develops through familiarity with the rules, changing levels, and light roguelite variation. These are design intentions; the new loop and its effects have not yet been validated. Exact timing, combo conditions, and placement restrictions still need to be specified and tested.

## 04 — My Contributions

- Designed core systems and the progression loop, using system diagrams and flowcharts to communicate their relationships.
- Defined interaction logic for inventory, shops, and items, including shared development terminology.
- Planned tutorial learning and the mechanics introduced across chapters and levels.
- Coordinated tasks, development priorities, and work across disciplines.
- Reassessed scope when implementation constraints affected the original experience, and developed the next refactor direction.

The screenshots and video document the team's existing build. My individual contribution is the design and production work described above.

## 05 — Design Decisions

### Adjust scope around implementation capacity

The original strategy direction depended on several complex features. When those features became difficult to implement, I reduced scope and adjusted direction to fit the team. The trade-off was a version we could pursue with our available capacity, at the cost of some intended strategic depth.

### Change the decision loop while reusing the framework

The planned refactor preserves item shapes and combos but changes their purpose: successful combinations would clear items and recover space under a time limit. Removing later inventory adjustments is intended to make immediate decisions carry more weight.

Reusing the existing framework may reduce the amount of new infrastructure required. The actual implementation effort and whether the changes create a sufficiently different experience remain to be tested.

### Preserve the existing gameplay as a reference

I intend to retain the previous gameplay while refactoring, keeping a concrete reference for the differences between slow resource planning and the proposed faster loop. I plan to use AI-assisted development to support this refactor.

## 06 — Prototype & Iteration

**Existing loop:** place shaped items → plan the inventory → switch phases → sell items.

**Proposed loop:** place items under time pressure → complete a combo → clear its items → use the recovered space for the next decision.

<figure>
<img src="../../images/hell-or-sell/sales-phase.webp" width="1551" height="866" loading="lazy" alt="Current selling phase with inventory on the left and a customer beside a highlighted item on the right." />
<figcaption>The current selling phase. This capture documents the existing two-phase structure.</figcaption>
</figure>

The next prototype needs to establish whether players can recognize useful combinations quickly enough, whether placement restrictions create understandable commitment, and whether space recovery sustains the pace. No outcome from that prototype is claimed here.

## 07 — Production & Collaboration

My production work connects the intended experience with what the team can implement. The important sequence was identifying an implementation constraint, reducing scope, recognizing the experience lost through those cuts, and proposing a new direction built around systems already available.

This is the reasoning behind the refactor, rather than a claim that every cut was successful. A representative task breakdown and before/after system diagram will be added when available.

<figure>
<img src="../../images/hell-or-sell/chapter-selection.webp" width="1570" height="872" loading="lazy" alt="Chapter selection interface with a central character and four chapter screens." />
<figcaption>Chapter-selection interface from the current build.</figcaption>
</figure>

## 08 — Outcome & Reflection

The existing build provides a concrete record of the placement-and-selling direction. The next phase is a planned refactor toward timed combo clearing; its rules, implementation, and player impact remain unverified.

The production lesson is that simplifying features also changes the decisions available to the player. When a cut removes the experience those features supported, the remaining systems need a clear new purpose. The refactor is my next attempt to give them that purpose.

<details><summary>Supporting materials still pending</summary><p>System diagrams, a representative scope or task breakdown, refactor comparisons, final rule specifications, playable links, asset credits, and actual test observations.</p></details>
