/* ============================================================
   FE Checklist — data + app
   ============================================================ */

const CHECKLIST = [
  {
    id: "workflow",
    title: "Workflow — When You Have Questions or Gaps",
    icon: "?",
    track: "core",
    desc: "Don't sit blocked, and don't invent things silently. Use this escalation order whenever you hit a question, a missing screen, or undefined content.",
    items: [
      {
        id: "wf.ask-questions",
        title: "Have ANY question? Ask in the team channel before you guess.",
        desc: "10 minutes of asking saves 2 hours of rework. No question is too small — if you're unsure, ask. The whole team benefits from the answer.",
        severity: "required",
      },
      {
        id: "wf.content-with-ai",
        title: "Missing copy / SEO tags / alt text / error messages? Draft with ChatGPT (or any LLM), then refine.",
        desc: "Use AI for first drafts of: <title>, meta description, OG titles & descriptions, image alt text, empty-state copy, error messages, button labels. Always review and tighten before shipping — AI drafts are a starting point, not a final answer.",
        severity: "required",
        example: "Prompt template:\n  \"Write a 150–160 char meta description for a page about <X>.\n   Tone: <brand voice>. Audience: <who>. Include keywords: <list>.\"",
      },
      {
        id: "wf.ask-designer",
        title: "UI screen / state / breakpoint NOT clear in Figma? Ask the UI designer FIRST — never invent.",
        desc: "If a state (hover, error, empty, loading), a breakpoint, an icon, or a spacing value is missing or ambiguous in Figma, ask the designer before building. Inventing it leads to rework and 'this isn't what I designed' meetings.",
        severity: "required",
      },
      {
        id: "wf.small-ai-build",
        title: "Small/isolated UI piece NOT in Figma and designer not blocking? Generate with an AI UI tool, then align to the design system.",
        desc: "For small gaps (a 404 illustration, a simple empty-state card, a placeholder skeleton) you can use Google Stitch, v0, Galileo AI, or similar. Generate fast, then re-skin to match your tokens (spacing, color, type) before merging.",
        severity: "recommended",
      },
      {
        id: "wf.no-placeholder-ship",
        title: "Never ship placeholder content (lorem ipsum, 'TBD', random stock photos)",
        desc: "Flag the gap, request real content, ship when ready. Placeholders shipped to production = embarrassment + emergency hotfix.",
        severity: "required",
      },
      {
        id: "wf.codebase-conventions",
        title: "Match existing codebase conventions before introducing new ones",
        desc: "If the project already uses BEM, you use BEM. Already on Tailwind, you stay on Tailwind. Introducing new patterns mid-project requires a team discussion first.",
        severity: "required",
      },
      {
        id: "wf.log-blockers-in-pr",
        title: "Document any assumption, AI-generated content, or open question in the PR description",
        desc: "If you used ChatGPT for copy, an AI tool for a small component, or made a judgment call — say so in the PR. Reviewers should not have to guess what was hand-built vs generated, or what's still pending.",
        severity: "required",
      },
    ],
  },

  {
    id: "structure",
    title: "Project Structure",
    icon: "▣",
    track: "core",
    desc: "A clean, predictable folder layout the whole team can navigate without asking.",
    items: [
      {
        id: "structure.root",
        title: "Root contains: index.html, /assets, /css, /js, /pages",
        desc: "A predictable root prevents 'where does this go?' debates and makes onboarding trivial.",
        severity: "required",
        example: "/\n├─ index.html\n├─ /assets\n│   ├─ /images\n│   ├─ /icons\n│   └─ /fonts\n├─ /css\n├─ /js\n└─ /pages",
      },
      {
        id: "structure.readme",
        title: "README.md with setup, run, build, and deploy instructions",
        desc: "Anyone (designer, BE dev, new hire, future you) should be able to run the project in under 5 minutes. Document EVERY non-obvious step: required tools/versions (Node, Sass, etc.), install commands, dev server, build output folder, and how to deploy. If the project uses Sass, say which compiler, the watch command, and where the compiled CSS lands. If it uses any build tool (Vite, Webpack, Gulp), say so. Don't assume the next person knows.",
        severity: "required",
        example: '# Project Name\n\n## Requirements\n- Node >= 18\n- Sass (Dart Sass)  →  `npm i -g sass`\n\n## Install\n```\nnpm install\n```\n\n## Run (dev)\n```\n# compile Sass on change → outputs to /css/main.css\nsass --watch scss/main.scss css/main.css\n\n# then serve the project (any static server)\nnpx serve .\n```\n\n## Build (production)\n```\nsass scss/main.scss css/main.css --style=compressed --no-source-map\n```\n\n## Deploy\nUpload everything EXCEPT /scss and /node_modules to the server.\nEntry point: index.html',
      },
      {
        id: "structure.gitignore",
        title: ".gitignore configured (node_modules, .env, .DS_Store, build/)",
        desc: "Avoid polluting the repo with environment-specific or generated files.",
        severity: "required",
      },
      {
        id: "structure.editorconfig",
        title: ".editorconfig for consistent indentation and line endings",
        desc: "Removes 'the file changed because my editor used tabs' diffs.",
        severity: "recommended",
      },
      {
        id: "structure.linter",
        title: "Prettier and a linter (ESLint / Stylelint) configured",
        desc: "Style debates die when a formatter decides. CI should fail on lint errors.",
        severity: "recommended",
      },
      {
        id: "structure.no-deadcode",
        title: "No commented-out code blocks left behind",
        desc: "Use git history. Dead comments rot and confuse readers.",
        severity: "required",
      },
      {
        id: "structure.feature-folders",
        title: "Group files by feature once project grows beyond ~5 pages",
        desc: "/pages/checkout/, /pages/checkout/checkout.css, etc. Avoid one giant /css folder.",
        severity: "recommended",
      },
      {
        id: "structure.no-console",
        title: "No console.log / debugger statements in production code",
        desc: "Clutters DevTools and may leak data. Strip with build step or lint rule.",
        severity: "required",
      },
    ],
  },

  {
    id: "naming",
    title: "File & Asset Naming",
    icon: "✎",
    track: "core",
    desc: "Consistent, URL-safe names — your CDN, server, and teammates will thank you.",
    items: [
      {
        id: "naming.lowercase",
        title: "All filenames lowercase",
        desc: "Some servers (Linux) are case-sensitive while others (Windows/macOS default) are not — mixed casing breaks deploys silently.",
        severity: "required",
        example: "✗ Hero-Banner.JPG\n✓ hero-banner.jpg",
      },
      {
        id: "naming.no-spaces",
        title: "No spaces in filenames — use kebab-case or snake_case",
        desc: "Spaces become %20 in URLs, break shell scripts, and look ugly in logs. Pick ONE convention and stick to it.",
        severity: "required",
        example: '✗ "my img.png"\n✓ my-img.png  (kebab — preferred for web)\n✓ my_img.png  (snake — ok if consistent)',
      },
      {
        id: "naming.descriptive",
        title: "Descriptive names — never img1.jpg, photo.png, asdf.svg",
        desc: "A name should answer 'what is this?' without opening the file.",
        severity: "required",
        example: "✗ img1.jpg\n✓ hero-banner-summer-sale.jpg",
      },
      {
        id: "naming.no-special",
        title: "No special characters (#, %, &, !, parentheses, accents)",
        desc: "These need URL encoding and break browsers/servers/build tools inconsistently.",
        severity: "required",
      },
      {
        id: "naming.consistent-ext",
        title: "Lowercase file extensions (.jpg not .JPG, .svg not .SVG)",
        desc: "Mixed casing breaks case-sensitive servers and bypasses cache rules.",
        severity: "required",
      },
      {
        id: "naming.grouped",
        title: "Assets grouped by type: /images, /icons, /fonts, /videos",
        desc: "Easier to apply per-type rules (compression, caching, lazy-load).",
        severity: "recommended",
      },
      {
        id: "naming.modern-formats",
        title: "Use modern formats (.webp / .avif) with fallbacks where needed",
        desc: "Often 30–80% smaller than .jpg/.png. Use <picture> for safe fallback.",
        severity: "recommended",
      },
      {
        id: "naming.versioning",
        title: "Cache-bust versioned assets (logo.v2.svg or build hashes)",
        desc: "Browsers aggressively cache static assets — without busting, users see stale UI after deploys.",
        severity: "recommended",
      },
    ],
  },

  {
    id: "html",
    title: "HTML & Semantics",
    icon: "<>",
    track: "core",
    desc: "Use the right tag for the job. Semantic HTML is free a11y and SEO.",
    items: [
      {
        id: "html.doctype",
        title: "<!DOCTYPE html> declared as the very first line",
        desc: "Triggers standards mode. Without it browsers fall back to quirks mode and rendering goes weird.",
        severity: "required",
      },
      {
        id: "html.lang",
        title: 'lang attribute set on <html> (e.g. <html lang="en">)',
        desc: "Screen readers use it to choose pronunciation. Search engines and translation tools rely on it.",
        severity: "required",
      },
      {
        id: "html.charset",
        title: "<meta charset=\"UTF-8\"> as the first <meta>",
        desc: "Must appear in the first 1024 bytes. Otherwise non-ASCII characters render as gibberish.",
        severity: "required",
      },
      {
        id: "html.viewport",
        title: 'Viewport meta: <meta name="viewport" content="width=device-width, initial-scale=1.0">',
        desc: "Without this, mobile browsers render at desktop width and zoom out — unreadable.",
        severity: "required",
      },
      {
        id: "html.one-h1",
        title: "Exactly one <h1> per page (the page topic)",
        desc: "Heading hierarchy is the document outline. Multiple H1s confuse assistive tech and SEO.",
        severity: "required",
      },
      {
        id: "html.heading-order",
        title: "Headings in order — never skip levels (h2 → h4)",
        desc: "Screen-reader users navigate by heading level. Skipping breaks document flow.",
        severity: "required",
      },
      {
        id: "html.landmarks",
        title: "Semantic landmarks: <header>, <nav>, <main>, <footer>, <aside>",
        desc: "Assistive tech jumps between landmarks. <div> gives nothing.",
        severity: "required",
      },
      {
        id: "html.button-vs-link",
        title: "Buttons use <button>, navigation uses <a href>",
        desc: "<a> = goes somewhere. <button> = does something. Don't fake either with <div onclick>.",
        severity: "required",
      },
      {
        id: "html.label",
        title: "Every form input has an associated <label>",
        desc: "Wrap with <label> or use for=/id=. Required for screen readers and increases the click target.",
        severity: "required",
      },
      {
        id: "html.no-divsoup",
        title: "Use <ul>/<ol>/<li> for lists, <table> only for tabular data",
        desc: "Lists styled as flex rows are still lists. <table> for layout is a 2005 mistake.",
        severity: "required",
      },
      {
        id: "html.no-inline-style",
        title: "Avoid inline style=\"\" attributes",
        desc: "Breaks CSP, defeats caching, scatters design decisions. Use classes.",
        severity: "recommended",
      },
      {
        id: "html.validates",
        title: "HTML passes the W3C validator",
        desc: "Catches unclosed tags, illegal nesting, duplicate IDs. Run before every release.",
        severity: "recommended",
      },
      {
        id: "html.unique-ids",
        title: "Every id is unique on the page",
        desc: "Duplicate IDs break document.getElementById, label[for=...], anchor links, ARIA references.",
        severity: "required",
      },
    ],
  },

  {
    id: "seo",
    title: "Head, SEO & Meta",
    icon: "⌖",
    track: "core",
    desc: "What search engines, browsers, and link previews see before they see your content.",
    items: [
      {
        id: "seo.title",
        title: "Unique <title> per page (50–60 characters)",
        desc: "First impression in tabs and search results. Generic titles tank CTR.",
        severity: "required",
      },
      {
        id: "seo.title-format",
        title: 'Page <title> follows the format: "Website Name | Page Title"',
        desc: "Team standard. Brand name first, pipe separator with single spaces around it, page name last. Consistency across every page = professional, recognizable in tab strips, and easier to template server-side.",
        severity: "required",
        example: '✓ <title>Acme Store | Home</title>\n✓ <title>Acme Store | Contact Us</title>\n✓ <title>Acme Store | Summer Sale 2026</title>\n\n✗ <title>Home</title>                       — no brand\n✗ <title>Home - Acme Store</title>           — wrong separator, brand last\n✗ <title>acme store|home</title>             — casing, no spaces around pipe',
      },
      {
        id: "seo.description",
        title: 'Meta description, 150–160 chars, written for humans',
        desc: "Search engines may ignore it for ranking but use it for the result snippet.",
        severity: "required",
        example: '<meta name="description" content="Affordable, sustainable kitchenware shipped from Cairo. Free returns within 30 days.">',
      },
      {
        id: "seo.canonical",
        title: "Canonical URL set on every page",
        desc: "Prevents duplicate-content penalties when the same page is reachable via multiple URLs.",
        severity: "required",
        example: '<link rel="canonical" href="https://example.com/products/kettle">',
      },
      {
        id: "seo.robots",
        title: "Meta robots tag explicit (index/noindex, follow/nofollow)",
        desc: "Default is index,follow. Be explicit on private/admin/staging pages — and double-check before deploy.",
        severity: "required",
      },
      {
        id: "seo.favicon",
        title: "Favicon present — multiple sizes including apple-touch-icon",
        desc: "Required for every site. Different surfaces (browser tab, bookmark, iOS home screen, Android install prompt, Windows tile) use different sizes. Missing = the default browser placeholder, which looks unfinished. Place files in the project root or /assets/icons/ and reference from <head>.",
        severity: "required",
        example: '<!-- in <head> -->\n<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">\n<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png">\n<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">\n<link rel="icon" type="image/svg+xml" href="/favicon.svg">\n<link rel="manifest" href="/site.webmanifest">\n\n<!-- export from a single source SVG using https://realfavicongenerator.net -->',
      },
      {
        id: "seo.theme-color",
        title: 'Theme-color meta (<meta name="theme-color" content="#...">)',
        desc: "Sets the browser chrome color on mobile (Chrome Android, Safari iOS 15+).",
        severity: "recommended",
      },
      {
        id: "seo.sitemap",
        title: "sitemap.xml present and submitted to Search Console",
        desc: "Helps crawlers discover pages — especially for sites without strong internal linking.",
        severity: "recommended",
      },
      {
        id: "seo.robots-txt",
        title: "robots.txt at the root, allows public, disallows private",
        desc: "Controls what crawlers index. Always link to sitemap.xml from here.",
        severity: "recommended",
      },
      {
        id: "seo.structured-data",
        title: "Structured data (JSON-LD) — Organization, Product, Article, etc.",
        desc: "Powers rich results in Google (stars, prices, breadcrumbs). Test with Google's Rich Results tool.",
        severity: "recommended",
      },
      {
        id: "seo.hreflang",
        title: "hreflang on multilingual sites",
        desc: "Tells Google which version to serve to which audience. Skip if single-language only.",
        severity: "optional",
      },
      {
        id: "seo.nostaging",
        title: "Production has noindex stripped, staging has noindex set",
        desc: "The #1 SEO disaster: launching a site with noindex still set, or staging getting indexed.",
        severity: "required",
      },
    ],
  },

  {
    id: "social",
    title: "Open Graph & Social Cards",
    icon: "↗",
    track: "core",
    desc: "How your site looks when shared to WhatsApp, Slack, X, LinkedIn, Discord.",
    items: [
      {
        id: "social.og",
        title: "og:title, og:description, og:image, og:url, og:type set",
        desc: "Without these, link previews show a stripped raw URL — looks unprofessional.",
        severity: "required",
        example: '<meta property="og:title" content="…">\n<meta property="og:description" content="…">\n<meta property="og:image" content="https://…/share-1200x630.jpg">\n<meta property="og:url" content="https://…">\n<meta property="og:type" content="website">',
      },
      {
        id: "social.twitter",
        title: 'twitter:card set to "summary_large_image"',
        desc: "X (Twitter) uses this if present, otherwise falls back to OG. Big-card preview > tiny thumbnail.",
        severity: "recommended",
      },
      {
        id: "social.image-size",
        title: "OG image is 1200×630 px, < 1MB, with text safely inside center area",
        desc: "Smaller images get cropped or rejected. Edges get cut by some platforms.",
        severity: "required",
      },
      {
        id: "social.absolute-urls",
        title: "All og:image URLs are absolute (https://…), not relative",
        desc: "Crawlers don't resolve relative URLs — preview will silently fail.",
        severity: "required",
      },
      {
        id: "social.tested",
        title: "Tested in Facebook Sharing Debugger and Twitter Card Validator",
        desc: "These tools also clear the cache — useful when fixing previews after a deploy.",
        severity: "recommended",
      },
    ],
  },

  {
    id: "a11y",
    title: "Accessibility (a11y)",
    icon: "A11",
    track: "core",
    desc: "Build it usable for everyone. Avoids lawsuits, broadens audience, often improves SEO too.",
    items: [
      {
        id: "a11y.alt",
        title: 'All <img> have alt — alt="" for purely decorative images',
        desc: 'Missing alt is the #1 a11y issue. Decorative images need alt="" so screen readers skip them.',
        severity: "required",
      },
      {
        id: "a11y.contrast",
        title: "Text contrast ≥ 4.5:1 (≥ 3:1 for ≥18pt or bold ≥14pt)",
        desc: "WCAG AA. Light gray on white is the most common violation.",
        severity: "required",
      },
      {
        id: "a11y.focus",
        title: "Visible focus styles on all interactive elements",
        desc: "Never `outline: none;` without a replacement. Keyboard users need to see where they are.",
        severity: "required",
      },
      {
        id: "a11y.tab-order",
        title: "Tab order matches visual order (don't fight the DOM)",
        desc: "Avoid positive tabindex values. If tab order looks wrong, restructure the HTML.",
        severity: "required",
      },
      {
        id: "a11y.skip-link",
        title: "Skip-to-content link as the first focusable element",
        desc: "Lets keyboard/screen-reader users bypass the navigation on every page.",
        severity: "recommended",
      },
      {
        id: "a11y.aria",
        title: "ARIA used only when native HTML can't do the job",
        desc: "First rule of ARIA: don't use ARIA. Native <button>, <nav>, <dialog> beat role=\"button\" every time.",
        severity: "recommended",
      },
      {
        id: "a11y.keyboard",
        title: "Site fully usable without a mouse",
        desc: "Try unplugging your mouse and completing the main user flow.",
        severity: "required",
      },
      {
        id: "a11y.reduced-motion",
        title: "Respects prefers-reduced-motion",
        desc: "Animations can trigger vestibular disorders. Disable or shorten under the media query.",
        severity: "required",
        example: "@media (prefers-reduced-motion: reduce) {\n  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }\n}",
      },
      {
        id: "a11y.no-autoplay",
        title: "No autoplaying audio/video with sound",
        desc: "Hostile UX, blocked by most browsers anyway, worst for assistive tech users.",
        severity: "required",
      },
      {
        id: "a11y.live-regions",
        title: "Dynamic content updates announced via aria-live",
        desc: 'Toasts, error banners, search-result updates need aria-live="polite" or "assertive".',
        severity: "recommended",
      },
      {
        id: "a11y.tested-sr",
        title: "Tested with at least one screen reader (VoiceOver, NVDA, TalkBack)",
        desc: "Lighthouse can't catch confusing announcements. 10 minutes with VoiceOver finds real bugs.",
        severity: "recommended",
      },
      {
        id: "a11y.zoom",
        title: "Layout works at 200% browser zoom without horizontal scroll",
        desc: "Low-vision users zoom heavily. Fixed-px layouts break here first.",
        severity: "recommended",
      },
    ],
  },

  {
    id: "design-system",
    title: "Design System & Tokens",
    icon: "▦",
    track: "core",
    desc: "Hardcoded values are how design systems die. Centralize in CSS variables.",
    items: [
      {
        id: "ds.spacing-scale",
        title: "Spacing scale defined (4px or 8px base unit)",
        desc: "All margins/paddings reference the scale. No 13px paddings hand-tuned per component.",
        severity: "required",
        example: ":root {\n  --s-1: 4px;\n  --s-2: 8px;\n  --s-3: 12px;\n  --s-4: 16px;\n  --s-6: 24px;\n  --s-8: 32px;\n}",
      },
      {
        id: "ds.no-magic-spacing",
        title: "No magic-number spacing — every margin/padding maps to the scale",
        desc: "If you write `margin: 13px;`, either the scale is wrong or the design is wrong. Fix one of them.",
        severity: "required",
      },
      {
        id: "ds.color-tokens",
        title: "Color palette as CSS variables — semantic, not literal",
        desc: "--color-text, --color-bg, --color-primary. NOT --blue-500 sprinkled across components.",
        severity: "required",
        example: ":root {\n  --color-bg: #fff;\n  --color-text: #1a1f36;\n  --color-primary: #3956d6;\n  --color-danger: #c13d3d;\n}",
      },
      {
        id: "ds.no-hex-in-components",
        title: "No raw hex/rgb in component styles",
        desc: "Always reference a token. Otherwise rebrands and dark mode become a search-and-replace nightmare.",
        severity: "required",
      },
      {
        id: "ds.radius-shadow",
        title: "Border-radius and shadow scales defined",
        desc: "Three sizes is usually enough. Random radii break visual rhythm.",
        severity: "recommended",
      },
      {
        id: "ds.zindex-scale",
        title: "z-index scale defined and managed",
        desc: "z-index: 9999 is a code smell. Define base, dropdown, modal, toast — and stick to them.",
        severity: "recommended",
        example: ":root {\n  --z-base: 1;\n  --z-dropdown: 100;\n  --z-sticky: 200;\n  --z-modal: 1000;\n  --z-toast: 1100;\n}",
      },
      {
        id: "ds.breakpoints",
        title: "Breakpoint values centralized (and documented)",
        desc: "Same numbers across all stylesheets. New devs shouldn't guess where the tablet break is.",
        severity: "recommended",
      },
      {
        id: "ds.motion-tokens",
        title: "Animation duration & easing tokens defined",
        desc: "Random durations make the UI feel chaotic. 120/220/400ms covers most cases.",
        severity: "optional",
      },
    ],
  },

  {
    id: "typography",
    title: "Typography",
    icon: "Aa",
    track: "core",
    desc: "Type sets the tone. Get this wrong and the site feels off no matter how nice the rest looks.",
    items: [
      {
        id: "typo.scale",
        title: "Font sizes follow a typographic scale (use rem, not px)",
        desc: "Using rem respects user zoom and accessibility prefs. A scale (e.g. 0.875/1/1.125/1.5/2 rem) keeps rhythm.",
        severity: "required",
      },
      {
        id: "typo.base",
        title: "Base body font-size = 16px (1rem). Don't go smaller.",
        desc: "Smaller browser default = many users have trouble reading. iOS also auto-zooms forms with <16px inputs.",
        severity: "required",
      },
      {
        id: "typo.line-height",
        title: "Line-height set: 1.4–1.6 for body, 1.1–1.3 for headings",
        desc: "Default line-height varies between fonts and is usually too tight for body copy.",
        severity: "required",
      },
      {
        id: "typo.font-display",
        title: "Web fonts loaded with font-display: swap (or optional)",
        desc: "Without this, text is invisible until the font downloads — that's the FOIT bug. swap = show fallback first.",
        severity: "required",
        example: "@font-face {\n  font-family: 'Inter';\n  src: url('inter.woff2') format('woff2');\n  font-display: swap;\n}",
      },
      {
        id: "typo.preload-critical",
        title: "Critical fonts preloaded",
        desc: "Avoids FOUT/CLS when the body font is the first thing the user sees.",
        severity: "recommended",
        example: '<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>',
      },
      {
        id: "typo.fallback-stack",
        title: "System fallback stack defined",
        desc: 'Don\'t end with just `sans-serif`. Use system fonts as fallback so unloaded text matches metrics.',
        severity: "recommended",
        example: "font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;",
      },
      {
        id: "typo.weights",
        title: "Limited weights/families — every weight is a network cost",
        desc: "Each font weight is a separate file. 3 weights × 2 styles = 6 downloads.",
        severity: "recommended",
      },
      {
        id: "typo.variable-font",
        title: "Use variable fonts when you need many weights",
        desc: "One file covers all weights and widths — typically smaller than even 2-3 static weights combined.",
        severity: "optional",
      },
      {
        id: "typo.mobile-min",
        title: "Mobile body text never smaller than 16px",
        desc: "Anything smaller is hard to read. iOS will also auto-zoom on focus for sub-16px form inputs.",
        severity: "required",
      },
    ],
  },

  {
    id: "responsive",
    title: "Responsiveness & Layout",
    icon: "▭",
    track: "core",
    desc: "It must work on a 320px phone in landscape and a 4K monitor — and everything between.",
    items: [
      {
        id: "rsp.mobile-first",
        title: "Mobile-first CSS (write base styles → enhance with min-width media queries)",
        desc: "Mobile is the constrained case. Easier to add complexity than strip it back.",
        severity: "recommended",
      },
      {
        id: "rsp.tested-widths",
        title: "Tested at: 320, 375, 414, 768, 1024, 1280, 1440, 1920px",
        desc: "Devtools responsive mode → cycle widths. The bug between two breakpoints is the most common one.",
        severity: "required",
      },
      {
        id: "rsp.no-h-scroll",
        title: "No horizontal scroll at any width on mobile",
        desc: "Caused by a too-wide image, a long word with no overflow rule, or 100vw vs 100% confusion.",
        severity: "required",
      },
      {
        id: "rsp.touch-targets",
        title: "Touch targets ≥ 44×44px (Apple) / 48×48dp (Android)",
        desc: "Smaller targets = misses, frustration. Even tiny icons need padding to a real hit area.",
        severity: "required",
      },
      {
        id: "rsp.real-devices",
        title: "Tested on at least one real iOS and one real Android device",
        desc: "Browser devtools lie about scrolling, focus rings, viewport, font rendering, and gestures.",
        severity: "required",
      },
      {
        id: "rsp.orientation",
        title: "Tested in both portrait and landscape on mobile",
        desc: "Landscape often hides important UI behind the address bar — or breaks fixed nav.",
        severity: "recommended",
      },
      {
        id: "rsp.fluid-images",
        title: "Images: max-width: 100%; height: auto;",
        desc: "Default is the only thing standing between you and overflowing every container.",
        severity: "required",
      },
      {
        id: "rsp.modern-layout",
        title: "Use Flexbox / Grid — no float-based layouts",
        desc: "Grid for 2D, Flex for 1D. floats were a 2010 hack.",
        severity: "required",
      },
      {
        id: "rsp.container-queries",
        title: "Container queries used for component-level responsiveness",
        desc: "When a card needs to look different based on its container (sidebar vs main), use @container, not viewport queries.",
        severity: "optional",
      },
      {
        id: "rsp.no-fixed-h",
        title: "No fixed heights on text containers",
        desc: "Content is variable. Fixed heights cause clipping when font-size grows or translation expands the text.",
        severity: "required",
      },
    ],
  },

  {
    id: "fidelity",
    title: "Design Fidelity (Figma)",
    icon: "Fg",
    track: "core",
    desc: "Compare the live page side-by-side with Figma at every breakpoint. The build is not done until it visually matches the design.",
    items: [
      {
        id: "fid.match-min",
        title: "Visual fidelity ≥ 85% match to Figma at every breakpoint",
        desc: "Hard rule for the team. Use a pixel-overlay tool (PerfectPixel, Pixelay, or Figma's 'Compare in Browser') to verify. < 85% = back to dev.",
        severity: "required",
      },
      {
        id: "fid.side-by-side",
        title: "Each breakpoint compared side-by-side with its Figma frame (mobile, tablet, desktop)",
        desc: "Open the Figma frame next to the browser window. If Figma has 3 frames, you do 3 comparisons — not just one.",
        severity: "required",
      },
      {
        id: "fid.responsive-breakpoints",
        title: "Responsive breakpoints match the breakpoints in Figma exactly",
        desc: "If the designer set a tablet frame at 768px, your tablet styles activate at 768px. Don't invent new breakpoints.",
        severity: "required",
      },
      {
        id: "fid.tested-real-devices",
        title: "Responsive layout verified on a real iPhone AND a real Android device",
        desc: "DevTools responsive mode lies about scrolling, address bar, focus rings, and safari-only quirks. Real device or it doesn't count.",
        severity: "required",
      },
      {
        id: "fid.spacing",
        title: "Spacing matches Figma — within ±2px, and snapped to the spacing scale",
        desc: "Use Figma's inspect panel to read exact margins/paddings. Then map each one to a token (--s-2, --s-4, etc.).",
        severity: "required",
      },
      {
        id: "fid.typography",
        title: "Font family, size, weight, line-height, letter-spacing match Figma",
        desc: "Inspect every text style. Don't eyeball it — designers obsess over this and clients notice.",
        severity: "required",
      },
      {
        id: "fid.colors",
        title: "Colors match Figma exactly — verified with an eyedropper",
        desc: "'Looks close' is not close enough. Use the DevTools color picker on Figma and on your build, compare hex.",
        severity: "required",
      },
      {
        id: "fid.radii-shadows",
        title: "Border-radius and shadows match Figma (use 'Copy as CSS' from Figma)",
        desc: "Figma exports the exact shadow values. Paste, don't approximate. Subtle shadow mismatches make the whole UI feel cheap.",
        severity: "required",
      },
      {
        id: "fid.icons",
        title: "Icons exported from Figma as SVG — not redrawn or substituted",
        desc: "Designer's icons have specific stroke widths, alignments, and proportions. Substituting from a free icon set breaks visual consistency.",
        severity: "required",
      },
      {
        id: "fid.all-states",
        title: "All component states implemented: default, hover, active, focus, disabled, loading, empty, error",
        desc: "Figma usually shows them as variants. Skip none. Hover and focus especially get forgotten by devs.",
        severity: "required",
      },
      {
        id: "fid.variants",
        title: "All component variants implemented (button primary/secondary/ghost/danger, etc.)",
        desc: "If Figma has 5 button variants, the build has 5 button variants — even if only 2 are used today.",
        severity: "required",
      },
      {
        id: "fid.edge-content",
        title: "Edge cases tested: very long text, no data, very small images, missing values",
        desc: "Designs are made with idealized content. Real data has 47-character titles and missing avatars. Test with both.",
        severity: "required",
      },
      {
        id: "fid.no-h-scroll-mobile",
        title: "Zero horizontal scroll on every mobile width (320 / 360 / 375 / 414 px)",
        desc: "The single most common responsive bug. One overflowing element and the whole layout shifts.",
        severity: "required",
      },
      {
        id: "fid.animations",
        title: "Animations and micro-interactions match Figma's prototype (timing, easing, distance)",
        desc: "If the prototype shows a 200ms ease-out slide, the build matches. Random durations make the UI feel unpolished.",
        severity: "recommended",
      },
      {
        id: "fid.dark-mode",
        title: "If designed: dark mode matches the dark Figma variant",
        desc: "Same fidelity standard. Don't ship dark mode as 'CSS variable swap and hope for the best'.",
        severity: "recommended",
      },
      {
        id: "fid.cross-browser-visual",
        title: "Visual fidelity verified in Chrome AND Safari AND Firefox",
        desc: "Safari renders gradients, fonts, and form controls differently. Firefox has its own quirks. Check all three.",
        severity: "required",
      },
      {
        id: "fid.designer-signoff",
        title: "Designer reviewed the live build and signed off before merge",
        desc: "The single best safeguard against 'it ships and the designer is shocked'. 10 minutes of review, hours of rework saved.",
        severity: "required",
      },
    ],
  },

  {
    id: "css",
    title: "CSS Quality",
    icon: "{}",
    track: "core",
    desc: "Stylesheet hygiene that survives growth and team turnover.",
    items: [
      {
        id: "css.organized",
        title: "Stylesheet organized: reset → tokens → base → layout → components → utilities",
        desc: "Predictable file order = faster navigation and fewer specificity wars.",
        severity: "recommended",
      },
      {
        id: "css.naming",
        title: "Consistent class-naming convention (BEM, suffixed utilities, etc.)",
        desc: "Pick one and document it. Mixing camelCase, kebab-case, and BEM in one file is chaos.",
        severity: "required",
        example: "/* BEM */\n.card { }\n.card__title { }\n.card--featured { }",
      },
      {
        id: "css.no-important",
        title: "No !important — except in utility classes or to override 3rd-party CSS",
        desc: "!important wars escalate fast. Fix specificity instead.",
        severity: "required",
      },
      {
        id: "css.shallow",
        title: "Selectors max 3 levels deep",
        desc: "`.header .nav .list li a` is fragile — any markup change shatters it.",
        severity: "recommended",
      },
      {
        id: "css.no-dead",
        title: "No unused CSS rules",
        desc: "Coverage tab in DevTools shows what's never used. Strip it before launch.",
        severity: "recommended",
      },
      {
        id: "css.logical",
        title: "Use logical properties (margin-inline, padding-block) for i18n-ready sites",
        desc: "Lets the same CSS work for LTR and RTL languages. Mandatory if you support Arabic, Hebrew, etc.",
        severity: "optional",
      },
      {
        id: "css.dark-mode",
        title: "Supports prefers-color-scheme (dark mode)",
        desc: "Built on CSS variables, this is mostly free. Default to respecting OS, allow user override.",
        severity: "recommended",
      },
      {
        id: "css.minified",
        title: "CSS minified in production",
        desc: "Smaller files, faster first paint. Build step or service-side.",
        severity: "required",
      },
      {
        id: "css.no-id-selectors",
        title: "No ID selectors in CSS",
        desc: "IDs spike specificity and aren't reusable. Use classes for styling, IDs for JS hooks / labels only.",
        severity: "recommended",
      },
    ],
  },

  {
    id: "rtl",
    title: "RTL — Arabic / Right-to-Left Layouts",
    icon: "ع",
    track: "core",
    desc: "Most of our projects are RTL. Build with RTL in mind from day one — retrofitting a finished LTR layout to RTL is painful and produces bugs.",
    items: [
      {
        id: "rtl.html-dir",
        title: 'Set dir="rtl" and lang="ar" on the <html> element (or correct locale)',
        desc: "Tells the browser to flip the document direction. Without it, every spacing/alignment override is fighting the engine.",
        severity: "required",
        example: '<html dir="rtl" lang="ar">',
      },
      {
        id: "rtl.logical-props",
        title: "Use CSS logical properties — never margin-left/right or padding-left/right",
        desc: "margin-inline-start / margin-inline-end / padding-inline / inset-inline-start automatically flip with direction. The whole layout becomes direction-agnostic for free.",
        severity: "required",
        example: "/* ✗ direction-locked */\n.card { margin-left: 16px; padding-right: 8px; }\n\n/* ✓ direction-aware */\n.card { margin-inline-start: 16px; padding-inline-end: 8px; }",
      },
      {
        id: "rtl.position-logical",
        title: "Use inset-inline-start / inset-inline-end instead of left / right for absolute positioning",
        desc: "A close button positioned with right: 12px stays on the visual right in both LTR and RTL — wrong for RTL. inset-inline-end follows the writing direction.",
        severity: "required",
        example: "/* ✗ */\n.close { position: absolute; top: 12px; right: 12px; }\n\n/* ✓ */\n.close { position: absolute; top: 12px; inset-inline-end: 12px; }",
      },
      {
        id: "rtl.text-align",
        title: "Use text-align: start / end — never left / right",
        desc: "start = visual left in LTR, visual right in RTL. Fire-and-forget for text that should follow reading direction.",
        severity: "required",
      },
      {
        id: "rtl.no-floats",
        title: "Avoid float: left/right — migrate to Flex/Grid (or use float: inline-start/end)",
        desc: "Floats are 2010-era. Flex/Grid handle direction natively. If floats are unavoidable, use the logical variants.",
        severity: "required",
      },
      {
        id: "rtl.mirror-icons",
        title: "Mirror directional icons (arrows, chevrons, back/forward, send, undo)",
        desc: "Use transform: scaleX(-1) under [dir=\"rtl\"]. Or ship two SVG variants. The user expects 'next' to point right in LTR and left in RTL.",
        severity: "required",
        example: '[dir="rtl"] .icon-arrow,\n[dir="rtl"] .icon-chevron { transform: scaleX(-1); }',
      },
      {
        id: "rtl.dont-mirror",
        title: "DON'T mirror: logos, photos, numbers, code blocks, brand marks, video controls, clocks",
        desc: "Mirroring a logo is brand damage. Numbers stay LTR even inside RTL text (browsers handle this via bidi). Code blocks must stay LTR — code is read left-to-right.",
        severity: "required",
        example: '/* opt code blocks out of RTL */\npre, code { direction: ltr; text-align: left; unicode-bidi: embed; }',
      },
      {
        id: "rtl.dir-selector",
        title: 'Use [dir="rtl"] or :dir(rtl) for RTL-only overrides — not duplicate stylesheets',
        desc: "One stylesheet, scoped overrides. Maintaining parallel rtl.css and ltr.css files always drifts.",
        severity: "required",
      },
      {
        id: "rtl.mixed-content",
        title: "Mixed-content text (Arabic + English/URLs/emails) handled with <bdi> or dir=\"auto\"",
        desc: 'A user named "Mark" inside an Arabic comment, an email like ahmed@example.com, a URL — these need bidi isolation, otherwise punctuation and direction get scrambled.',
        severity: "required",
        example: '<p>أهلاً <bdi>Mark</bdi>!</p>\n<input dir="auto" name="email">',
      },
      {
        id: "rtl.digits-policy",
        title: "Decide digit policy (Arabic-Indic ٠١٢٣ vs Western 0123) and apply it consistently",
        desc: "Mixing both in the same UI looks unprofessional. Most modern Arabic UIs use Western digits — but confirm with the designer / product.",
        severity: "required",
      },
      {
        id: "rtl.arabic-font",
        title: "Choose a font with proper Arabic glyph coverage (and matching weights to Latin)",
        desc: "Many 'Arabic' fonts only cover the basic block, missing diacritics and connected forms. Test with real content — names, addresses, prices, paragraphs.",
        severity: "required",
      },
      {
        id: "rtl.no-letter-spacing",
        title: "Don't apply letter-spacing to Arabic text — it breaks ligatures",
        desc: "Arabic letters connect (kashida). Letter-spacing forces them apart. Looks broken. Reset under :dir(rtl) or [lang=ar].",
        severity: "required",
        example: '[dir="rtl"], [lang="ar"] { letter-spacing: normal !important; }',
      },
      {
        id: "rtl.line-height",
        title: "Increase line-height for Arabic body text (~1.7–1.9)",
        desc: "Arabic glyphs are taller (descenders, dots). Default 1.5 line-height tuned for Latin looks cramped in Arabic.",
        severity: "recommended",
      },
      {
        id: "rtl.animations",
        title: "Direction-aware animations — slide-in/translateX must flip in RTL",
        desc: "A drawer that slides in from the right in LTR should slide in from the left in RTL. Use logical translation or override under [dir=\"rtl\"].",
        severity: "required",
      },
      {
        id: "rtl.forms-rtl",
        title: "Forms tested in RTL: alignment, placeholders, error icons, datepickers",
        desc: "Common bugs: input text left-aligned in an RTL form, error icon stuck on the LTR side, datepicker calendar still LTR.",
        severity: "required",
      },
      {
        id: "rtl.third-party-rtl",
        title: "Verify every 3rd-party widget supports RTL (sliders, charts, calendars, editors, maps)",
        desc: "Most popular libs support RTL with a flag (Swiper rtl: true, Chart.js, FullCalendar). Some don't — pick alternatives BEFORE you build around them.",
        severity: "required",
      },
      {
        id: "rtl.tested-breakpoints",
        title: "Tested in RTL at every breakpoint — bugs hide in narrow viewports",
        desc: "Same checklist as the responsive category, repeated in RTL. RTL bugs are different bugs.",
        severity: "required",
      },
      {
        id: "rtl.designer-rtl-signoff",
        title: "Designer signed off on the RTL build (not just the LTR one)",
        desc: "RTL has its own design constraints. Don't assume the designer mentally translated the LTR mockup. Show them the live RTL build.",
        severity: "required",
      },
      {
        id: "rtl.bilingual-toggle",
        title: "If the project supports both languages: language toggle flips dir + lang + content",
        desc: "Toggle should re-render with new dir on the html element, swap copy, AND persist the user's choice (cookie or localStorage).",
        severity: "recommended",
      },
    ],
  },

  {
    id: "images",
    title: "Images & Media",
    icon: "▣",
    track: "core",
    desc: "Images are the heaviest thing on most pages. Get this right and Lighthouse jumps 20 points.",
    items: [
      {
        id: "img.dimensions",
        title: "Every <img> has explicit width & height attributes",
        desc: "Prevents Cumulative Layout Shift (CLS) — the page won't jump when the image loads.",
        severity: "required",
        example: '<img src="hero.jpg" width="1200" height="630" alt="…">',
      },
      {
        id: "img.lazy",
        title: 'loading="lazy" on below-the-fold images',
        desc: "Free network and CPU savings on initial load. Native browser support, no library needed.",
        severity: "required",
      },
      {
        id: "img.eager-lcp",
        title: 'fetchpriority="high" on the LCP image (hero)',
        desc: "Tells the browser this is the most important image. Don't lazy-load the LCP.",
        severity: "recommended",
      },
      {
        id: "img.srcset",
        title: "Responsive srcset / sizes for content images",
        desc: "Don't ship a 3000px image to a 320px screen. The browser picks the right size.",
        severity: "recommended",
        example: '<img\n  src="photo-800.jpg"\n  srcset="photo-400.jpg 400w, photo-800.jpg 800w, photo-1600.jpg 1600w"\n  sizes="(max-width: 768px) 100vw, 50vw"\n  alt="…">',
      },
      {
        id: "img.picture",
        title: "<picture> for art direction or format fallbacks",
        desc: "Different crops at different breakpoints, or AVIF → WebP → JPG fallback chain.",
        severity: "recommended",
      },
      {
        id: "img.compressed",
        title: "Images compressed (Squoosh, ImageOptim, sharp in build pipeline)",
        desc: "Most uncompressed exports are 2–5× larger than necessary.",
        severity: "required",
      },
      {
        id: "img.svg-as-img",
        title: 'Use SVG icons via <img src="icon.svg"> — NOT inline <svg> markup',
        desc: "Hard team rule: our internal CMS does not accept inline <svg> code, only <img> tags pointing to .svg files. Export every icon as a separate file in /assets/icons/ and reference via <img>. Inline <svg> will block the backend handover.",
        severity: "required",
        example: '✗ <svg viewBox="0 0 24 24"><path d="…"/></svg>\n\n✓ <img src="/assets/icons/cart.svg"\n     alt=""\n     width="24" height="24">',
      },
      {
        id: "img.svg-optimized",
        title: "SVGs run through SVGO (or similar)",
        desc: "Designer exports often include 80% boilerplate. SVGO strips it. Smaller files = faster load via <img>.",
        severity: "recommended",
      },
      {
        id: "img.svg-hidden",
        title: 'Decorative SVG <img> marked alt="" (and meaningful ones get a real alt)',
        desc: 'Decorative icons (next to a text label) → alt="". Standalone meaningful icons (search button with no text) → describe the action in alt.',
        severity: "required",
      },
      {
        id: "img.video-poster",
        title: "Videos have a poster image",
        desc: "Without one, users see a black box until enough video has loaded.",
        severity: "recommended",
      },
      {
        id: "img.video-preload",
        title: 'Videos use preload="metadata" by default',
        desc: '"auto" downloads megabytes upfront. "metadata" loads only enough to show duration & poster.',
        severity: "recommended",
      },
    ],
  },

  {
    id: "perf",
    title: "Performance",
    icon: "Pf",
    track: "core",
    desc: "Measured, not vibe-checked. Run Lighthouse / PageSpeed Insights / WebPageTest.",
    items: [
      {
        id: "perf.lighthouse",
        title: "Lighthouse Performance score ≥ 90 (mobile, throttled)",
        desc: "Mobile + slow 4G is the harder test — and the closer-to-reality one.",
        severity: "required",
      },
      {
        id: "perf.lcp",
        title: "Largest Contentful Paint (LCP) < 2.5s",
        desc: "Core Web Vital. Usually the hero image or main heading. Optimize that one element.",
        severity: "required",
      },
      {
        id: "perf.cls",
        title: "Cumulative Layout Shift (CLS) < 0.1",
        desc: "Caused by images without dimensions, web fonts, or banners injected after load.",
        severity: "required",
      },
      {
        id: "perf.inp",
        title: "Interaction to Next Paint (INP) < 200ms",
        desc: "Replaced FID in 2024. Long JS tasks block input — break them up.",
        severity: "required",
      },
      {
        id: "perf.weight",
        title: "Total page weight under 1MB on landing pages",
        desc: "Hard target for a marketing site. Apps may be larger but should still be measured.",
        severity: "recommended",
      },
      {
        id: "perf.compression",
        title: "Server uses Gzip or Brotli compression",
        desc: "Brotli typically 15–25% smaller than Gzip. Free win, just enable on the server/CDN.",
        severity: "required",
      },
      {
        id: "perf.cache",
        title: "Cache-Control headers set sensibly (long for hashed assets, short for HTML)",
        desc: "Hashed assets → cache forever. HTML → no-cache or short max-age.",
        severity: "required",
      },
      {
        id: "perf.critical-css",
        title: "Critical CSS inlined, rest deferred",
        desc: "Reduces render-blocking. Tools like Critical or Penthouse do this automatically.",
        severity: "recommended",
      },
      {
        id: "perf.defer-js",
        title: "Non-critical JS uses defer (or async)",
        desc: "<script defer> downloads in parallel and runs after HTML parses. Use this by default.",
        severity: "required",
      },
      {
        id: "perf.preconnect",
        title: "preconnect / dns-prefetch for critical 3rd-party origins",
        desc: "Saves 100–300ms for connections to fonts.googleapis.com, your CDN, etc.",
        severity: "recommended",
        example: '<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>',
      },
      {
        id: "perf.tree-shake",
        title: "Tree-shake / split bundles, no full library imports",
        desc: "`import _ from 'lodash'` ships 70KB. `import debounce from 'lodash/debounce'` ships 2KB.",
        severity: "recommended",
      },
      {
        id: "perf.audit-3rd-party",
        title: "Third-party scripts (analytics, chat, ads) audited and necessary",
        desc: "Each one is a privacy + perf cost. Question every new request.",
        severity: "required",
      },
    ],
  },

  {
    id: "js",
    title: "JavaScript Quality",
    icon: "JS",
    track: "core",
    desc: "Code your team can maintain after you've moved on.",
    items: [
      {
        id: "js.no-globals",
        title: "No accidental global variables polluting window",
        desc: "Use modules, IIFEs, or 'use strict'. Globals collide with libraries and other scripts.",
        severity: "required",
      },
      {
        id: "js.strict",
        title: "'use strict' or ES modules everywhere",
        desc: "Modules are strict by default. For loose <script> tags, add 'use strict' at the top.",
        severity: "required",
      },
      {
        id: "js.modern",
        title: "Modern syntax (const/let, arrow fns, template literals, destructuring)",
        desc: "Use a build/transpile step if you must support old browsers. Don't hand-write ES5.",
        severity: "required",
      },
      {
        id: "js.cleanup",
        title: "Event listeners cleaned up when no longer needed",
        desc: 'Memory leaks in SPAs come from forgotten listeners. Use AbortController or removeEventListener.',
        severity: "required",
      },
      {
        id: "js.cached-queries",
        title: "DOM queries cached, not re-run inside loops",
        desc: "querySelector inside a 1000-iteration loop is the easy way to make a page feel slow.",
        severity: "required",
      },
      {
        id: "js.debounce",
        title: "Debounce/throttle on scroll, resize, input listeners",
        desc: "Without it these fire 60-100×/sec and tank performance.",
        severity: "required",
      },
      {
        id: "js.long-tasks",
        title: "No long tasks > 50ms on the main thread",
        desc: "Profile in DevTools Performance tab. Break up heavy work with requestIdleCallback or chunking.",
        severity: "recommended",
      },
      {
        id: "js.errors",
        title: "Errors caught with try/catch + logged (Sentry, etc.) in production",
        desc: "Unhandled rejections fail silently in many setups. window.onerror and window.onunhandledrejection too.",
        severity: "required",
      },
      {
        id: "js.zero-console",
        title: "Zero console errors / warnings in production",
        desc: "Each one is a real bug, a missing resource, or noise that masks the real bugs.",
        severity: "required",
      },
      {
        id: "js.no-jquery",
        title: "No jQuery in 2026 unless legacy code requires it",
        desc: "Native DOM/fetch covers everything jQuery did. Drop the 80KB.",
        severity: "recommended",
      },
    ],
  },

  {
    id: "forms",
    title: "Forms & Validation",
    icon: "▤",
    track: "core",
    desc: "Forms are where users hand you data. Make it fast, accessible, and forgiving.",
    items: [
      {
        id: "forms.input-types",
        title: "Use proper input types (email, tel, url, number, date)",
        desc: "Browsers give you free validation, mobile keyboards adapt, autofill works.",
        severity: "required",
      },
      {
        id: "forms.autocomplete",
        title: "autocomplete attributes set (name, email, tel, address-line1…)",
        desc: "Lets browsers and password managers fill the form. Massive UX win.",
        severity: "required",
        example: '<input name="email" type="email" autocomplete="email">',
      },
      {
        id: "forms.inputmode",
        title: 'inputmode set when type alone isn\'t enough (e.g. inputmode="numeric")',
        desc: "For inputs like OTPs and credit-card CVCs, gets the numeric keyboard without losing leading zeros.",
        severity: "recommended",
      },
      {
        id: "forms.html-validation",
        title: "Use HTML5 validation attributes (required, pattern, minlength)",
        desc: "Free baseline validation that works with no JS. Enhance with JS, don't replace.",
        severity: "required",
      },
      {
        id: "forms.server-side",
        title: "Server-side validation always present (never trust the client)",
        desc: "Anyone can disable JS or open DevTools. Validation in JS is UX, not security.",
        severity: "required",
      },
      {
        id: "forms.errors-inline",
        title: "Errors shown inline next to the field, not just at the top",
        desc: "Users shouldn't have to scroll back and figure out which field is wrong.",
        severity: "required",
      },
      {
        id: "forms.errors-aria",
        title: "Error messages associated to inputs (aria-describedby + aria-invalid)",
        desc: "Screen readers announce errors when the user reaches the field, not as a separate region.",
        severity: "recommended",
      },
      {
        id: "forms.disable-during-submit",
        title: "Submit button disabled (or shows a spinner) during submission",
        desc: "Prevents double-submits and the 'did anything happen?' confusion.",
        severity: "required",
      },
      {
        id: "forms.csrf",
        title: "CSRF protection on all state-changing forms",
        desc: "Backend concern, but the FE must include the token. Skip only if API uses SameSite=Lax+JSON.",
        severity: "required",
      },
    ],
  },

  {
    id: "security",
    title: "Security",
    icon: "Sc",
    track: "core",
    desc: "The frontend is the attack surface. These mitigate the most common abuses.",
    items: [
      {
        id: "sec.https",
        title: "HTTPS enforced site-wide (HSTS header set)",
        desc: "HTTP-only sites are flagged 'Not Secure' in browsers and rank lower in search.",
        severity: "required",
      },
      {
        id: "sec.csp",
        title: "Content-Security-Policy header set (no unsafe-inline if avoidable)",
        desc: "The single most effective XSS mitigation. Even a basic policy helps.",
        severity: "recommended",
      },
      {
        id: "sec.nosniff",
        title: "X-Content-Type-Options: nosniff",
        desc: "Stops browsers from MIME-sniffing responses. Free header, takes 5 seconds.",
        severity: "required",
      },
      {
        id: "sec.frame-ancestors",
        title: "X-Frame-Options or CSP frame-ancestors set (clickjacking)",
        desc: "Prevents your site from being iframed by attackers.",
        severity: "required",
      },
      {
        id: "sec.referrer-policy",
        title: "Referrer-Policy set (strict-origin-when-cross-origin)",
        desc: "Prevents leaking full URLs (with query strings) to third parties.",
        severity: "recommended",
      },
      {
        id: "sec.no-secrets",
        title: "No API keys, secrets, tokens in client-side code",
        desc: 'Anything in the browser is public. Move secrets to a backend, expose only "public" keys.',
        severity: "required",
      },
      {
        id: "sec.sri",
        title: "Subresource Integrity (SRI) on 3rd-party scripts you didn't host",
        desc: "If a CDN gets compromised, the integrity hash mismatch will block the malicious payload.",
        severity: "recommended",
        example: '<script src="https://cdn.example.com/lib.js" integrity="sha384-…" crossorigin="anonymous"></script>',
      },
      {
        id: "sec.noopener",
        title: 'target="_blank" links have rel="noopener noreferrer"',
        desc: "Without noopener, the new page can hijack window.opener. Modern browsers default this but old ones don't.",
        severity: "required",
      },
      {
        id: "sec.xss",
        title: "User input is escaped/sanitized before rendered into the DOM",
        desc: "Use textContent over innerHTML. If you must render HTML, sanitize with DOMPurify or similar.",
        severity: "required",
      },
      {
        id: "sec.deps",
        title: "Dependencies audited (npm audit, dependabot)",
        desc: "Your supply chain is your security posture. Outdated libs are how breaches happen.",
        severity: "required",
      },
    ],
  },

  {
    id: "compat",
    title: "Cross-browser & Compatibility",
    icon: "↻",
    track: "core",
    desc: "It's not done until it works in the browsers your users actually have.",
    items: [
      {
        id: "compat.tested",
        title: "Tested in latest Chrome, Firefox, Safari, Edge",
        desc: "Every browser has a few unique quirks. Don't assume Chrome = the web.",
        severity: "required",
      },
      {
        id: "compat.mobile-browsers",
        title: "Tested on iOS Safari and Android Chrome",
        desc: "Mobile browsers diverge from desktop more than people realize. Especially Safari iOS.",
        severity: "required",
      },
      {
        id: "compat.browserslist",
        title: ".browserslistrc configured matching real user data",
        desc: "Drives Autoprefixer, Babel, and bundler output. Set it once, get correct compilation forever.",
        severity: "recommended",
      },
      {
        id: "compat.autoprefixer",
        title: "Autoprefixer in build pipeline",
        desc: "Stops you having to remember which CSS properties still need vendor prefixes (Safari is the usual culprit).",
        severity: "recommended",
      },
      {
        id: "compat.supports",
        title: "Modern features have @supports fallbacks",
        desc: "If using container queries, :has(), or other newer APIs, gracefully degrade for older browsers.",
        severity: "recommended",
      },
      {
        id: "compat.no-js-graceful",
        title: "Critical content readable without JavaScript (where reasonable)",
        desc: "Marketing sites should render content when JS fails. Apps may not, but at least show a message.",
        severity: "recommended",
      },
    ],
  },

  {
    id: "launch",
    title: "Pre-launch & Deployment",
    icon: "Go",
    track: "core",
    desc: "The boring checks that prevent embarrassment when you flip the DNS.",
    items: [
      {
        id: "launch.404",
        title: "404 page exists, on-brand, with a link back home",
        desc: 'Default server 404s look broken. A friendly one keeps users on the site.',
        severity: "required",
      },
      {
        id: "launch.500",
        title: "500 error page exists",
        desc: "When the server explodes, this is what users see. Don't let it be a stack trace.",
        severity: "recommended",
      },
      {
        id: "launch.analytics",
        title: "Analytics installed AND verified events fire",
        desc: "Installing the snippet isn't enough. Open the realtime tab and click around to verify.",
        severity: "required",
      },
      {
        id: "launch.consent",
        title: "Cookie / tracking consent banner if serving EU/UK users",
        desc: "GDPR / ePrivacy / DMA. Block third-party scripts until consent.",
        severity: "required",
      },
      {
        id: "launch.legal",
        title: "Privacy policy and Terms linked in footer",
        desc: "Required by app stores, payment providers, ads networks, and many laws.",
        severity: "required",
      },
      {
        id: "launch.no-todo",
        title: "No 'TODO', 'FIXME', 'lorem ipsum' shipped to production",
        desc: "Grep the source. Shipped placeholder text is the classic 'whoops' moment.",
        severity: "required",
      },
      {
        id: "launch.sourcemap",
        title: "Source maps configured (private/separate in production)",
        desc: "Ship maps separately so error trackers (Sentry) can resolve stacks, but they're not exposed publicly.",
        severity: "recommended",
      },
      {
        id: "launch.cdn",
        title: "Static assets served via CDN with proper caching",
        desc: "Origin server serves HTML; CDN handles the bulk weight closer to users.",
        severity: "recommended",
      },
      {
        id: "launch.redirects",
        title: "Old URLs 301-redirect to new ones (if migrating)",
        desc: "Preserves SEO link equity and stops users hitting 404s after a redesign.",
        severity: "required",
      },
      {
        id: "launch.smoke-test",
        title: "Smoke test main flows on production after deploy",
        desc: "Open prod, do the top 3 user journeys. Don't trust a green CI build alone.",
        severity: "required",
      },
    ],
  },

  /* ---------------------------------------------------------- */
  /* Optional framework tracks (React / Angular / Vue)          */
  /* Toggle visibility from the Track filter chips in sidebar.  */
  /* ---------------------------------------------------------- */

  /* ===== React ===== */
  {
    id: "react",
    title: "React (optional)",
    icon: "Rc",
    track: "react",
    desc: "Items specific to React projects (16.8+ / 18 / 19). Hidden by default — toggle the 'React' track to show.",
    items: [
      {
        id: "rc.strict-mode",
        title: "<React.StrictMode> wrapping the app in dev",
        desc: "Surfaces deprecated lifecycle, side-effect, and double-render bugs early. Free in dev, no-op in prod.",
        severity: "required",
      },
      {
        id: "rc.functional",
        title: "Functional components + hooks (no new class components)",
        desc: "Class components are legacy and don't compose with the modern hooks ecosystem. Migrate when you touch them.",
        severity: "required",
      },
      {
        id: "rc.keys",
        title: "List items have stable, unique keys (NOT array index)",
        desc: "Index-as-key causes broken state when the list reorders or items are inserted/removed. Use a real id.",
        severity: "required",
        example: "// ✗\nitems.map((it, i) => <Row key={i} item={it} />)\n\n// ✓\nitems.map((it) => <Row key={it.id} item={it} />)",
      },
      {
        id: "rc.exhaustive-deps",
        title: "useEffect dependencies are exhaustive (eslint-plugin-react-hooks)",
        desc: "Missing deps cause stale closures — the bug class that wastes the most React debugging time.",
        severity: "required",
      },
      {
        id: "rc.cleanup",
        title: "useEffect returns a cleanup for subscriptions, intervals, listeners",
        desc: "Without it, every re-render leaks a new listener. Long-lived components become slow and buggy.",
        severity: "required",
        example: "useEffect(() => {\n  const id = setInterval(tick, 1000);\n  return () => clearInterval(id);\n}, []);",
      },
      {
        id: "rc.no-state-in-render",
        title: "Never call setState during render (causes infinite loops)",
        desc: "If derived state is needed, use useMemo or compute inline. setState belongs in handlers and effects.",
        severity: "required",
      },
      {
        id: "rc.derived-state",
        title: "Derived state computed via useMemo, not stored in useState + useEffect",
        desc: "Storing computed values in state then syncing with useEffect is the classic anti-pattern — extra renders, sync bugs.",
        severity: "recommended",
      },
      {
        id: "rc.memo-judicious",
        title: "React.memo / useMemo / useCallback used only after profiling",
        desc: "Premature memoization adds complexity without a measurable win — and sometimes makes things slower.",
        severity: "recommended",
      },
      {
        id: "rc.code-split",
        title: "Routes / heavy components code-split with React.lazy + <Suspense>",
        desc: "Avoids shipping the entire app on first paint. Especially important for admin/dashboard sections.",
        severity: "required",
        example: "const Admin = React.lazy(() => import('./Admin'));\n<Suspense fallback={<Spinner/>}><Admin/></Suspense>",
      },
      {
        id: "rc.error-boundary",
        title: "Error boundaries around major sections (route, layout, widget)",
        desc: "A single thrown error unmounts the whole React tree without a boundary. Always have at least one near the root.",
        severity: "required",
      },
      {
        id: "rc.semantic-html",
        title: "Use semantic HTML inside JSX — not <div> + onClick",
        desc: "<button>, <a>, <nav> work the same in JSX. Don't reinvent them with div + role + tabIndex.",
        severity: "required",
      },
      {
        id: "rc.controlled-forms",
        title: "Forms either fully controlled or fully uncontrolled — not both",
        desc: "Mixing causes 'changing controlled to uncontrolled' warnings and weird sync bugs.",
        severity: "required",
      },
      {
        id: "rc.form-lib",
        title: "Use react-hook-form (or similar) for non-trivial forms",
        desc: "Hand-rolled forms with useState quickly become unmaintainable past 3-4 fields. Validation + perf is solved.",
        severity: "recommended",
      },
      {
        id: "rc.context-scope",
        title: "Context split by concern — avoid one mega-context that re-renders everything",
        desc: "Any context value change re-renders every consumer. Many narrow contexts > one fat one.",
        severity: "recommended",
      },
      {
        id: "rc.state-lib",
        title: "External state library (Zustand, Jotai, Redux Toolkit, TanStack Query) for complex state",
        desc: "useState + Context tops out fast. Pick a library before you build your own broken one.",
        severity: "recommended",
      },
      {
        id: "rc.server-data",
        title: "Server data fetched via TanStack Query / RTK Query / SWR",
        desc: "Caching, dedup, refetch, retries, stale-while-revalidate — solved problems. Don't useEffect+fetch.",
        severity: "recommended",
      },
      {
        id: "rc.typescript",
        title: "TypeScript with strict: true",
        desc: "Catches the prop-typo and missing-prop bugs that PropTypes used to. Strict mode is non-negotiable.",
        severity: "required",
      },
      {
        id: "rc.no-any",
        title: "No `any`, no `@ts-ignore` in committed code",
        desc: "Each one is a hole in the type safety you're paying for. Use `unknown` + narrowing instead.",
        severity: "recommended",
      },
      {
        id: "rc.devtools-profile",
        title: "React DevTools Profiler run to find re-render hotspots",
        desc: "Most React perf issues are 'this component renders 50× per keystroke'. Profiler shows it in 30 seconds.",
        severity: "recommended",
      },
      {
        id: "rc.build-tool",
        title: "Vite or Next.js for new projects (NOT Create React App)",
        desc: "CRA is officially deprecated since 2023. Vite for SPAs, Next.js when SEO/SSR matters.",
        severity: "required",
      },
      {
        id: "rc.rsc",
        title: "Server Components / SSR / SSG considered for SEO-relevant pages",
        desc: "Client-rendered React is bad for SEO and slow to first paint. Use Next.js / Remix when content matters to crawlers.",
        severity: "recommended",
      },
      {
        id: "rc.bundle-analyzer",
        title: "Bundle analyzer run before each release",
        desc: "Catches the accidental import of moment.js, lodash, or a chart lib that doubled the bundle.",
        severity: "recommended",
      },
    ],
  },

  /* ===== Angular ===== */
  {
    id: "angular",
    title: "Angular (optional)",
    icon: "Ng",
    track: "angular",
    desc: "Items specific to Angular projects. Hidden by default — toggle the 'Angular' track to show.",
    items: [
      {
        id: "ng.onpush",
        title: "ChangeDetectionStrategy.OnPush on most components",
        desc: "Default change detection re-runs on every event, everywhere. OnPush only re-runs when inputs change. Massive perf win.",
        severity: "required",
      },
      {
        id: "ng.trackby",
        title: "trackBy function on every *ngFor",
        desc: "Without it, Angular re-renders the whole list on any change. trackBy keeps DOM nodes stable.",
        severity: "required",
        example: "*ngFor=\"let item of items; trackBy: trackById\"\n\n// in component:\ntrackById(_: number, item: Item) { return item.id; }",
      },
      {
        id: "ng.async-pipe",
        title: "Use the async pipe — avoid manual .subscribe() in components",
        desc: "async pipe auto-unsubscribes and triggers change detection. Manual subscriptions leak memory.",
        severity: "required",
      },
      {
        id: "ng.unsubscribe",
        title: "Manual subscriptions cleaned up (takeUntilDestroyed, takeUntil(destroy$), or DestroyRef)",
        desc: "Forgotten subscriptions in long-lived services are a common memory leak source.",
        severity: "required",
      },
      {
        id: "ng.lazy-routes",
        title: "Feature routes lazy-loaded",
        desc: "Initial bundle should not contain code for routes the user might never visit.",
        severity: "required",
        example: "{ path: 'admin', loadChildren: () => import('./admin/admin.routes').then(m => m.routes) }",
      },
      {
        id: "ng.standalone",
        title: "Standalone components (Angular 14+)",
        desc: "NgModules are legacy. Standalone is simpler, tree-shakes better, the future direction.",
        severity: "recommended",
      },
      {
        id: "ng.typed-forms",
        title: "Reactive forms typed (FormGroup<T>, FormControl<string>)",
        desc: "Untyped forms hide bugs at the boundary between form values and your data model.",
        severity: "recommended",
      },
      {
        id: "ng.strict-templates",
        title: 'strictTemplates: true in tsconfig',
        desc: "Catches template type errors at build time. Should be on by default in new Angular projects.",
        severity: "required",
      },
      {
        id: "ng.prod-build",
        title: "Production build (--configuration production) used in deploys",
        desc: "Dev build is much larger and unminified. The 'why is the bundle 12MB' bug.",
        severity: "required",
      },
      {
        id: "ng.bundle-analyzer",
        title: "Bundle analyzer run before each release",
        desc: "Find the accidental import that pulled in moment.js or all of lodash.",
        severity: "recommended",
      },
      {
        id: "ng.environments",
        title: "Environment files separated (environment.ts, environment.prod.ts)",
        desc: "Hard-coded API URLs in components is the path to '...but it works on staging' tickets.",
        severity: "required",
      },
      {
        id: "ng.interceptors",
        title: "HTTP interceptors for auth tokens, error handling, logging",
        desc: "Centralizes cross-cutting concerns. Don't repeat error handling in every service.",
        severity: "recommended",
      },
      {
        id: "ng.signals",
        title: "Use signals (Angular 16+) for fine-grained reactivity",
        desc: "Signals replace much of what RxJS BehaviorSubject did, with better DX and perf.",
        severity: "optional",
      },
      {
        id: "ng.no-any",
        title: "No `any` in component or service code",
        desc: "Any defeats every other type-safety win. Strict mode in tsconfig + no-explicit-any lint rule.",
        severity: "recommended",
      },
    ],
  },

  /* ===== Vue ===== */
  {
    id: "vue",
    title: "Vue (optional)",
    icon: "Vu",
    track: "vue",
    desc: "Items specific to Vue 3 projects. Hidden by default — toggle the 'Vue' track to show.",
    items: [
      {
        id: "vu.v3",
        title: "Vue 3 with the Composition API for new projects",
        desc: "Vue 2 reached end-of-life Dec 2023. Composition API scales better than Options API as components grow.",
        severity: "required",
      },
      {
        id: "vu.script-setup",
        title: "<script setup> syntax in single-file components",
        desc: "Less boilerplate than `setup()`, better TS inference, automatic prop/emit type extraction.",
        severity: "required",
        example: '<script setup lang="ts">\nconst props = defineProps<{ id: string }>()\nconst emit = defineEmits<{ change: [value: number] }>()\n</script>',
      },
      {
        id: "vu.reactivity-preserved",
        title: "Don't destructure reactive() — use toRefs or ref()",
        desc: "Destructuring a reactive() object loses reactivity silently. The #1 Vue 3 newbie bug.",
        severity: "required",
        example: "// ✗ loses reactivity\nconst { count } = reactive({ count: 0 })\n\n// ✓\nconst state = reactive({ count: 0 })\nconst { count } = toRefs(state)",
      },
      {
        id: "vu.v-for-key",
        title: ":key on every v-for, with a stable unique value (NOT index)",
        desc: "Same problem as React index keys: state and DOM get scrambled when the list changes.",
        severity: "required",
        example: '<li v-for="item in items" :key="item.id">{{ item.label }}</li>',
      },
      {
        id: "vu.v-if-vs-show",
        title: "v-if vs v-show chosen deliberately",
        desc: "v-if removes from DOM (cheap to render, expensive to toggle). v-show toggles display (opposite trade-off).",
        severity: "recommended",
      },
      {
        id: "vu.v-if-with-v-for",
        title: "Never v-if and v-for on the same element",
        desc: "Vue 3 makes v-if take precedence and the v-for ref is undefined — silent breakage. Wrap in <template> or filter via computed.",
        severity: "required",
      },
      {
        id: "vu.computed",
        title: "Use computed (not methods) for derived state",
        desc: "Computed values are cached based on their reactive dependencies. Methods re-run on every render.",
        severity: "required",
      },
      {
        id: "vu.watch-cleanup",
        title: "watch / watchEffect side effects clean up via onCleanup or returned function",
        desc: "Same memory-leak risk as forgotten event listeners. Cancel timers, abort requests, unsubscribe.",
        severity: "required",
      },
      {
        id: "vu.props-no-mutate",
        title: "Never mutate props in a child component",
        desc: "Triggers a Vue warning and breaks one-way data flow. emit an event up, let the parent update its own state.",
        severity: "required",
      },
      {
        id: "vu.v-model-typed",
        title: "Custom v-model uses modelValue prop + update:modelValue emit (typed)",
        desc: "Vue 3's v-model contract — get this wrong and the binding silently does nothing.",
        severity: "required",
      },
      {
        id: "vu.pinia",
        title: "Pinia for state management (not Vuex)",
        desc: "Vuex is in maintenance mode. Pinia is the official store: better TS, simpler API, less boilerplate.",
        severity: "required",
      },
      {
        id: "vu.lazy-routes",
        title: "Vue Router routes lazy-loaded via dynamic imports",
        desc: "Initial bundle should not contain code for every route. Same logic as React/Angular splitting.",
        severity: "required",
        example: "const routes = [\n  { path: '/admin', component: () => import('./views/Admin.vue') }\n]",
      },
      {
        id: "vu.async-component",
        title: "defineAsyncComponent + <Suspense> for heavy/async components",
        desc: "Lets you show a loading state instead of a frozen UI while a chunk downloads.",
        severity: "recommended",
      },
      {
        id: "vu.teleport",
        title: "Use <Teleport> for modals / popovers / toasts",
        desc: "Renders a child outside the parent's DOM subtree — avoids stacking-context and overflow:hidden bugs.",
        severity: "recommended",
      },
      {
        id: "vu.scoped-styles",
        title: "Single-file component styles are scoped (or use CSS Modules)",
        desc: 'Without scoped/Modules, every component leaks styles globally. <style scoped> by default.',
        severity: "required",
      },
      {
        id: "vu.v-html-sanitized",
        title: "v-html input sanitized (DOMPurify) — never bind user content directly",
        desc: "v-html is a direct XSS vector. Treat any non-trusted source as hostile.",
        severity: "required",
      },
      {
        id: "vu.typescript",
        title: "TypeScript + vue-tsc in CI",
        desc: "vue-tsc type-checks .vue templates — `tsc` alone misses template errors.",
        severity: "required",
      },
      {
        id: "vu.defineprops-typed",
        title: "defineProps / defineEmits use TS generics, not runtime objects",
        desc: "Better inference, no need to duplicate the type info in two places.",
        severity: "recommended",
      },
      {
        id: "vu.vite",
        title: "Vite as the build tool (not Vue CLI)",
        desc: "Vue CLI is in maintenance mode. Vite is faster, simpler, the official recommendation.",
        severity: "required",
      },
      {
        id: "vu.bundle-analyzer",
        title: "rollup-plugin-visualizer (or similar) run before each release",
        desc: "Catches accidentally bundling large libs. Same hygiene as React/Angular bundle audits.",
        severity: "recommended",
      },
      {
        id: "vu.devtools",
        title: "Vue DevTools used to profile component renders",
        desc: "The Performance tab shows which components re-rendered and how often. Fastest path to perf wins.",
        severity: "recommended",
      },
    ],
  },
];

