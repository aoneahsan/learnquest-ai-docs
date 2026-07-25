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

## Hosting (dual)

The site deploys to both **Firebase Hosting** and **GitHub Pages**:

- **Firebase:** `yarn firebase:deploy` (target `learnquest-ai-docs`). Requires Firebase CLI auth.
- **GitHub Pages:** the `.github/workflows/deploy-pages.yml` workflow builds and deploys on push to
  `main`. Custom domain is set in `static/CNAME` (`learnqai-docs.aoneahsan.com`).

Both are user-only steps (they require account access / DNS).

## Structure

```
docs/                 Markdown documentation (intro, getting-started, features, guides, faq, author)
src/                  Homepage + theme CSS
static/               robots.txt, llms.txt, CNAME, brand SVG assets
docusaurus.config.ts  Site config (SEO head tags + JSON-LD, navbar, footer)
sidebars.ts           Sidebar layout
firebase.json         Firebase Hosting config (+ headers)
```

## License

Documentation © Ahsan Mahmood. LearnQuest AI is free to use.
