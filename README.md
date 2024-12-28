# Turboyeti Starter

This is a monorepo starter using Turborepo with shadcn-ui components and Vite.

## What's inside?

### Apps and Packages

- `apps/admin`: Admin dashboard using Vite + React + TypeScript
- `packages/ui`: Shared UI components built with shadcn-ui
- `packages/config-vite`: Shared Vite configuration
- `packages/config-tailwind`: Shared Tailwind CSS configuration with theme support
- `packages/config-typescript`: Shared TypeScript configuration
- `packages/config-eslint`: Shared ESLint configurations

### Development

To develop all apps and packages:

```bash
pnpm dev
```

### Build

To build all apps and packages:

```bash
pnpm build
```

### Utilities

- `pnpm lint`: Lint all packages
- `pnpm type-check`: Type-check all packages

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```bash
npx turbo login
```
