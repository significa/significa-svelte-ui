/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  presets: [
    require('./src/lib/tailwind-preset.cjs')({
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
  ],
  plugins: []
};
