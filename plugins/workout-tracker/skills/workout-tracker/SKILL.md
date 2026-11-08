---
name: workout-tracker
description: Plan gym workouts with the Workout Tracker MCP tools. Search a rated exercise catalog, check a draft plan's weekly sets per muscle, and save plans to the user's account. Use when the user asks for a workout plan, a training split, exercise swaps, or a review of their current routine.
---

# Workout Tracker

[Workout Tracker](https://workout.lbyte.app) is a gym rotation planner. This plugin connects its hosted MCP server, which explains its planning loop in its own instructions: search, draft, `analyze_plan`, revise, `save_plan`, `set_active_plan`.

For the full contract (plan shape, session length, gear and targets), fetch `https://workout.lbyte.app/llms.txt` before drafting a plan.

## Token

The server needs the user's personal access token in `WORKOUT_TRACKER_TOKEN`. If tools fail because it is missing or rejected, ask the user to create one in the Workout Tracker app under Settings > Agent access and add it to their Hermes profile's `.env`. Never log or repeat the token.
