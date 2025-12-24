---
sidebar_position: 1
title: Installation
description: Learn how to install and set up the documentation template
---

# Installation

This guide will walk you through the process of setting up the documentation template on your local machine.

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** version 20.0 or higher
- **npm** (comes with Node.js) or **yarn** or **pnpm**
- **Git** for version control

You can check your Node.js version by running:

```bash
node -v
```

## Clone the Repository

First, clone this repository to your local machine:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name/website
```

## Install Dependencies

Install the project dependencies using your preferred package manager:

```bash
npm install
```

Or with yarn:

```bash
yarn install
```

Or with pnpm:

```bash
pnpm install
```

## Start the Development Server

Start the local development server:

```bash
npm start
```

This will start a local server at [http://localhost:3000](http://localhost:3000). The site will automatically reload when you make changes to the source files.

## Build for Production

To create a production build:

```bash
npm run build
```

This will generate static files in the `build` directory that can be deployed to any static hosting service.

## Test the Production Build

To test the production build locally:

```bash
npm run serve
```

This will serve the production build at [http://localhost:3000](http://localhost:3000).

## Next Steps

Now that you have the site running locally, you can:

1. [Configure the site](/docs/getting-started/configuration) to match your project
2. [Customize the theme](/docs/guides/customization) to match your brand
3. [Deploy to GitHub Pages](/docs/getting-started/deployment) to make it live

:::tip
Keep the development server running while making changes. Docusaurus supports hot reloading, so you'll see your changes instantly!
:::
