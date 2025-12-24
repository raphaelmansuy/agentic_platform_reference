# 🚀 Makefile Quick Reference

## Most Used Commands

```bash
make help       # 📖 Show all commands
make start      # 🚀 Start development
make build      # 🔨 Build for production
make serve      # 📦 Preview production build
make verify     # ✅ Run all checks
make deploy     # 📤 Deploy to GitHub Pages
```

## Development Flow

1. **Start Developing**
   ```bash
   make start
   ```
   Opens localhost:3000 with auto-reload

2. **Check Quality**
   ```bash
   make verify
   ```
   TypeScript + build test

3. **Ready to Deploy**
   ```bash
   make deploy
   ```
   Final verification + instructions

## When Things Go Wrong

| Issue | Solution |
|-------|----------|
| Cache corruption | `make clear-cache` |
| Build broken | `make rebuild` |
| Strange behavior | `make clean-all && make install` |
| Port 3000 in use | `make stop && make start` |

## Cleanup Options

```bash
make clean           # Remove build only
make clear-cache     # Clear Docusaurus cache
make clean-all       # Nuclear option (everything)
```

## Full Command List

**Installation**
- `make install` - npm install

**Development**
- `make start` - Dev server
- `make stop` - Kill server
- `make clean` - Remove build artifacts

**Building**
- `make build` - Production build
- `make serve` - Preview build
- `make rebuild` - Clean + build

**Testing**
- `make typecheck` - TypeScript check
- `make verify` - All checks + build

**Cleanup**
- `make clear-cache` - Clear cache
- `make clean-all` - Remove everything

**Deployment**
- `make deploy` - Deploy to GitHub Pages

**Info**
- `make info` - Show environment
- `make help` - Show all commands

---

**💡 Tip:** Type `make help` anytime to see all available commands with descriptions!
