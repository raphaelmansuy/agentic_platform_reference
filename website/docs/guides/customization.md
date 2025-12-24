---
sidebar_position: 1
title: Customization
description: Learn how to customize the theme, colors, and styles
---

# Customization

This guide covers how to customize the look and feel of your documentation site.

## Color Palette

### Changing Primary Colors

The primary color is used for links, buttons, and accents. Update it in `src/css/custom.css`:

```css title="src/css/custom.css"
:root {
  /* Primary color - Teal */
  --ifm-color-primary: #25c2a0;
  --ifm-color-primary-dark: #21af90;
  --ifm-color-primary-darker: #1fa588;
  --ifm-color-primary-darkest: #1a8870;
  --ifm-color-primary-light: #29d5b0;
  --ifm-color-primary-lighter: #32d8b4;
  --ifm-color-primary-lightest: #4fddbf;
}
```

### Color Palette Generator

Use the [Docusaurus Color Generator](https://docusaurus.io/docs/styling-layout#styling-your-site-with-infima) to create a custom palette.

### Dark Mode Colors

Dark mode has its own color settings:

```css title="src/css/custom.css"
[data-theme='dark'] {
  --ifm-color-primary: #25c2a0;
  --ifm-background-color: #1a1a2e;
  /* ... other dark mode colors */
}
```

## Typography

### Custom Fonts

To use custom fonts, add them to your CSS:

```css title="src/css/custom.css"
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  --ifm-font-family-base: 'Inter', system-ui, sans-serif;
  --ifm-heading-font-family: 'Inter', system-ui, sans-serif;
}
```

### Font Sizes

Adjust heading sizes:

```css
h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 2rem;
}
```

## Logo

Replace the logo files in the `static/img` directory:

- `logo.svg` - Light mode logo
- `logo-dark.svg` - Dark mode logo (optional)
- `favicon.ico` - Browser favicon

Update the configuration if using different filenames:

```typescript title="docusaurus.config.ts"
navbar: {
  logo: {
    alt: 'My Project Logo',
    src: 'img/logo.svg',
    srcDark: 'img/logo-dark.svg',
  },
}
```

## Navbar

### Adding Items

Add new navbar items in the configuration:

```typescript title="docusaurus.config.ts"
navbar: {
  items: [
    { to: '/docs/intro', label: 'Docs', position: 'left' },
    { to: '/blog', label: 'Blog', position: 'left' },
    { to: '/about', label: 'About', position: 'left' },
    {
      href: 'https://github.com/your-username/repo',
      position: 'right',
      className: 'header-github-link',
    },
  ],
}
```

### Dropdown Menus

Create dropdown menus:

```typescript
{
  type: 'dropdown',
  label: 'Community',
  position: 'left',
  items: [
    { label: 'Discord', href: 'https://discord.gg/...' },
    { label: 'Twitter', href: 'https://twitter.com/...' },
  ],
}
```

## Footer

Customize footer links:

```typescript title="docusaurus.config.ts"
footer: {
  style: 'dark',
  links: [
    {
      title: 'Docs',
      items: [
        { label: 'Introduction', to: '/docs/intro' },
      ],
    },
    {
      title: 'Community',
      items: [
        { label: 'Discord', href: 'https://discord.gg/...' },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} Your Name`,
}
```

## Homepage

### Hero Section

Edit `src/pages/index.tsx` to customize the hero section:

```tsx
function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <h1>Your Title</h1>
      <p>Your tagline</p>
      <Link to="/docs/intro">Get Started</Link>
    </header>
  );
}
```

### Features

Update features in `src/components/HomepageFeatures/index.tsx`:

```tsx
const FeatureList = [
  {
    title: 'Feature 1',
    icon: '🚀',
    description: 'Description of feature 1',
  },
  // ... more features
];
```

## Analytics

### Google Analytics

Enable Google Analytics in `docusaurus.config.ts`:

```typescript
presets: [
  [
    'classic',
    {
      gtag: {
        trackingID: 'G-XXXXXXXXXX',
        anonymizeIP: true,
      },
    },
  ],
],
```

## Custom Components

### Creating Components

Create reusable components in `src/components/`:

```tsx title="src/components/Button.tsx"
import React from 'react';

export default function Button({ children, href }) {
  return (
    <a className="button button--primary" href={href}>
      {children}
    </a>
  );
}
```

Use in MDX files:

```mdx
import Button from '@site/src/components/Button';

<Button href="/docs/intro">Get Started</Button>
```

## CSS Modules

For component-specific styles, use CSS modules:

```css title="src/components/Button.module.css"
.button {
  padding: 1rem 2rem;
  border-radius: 0.5rem;
}
```

```tsx
import styles from './Button.module.css';

<button className={styles.button}>Click me</button>
```

## Next Steps

- Explore [Docusaurus styling documentation](https://docusaurus.io/docs/styling-layout)
- Check out [Infima CSS framework](https://infima.dev/)
- Learn about [swizzling](https://docusaurus.io/docs/swizzling) for advanced customization
