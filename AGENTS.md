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

## Gitignore Hygiene (IRON-SOLID)
`.gitignore` stays current with the project structure — ignore only recoverable artifacts (build/`dist`/`www`/`node_modules`/logs/caches/IDE), never lose source. Custom rules always present: `*.ignore.*`, `project-record-ignore/`. This is a **PUBLIC** repo -> secrets/`.env`/keystores are NEVER tracked.
Full rule + private/public protocol: `~/.claude/rules/project-config.md`.
Gitignore Last Verified: 2026-06-24


## Sub-agents & Skills — Main-Context-First (IRON-SOLID)
Default/built-in sub-agents (`general-purpose`, `Explore`, `Plan`, `claude`, `fork`, …) do NOT have
access to `/skills`, so delegating to them silently SKIPS the skills RULE #0 requires. Do all
skill-relevant work in the **MAIN context**; use a sub-agent ONLY when a **custom** agent exists in
`.claude/agents/` for that job; a default `Explore`/`Plan` agent is allowed ONLY for read-only,
no-skill search/exploration. When a relevant skill is missing, **install/enable it** rather than
proceeding skill-less. (Owner directive 2026-07-11; full text in `~/.claude/CLAUDE.md`.)
