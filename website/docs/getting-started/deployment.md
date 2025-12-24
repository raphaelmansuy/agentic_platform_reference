---
sidebar_position: 3
title: Deployment
description: Learn how to deploy your documentation site to GitHub Pages
---

# Deployment

This guide explains how to deploy your documentation site to GitHub Pages.

## Prerequisites

Before deploying, make sure you have:

1. Pushed your code to a GitHub repository
2. Updated `docusaurus.config.ts` with your repository information

## GitHub Pages Configuration

### Update Configuration

Ensure these fields are correctly set in `docusaurus.config.ts`:

```typescript title="docusaurus.config.ts"
const config: Config = {
  url: 'https://your-username.github.io',
  baseUrl: '/your-repo-name/',
  organizationName: 'your-username',
  projectName: 'your-repo-name',
  deploymentBranch: 'gh-pages',
  trailingSlash: true,
};
```

:::warning
The `trailingSlash: true` setting is important for GitHub Pages to work correctly with client-side routing.
:::

## Deployment Methods

### Method 1: GitHub Actions (Recommended)

This template includes GitHub Actions workflows for automated deployment.

#### How It Works

1. When you push to the `main` branch, GitHub Actions automatically builds and deploys your site
2. Pull requests trigger a test build to ensure changes don't break the site

#### Setup

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment", select **GitHub Actions** as the source

That's it! The included workflow files handle the rest.

#### Workflow Files

- `.github/workflows/deploy.yml` - Deploys on push to main
- `.github/workflows/test-deploy.yml` - Tests builds on pull requests

### Method 2: Manual Deployment

You can also deploy manually using the Docusaurus CLI:

```bash
# Build the site
npm run build

# Deploy to GitHub Pages
GIT_USER=<your-github-username> npm run deploy
```

For SSH authentication:

```bash
USE_SSH=true npm run deploy
```

## Verify Deployment

After deployment:

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. You should see a message like "Your site is live at https://your-username.github.io/your-repo-name/"

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `static` folder with your domain:

```text title="static/CNAME"
docs.yourdomain.com
```

2. Update your `docusaurus.config.ts`:

```typescript
const config: Config = {
  url: 'https://docs.yourdomain.com',
  baseUrl: '/',
  // ...
};
```

3. Configure DNS settings with your domain provider

## Troubleshooting

### Site Not Updating

- Check GitHub Actions for any build errors
- Ensure the `gh-pages` branch was created
- Clear your browser cache

### 404 Errors

- Verify `baseUrl` is set correctly
- Ensure `trailingSlash: true` is set
- Check that `.nojekyll` file exists in the `static` folder

### Build Failures

- Run `npm run build` locally to check for errors
- Check that all links are valid
- Ensure all images exist

## Next Steps

- Set up a [custom domain](https://docusaurus.io/docs/deployment#github-pages-overview)
- Configure [Algolia DocSearch](https://docusaurus.io/docs/search) for search
- Add [Google Analytics](/docs/guides/customization#analytics)
