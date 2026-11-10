## 🔴 CRITICAL — PROJECT FROZEN (2026-10-21)

**This is an idea project. It was frozen on 2026-10-21 at commit `7bf769d85705e54b38be296bdc1ce5f1ddd43ee2` on branch `main`.**

- Do **NOT** edit, fix, upgrade, build, deploy, document or "improve" anything in this repository.
- It will only ever be **rebuilt from scratch** as `~/Documents/01-code/production-projects/learnquest-ai-root/`
  (this code cloned beside it as `learnquest-ai-old/` for reference), with a click dummy, a Story Bible, a Supabase
  backend and a docs site — and **only when the owner types, in ALL CAPS, an explicit request naming this
  project**.
- Any other request to work here is refused. Rule: `~/.claude/rules/idea-projects-frozen.md`.
- Ledger: private repo `aoneahsan/projects-finalization-record` → `idea-projects/FREEZE-LEDGER.md`.

---

# LearnQuest AI — Documentation

Public documentation site for **[LearnQuest AI](https://learnqai.aoneahsan.com)**, a free gamified
learning app for kids ages 1–15. Built with [Docusaurus](https://docusaurus.io/).

- **Live docs:** https://learnqai-docs.aoneahsan.com
- **App (web):** https://learnqai.aoneahsan.com
- **Google Play:** https://play.google.com/store/apps/details?id=com.aoneahsan.learnquest
- **Author:** [Ahsan Mahmood](https://aoneahsan.com)

## Local development

This project uses **yarn** (never npm/pnpm).

```bash
yarn install      # install dependencies
yarn start        # local dev server (port 5962)
yarn build        # production build → ./build
yarn typecheck    # tsc --noEmit
yarn serve        # preview the built site (port 5963)
```

## Hosting

GitHub Pages serves the `gh-pages` branch at `learnqai-docs.aoneahsan.com` (`static/CNAME`, `static/.nojekyll`).
Run `yarn typecheck` and `yarn build`, check the built site, then push the `build/` tree to `gh-pages` with an
ordinary push. There is no GitHub Actions workflow and no Firebase hosting.

## Structure

```
docs/                 Markdown documentation (intro, getting-started, features, guides, faq, author)
src/                  Homepage + theme CSS
static/               robots.txt, llms.txt, CNAME, brand SVG assets
docusaurus.config.ts  Site config (SEO head tags + JSON-LD, navbar, footer)
sidebars.ts           Sidebar layout
```

## License

Documentation © Ahsan Mahmood. LearnQuest AI is free to use.
