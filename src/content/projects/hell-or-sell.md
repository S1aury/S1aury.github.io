---
title: Hell or Sell
order: 1
genre: Inventory & economy
role: Producer / Lead Designer / Project Manager
summary: "Plan item combinations around inventory attributes and order requirements, then choose when to submit and when to preserve resources."
focus: [System Design, Inventory Management, Game Economy, Level Design, Production]
accent: rust
year: 'Since Sep 2025'
---

## 01 — Overview

Hell or Sell connects inventory planning, item combinations, customer orders, sales, and progression. Players work with the attributes of the items they hold and the requirements of available orders, deciding when to submit and when to keep resources for later.

| Project context | Details |
| --- | --- |
| Development | Began September 2025; currently in final development |
| Tools / platform | Unity / Windows |
| Team | Approximately 15 people |
| My role | Producer / Lead Designer / Project Manager |

## 02 — Design Challenge

The order-settlement discussion centered on player control: should an order settle automatically when its conditions are met, or should the player choose when to submit it? A connected question was how single-order and multi-order settlement should consume inventory items.

These questions arose in design discussions. They are not presented as problems discovered through playtesting.

## 03 — Design Goals & Constraints

The goal of the proposal is to make submission timing part of resource planning. Keeping items and settling several orders together should represent different choices, with clear information about which items will be consumed.

The design also creates an implementation requirement: the interface must distinguish an order that is ready to submit from one that has already been settled, and explain the scope of inventory consumption before confirmation.

## 04 — My Contributions

My responsibilities include the core systems and progression loop, system diagrams, level design, and the sequence in which mechanics are introduced. Alongside design, I organize workflows, tasks, and development priorities.

This case study focuses on the order-submission and inventory-settlement proposal. The final implementation status and approved supporting excerpts still need to be documented.

## 05 — Design Decisions

> **Design proposal — not a validated result.** The following rules describe the proposed direction. Final implementation and player impact have not yet been verified.

### Give players control over submission timing

- **Problem:** Automatic settlement leaves no explicit choice of when to submit a fulfilled order.
- **Options:** Settle automatically, or indicate that an order is ready and ask the player to confirm submission.
- **Decision:** Use manual confirmation after displaying a ready-to-submit state.
- **Reasoning:** Keep timing available as a player decision rather than resolving it solely through a condition check.
- **Trade-off:** Add an interaction step and require clear readiness and confirmation feedback.

### Separate keeping resources from cashing out together

The discussion compared partial inventory consumption with clearing the whole inventory.

| Proposed submission | Inventory treatment | Intended choice |
| --- | --- | --- |
| Single order | Preserve items unrelated to the submitted order | Keep resources available for later combinations and orders |
| Multiple orders | Clear the inventory and provide an additional reward | Commit resources to a concentrated settlement |

The intended trade-off is between retaining future options and settling several orders together. It has not been established through testing that either option produces the intended behavior.

### Retain limited value from unused items

Under the proposal, items not used by orders during a multi-order settlement convert into score at a lower rate. This preserves some value after the inventory is cleared.

The conversion rate is unresolved here. If it is too generous, matching orders could become less important; this is a design risk, not an observed test result.

## 06 — Prototype & Iteration

The documented design direction moved from automatically fulfilling orders toward showing a ready-to-submit state and letting the player confirm. It also separated single-order and multi-order settlement.

The hypothesis is that these changes preserve choices about timing and resource use. Implementation comparisons and actual test observations are still pending; no improvement in player behavior is claimed.

## 07 — Production & Collaboration

As Producer / Project Manager, I coordinate priorities, task arrangements, and design implementation. Technical difficulties have also raised a production question: how to bring the project to completion without extending development indefinitely.

> **TODO:** Add one specific scope or scheduling decision, the alternatives considered, and the resulting task changes. The current account establishes responsibility, not a verified delivery outcome.

## 08 — Outcome & Reflection

The project is currently in final development. The final implementation and effectiveness of the settlement proposal remain unconfirmed.

The design reasoning identifies a concrete communication cost: giving players a submission choice also requires them to understand readiness, rewards, and item consumption. Whether those choices work as intended remains a question for implementation review and testing.

<details><summary>Supporting materials — pending</summary><p>TODO: approved system diagram, order-rule excerpts, gameplay captures, implementation status, and actual test observations. External links will be added when supplied.</p></details>
