# AGENTS.md — learnquest-ai-docs

Last Updated: 2026-06-23

> AI agent instructions for the LearnQuest AI documentation site. Rules mirror `CLAUDE.md` — keep both in sync.

Public Docusaurus documentation site for the **LearnQuest AI** app
(https://learnquest.aoneahsan.com). This repo is **PUBLIC**; the app's code repo stays private.

## Identity

| Key | Value |
|---|---|
| Repo | `aoneahsan/learnquest-ai-docs` (PUBLIC) |
| Type | Docusaurus 3 (classic preset + Mermaid) |
| Package manager | yarn (NEVER npm/pnpm) |
| Author | Ahsan Mahmood (aoneahsan@gmail.com) |
| Docs URL | https://learnquest-ai-docs.aoneahsan.com (Firebase target `learnquest-ai-docs` + GitHub Pages) |
| App | https://learnquest.aoneahsan.com · Play `com.aoneahsan.learnquest` |
| Sibling app repo | `/home/ahsan/Documents/01-code/projects/learnquest-ai/` (PRIVATE) |
| Content tracker | `docs/tracking/learnquest-ai-docs-content-tracker.json` |

## Build gates

```bash
yarn install
yarn typecheck     # must exit 0
yarn build         # docusaurus build → ./build, must exit 0
```

Agent does NOT run dev servers (`yarn start`/`serve`) or deploy — verify with `yarn build` + `yarn typecheck` only.

## Critical rules

| Rule | Detail |
|---|---|
| Yarn only | Never npm/pnpm. |
| No dev server / no deploy in agent runs | User runs and deploys. |
| Honest framing | Document only REAL app features. "AI" tools are client-side / free no-key public APIs, not a paid LLM. "777 activities" = procedural generation, framed honestly. |
| No secrets | PUBLIC repo — never commit keys/.env/service accounts. |
| One commit per task | No per-file commits. |

## Dual hosting

- Firebase: `yarn firebase:deploy` (target `learnquest-ai-docs`).
- GitHub Pages: `.github/workflows/deploy-pages.yml` (push to main) + `static/CNAME`.

Both deploys + DNS are USER-ONLY.