/* ============================================================
   App
   ============================================================ */
const STORAGE_KEY = "fe-checklist:v1";

const state = {
  projects: { Default: {} },        // { projectName: { itemId: true, ... } }
  currentProject: "Default",
  filters: {
    severity: new Set(["required", "recommended", "optional"]),
    status: "all",
    track: new Set(["core"]),       // framework tracks hidden by default
  },
  search: "",
  collapsed: new Set(),             // category ids that are collapsed
};

/* -------- persistence -------- */

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    if (data.projects) state.projects = data.projects;
    if (data.currentProject) state.currentProject = data.currentProject;
    if (data.filters) {
      if (Array.isArray(data.filters.severity)) state.filters.severity = new Set(data.filters.severity);
      if (data.filters.status) state.filters.status = data.filters.status;
      if (Array.isArray(data.filters.track)) state.filters.track = new Set(data.filters.track);
    }
    if (Array.isArray(data.collapsed)) state.collapsed = new Set(data.collapsed);
    if (!state.projects[state.currentProject]) state.projects[state.currentProject] = {};
  } catch (e) {
    console.warn("Failed to load saved state, starting fresh.", e);
  }
}

function save() {
  const payload = {
    projects: state.projects,
    currentProject: state.currentProject,
    filters: {
      severity: [...state.filters.severity],
      status: state.filters.status,
      track: [...state.filters.track],
    },
    collapsed: [...state.collapsed],
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

/* -------- helpers -------- */

function currentChecks() {
  return state.projects[state.currentProject] || {};
}

function isChecked(itemId) {
  return !!currentChecks()[itemId];
}

function setChecked(itemId, value) {
  const checks = state.projects[state.currentProject];
  if (value) checks[itemId] = true;
  else delete checks[itemId];
  save();
}

function visibleCategories() {
  return CHECKLIST.filter((c) => state.filters.track.has(c.track));
}

function itemMatchesFilters(item) {
  if (!state.filters.severity.has(item.severity)) return false;
  const checked = isChecked(item.id);
  if (state.filters.status === "done" && !checked) return false;
  if (state.filters.status === "pending" && checked) return false;
  if (state.search) {
    const q = state.search.toLowerCase();
    const haystack = (item.title + " " + (item.desc || "") + " " + (item.example || "")).toLowerCase();
    if (!haystack.includes(q)) return false;
  }
  return true;
}

function categoryProgress(cat) {
  const visibleItems = cat.items.filter(itemMatchesFilters);
  const total = cat.items.length;
  const done = cat.items.filter((i) => isChecked(i.id)).length;
  return { total, done, visible: visibleItems.length };
}

function overallProgress() {
  let total = 0;
  let done = 0;
  visibleCategories().forEach((cat) => {
    cat.items.forEach((item) => {
      total++;
      if (isChecked(item.id)) done++;
    });
  });
  return { total, done };
}

/* -------- rendering -------- */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function renderProjectSelect() {
  const select = $("#projectSelect");
  select.innerHTML = "";
  Object.keys(state.projects).forEach((name) => {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    if (name === state.currentProject) opt.selected = true;
    select.appendChild(opt);
  });
}

function renderCategoryNav() {
  const nav = $("#categoryNav");
  nav.innerHTML = "";
  visibleCategories().forEach((cat) => {
    const a = document.createElement("a");
    a.href = `#cat-${cat.id}`;
    const { done, total } = categoryProgress(cat);
    a.innerHTML = `
      <span>${escapeHtml(cat.title)}</span>
      <span class="catprog ${done === total ? "full" : ""}">${done}/${total}</span>
    `;
    a.addEventListener("click", () => {
      // expand the target category if it's collapsed, so the jump reveals content
      if (state.collapsed.has(cat.id)) {
        state.collapsed.delete(cat.id);
        save();
        const section = document.getElementById(`cat-${cat.id}`);
        if (section) {
          section.classList.remove("is-collapsed");
          const toggle = section.querySelector(".category__toggle");
          if (toggle) toggle.setAttribute("aria-expanded", "true");
        }
      }
    });
    nav.appendChild(a);
  });
}

let activeObserver = null;
function makeActiveObserver() {
  if (activeObserver) activeObserver.disconnect();
  activeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id.replace(/^cat-/, "");
        const link = document.querySelector(`#categoryNav a[href="#cat-${id}"]`);
        if (!link) return;
        if (entry.isIntersecting) {
          $$("#categoryNav a").forEach((l) => l.classList.remove("active"));
          link.classList.add("active");
        }
      });
    },
    { rootMargin: "-30% 0px -60% 0px" }
  );
}

