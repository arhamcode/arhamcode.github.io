# Arham Code Blog

A personal tech blog built with Astro, Tailwind CSS, and Content Collections. Features bilingual support (English & Indonesian), dark/light mode, and a clean developer-centric design.

## Features

- **Astro + Tailwind CSS** - High performance static site
- **Bilingual Support** - English and Indonesian languages
- **Dark/Light Mode** - Theme toggle with persistent storage
- **Content Collections** - Type-safe Markdown/MDX blog posts
- **Code Highlighting** - Shiki syntax highlighting
- **SEO Optimized** - Meta tags, OpenGraph, RSS feed
- **Responsive Design** - Mobile-first approach

## Tech Stack

- **Framework:** Astro v6
- **Styling:** Tailwind CSS
- **Icons:** Lucide Astro
- **State:** Nano Stores
- **Content:** MDX with Zod validation

## Project Structure

```
src/
├── components/       # UI components (Header, Footer, PostCard, etc.)
├── content/
│   └── blog/       # Markdown blog posts
├── i18n/           # Translation files (en.json, id.json)
├── layouts/        # BaseLayout with SEO
├── pages/          # Route pages
│   └── [lang]/     # Dynamic language routes
├── stores/         # Nano Stores (theme)
└── utils/          # Helper functions
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding Blog Posts

Create a new Markdown file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Post description"
pubDate: 2026-03-17
tags: ["Flutter", "Dart"]
categories: ["Flutter"]
lang: en  # or 'id' for Indonesian
---

Your content here...
```

## Language

- Posts without `lang` default to English
- Use `lang: id` for Indonesian posts

## License

MIT