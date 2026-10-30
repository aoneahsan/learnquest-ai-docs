# learnquest-ai-docs — CLAUDE.md

**Last Updated:** 2026-10-30

## 🔴 Reopened 2026-10-30 — rebuilt with the app

The freeze of 2026-10-21 (`FROZEN.md`) ended when the owner reopened LearnQuest for redevelopment on 2026-10-30.
This public Docusaurus site documents **v1** until the rebuild reaches its docs-site module; then it is rewritten
for the new app at the same domain. Plans and decisions live in the private `learnquest-root` kit, never here —
**this repo is PUBLIC: no secrets, no `.env`, no private plans, pricing drafts or owner notes.**

## Identity

Repo `aoneahsan/learnquest-ai-docs` (public) · Docusaurus 3 (classic + Mermaid) · Yarn only · docs URL
`https://learnqai-docs.aoneahsan.com` (GitHub Pages, `static/CNAME`; never Firebase for a new docs deploy) · app
`https://learnqai.aoneahsan.com` · products speak as "the LearnQuest team" · ports 5962/5963.

## Gates and rules

`yarn install && yarn typecheck && yarn build` must exit 0. No dev server in agent runs. `docs/MANUAL-TASKS.md`
and `docs/_*/**` are excluded from the build. Document only real features, framed honestly.

v1's former agent guides are kept verbatim (unpublished) in `docs/_agent-guides/v1-CLAUDE.md` and
`docs/_agent-guides/v1-AGENTS.md`; read a section only when it routes the task.

## Context budget

| Field | Value |
|---|---|
| Last optimized | 2026-10-30 |
| Next routine optimization eligible | 2026-11-29 |
| Guide bytes | 1,990 B |
| Covered subtree | root guides |
| Method | 6.3 KB / 5.7 KB guides moved verbatim to unpublished `docs/_agent-guides/`; this file is identity + pointers |
| Fleet record | ~/Documents/ahsan-work/code/docs/tracking/project-context-budget-tracker.json |

## Stop-work Git gate

Before stopping, commit every legitimate change in this repository, fetch and merge `o/main`, push `main`, then verify
an empty worktree and `0 0` ahead/behind. Never stash, discard, reset, rebase, or force-push. Full workflow:
`~/.claude/rules/git-workflow.md`.
