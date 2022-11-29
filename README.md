# Significa Svelte UI

This project is responsible for Significa's Svelte UI library.
Storybook preview available at [significa-svelte-ui.vercel.app](https://significa-svelte-ui.vercel.app/).

This package is published in the GitHub package registry as [@significa/significa-svelte-ui](https://github.com/significa/significa-svelte-ui/pkgs/npm/significa-svelte-ui).

## Using the package

1. Generate a new github PAT (Classic Personal Access Token).
   Grant `read:packages` _Download packages from GitHub Package Registry_.
2. Run `npm login --scope=@significa --registry=https://npm.pkg.github.com`.
   In the interactive CLI set your GitHub handle as the username and the newly generated PAT as the password (email can be anything).

More instructions in [Working with the npm registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry).

## Development

1. Ensure you are using the Node version in the [.nvmrc](./.nvmrc) file (ex: `nvm use`).
2. Install the dependencies with `npm install`.
3. Start Storybook's component preview server with `npm run storybook`. Access it at `http://localhost:6006/`.

### Releasing new versions

Just create a new [release](https://github.com/significa/significa-svelte-ui/releases) with a semver compliant name, prefixed by `v`. Ex: `v1.2.3`, `v1.2.3-sample`.