function renderCategories() {
  const list = $("#categoryList");
  list.innerHTML = "";
  let totalVisible = 0;

  visibleCategories().forEach((cat) => {
    const visibleItems = cat.items.filter(itemMatchesFilters);
    if (visibleItems.length === 0) return;

    totalVisible += visibleItems.length;

    const section = document.createElement("section");
    section.className = "category";
    section.id = `cat-${cat.id}`;

    const { done, total } = categoryProgress(cat);

    // collapsed unless there's an active search (search must reveal matches)
    const isCollapsed = !state.search && state.collapsed.has(cat.id);
    if (isCollapsed) section.classList.add("is-collapsed");

    section.innerHTML = `
      <div class="category__head">
        <button class="category__toggle" type="button"
                aria-expanded="${isCollapsed ? "false" : "true"}"
                aria-controls="items-${cat.id}">
          <span class="category__chev" aria-hidden="true">▾</span>
          <span class="category__icon" aria-hidden="true">${escapeHtml(cat.icon)}</span>
          <h2 class="category__title">${escapeHtml(cat.title)}</h2>
        </button>
        <span class="category__meta">${done} / ${total} done</span>
      </div>
      <p class="category__desc">${escapeHtml(cat.desc)}</p>
      <div class="items" id="items-${cat.id}"></div>
    `;

    const itemsEl = section.querySelector(".items");
    visibleItems.forEach((item) => itemsEl.appendChild(renderItem(item)));

    const toggle = section.querySelector(".category__toggle");
    toggle.addEventListener("click", () => {
      const nowCollapsed = section.classList.toggle("is-collapsed");
      toggle.setAttribute("aria-expanded", nowCollapsed ? "false" : "true");
      if (nowCollapsed) state.collapsed.add(cat.id);
      else state.collapsed.delete(cat.id);
      save();
      // update URL hash so the section is shareable — replaceState avoids
      // a scroll jump and does NOT push a history entry per click
      const newHash = `#cat-${cat.id}`;
      if (location.hash !== newHash) {
        history.replaceState(null, "", newHash);
      }
    });

    list.appendChild(section);
  });

  $("#emptyState").hidden = totalVisible > 0;

  makeActiveObserver();
  $$(".category").forEach((sec) => activeObserver.observe(sec));
}

