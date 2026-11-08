---
name: humanize
description: Clean up drafts with the free Humanize API at humanize.lbyte.app. Removes stock phrases, wordy connectors, sentence-opening preambles and em-dash habits with fixed, deterministic rules, and returns before/after prose metrics. Use before publishing release notes, docs, emails, posts or other prose for human readers, or when asked to make text sound less generic.
---

# Humanize

[Humanize](https://humanize.lbyte.app) is a deterministic prose rewriter. It uses fixed phrase rules, not an AI model, so the same input and options always give the same output. The API is free, needs no key or account, and does not store text.

## Before you call it

Fetch `https://humanize.lbyte.app/llms.txt` and follow it. It is the current contract: endpoints, request fields, limits and usage rules. The OpenAPI spec is at `https://humanize.lbyte.app/openapi.json`.

Do not rely on remembered field names. Read `llms.txt` once per session, before the first request.
