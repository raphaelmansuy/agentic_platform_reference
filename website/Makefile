.PHONY: help install start build serve clean typecheck deploy clear-cache

# Colors for output
BLUE = \033[0;34m
GREEN = \033[0;32m
YELLOW = \033[1;33m
RED = \033[0;31m
NC = \033[0m # No Color

# Default target - show help
help:
	@echo "$(BLUE)"
	@echo "╔═══════════════════════════════════════════════════════════════╗"
	@echo "║                 📚 Docusaurus Site Manager                    ║"
	@echo "╚═══════════════════════════════════════════════════════════════╝"
	@echo "$(NC)"
	@echo ""
	@echo "$(GREEN)📦 Installation$(NC)"
	@echo "  $(YELLOW)make install$(NC)          Install dependencies (npm install)"
	@echo ""
	@echo "$(GREEN)🚀 Development$(NC)"
	@echo "  $(YELLOW)make start$(NC)            Start development server (localhost:3000)"
	@echo "  $(YELLOW)make stop$(NC)             Stop development server"
	@echo "  $(YELLOW)make clean$(NC)            Remove build artifacts and cache"
	@echo ""
	@echo "$(GREEN)🔨 Building$(NC)"
	@echo "  $(YELLOW)make build$(NC)            Build for production"
	@echo "  $(YELLOW)make serve$(NC)            Serve production build locally"
	@echo "  $(YELLOW)make rebuild$(NC)          Clean and rebuild (fresh build)"
	@echo ""
	@echo "$(GREEN)🧪 Testing & Quality$(NC)"
	@echo "  $(YELLOW)make typecheck$(NC)        Run TypeScript type checking"
	@echo "  $(YELLOW)make verify$(NC)           Run all checks (typecheck + build test)"
	@echo ""
	@echo "$(GREEN)🧹 Cleanup$(NC)"
	@echo "  $(YELLOW)make clear-cache$(NC)      Clear Docusaurus cache"
	@echo "  $(YELLOW)make clean-all$(NC)        Deep clean (node_modules, cache, build)"
	@echo ""
	@echo "$(GREEN)📤 Deployment$(NC)"
	@echo "  $(YELLOW)make deploy$(NC)           Deploy to GitHub Pages"
	@echo ""
	@echo "$(GREEN)❓ Help$(NC)"
	@echo "  $(YELLOW)make help$(NC)             Show this help message"
	@echo ""

# Install dependencies
install:
	@echo "$(BLUE)📦 Installing dependencies...$(NC)"
	npm install
	@echo "$(GREEN)✓ Dependencies installed!$(NC)"

# Start development server
start:
	@echo "$(BLUE)🚀 Starting development server...$(NC)"
	@echo "$(YELLOW)→ Open http://localhost:3000$(NC)"
	npm run start

# Stop development server
stop:
	@echo "$(BLUE)⏹️  Stopping development server...$(NC)"
	@pkill -f "docusaurus start" || echo "$(YELLOW)No running server found$(NC)"

# Build for production
build:
	@echo "$(BLUE)🔨 Building for production...$(NC)"
	npm run build
	@echo "$(GREEN)✓ Build complete! Output in ./build/$(NC)"

# Serve production build locally
serve:
	@echo "$(BLUE)📦 Serving production build...$(NC)"
	@echo "$(YELLOW)→ Open http://localhost:3000$(NC)"
	npm run serve

# TypeScript checking
typecheck:
	@echo "$(BLUE)🔍 Running TypeScript checks...$(NC)"
	npm run typecheck
	@echo "$(GREEN)✓ All type checks passed!$(NC)"

# Clean build artifacts and cache
clean:
	@echo "$(BLUE)🧹 Cleaning build artifacts...$(NC)"
	rm -rf build .docusaurus
	@echo "$(GREEN)✓ Cleaned build artifacts!$(NC)"

# Clear Docusaurus cache
clear-cache:
	@echo "$(BLUE)💨 Clearing Docusaurus cache...$(NC)"
	npm run clear
	@echo "$(GREEN)✓ Cache cleared!$(NC)"

# Clean everything including node_modules
clean-all: clean clear-cache
	@echo "$(BLUE)🗑️  Removing node_modules (this may take a moment)...$(NC)"
	rm -rf node_modules package-lock.json
	@echo "$(GREEN)✓ Deep clean complete!$(NC)"
	@echo "$(YELLOW)→ Run 'make install' to reinstall dependencies$(NC)"

# Fresh rebuild
rebuild: clean build
	@echo "$(GREEN)✓ Fresh build complete!$(NC)"

# Run all checks
verify: typecheck
	@echo "$(BLUE)🧪 Running build test...$(NC)"
	npm run build
	@echo "$(GREEN)✓ All checks passed! Site is ready to deploy.$(NC)"

# Deploy to GitHub Pages
deploy: verify
	@echo "$(BLUE)📤 Deploying to GitHub Pages...$(NC)"
	@echo "$(YELLOW)→ Make sure to commit and push to main branch$(NC)"
	@echo "$(YELLOW)→ GitHub Actions will handle the deployment$(NC)"
	@echo "$(GREEN)✓ Ready to deploy!$(NC)"

# Development workflow - common starting point
dev: install start

# Quick build and serve for testing
test: build serve

# Show environment info
info:
	@echo "$(BLUE)ℹ️  Environment Information$(NC)"
	@echo "Node version: $$(node --version)"
	@echo "npm version: $$(npm --version)"
	@echo "Docusaurus: $$(npm list docusaurus 2>/dev/null | grep docusaurus | head -1 || echo 'Not found')"
	@echo ""
