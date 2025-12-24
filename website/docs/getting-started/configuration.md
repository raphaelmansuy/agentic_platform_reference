---
sidebar_position: 2
title: Configuration
description: Learn how to configure the documentation site
---

# Configuration

This guide covers the essential configuration options for your documentation site.

## Main Configuration File

The main configuration file is `docusaurus.config.ts` located in the root of the website folder. This file contains all the settings for your site.

### Site Metadata

Update the basic site information:

```typescript title="docusaurus.config.ts"
const config: Config = {
  title: 'Your Project Name',
  tagline: 'Your project tagline',
  favicon: 'img/favicon.ico',
  
  // Production URL
  url: 'https://your-username.github.io',
  baseUrl: '/your-repo-name/',
  
  // GitHub Pages configuration
  organizationName: 'your-username',
  projectName: 'your-repo-name',
  
  // ...rest of config
};
```

### Important Fields to Update

| Field | Description |
|-------|-------------|
| `title` | Your site title, shown in the browser tab and navbar |
| `tagline` | A short description of your project |
| `url` | The production URL of your site |
| `baseUrl` | The base path of your site (e.g., `/repo-name/`) |
| `organizationName` | Your GitHub username or organization name |
| `projectName` | Your repository name |

## Theme Configuration

The theme configuration is in the `themeConfig` section:

```typescript title="docusaurus.config.ts"
themeConfig: {
  // Social card for sharing
  image: 'img/social-card.png',
  
  // Navbar configuration
  navbar: {
    title: 'Your Project',
    logo: {
      alt: 'Logo',
      src: 'img/logo.svg',
      srcDark: 'img/logo-dark.svg',
    },
    items: [
      // Navigation items
    ],
  },
  
  // Footer configuration
  footer: {
    style: 'dark',
    links: [
      // Footer links
    ],
    copyright: `Copyright © ${new Date().getFullYear()} Your Name`,
  },
}
```

## Sidebar Configuration

The sidebar is configured in `sidebars.ts`:

```typescript title="sidebars.ts"
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/installation', 'getting-started/configuration'],
    },
    {
      type: 'category',
      label: 'Guides',
      items: ['guides/customization'],
    },
  ],
};
```

## Environment Variables

For sensitive configuration like API keys, use environment variables:

```typescript title="docusaurus.config.ts"
// Google Analytics (uncomment and add your ID)
// gtag: {
//   trackingID: process.env.GA_TRACKING_ID || 'G-XXXXXXXXXX',
//   anonymizeIP: true,
// },
```

## Custom Fields

Add custom fields for use in your components:

```typescript title="docusaurus.config.ts"
customFields: {
  teamEmail: 'team@example.com',
  githubUrl: 'https://github.com/your-username/your-repo-name',
},
```

Access them in your components:

```tsx
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function MyComponent() {
  const { siteConfig } = useDocusaurusContext();
  const { teamEmail } = siteConfig.customFields;
  return <a href={`mailto:${teamEmail}`}>Contact Us</a>;
}
```

## Next Steps

- [Customize the theme](/docs/guides/customization)
- [Deploy your site](/docs/getting-started/deployment)

:::info
After making configuration changes, you may need to restart the development server for all changes to take effect.
:::
