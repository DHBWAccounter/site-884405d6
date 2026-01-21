#!/bin/bash

# Bitcoin Association Switzerland - Build Script
# This script builds the project for production

echo "🔨 Building Bitcoin Association Switzerland website..."
echo ""

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf .next

# Run build
echo "📦 Building project..."
pnpm build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build completed successfully!"
    echo ""
    echo "🎯 Next steps:"
    echo "   1. Run 'pnpm start' to preview the production build"
    echo "   2. Or deploy to Vercel: vercel --prod"
    echo ""
    echo "📊 Build output:"
    echo "   - Location: .next/"
    echo "   - Static files: .next/static/"
    echo ""
else
    echo ""
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi
