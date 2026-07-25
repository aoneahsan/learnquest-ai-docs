# AGENTS.md — learnquest-ai-docs

Last Updated: 2026-06-23

> AI agent instructions for the LearnQuest AI documentation site. Rules mirror `CLAUDE.md` — keep both in sync.

Public Docusaurus documentation site for the **LearnQuest AI** app
(https://learnqai.aoneahsan.com). This repo is **PUBLIC**; the app's code repo stays private.

## Identity

| Key | Value |
|---|---|
| Repo | `aoneahsan/learnquest-ai-docs` (PUBLIC) |
| Type | Docusaurus 3 (classic preset + Mermaid) |
| Package manager | yarn (NEVER npm/pnpm) |
| Author | Ahsan Mahmood (aoneahsan@gmail.com) |
| Docs URL | https://learnqai-docs.aoneahsan.com (Firebase target `learnquest-ai-docs` + GitHub Pages) |
| App | https://learnqai.aoneahsan.com · Play `com.aoneahsan.learnquest` |
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

<!-- RULE:main-context-model-workflow v2026-07-16 -->
## Main-Context + Skills + Model Workflow (IRON-SOLID — CRITICAL)
1. **NO default/built-in sub-agents** (`general-purpose`, `Explore`, `Plan`, `claude`, `fork`, …) for ANY work in
   this project — they cannot invoke /skills, which RULE #0 makes mandatory. Do ALL work (planning, implementation,
   review, exploration) in the MAIN context. A sub-agent is allowed ONLY when a CUSTOM agent exists in
   `.claude/agents/` for that exact job.
2. **Skills always:** before any task, scan the available-skills list and invoke EVERY relevant skill; if a needed
   skill is missing, download/enable/install it (or use the nearest installed equivalent and say so) — never
   proceed skill-less.
3. **Model workflow:** PLAN and REVIEW on **Fable 5**; EXECUTE the approved plan on **Opus 4.8**. Plans in
   `~/.claude/plans/`; multi-phase features keep a resumable tracker (`docs/features/<slug>/00-tracker.json`),
   resumed rather than re-planned from zero.

Global records (rules, policy, audit reports) live in the `ahsan-notebook` repo at
`static/assets/claude-code/`; the `~/.claude/…` paths are symlinks into it. Full text: `~/.claude/CLAUDE.md`.
(Owner directives 2026-07-11 / 2026-07-14; fleet-rolled 2026-07-16.)
