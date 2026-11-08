# lb-skills

Public agent skills for Latent Byte apps, listed on skills.sh. Source apps live in private repos.

## Design

- Each `skills/<name>/SKILL.md` is a thin pointer: frontmatter `name` and `description`, a short app blurb, and the app's live `llms.txt` URL in backticks.
- API details belong in the app's `llms.txt`, served by the app. Never copy endpoints, fields or limits here; they drift.
- Edit a skill only when the trigger (description), the app's scope, or its `llms.txt` URL changes.
- Add a skill only for an app that serves a self-contained, agent-facing `llms.txt`.
- Keep the README table in sync with `skills/`.

## Commands

- `just check`: validates frontmatter (name matches directory, description at most 1024 chars) and fetches every `llms.txt` pointer, failing on non-200 or HTML fallback.
- `bunx skills add . --list`: confirms the skills CLI discovers each skill.

Run public prose (README, descriptions) through the `humanize` skill before publishing.

## Hermes plugins

- `plugins/<name>/` holds Hermes Agent portable packages (`plugin.json`, `mcp.json`, `skills/`, `README.md`), configuration only.
- The Hermes catalog pins an exact commit (`plugin-catalog/<name>.yaml` in `NousResearch/hermes-agent`, with `subdir: plugins/<name>`). A change here reaches Hermes users only through a new SHA-bump PR there; bump `version` in `plugin.json` and the entry together.
- Validate with `hermes plugins validate plugins/<name>` (Hermes installs editable from a clone: `uv sync --python 3.14 --extra mcp`, `HERMES_HOME` pointed at a temp dir).