function renderItem(item) {
  const div = document.createElement("div");
  div.className = "item";
  if (isChecked(item.id)) div.classList.add("is-done");

  const detailParts = [];
  if (item.desc) detailParts.push(`<h4>Why it matters</h4><p>${escapeHtml(item.desc)}</p>`);
  if (item.example) detailParts.push(`<h4>Example</h4><pre>${escapeHtml(item.example)}</pre>`);
  if (item.ref) detailParts.push(`<p class="ref">Reference: ${escapeHtml(item.ref)}</p>`);

  div.innerHTML = `
    <div class="item__row">
      <input type="checkbox" class="item__check" ${isChecked(item.id) ? "checked" : ""}
             id="chk-${item.id}" aria-describedby="desc-${item.id}" />
      <label class="item__title" for="chk-${item.id}">${escapeHtml(item.title)}</label>
      <span class="badge badge--${item.severity}">${item.severity}</span>
      <button class="item__expand" type="button" aria-label="Toggle details" aria-expanded="false">▾</button>
    </div>
    <div class="item__detail" id="desc-${item.id}">${detailParts.join("")}</div>
  `;

  const checkbox = div.querySelector(".item__check");
  checkbox.addEventListener("change", () => {
    setChecked(item.id, checkbox.checked);
    div.classList.toggle("is-done", checkbox.checked);
    updateProgress();
  });

  const expand = div.querySelector(".item__expand");
  expand.addEventListener("click", () => {
    const open = div.classList.toggle("is-open");
    expand.setAttribute("aria-expanded", open ? "true" : "false");
  });

  return div;
}

