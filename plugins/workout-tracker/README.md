# Workout Tracker for Hermes Agent

Connects Hermes to [Workout Tracker](https://workout.lbyte.app), a gym rotation planner, through its hosted MCP server. Your agent can search a rated exercise catalog, check a draft plan's weekly sets per muscle and session length, then save the plan to your account and make it the one you train.

## Install

```sh
hermes plugins install workout-tracker
```

Create a personal access token in the Workout Tracker app under Settings > Agent access, then add it to your Hermes profile's `.env`:

```sh
WORKOUT_TRACKER_TOKEN=wt_...
```

## Tools

- Catalog and analysis: `search_exercises`, `get_exercise`, `get_vocabulary`, `analyze_plan`
- Your plans: `list_plans`, `get_plan`, `save_plan`, `delete_plan`, `set_active_plan`
- Your settings: `get_timing`, `set_timing`, `get_gear`, `set_gear`, `get_targets`, `set_targets`, `list_target_presets`, `save_target_preset`, `delete_target_preset`, `apply_target_preset`
- History (read-only): `get_history`

## What it does

- Every tool call goes to `workout.lbyte.app` and acts on your Workout Tracker account with your token.
- The token covers plans, timing, gear, targets, target presets and read-only history. It cannot sync workouts or manage tokens. Revoke it in the app at any time.
- The server is marked untrusted, so Hermes asks before any tool that is not read-only.
- The tool set is served by the remote server at runtime, not by this package.
- This package is configuration only: no local code, no telemetry.
