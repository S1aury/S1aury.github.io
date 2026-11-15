---
title: Hell or Sell
order: 3
genre: Inventory & economy
role: Game Director / Systems Designer / Producer
summary: "Buy and arrange shaped items in a limited backpack, then switch phases to sell."
focus: [Inventory Systems, Game Economy, Spatial Constraints, Game Direction]
accent: rust
year: 'Since Sep 2025'
image: images/hell-or-sell/inventory-shop.webp
imageAlt: "Current Hell or Sell build: shaped items in an irregular inventory beside shop choices and upgrades."
tier: main
contribution: "Core loop, inventory rules, economy and design direction."
outcome: "Released playable version · 12-person team."
decision: "Reduce complex effects; move variation into inventory shapes and spatial limits."
video: videos/hell-or-sell/current-build.mp4
team: "12 people"
platform: "Platform not confirmed"
videoTitle: "Inventory planning & phase switching · 5 seconds"
---

## Problem

The original design combined buffs, specialized item effects and complex numerical interactions. Playtest feedback and development constraints exposed a high learning cost and work beyond the team's programming capacity.

**My challenge:** preserve worthwhile inventory and economy choices while reducing the number of special rules.

## Decision



I cut high-cost effects and unnecessary numerical complexity, then moved variation into **inventory outlines, item shapes and level-specific spatial constraints**. The concept diagram below explains this shift; it does not reconstruct historical levels.

The trade-off was less systemic complexity, with more challenge carried by spatial planning. A different bag outline can change placement choices without requiring another specialized effect system.

<div class="inventory-evidence" id="inventory-evidence"><p class="eyebrow">DESIGN CONCEPT DIAGRAM</p><h3>Move the variation into space.</h3><div class="decision-compare"><div><span class="status">Earlier design direction</span><p>Buffs + specialized item effects + numerical interactions</p><small>More rules to learn and implement.</small></div><span class="compare-arrow" aria-hidden="true">→</span><div><span class="status accent">Chosen direction</span><p>Item shapes + inventory outlines + level constraints</p><small>Different placement choices around the same core action.</small></div></div><div class="board-comparison"><div><p>A · Open rectangle</p><div class="concept-board" aria-hidden="true"><i class="itemA"></i><i class="itemA"></i><i class=""></i><i class=""></i><i class=""></i><i class=""></i><i class="itemA"></i><i class=""></i><i class=""></i><i class=""></i><i class=""></i><i class=""></i><i class=""></i><i class=""></i><i class=""></i><i class="itemB"></i><i class="itemB"></i><i class=""></i><i class=""></i><i class=""></i><i class=""></i><i class="itemB"></i><i class="itemB"></i><i class=""></i></div></div><div><p>B · Narrower usable space</p><div class="concept-board" aria-hidden="true"><i class="blocked"></i><i class=""></i><i class=""></i><i class=""></i><i class=""></i><i class="blocked"></i><i class="blocked"></i><i class="itemA"></i><i class="itemA"></i><i class=""></i><i class=""></i><i class="blocked"></i><i class=""></i><i class="itemA"></i><i class=""></i><i class="itemB"></i><i class="itemB"></i><i class=""></i><i class="blocked"></i><i class=""></i><i class=""></i><i class="itemB"></i><i class="itemB"></i><i class="blocked"></i></div></div></div><p class="evidence-note">Illustration only. These boards explain the design principle; they are not historical levels, validated solutions, or playtest results. Colors distinguish example item groups; the L-shaped group moves when corner space is unavailable.</p></div>

## Loop & implementation

<span class="status accent">Implemented build</span>

**I designed** the gameplay loop, inventory rules, shop economy, combinations, progression, scoring, level rules and UI/UX requirements. I set the design direction while also handling production coordination. Programmers and artists built their respective parts.

<div class="system-map"><div><h3>What guides a purchase?</h3><p>Customer demand · current items · available money · remaining space</p></div><b>↓</b><div><h3>Buy & arrange</h3><p>An item must make sense economically and fit alongside the existing inventory.</p></div><b>↓</b><div><h3>Switch phases & sell</h3><p>What was bought and packed becomes the available stock for the selling phase.</p></div></div>

This diagram explains the design relationships, not a recorded transaction or an optimal strategy. The real screens below show the planning and selling phases.

<figure class="capture"><div class="capture-frame"><a href="../../images/hell-or-sell/inventory-shop.webp"><img src="../../images/hell-or-sell/inventory-shop.webp" alt="Current inventory and shop screen" loading="lazy" width="1600" height="900" /></a><span class="capture-pin" style="left:17%;top:40%" aria-hidden="true">1<span>↘</span></span><span class="capture-pin" style="left:15%;top:55%" aria-hidden="true">2<span>↘</span></span><span class="capture-pin" style="left:70%;top:59%" aria-hidden="true">3<span>↘</span></span></div><figcaption>Existing build · annotations explain visible inventory rules <a class="capture-full" href="../../images/hell-or-sell/inventory-shop.webp">Full image ↗</a></figcaption><ol class="capture-notes"><li><b>1</b><span>Irregular bag outline: the space available for placement.</span></li><li><b>2</b><span>Shaped items share the same limited grid.</span></li><li><b>3</b><span>Shop choices connect placement to the economy.</span></li></ol><details><summary>Enlarged inventory detail</summary><div class="detail-crop inventory"><img src="../../images/hell-or-sell/inventory-shop.webp" alt="Enlarged detail of inventory from the same screenshot" loading="lazy" /></div><p class="evidence-note">Enlarged crop of this same gameplay capture. Open the full screenshot for context.</p></details></figure>

<figure>
<img src="../../images/hell-or-sell/sales-phase.webp" width="1551" height="866" loading="lazy" alt="Current selling phase with inventory on the left and a customer beside a highlighted item on the right." />
<figcaption>Sell: packed inventory becomes available stock. Read this beside the planning screen to follow the same two-phase loop.</figcaption>
</figure>

### Production trade-off

I used playtest feedback and programming capacity to decide what to keep, cut or defer. I cut special item functions and reduced follow-up plans to bring the project toward a playable release. Team reviews translated these priorities into tasks; meetings themselves are not presented as evidence of results.

A real pair of alternative inventory layouts and a publishable rule or priority record are still needed to demonstrate the costs of specific choices.

## Results & reflection

<div class="outcome-grid"><div><h3>Delivered</h3><p>The 12-person team released a playable version. My work connected systems design, game direction and production decisions.</p></div><div><h3>Design lesson</h3><p>Removing a feature means deciding where the remaining game will get its variation. Here, I moved it closer to placement and space.</p></div></div>

<span class="status">Future exploration</span>

Timed combo clearing and Tetris-like elimination remain a possible next iteration. They are not features demonstrated in the current footage.

<details><summary>Evidence still to add</summary><p>A dated before-and-after build comparison, exact playtest observations and the Hell or Sell itch.io URL. No numerical improvement or measured player outcome is claimed.</p></details>
