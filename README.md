# Latent Byte agent skills

Agent skills for [Latent Byte](https://latentbyte.com) apps. Each skill teaches a coding agent (Claude Code, Codex, Cursor and others) when to use an app and where to find its API contract.

| Skill | App | Auth |
| --- | --- | --- |
| `humanize` | [humanize.lbyte.app](https://humanize.lbyte.app): deterministic prose cleanup | none |
| `decision-tree` | [decision-tree.lbyte.app](https://decision-tree.lbyte.app): publish shareable decision tree quizzes | none |
| `workout-tracker` | [workout.lbyte.app](https://workout.lbyte.app): exercise catalog, plan analysis, saved plans | none to browse, user token to save |

## Install

```sh
npx skills add latentbyte/skills --skill humanize
```

Use `--skill '*'` for all of them, or `--list` to see what is available.

## How the skills stay current

Each skill is short: a description that tells the agent when to use it, plus a pointer to the app's `llms.txt`. The app serves `llms.txt` itself, so API changes reach agents as soon as the app deploys, with no update to this repo or reinstall.
