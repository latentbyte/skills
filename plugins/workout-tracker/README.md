# Workout Tracker for Hermes Agent

Connects Hermes to [Workout Tracker](https://workout.lbyte.app), a gym rotation planner, through its hosted MCP servers. Your agent can search a rated exercise catalog and check a draft plan's weekly sets per muscle and session length with no account. With a token, it can also save the plan to your account and make it the one you train.

## Install

```sh
hermes plugins install workout-tracker
```

The catalog tools work right away. To let your agent save plans, create a personal access token in the Workout Tracker app under Settings > Agent access, then add it to your Hermes profile's `.env`:

```sh
WORKOUT_TRACKER_TOKEN=wt_...
```

## Tools

Server `workout-tracker` (`https://workout.lbyte.app/mcp/public`, no auth):

- `search_exercises`, `get_exercise`, `get_vocabulary`, `analyze_plan`

Server `workout-tracker-account` (`https://workout.lbyte.app/mcp/account`, needs the token; Hermes skips it when the token is unset):

- Plans: `list_plans`, `get_plan`, `save_plan`, `delete_plan`, `set_active_plan`
- Settings: `get_timing`, `set_timing`, `get_gear`, `set_gear`, `get_targets`, `set_targets`, `list_target_presets`, `save_target_preset`, `delete_target_preset`, `apply_target_preset`
- History (read-only): `get_history`

## What it does

- Every tool call goes to `workout.lbyte.app`. Account tools act on your Workout Tracker account with your token; the public server never receives it.
- The token covers plans, timing, gear, targets, target presets and read-only history. It cannot sync workouts or manage tokens. Revoke it in the app at any time.
- Both servers are marked untrusted, so Hermes asks before any tool that is not read-only.
- The tool set is served by the remote servers at runtime, not by this package.
- This package is configuration only: no local code, no telemetry.
