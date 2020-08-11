# Vercel public directory deployment repro

This repro uses Yarn workspaces to provide a "monorepo" like project structure.

It has a Next.js app inside of the `/app` directory which has a dependency on the `/shared` project (package).

When deploying this to Vercel the project root is the Yarn workspace which is located at the root of the project (`./`).

This means a custom `output directory` needs to be specified in the Vercel settings. When setting it to `/app` a manifest not found error is thrown.

When setting it to `/app/.next` the app is successfully deployed but the static assets in the `app/public` folder are not deployed.

The only workaround I have been able to find for this is to copy both the `app/public` and `app/.next` directories up to the project root after building and leave the custom `output directory` in the Vercel settings as being empty. (See the `package` script in the root package.json).
