# CI Test Package

A sample Node.js package for CI/CD testing with GitHub Packages.

## Installation

To install this package from GitHub Packages, you'll need to configure npm to use GitHub Packages as a registry.

### Setup

1. Create a `.npmrc` file in your project root:
```
semir-intellisync:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

2. Install the package:
```bash
npm install semir-intellisync/ci-test
```

## Usage

```typescript
import { greet, add } from 'semir-intellisync/ci-test';

// Greet someone
console.log(greet({ name: 'Alice' })); // "Hi, Alice!"
console.log(greet({ name: 'Bob', formal: true })); // "Hello, Bob!"

// Add numbers
console.log(add(5, 3)); // 8
```

## Development

### Prerequisites

- Node.js 20+
- npm

### Build

```bash
npm install
npm run build
```

### Publishing

This package is automatically published to GitHub Packages when you push a version tag:

```bash
git tag v1.0.0
git push origin v1.0.0
```

The workflow will:
1. Build the project
2. Wait for manual approval (wiki check)
3. Publish to GitHub Packages

## Configuration

**Important**: Before using this package, update the following:

1. In `package.json`:
   - Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username
   - Update the repository URL

2. In `.github/workflows/review.yaml`:
   - Replace `semir-intellisync` with your actual GitHub username/org

## License

MIT

