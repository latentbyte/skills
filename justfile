set shell := ["bash", "-euo", "pipefail", "-c"]

# list recipes
default:
    @just --list

# validate skill frontmatter and live llms.txt pointers
check:
    bun scripts/check.ts
alias lint := check
