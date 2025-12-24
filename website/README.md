# Docusaurus GitHub Pages Template

A modern, feature-rich Docusaurus template optimized for GitHub Pages deployment. This template includes PWA support, SEO optimization, sitemap generation, and a beautiful design inspired by modern documentation sites.

![Docusaurus](https://img.shields.io/badge/docusaurus-3.9.2-green)
![TypeScript](https://img.shields.io/badge/typescript-5.x-blue)
![License](https://img.shields.io/badge/license-MIT-brightgreen)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional look with dark mode support
- 📱 **PWA Support** - Offline-capable with service worker
- 🔍 **SEO Optimized** - Meta tags, social cards, and structured data
- 🗺️ **Sitemap** - Automatic sitemap generation
- 📊 **Analytics Ready** - Google Analytics integration
- 🚀 **GitHub Pages** - Optimized for GitHub Pages deployment
- 📝 **Blog** - Built-in blog with tags and authors
- 📚 **Documentation** - Organized docs with sidebar navigation
- 🌐 **i18n Ready** - Prepared for internationalization

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) 18.0 or higher
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Installation

1. **Clone this repository:**

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name/website
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm run start
```

Your site is now running at `http://localhost:3000`!

## 📁 Project Structure

```
website/
├── blog/                   # Blog posts
│   ├── authors.yml         # Blog authors
│   └── tags.yml            # Blog tags
├── docs/                   # Documentation pages
│   ├── intro.md            # Introduction page
│   ├── getting-started/    # Getting started guides
│   └── guides/             # Advanced guides
├── src/
│   ├── components/         # React components
│   ├── css/                # Global styles
│   └── pages/              # Static pages
├── static/                 # Static assets
│   ├── img/                # Images
│   ├── manifest.json       # PWA manifest
│   └── robots.txt          # SEO robots file
├── docusaurus.config.ts    # Main configuration
└── sidebars.ts             # Sidebar configuration
```

## ⚙️ Configuration

### Site Metadata

Edit `docusaurus.config.ts` to customize:

```typescript
const config: Config = {
  title: 'Your Site Title',
  tagline: 'Your tagline here',
  favicon: 'img/favicon.ico',
  url: 'https://your-username.github.io',
  baseUrl: '/your-repo-name/',
  organizationName: 'your-username',
  projectName: 'your-repo-name',
  // ...
};
```

### Google Analytics

Add your tracking ID:

```typescript
gtag: {
  trackingID: 'G-XXXXXXXXXX',
  anonymizeIP: true,
},
```

### Social Cards

Update the social card image and metadata:

```typescript
metadata: [
  { name: 'og:image', content: 'https://your-site.com/img/social-card.png' },
  { name: 'twitter:image', content: 'https://your-site.com/img/social-card.png' },
],
```

## 🎨 Customization

### Colors

Edit `src/css/custom.css` to change the color palette:

```css
:root {
  --ifm-color-primary: #25c2a0;
  --ifm-color-primary-dark: #21af90;
  /* ... */
}
```

### Logo

Replace the logo files in `static/img/`:

- `logo.svg` - Main logo
- `logo-dark.svg` - Dark mode logo (optional)
- `favicon.ico` - Browser favicon

### Homepage

Edit `src/pages/index.tsx` to customize the homepage hero and layout.

### Features

Update `src/components/HomepageFeatures/index.tsx` to change the feature cards.

## 📝 Content

### Documentation

Add new docs in the `docs/` folder:

```markdown
---
sidebar_position: 1
title: My Page
description: Page description
---

# My Page

Content goes here...
```

### Blog Posts

Add new posts in the `blog/` folder:

```markdown
---
slug: my-post
title: My Blog Post
authors: [author-name]
tags: [tag1, tag2]
---

Post content...
```

## 🚀 Deployment

### GitHub Pages (Automatic)

This template includes GitHub Actions workflows for automatic deployment:

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Set Source to "GitHub Actions"

2. **Push to main branch:**
   ```bash
   git add .
   git commit -m "Deploy site"
   git push origin main
   ```

3. The site will automatically build and deploy!

### Manual Deployment

```bash
# Build the site
npm run build

# The build output is in the 'build' folder
# Deploy using gh-pages package
npm run deploy
```

### Environment Variables

For production builds, you can set:

| Variable | Description |
|----------|-------------|
| `GOOGLE_ANALYTICS_ID` | Google Analytics tracking ID |
| `ALGOLIA_APP_ID` | Algolia DocSearch app ID |
| `ALGOLIA_API_KEY` | Algolia DocSearch API key |

## 🧪 Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm run serve` | Serve production build locally |
| `npm run clear` | Clear cache |
| `npm run typecheck` | Run TypeScript checks |

### Building

```bash
npm run build
```

This generates static content in the `build` directory.

### Serving Locally

```bash
npm run serve
```

Preview the production build at `http://localhost:3000`.

## 🔧 Troubleshooting

### Build Errors

1. **Clear the cache:**
   ```bash
   npm run clear
   ```

2. **Delete node_modules and reinstall:**
   ```bash
   rm -rf node_modules
   npm install
   ```

### GitHub Pages 404

Ensure these settings in `docusaurus.config.ts`:

```typescript
url: 'https://your-username.github.io',
baseUrl: '/your-repo-name/',
trailingSlash: true,
```

### PWA Not Working

The PWA only works in production mode. Build and serve locally to test:

```bash
npm run build
npm run serve
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## 🙏 Acknowledgments

- [Docusaurus](https://docusaurus.io/) - Documentation framework
- [CocoIndex](https://cocoindex.io/) - Design inspiration
- [Infima](https://infima.dev/) - CSS framework

## 📚 Resources

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [PWA Documentation](https://web.dev/progressive-web-apps/)

---

Made with ❤️ using [Docusaurus](https://docusaurus.io/)
