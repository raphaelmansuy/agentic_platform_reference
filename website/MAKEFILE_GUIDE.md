# Makefile Guide

This project includes a user-friendly `Makefile` that simplifies common development, build, and deployment tasks.

## Quick Start

```bash
# View all available commands
make help

# Start developing
make start

# Build for production
make build
```

## Available Commands

### 📦 Installation

```bash
make install
```
Installs all project dependencies using npm.

**Use when:**
- First time setting up the project
- After deleting `node_modules`
- Adding new dependencies

---

### 🚀 Development Commands

#### Start Development Server
```bash
make start
```
Launches the development server at `http://localhost:3000` with hot-reload enabled.

**Use when:**
- Writing content or making changes
- Testing locally during development
- Building new pages or components

#### Stop Development Server
```bash
make stop
```
Gracefully stops any running development server.

**Use when:**
- You need to free up the port
- Switching between different tasks

---

### 🔨 Building Commands

#### Build for Production
```bash
make build
```
Creates an optimized production build with:
- Minified code and assets
- Service worker for PWA offline support
- Sitemap generation
- Social card meta tags

**Output:** `./build/` directory with static files ready for deployment

#### Serve Production Build
```bash
make serve
```
Serves the production build locally at `http://localhost:3000` for testing before deployment.

**Use when:**
- Testing the exact production build locally
- Verifying performance optimizations
- Testing PWA offline capabilities

#### Fresh Build
```bash
make rebuild
```
Cleans all artifacts and rebuilds from scratch.

**Use when:**
- Something seems cached incorrectly
- You want a completely fresh build
- Troubleshooting build issues

---

### 🧪 Testing & Quality Commands

#### TypeScript Check
```bash
make typecheck
```
Runs TypeScript compiler to verify all type definitions are correct.

**Use when:**
- You've modified TypeScript files
- Before committing code
- Checking for type-related issues

#### Verify All Checks
```bash
make verify
```
Runs TypeScript check AND builds the site (without starting server).

**Equivalent to:** `make typecheck && make build`

**Use when:**
- Before pushing to GitHub
- Final validation before deployment
- Running in CI/CD pipelines

---

### 🧹 Cleanup Commands

#### Clear Docusaurus Cache
```bash
make clear-cache
```
Removes Docusaurus internal cache files (`.docusaurus/`).

**Use when:**
- Build seems stuck or corrupted
- After major configuration changes
- Troubleshooting build problems

#### Deep Clean
```bash
make clean-all
```
Removes:
- Build output (`./build/`)
- Docusaurus cache (`.docusaurus/`)
- Node modules
- Lock file

**⚠️ This requires reinstalling dependencies afterward:**
```bash
make clean-all
make install
```

**Use when:**
- Starting completely fresh
- Switching Node.js versions
- Resolving dependency conflicts

#### Regular Clean
```bash
make clean
```
Removes only build artifacts (not node_modules).

**Faster alternative** to `clean-all` when you just want to rebuild.

---

### 📤 Deployment

#### Deploy to GitHub Pages
```bash
make deploy
```
Verifies everything is ready (runs all checks) and provides deployment instructions.

**What it does:**
1. Runs all verification checks
2. Confirms site is production-ready
3. Provides next steps for GitHub Pages deployment

**Use when:**
- Ready to deploy changes to production
- Setting up initial deployment
- Validating before a release

---

## 🎯 Common Workflows

### Starting a New Session
```bash
make install  # First time only
make start    # Then start developing
```

### Before Committing
```bash
make verify   # Run all checks
```

### Before Deploying
```bash
make rebuild  # Fresh production build
make serve    # Test locally
make deploy   # Deploy when ready
```

### Troubleshooting Build Issues
```bash
make clear-cache  # Clear cache first
make rebuild      # Fresh rebuild
```

### Complete Fresh Start
```bash
make clean-all    # Remove everything
make install      # Reinstall from scratch
make start        # Start fresh
```

---

## 📊 Environment Info

View your development environment details:
```bash
make info
```

Shows:
- Node.js version
- npm version
- Docusaurus version

---

## 🔧 Tips & Tricks

### Running Multiple Commands
You can chain commands:
```bash
make clean-all && make install && make start
```

### Checking Without Server
Build without starting the dev server:
```bash
make build
```

### Fast Development Iteration
For quick testing without full rebuild:
```bash
make start  # Server auto-reloads on file changes
```

### Port Already in Use
If port 3000 is busy:
```bash
make stop   # Stop previous server
make start  # Start fresh
```

---

## Advanced

### Viewing the Raw Makefile
```bash
cat Makefile
```

### Adding Custom Commands
Edit the `Makefile` to add your own:
```makefile
mycommand:
	@echo "Running my custom command..."
	# your commands here
```

Then use it with: `make mycommand`

---

## Summary

| Goal | Command |
|------|---------|
| See all commands | `make help` |
| Start coding | `make start` |
| Build for production | `make build` |
| Test before deploy | `make serve` |
| Run all checks | `make verify` |
| Clean everything | `make clean-all` |
| Fresh install | `make install` |
| Deploy | `make deploy` |

**Most common:** `make start` → code → `make verify` → push to GitHub 🚀