function updateProgress() {
  const { done, total } = overallProgress();
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  $("#overallFill").style.width = pct + "%";
  $("#overallText").textContent = `${done} / ${total} complete`;
  $("#overallPct").textContent = pct + "%";
  $("#overallBar").setAttribute("aria-valuenow", String(pct));

  // also refresh category counts in nav
  renderCategoryNav();
  // refresh per-category meta
  $$(".category").forEach((sec) => {
    const id = sec.id.replace(/^cat-/, "");
    const cat = CHECKLIST.find((c) => c.id === id);
    if (!cat) return;
    const { done: d, total: t } = categoryProgress(cat);
    const meta = sec.querySelector(".category__meta");
    if (meta) meta.textContent = `${d} / ${t} done`;
  });
}

function renderAll() {
  renderProjectSelect();
  renderCategories();
  renderCategoryNav();
  updateProgress();
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// Escape for Markdown export. The checklist text contains literal HTML tags
// (<title>, <script setup>, <style scoped>, …). Left raw, a Markdown previewer
// hands them to the browser, which treats <title>/<script>/<style> as raw-text
// elements and swallows everything after them — the report renders blank.
// We entity-escape angle brackets/ampersands, and backslash-escape "*" so a
// stray asterisk (e.g. "*ngFor") can't corrupt the **bold** wrappers. Quotes,
// underscores and backticks are left alone: they read cleanly and render fine.
function escapeMd(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("*", "\\*");
}

/* -------- export -------- */

function exportMarkdown() {
  const lines = [];
  lines.push(`# Frontend Checklist Report — ${escapeMd(state.currentProject)}`);
  lines.push("");
  lines.push(`_Generated ${new Date().toLocaleString()}_`);
  lines.push("");

  const { done, total } = overallProgress();
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  lines.push(`**Overall progress:** ${done} / ${total} (${pct}%)`);
  lines.push("");

  visibleCategories().forEach((cat) => {
    const { done: d, total: t } = categoryProgress(cat);
    lines.push(`## ${escapeMd(cat.title)} — ${d} / ${t}`);
    lines.push("");
    cat.items.forEach((item) => {
      const mark = isChecked(item.id) ? "☑" : "☐";
      const sev = item.severity[0].toUpperCase() + item.severity.slice(1);
      lines.push(`- ${mark} **${escapeMd(item.title)}** _(${sev})_`);
      if (item.desc) lines.push(`  - ${escapeMd(item.desc)}`);
    });
    lines.push("");
  });

  const blob = new Blob([lines.join("\n")], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const safeName = state.currentProject.replace(/[^a-z0-9_-]+/gi, "_");
  a.href = url;
  a.download = `fe-checklist-${safeName}-${new Date().toISOString().slice(0, 10)}.md`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* -------- theme -------- */

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("fe-checklist:theme", theme);
}

function initTheme() {
  const saved = localStorage.getItem("fe-checklist:theme");
  if (saved) {
    applyTheme(saved);
  } else {
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    applyTheme(prefersLight ? "light" : "dark");
  }
}

/* -------- events -------- */

function bindEvents() {
  // theme toggle
  $("#themeBtn").addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme") || "dark";
    applyTheme(cur === "dark" ? "light" : "dark");
  });

  // project switching
  $("#projectSelect").addEventListener("change", (e) => {
    state.currentProject = e.target.value;
    save();
    renderAll();
  });

  $("#newProjectBtn").addEventListener("click", () => {
    const name = prompt("Project name?");
    if (!name) return;
    if (state.projects[name]) {
      alert("A project with that name already exists.");
      return;
    }
    state.projects[name] = {};
    state.currentProject = name;
    save();
    renderAll();
  });

  $("#renameProjectBtn").addEventListener("click", () => {
    const oldName = state.currentProject;
    const name = prompt("Rename project to:", oldName);
    if (!name || name === oldName) return;
    if (state.projects[name]) {
      alert("A project with that name already exists.");
      return;
    }
    state.projects[name] = state.projects[oldName];
    delete state.projects[oldName];
    state.currentProject = name;
    save();
    renderAll();
  });

  $("#deleteProjectBtn").addEventListener("click", () => {
    if (Object.keys(state.projects).length === 1) {
      alert("Can't delete the only project. Reset it instead.");
      return;
    }
    if (!confirm(`Delete project "${state.currentProject}"? This cannot be undone.`)) return;
    delete state.projects[state.currentProject];
    state.currentProject = Object.keys(state.projects)[0];
    save();
    renderAll();
  });

  // reset
  $("#resetBtn").addEventListener("click", () => {
    if (!confirm(`Reset all checks for "${state.currentProject}"?`)) return;
    state.projects[state.currentProject] = {};
    save();
    renderAll();
  });

  // export & print
  $("#exportBtn").addEventListener("click", exportMarkdown);
  $("#printBtn").addEventListener("click", () => window.print());

  // search (debounced)
  let searchTimer;
  $("#searchInput").addEventListener("input", (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.search = e.target.value.trim();
      renderCategories();
      renderCategoryNav();
    }, 120);
  });

  // filters
  $$('input[data-filter]').forEach((input) => {
    // hydrate from state
    const f = input.dataset.filter;
    if (f === "severity") input.checked = state.filters.severity.has(input.value);
    if (f === "status") input.checked = state.filters.status === input.value;
    if (f === "track") input.checked = state.filters.track.has(input.value);

    input.addEventListener("change", () => {
      const filter = input.dataset.filter;
      const val = input.value;
      if (filter === "severity") {
        if (input.checked) state.filters.severity.add(val);
        else state.filters.severity.delete(val);
      } else if (filter === "status") {
        state.filters.status = val;
      } else if (filter === "track") {
        if (input.checked) state.filters.track.add(val);
        else state.filters.track.delete(val);
      }
      save();
      renderAll();
    });
  });

}

/* -------- deep linking -------- */

function handleHash() {
  const raw = location.hash.slice(1);
  if (!raw || !raw.startsWith("cat-")) return;
  const id = raw.slice(4);
  const cat = CHECKLIST.find((c) => c.id === id);
  if (!cat) return;

  let needsRerender = false;

  // make sure the track is enabled, otherwise the section wouldn't render
  if (!state.filters.track.has(cat.track)) {
    state.filters.track.add(cat.track);
    const chip = document.querySelector(`input[data-filter="track"][value="${cat.track}"]`);
    if (chip) chip.checked = true;
    needsRerender = true;
  }
  // expand it if collapsed
  if (state.collapsed.has(id)) {
    state.collapsed.delete(id);
    needsRerender = true;
  }

  if (needsRerender) {
    save();
    renderAll();
  }

  // scroll on the next frame so the layout is settled
  requestAnimationFrame(() => {
    const section = document.getElementById(`cat-${id}`);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

/* -------- boot -------- */

initTheme();
load();
bindEvents();
renderAll();
handleHash();
window.addEventListener("hashchange", handleHash);
