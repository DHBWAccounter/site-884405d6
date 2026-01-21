#!/bin/bash

# Bitcoin Association Switzerland - Deploy Script
# This script helps deploy to Vercel

echo "🚀 Deploying Bitcoin Association Switzerland website..."
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "⚠️  Vercel CLI is not installed. Installing..."
    npm install -g vercel
fi

echo "✅ Vercel CLI version: $(vercel --version)"

# Check if user is logged in
echo ""
echo "🔐 Checking Vercel login status..."
if ! vercel whoami &> /dev/null; then
    echo "❌ You are not logged in to Vercel."
    echo "   Please run 'vercel login' first."
    exit 1
fi

echo "✅ Logged in as: $(vercel whoami)"

# Deploy
echo ""
echo "📦 Deploying to Vercel..."
vercel --prod

# Check if deployment was successful
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Deployment completed successfully!"
    echo ""
    echo "🎯 Your site is now live!"
    echo ""
else
    echo ""
    echo "❌ Deployment failed. Please check the error messages above."
    exit 1
fi
