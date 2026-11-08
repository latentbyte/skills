---
name: workout-tracker
description: Plan gym workouts with Workout Tracker at workout.lbyte.app. Search a rated exercise catalog, check a draft plan's weekly sets per muscle, and save plans to the user's account with their personal access token. Use when the user asks for a workout plan, a training split, exercise swaps, or a review of their current routine.
---

# Workout Tracker

[Workout Tracker](https://workout.lbyte.app) is a gym rotation planner. Catalog search and plan analysis are open to anyone. Saving a plan or reading the user's plans and history needs a personal access token the user creates in the app under Settings > Agent access.

## Before you call it

Fetch `https://workout.lbyte.app/llms.txt` and follow it. It is the current contract: auth, the planning loop, plan shape and endpoints. The OpenAPI spec is at `https://workout.lbyte.app/openapi.json`.

Do not rely on remembered field names. Read `llms.txt` once per session, before the first request. Never log or repeat the user's token.
