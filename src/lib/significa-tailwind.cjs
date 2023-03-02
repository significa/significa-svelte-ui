const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

// TODO: move to own package, in typescript, with ESM and CJS exports

/*

// tailwind.config.cjs

module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@significa/svelte-ui/tailwind')({
      fonts: {
        sans: {
          name: 'Significa Sans',
          fontFaces: [
            {
              fontWeight: '400',
              src: `url('/fonts/significa-regular.woff2') format('woff2')`
            },
            {
              fontWeight: '500',
              src: `url('/fonts/significa-medium.woff2') format('woff2')`
            },
            {
              fontWeight: '600',
              src: `url('/fonts/significa-semibold.woff2') format('woff2')`
            }
          ]
        }
      }
    })
  ],
}

*/

module.exports = plugin.withOptions(
  function (options = { fonts: {} }) {
    return function ({ addVariant, addBase }) {
      // light: and yellow: modifiers
      addVariant('light', "[data-theme='light'] &");
      addVariant('yellow', "[data-theme='yellow'] &");

      // Fonts
      if (options.fonts) {
        Object.values(options.fonts).forEach((font) => {
          if (font && font.fontFaces.length) {
            addBase(
              font.fontFaces.map((fontFace) => ({
                '@font-face': {
                  fontFamily: font.name,
                  fontWeight: fontFace.fontWeight || '400',
                  fontDisplay: fontFace.fontDisplay || 'swap',
                  fontStyle: fontFace.fontStyle || 'normal',
                  src: fontFace.src,
                  ...fontFace
                }
              }))
            );
          }
        });
      }

      // Text rendering
      addBase({
        html: {
          textRendering: 'geometricPrecision'
        }
      });

      // Themes
      addBase({
        '[data-theme], .theme-light, .theme-dark, .theme-yellow': {
          backgroundColor: 'hsl(var(--color-background))',
          color: 'hsl(var(--color-foreground))'
        }
      });
      addBase({
        ':root, .theme-light, [data-theme="light"]': {
          '--color-background': '0deg 0% 97%',
          '--color-background-panel': '0deg 0% 100%',
          '--color-background-offset': '0deg 0% 93%',

          '--color-foreground': '0deg 0% 9%',
          '--color-foreground-secondary': '240deg 1% 44%',
          '--color-foreground-tertiary': '240deg 2% 78%',
          '--color-foreground-accent': '232deg 100% 30%',

          '--color-border': '0deg 0% 91%',
          '--color-border-subtle': '0deg 0% 86%',
          '--color-border-active': '48deg 100% 57%',

          '--color-outline': '48deg 99% 73%',
          '--color-outline-error': '353deg 93% 89%',
          '--color-error': '353deg 80% 48%',
          '--color-success': '166deg 90% 27%',
          '--color-selection': '0deg 0% 9%',
          '--color-drawing': '232deg 100% 30%'
        },
        '.theme-dark, [data-theme="dark"]': {
          '--color-background': '0deg 0% 9%',
          '--color-background-panel': '0deg 0% 12%',
          '--color-background-offset': '0deg 0% 14%',

          '--color-foreground': '0deg 0% 93%',
          '--color-foreground-secondary': '240deg 1% 63%',
          '--color-foreground-tertiary': '240deg 1% 31%',
          '--color-foreground-accent': '48deg 100% 57%',

          '--color-border': '0deg 0% 18%',
          '--color-border-subtle': '240deg 2% 20%',
          '--color-border-active': '48deg 100% 32%',

          '--color-outline': '49deg 89% 18%',
          '--color-outline-error': '0deg 30% 27%',
          '--color-error': '355deg 85% 58%',
          '--color-success': '166deg 100% 30%',
          '--color-selection': '48deg 100% 57%',
          '--color-drawing': '0deg 0% 93%'
        },
        '.theme-yellow, [data-theme="yellow"]': {
          '--color-background': '48deg 100% 57%',
          '--color-background-panel': '48deg 100% 49%',
          '--color-background-offset': '48deg 100% 50%',

          '--color-foreground': '49deg 28% 15%',
          '--color-foreground-secondary': '51deg 100% 20%',
          '--color-foreground-tertiary': '45deg 100% 10%',
          '--color-foreground-accent': '232deg 100% 30%',

          '--color-border': '48deg 100% 46%',
          '--color-border-subtle': '48deg 100% 46%',
          '--color-border-active': '49deg 100% 40%',

          '--color-outline': '48deg 100% 46%',
          '--color-outline-error': '40deg 83% 53%',
          '--color-error': '0deg 66% 41%',
          '--color-success': '158deg 41% 28%',
          '--color-selection': '49deg 100% 14%',
          '--color-drawing': '49deg 28% 15%'
        }
      });
    };
  },
  function (options) {
    return {
      future: {
        hoverOnlyWhenSupported: true
      },
      theme: {
        fontFamily: {
          sans: options?.fonts?.sans?.name
            ? [options.fonts.sans.name, ...defaultTheme.fontFamily.sans]
            : defaultTheme.fontFamily.sans,
          serif: options?.fonts?.serif?.name
            ? [options.fonts.serif.name, ...defaultTheme.fontFamily.serif]
            : defaultTheme.fontFamily.serif,
          mono: options?.fonts?.mono?.name
            ? [options.fonts.mono.name, ...defaultTheme.fontFamily.mono]
            : defaultTheme.fontFamily.mono
        },
        fontSize: {
          xs: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.005em' }],
          sm: ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.005em' }],
          base: ['1rem', { lineHeight: '1.5rem' }],
          lg: ['1.125rem', { lineHeight: '1.75rem' }],
          xl: ['1.25rem', { lineHeight: '1.75rem' }],
          '2xl': ['1.5rem', { lineHeight: '2rem' }],
          '3xl': ['clamp(1.625rem, 0.465vw + 1.503rem, 1.875rem)', { lineHeight: '1.2' }],
          '4xl': [
            'clamp(1.75rem, 0.93vw + 1.506rem, 2.25rem)',
            {
              lineHeight: '1.2',
              fontWeight: '600'
            }
          ],
          '5xl': [
            'clamp(1.875rem, 2.093vw + 1.326rem, 3rem)',
            {
              lineHeight: '1.12',
              letterSpacing: '-0.005em',
              fontWeight: '600'
            }
          ],
          '6xl': [
            'clamp(2rem, 3.256vw + 1.145rem, 3.75rem)',
            {
              lineHeight: '1.12',
              letterSpacing: '-0.005em',
              fontWeight: '600'
            }
          ],
          '7xl': [
            'clamp(2.25rem, 4.186vw + 1.151rem, 4.5rem)',
            {
              lineHeight: '1.12',
              letterSpacing: '-0.005em',
              fontWeight: '600'
            }
          ],
          '8xl': [
            'clamp(3rem, 5.581vw + 1.535rem, 6rem)',
            {
              lineHeight: 'clamp(3.36rem, 5.581vw + 1.895rem, 6.36rem)',
              letterSpacing: '-0.005em',
              fontWeight: '600'
            }
          ],
          '9xl': [
            'clamp(3.75rem, 7.907vw + 1.674rem, 8rem)',
            {
              lineHeight: 'clamp(4.2rem, 7.07vw + 2.344rem, 8rem)',
              letterSpacing: '-0.005em',
              fontWeight: '600'
            }
          ]
        },
        colors: {
          inherit: 'inherit',
          current: 'currentColor',
          transparent: 'transparent',
          black: '#000',
          white: '#fff',
          background: {
            DEFAULT: 'hsl(var(--color-background) / <alpha-value>)',
            panel: 'hsl(var(--color-background-panel) / <alpha-value>)',
            offset: 'hsl(var(--color-background-offset) / <alpha-value>)'
          },
          foreground: {
            DEFAULT: 'hsl(var(--color-foreground) / <alpha-value>)',
            secondary: 'hsl(var(--color-foreground-secondary) / <alpha-value>)',
            tertiary: 'hsl(var(--color-foreground-tertiary) / <alpha-value>)',
            accent: 'hsl(var(--color-foreground-accent) / <alpha-value>)'
          },
          border: {
            DEFAULT: 'hsl(var(--color-border) / <alpha-value>)',
            subtle: 'hsl(var(--color-border-subtle) / <alpha-value>)',
            active: 'hsl(var(--color-border-active) / <alpha-value>)'
          },
          outline: {
            DEFAULT: 'hsl(var(--color-outline) / <alpha-value>)',
            error: 'hsl(var(--color-outline-error) / <alpha-value>)'
          },
          error: {
            DEFAULT: 'hsl(var(--color-error) / <alpha-value>)'
          },
          success: {
            DEFAULT: 'hsl(var(--color-success) / <alpha-value>)'
          },
          selection: {
            DEFAULT: 'hsl(var(--color-selection) / <alpha-value>)'
          },
          drawing: {
            DEFAULT: 'hsl(var(--color-drawing) / <alpha-value>)'
          }
        },
        borderRadius: {
          none: '0',
          '3xs': '2px',
          '2xs': '4px',
          xs: '8px',
          sm: '12px',
          md: '16px',
          lg: '20px',
          xl: '24px',
          '2xl': '28px',
          '3xl': '32px',
          full: '99999px'
        },
        extend: {
          outlineColor: {
            DEFAULT: 'hsl(var(--color-outline))'
          },
          ringColor: {
            DEFAULT: 'hsl(var(--color-outline))',
            error: 'hsl(var(--color-outline-error))'
          },
          ringOpacity: {
            DEFAULT: '1'
          },
          transitionTimingFunction: {
            motion: 'cubic-bezier(0.2, 1, 0.2, 1)',
            smooth: 'cubic-bezier(1, 0, 0, 1)'
          }
        }
      },
      darkMode: ['class', '[data-theme="dark"]']
    };
  }
);
