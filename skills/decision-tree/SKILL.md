---
name: decision-tree
description: Publish playable decision tree quizzes on decision-tree.lbyte.app and get a shareable link back. No account or key. Use when the user wants a branching quiz, a "which X are you" game, a troubleshooting flow, or any choose-your-path tree they can share with others.
---

# Decision Tree

[Decision Tree](https://decision-tree.lbyte.app) turns a branching tree of questions and answers into a quiz anyone can play from a link. An agent can publish one with a single HTTP request, no account or token needed. New trees are playable from their link right away and join the public gallery after an admin reviews them.

## Before you call it

Fetch `https://decision-tree.lbyte.app/llms.txt` and follow it. It is the current contract: the tree format, the publish request, responses and errors.

Do not rely on remembered field names. Read `llms.txt` once per session, before writing the tree.
