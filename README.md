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

## CSS main file

In your main css file (`/src/styles/index.css` or similar), import our main file:

```css
@import '@significa/svelte-ui/index.css';

/* Your styles */
```

This will set-up our tokens and brand font.

### VSCode setup

Setting up VSCode to autocomplete with our available CSS variables:

1. Add the "phoenisx.cssvar" extension. Optionally, add it to your project's `.vscode/extensions.json` file.
2. In `.vscode/settings.json` add: `"cssvar.files": ["src/**/*.css", "node_modules/@significa/svelte-ui/dist/**/*.css"],`

## CSS Mixins

This library exports some mixins that can be helpful when developing UIs:

<details>
  <summary>Available mixins</summary>

- elevated-links
- visually-hidden
- multi-line-clamp $amount: 2
- hide-scrollbar
</details>

### Usage

To use them with PostCSS, first install `postcss-mixins` and add to your PostCSS configuration:

```js
module.exports = {
  plugins: [
    // your plugins
    require('postcss-mixins')({
      mixinsFiles: [require.resolve('@significa/svelte-ui/mixins.css')]
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
