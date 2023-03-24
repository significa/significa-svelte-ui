# Significa Svelte UI

This project is responsible for Significa's Svelte UI library.
Storybook preview available at [significa-svelte-ui.vercel.app](https://significa-svelte-ui.vercel.app/).

This package is published in the GitHub package registry as [@significa/significa-svelte-ui](https://github.com/significa/significa-svelte-ui/pkgs/npm/significa-svelte-ui).

# Using the package

1. Generate a new github PAT (Classic Personal Access Token).
   Grant `read:packages` _Download packages from GitHub Package Registry_.
2. Open your shell configuration file (`.zshrc`, `.bashrc`, etc.) and export your token at the end of the file: ` export GITHUB_ACCESS_TOKEN=access_token_here`

_More instructions in [Working with the npm registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)._

Install with `npm install --save-dev @significa/svelte-ui`

## Tailwind

In your tailwind configuration file (`tailwind.config.cjs`), import our tailwind preset and update the `content` key to include our package.
Optionally (but ideally), you can include our brand fonts by providing a path to your project's static font files.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/@significa/svelte-ui/**/*.{html,js,svelte,ts}' // add this
  ],
  presets: [
    require('@significa/svelte-ui/tailwind-preset') // add this
  ],
  theme: {
    // your theme
  }
};
```

### Including fonts

If the project needs to include our brand fonts, you can call the preset defining custom fonts and their path:

```js
module.exports = {
  presets: [
    require('@significa/svelte-ui/tailwind-preset')({
      fonts: {
        sans: {
          name: 'Significa Sans',
          fontFaces: [
            {
              fontWeight: '400',
              src: `url('/fonts/significa-regular.woff2') format('woff2')`,
              ascentOverride: '95%'
            },
            {
              fontWeight: '500',
              src: `url('/fonts/significa-medium.woff2') format('woff2')`,
              ascentOverride: '95%'
            },
            {
              fontWeight: '600',
              src: `url('/fonts/significa-semibold.woff2') format('woff2')`,
              ascentOverride: '95%'
            }
          ]
        }
      }
    })
  ]
};
```

# Development

1. Ensure you are using the Node version in the [.nvmrc](./.nvmrc) file (ex: `nvm use`).
2. Install the dependencies with `npm install`.
3. Start Storybook's component preview server with `npm run storybook`. Access it at `http://localhost:6006/`.

### Releasing new versions

Just create a new [release](https://github.com/significa/significa-svelte-ui/releases) with a semver compliant name, prefixed by `v`. Ex: `v1.2.3`, `v1.2.3-sample`.
