---
name: workout-tracker
description: Plan gym workouts with the Workout Tracker MCP tools. Search a rated exercise catalog, check a draft plan's weekly sets per muscle, and save plans to the user's account. Use when the user asks for a workout plan, a training split, exercise swaps, or a review of their current routine.
---

# Workout Tracker

[Workout Tracker](https://workout.lbyte.app) is a gym rotation planner. This plugin connects two hosted MCP servers:

- `workout-tracker`: catalog search and `analyze_plan`, no account needed
- `workout-tracker-account`: the user's plans, settings and history, with their personal access token

The planning loop spans both: search, draft, `analyze_plan`, revise, then `save_plan` and `set_active_plan`. For the full contract (plan shape, session length, gear and targets), fetch `https://workout.lbyte.app/llms.txt` before drafting a plan.

## Token

The account server needs the user's token in `WORKOUT_TRACKER_TOKEN`. Without it, Hermes skips that server and the catalog tools still work, so you can draft and analyze a plan but not save it. To save, ask the user to create a token in the Workout Tracker app under Settings > Agent access and add it to their Hermes profile's `.env`. Never log or repeat the token.
