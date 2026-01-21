#!/bin/bash

# Bitcoin Association Switzerland - Setup Script
# This script helps set up the development environment

echo "🚀 Setting up Bitcoin Association Switzerland website..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "⚠️  pnpm is not installed. Installing pnpm..."
    npm install -g pnpm@9.15.4
fi

echo "✅ pnpm version: $(pnpm --version)"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
pnpm install

# Check if installation was successful
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Setup completed successfully!"
    echo ""
    echo "🎯 Next steps:"
    echo "   1. Run 'pnpm dev' to start the development server"
    echo "   2. Open http://localhost:3000 in your browser"
    echo "   3. Check README.md for more information"
    echo ""
    echo "📚 Documentation:"
    echo "   - QUICKSTART.md - Get started in 5 minutes"
    echo "   - COMPONENTS.md - Component documentation"
    echo "   - DEPLOYMENT.md - Deployment guide"
    echo ""
else
    echo ""
    echo "❌ Setup failed. Please check the error messages above."
    exit 1
fi
