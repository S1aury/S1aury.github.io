---
title: RatO.oLight
order: 1
genre: 2D exploration & puzzle platformer
role: Lead Game Designer / Level Designer
summary: "A puzzle-platformer where colored light changes how objects behave."
focus: [Light-Based Puzzles, 10 Built Levels, Player Learning, Unity Level Building]
accent: blue
year: 'Oct 2024'
coverImage: images/ratoolight/cover.png
coverAlt: "RatO.oLight gameplay with the mouse, crate, cheese and colored platforms"
image: images/ratoolight/level-introduction.webp
imageAlt: "RatO.oLight laboratory level with the mouse, control prompts, cheese, platforms, and colored structures."
links:
  - label: Download on itch.io
    url: https://youxixo.itch.io/rat
  - label: Watch the promotional video on Bilibili
    url: https://www.bilibili.com/video/BV17W1jYhEJy/
tier: main
contribution: "Sole game designer; designed and built all 10 rooms in Unity."
outcome: "Released game · 3 weeks · approximately 15 minutes."
decision: "Preserve the light theme; shift the challenge from precision jumping to environmental puzzles."
video: videos/ratoolight/trailer.mp4
team: "8 people"
platform: "Unity · download on itch.io"
videoTitle: "Watch Trailer · 29 seconds"
---

## Goal & controls

Explore the laboratory, collect cheese and open routes by changing light and object states. **A/D:** move; **Space:** jump; **F:** interact with switches. Open the map or press **R** to replay.

## Light rules

<div class="rule-grid"><div class="rule-red"><h3>Red → Larger</h3><div class="rule-symbol">□ → ▣</div><p>Objects grow. Their changed size changes the space they occupy.</p></div><div class="rule-blue"><h3>Blue → Frozen</h3><div class="rule-symbol">Moving → Still</div><p>Objects freeze. A moving object becomes a fixed part of the puzzle.</p></div><div class="rule-green"><h3>Green → Movable</h3><div class="rule-symbol">Fixed → Movable</div><p>Objects can move, changing the available arrangement.</p></div></div>

**Each light color also removes platforms of the same color.** The diagrams above explain confirmed rules; they are not before-and-after gameplay captures. Combined-color effects and their priority are not specified here.

## A teaching puzzle

**Teaching purpose: crates can activate pressure plates, too.** This sequence isolates the crate–plate relationship before later rooms combine light rules.

<div class="steps"><figure><a href="../../images/ratoolight/puzzle-19.jpg"><img src="../../images/ratoolight/puzzle-19.jpg" alt="Mouse beside a crate; a green barrier blocks the cheese" loading="lazy"/></a><figcaption><strong>1 · Read the obstacle.</strong> The barrier blocks the cheese; the crate offers something the player can move.</figcaption></figure><figure><a href="../../images/ratoolight/puzzle-20.jpg"><img src="../../images/ratoolight/puzzle-20.jpg" alt="Pushed crate falls toward a pressure plate" loading="lazy"/></a><figcaption><strong>2 · Push the crate.</strong> Moving the crate off the platform brings it toward the plate below.</figcaption></figure><figure><a href="../../images/ratoolight/puzzle-21.jpg"><img src="../../images/ratoolight/puzzle-21.jpg" alt="Crate on plate; green barrier removed" loading="lazy"/></a><figcaption><strong>3 · Plate pressed, path opened.</strong> The crate holds the plate down without the mouse standing on it.</figcaption></figure></div>

## Teaching & iteration

<div class="flow-strip"><span>Movement</span><b>→</b><span>Crates & switches</span><b>→</b><span>Single-color rules</span><b>→</b><span>Combined light rules</span></div>

Early playtests showed that players struggled to understand the objective and combine mechanics. **I added transition rooms and adjusted content, difficulty and subtle guidance.** This records the observed problem and my response; no follow-up testing result is claimed.

## Direction & scope

<span id="decision"></span><span id="03--my-decision-change-what-light-does"></span>

The initial light-and-shadow concept emphasized precision platforming. Programming demands and jump tuning were too costly for a three-week production window. I kept the light theme but made light change environmental objects: observation and rule application became the main challenge.

<div class="compare-media"><figure><a href="../../images/ratoolight/early-prototype.webp"><img src="../../images/ratoolight/early-prototype.webp" alt="Early Unity precision-platforming prototype" loading="lazy"/></a><figcaption><strong>Original direction.</strong> Traversal depended more on movement and precisely tuned jumps.</figcaption></figure><figure><a href="../../images/ratoolight/level-green-light.webp"><img src="../../images/ratoolight/level-green-light.webp" alt="Released laboratory light puzzle" loading="lazy"/></a><figcaption><strong>Released direction.</strong> Light, objects and routes carry the puzzle requirements.</figcaption></figure></div>

## Contribution & results

As the **sole Game Designer**, I defined mechanics, controls, puzzle logic, win conditions and UI requirements. **I designed and built all 10 rooms in Unity** with prefabs, triggers and object placement. The eight-person team released a complete game in three weeks, with approximately 15 minutes of play.

<details><summary>Team art / credits</summary><img src="../../images/ratoolight/mouse-and-cheese.webp" alt="Team-created mouse character artwork" width="120" height="120" loading="lazy"/><div class="team-sprites"><img src="../../images/ratoolight/mouse-animation-01.webp" alt="Team-created mouse animation one" width="64" height="64" loading="lazy"/><img src="../../images/ratoolight/mouse-animation-02.webp" alt="Team-created mouse animation two" width="64" height="64" loading="lazy"/></div><p>Character art and animation are team contributions, not evidence of my production decisions.</p></details>

Trailer: 29 seconds, available at the top of this page and on Bilibili. Full game: itch.io, approximately 15 minutes. Download operating systems and a recorded retest remain unconfirmed.
