# Contributing to Bitcoin Association Switzerland Website

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other community members

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm 9.15.4+
- Git

### Setup
1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/bitcoin-association-switzerland.git
   cd bitcoin-association-switzerland
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Start development server:
   ```bash
   pnpm dev
   ```

## Development Workflow

### Branch Strategy
- `main` - Production branch
- `develop` - Development branch
- `feature/*` - New features
- `bugfix/*` - Bug fixes
- `hotfix/*` - Critical fixes

### Creating a Feature Branch
```bash
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name
```

### Making Changes
1. Make your changes
2. Test thoroughly
3. Commit with clear message (see [Commit Guidelines](#commit-guidelines))
4. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

## Coding Standards

### TypeScript
- Use TypeScript strict mode
- Avoid `any` type
- Use interfaces for object shapes
- Add JSDoc comments for complex functions

### React
- Use functional components
- Use hooks for state and side effects
- Follow React best practices
- Keep components small and focused

### Styling
- Use Tailwind CSS classes
- Follow mobile-first approach
- Use semantic HTML
- Ensure accessibility

### File Naming
- Components: PascalCase (e.g., `MyComponent.tsx`)
- Utilities: camelCase (e.g., `myUtility.ts`)
- Pages: lowercase with hyphens (e.g., `my-page/`)

### Code Organization
```
components/
  ├── ui/              # Reusable UI components
  ├── layout/          # Layout components
  └── features/        # Feature-specific components
```

## Commit Guidelines

### Commit Message Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples
```
feat(header): add mobile menu animation

Add smooth transition animation for mobile menu
when opening and closing.

Closes #123
```

```
fix(hero): correct image aspect ratio

Fix hero image display on mobile devices
by updating width and height props.
```

## Pull Request Process

### Before Submitting
1. Update documentation if needed
2. Add tests if applicable
3. Ensure all tests pass
4. Update CHANGELOG.md

### Submitting a PR
1. Push your branch to your fork
2. Create pull request to `develop` branch
3. Fill out PR template
4. Request review from maintainers

### PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
Describe testing performed

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added/updated
- [ ] All tests passing
```

## Testing

### Manual Testing
- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Test on mobile devices
- Test responsive breakpoints
- Test accessibility

### Linting
```bash
pnpm lint
```

### Type Checking
```bash
pnpm build
```

## Documentation

### When to Update Docs
- Adding new features
- Changing existing functionality
- Updating dependencies
- Modifying configuration

### Documentation Files
- `README.md` - Project overview
- `QUICKSTART.md` - Quick start guide
- `COMPONENTS.md` - Component docs
- `DEPLOYMENT.md` - Deployment guide
- `CHANGELOG.md` - Version history

## Questions or Issues?

- Check existing documentation
- Search existing issues
- Create new issue with detailed description
- Join community discussions

## Recognition

Contributors will be recognized in:
- CONTRIBUTORS.md file
- Release notes
- Project documentation

Thank you for contributing! 🎉
