---
title: "We'll Be Right Back"
order: 2
genre: Multiplayer cooperative horror survival
role: Producer / Product Manager / Lead Game Designer
summary: "Explore random maps together, gather supplies and complete objectives while avoiding monsters, then escape into harder levels."
focus: [Cooperative Survival, Information Limits, Core Loop]
accent: olive
tier: main
links:
  - label: View game on itch.io
    url: https://moonchaserlu.itch.io/well-be-right-back
contribution: "Version 5 core loop, objectives, cooperation, map-generation requirements and vertical-slice scope."
outcome: "Playable multiplayer build · ongoing development and optimization."
decision: "Use limited information to turn teammates' unexpected encounters into shared tension."
team: "10 people"
year: "Early October–present"
platform: "PC · Unity · Steam multiplayer"
coverImage: images/well-be-right-back/cover.webp
coverAlt: "We'll Be Right Back title artwork with recording-frame graphics"
image: images/well-be-right-back/steam-multiplayer.png
imageAlt: "Current Steam multiplayer build with another player in a flashlight-lit room."
---

## Core loop

**Explore together → split up for supplies and clues → complete the main objective → reach extraction → enter a harder level.** Staying longer increases monster pressure.

<div class="state-compare"><div><h3>Main objective</h3><p>Unlocks extraction. It does not directly award a reward.</p></div><div><h3>Optional risks</h3><p>Side objectives and anomalies offer rewards, giving the team a reason to consider doing more before leaving.</p></div></div>

This is the version 5 design. The game has no fixed final level planned: progressing into harder levels is the long-term goal. Steam multiplayer, state synchronization, in-game voice, main and side objectives, and some anomalies are playable in the current build. Development and optimization continue; these captures are snapshots of individual features rather than a complete playthrough.

## My contribution

I serve as **Producer, Product Manager and Lead Game Designer** on the GDIM 167A project. I organize team communication, follow progress and help steer changes in gameplay direction.

I designed and documented the fifth version of the core loop, main and side objectives, map-generation requirements, player cooperation and the vertical slice. System-by-system programming and asset credits will be added once the actual division of work is confirmed; these systems are not attributed to me alone.

## Information & tension

<span id="decision"></span>

**Observed in the vent playtest:** a player following behind could not see the route or monster visible to the player ahead. Limited visibility created tension. Players also mistook an unexpected teammate for a monster.

<div class="system-map"><div><h3>Front player</h3><p>Sees the route or threat ahead.</p></div><b>↕</b><div><h3>Following player</h3><p>Lacks that same view; a teammate's sudden appearance can be mistaken for a threat.</p></div></div>

**Design judgment:** preserve opportunities for players to have incomplete information and share unexpected encounters. These qualitative observations support a direction to explore, not proof that every group will respond the same way.

The diagram explains the reported playtest situation. It is not a map, gameplay capture or measured test result. A recording, the precise setup and subsequent changes remain to be added.

## Current build

**Playable now:** Steam multiplayer, synchronized game state, in-game voice, main objectives, side objectives and some anomalies. The project began in early October and currently has a team of 10.

The following five captures show different areas of the current project. They document team-produced work; my design and coordination responsibilities are described above. Asset authorship and system-level implementation credits remain to be added.

<div class="build-gallery"><figure><a href="../../images/well-be-right-back/props.png"><img src="../../images/well-be-right-back/props.png" alt="Various current in-game props under flashlight illumination" loading="lazy"/></a><figcaption><strong>1 · In-game props.</strong> Current props grouped under flashlight illumination.</figcaption></figure><figure><a href="../../images/well-be-right-back/scene-shader.png"><img src="../../images/well-be-right-back/scene-shader.png" alt="Dark interior with red lighting and flashlight-lit surfaces" loading="lazy"/></a><figcaption><strong>2 · Scene shader.</strong> Current materials, red ambient lighting and flashlight illumination.</figcaption></figure><figure><a href="../../images/well-be-right-back/monster-item-test.png"><img src="../../images/well-be-right-back/monster-item-test.png" alt="Monster and item debugging in a gray test arena" loading="lazy"/></a><figcaption><strong>3 · Monster and item testing.</strong> A debug arena for checking monster and item interactions.</figcaption></figure><figure><a href="../../images/well-be-right-back/modular-map.png"><img src="../../images/well-be-right-back/modular-map.png" alt="Seed-based modular map generation preview with connected regions and rooms" loading="lazy"/></a><figcaption><strong>4 · Modular random map generation.</strong> A seed-based layout preview shows how modular rooms and routes are assembled.</figcaption></figure><figure><a href="../../images/well-be-right-back/steam-multiplayer.png"><img src="../../images/well-be-right-back/steam-multiplayer.png" alt="A teammate appears in the current Steam multiplayer session" loading="lazy"/></a><figcaption><strong>5 · Steam multiplayer.</strong> A teammate in a shared Steam session. The current build supports state synchronization and in-game voice.</figcaption></figure></div>

## Development & remaining evidence

The team is continuing to build and optimize the game. Cooperative ghost capture, more monsters, the full reward structure and cross-level progression remain future work unless separately confirmed.

The game page is available on itch.io through the link at the top. A complete gameplay recording is still to be added. Still to add: detailed team credits, the exact start date, and follow-up vent-playtest observations and revisions. No completed playthrough, measured performance result or retest improvement is claimed.
