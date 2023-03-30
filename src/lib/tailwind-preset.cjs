const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

const parseAlphaColor = (color, opacity = '1') => color?.replace('<alpha-value>', opacity);

const getChevronImage = (color) => {
  return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='${color}' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`;
};

const getAttachmentImage = (color) => {
  return `url("data:image/svg+xml,%3Csvg width='14' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.835 8.306 6.53 13.715c-.456.459-.946.757-1.469.893-.518.137-1.03.13-1.533-.022-.5-.146-.943-.42-1.332-.82a3.14 3.14 0 0 1-.806-1.348 2.968 2.968 0 0 1-.014-1.56c.134-.533.427-1.031.878-1.495l7.27-7.393c.26-.269.554-.46.886-.571.33-.113.66-.137.986-.074.326.059.619.218.878.477.26.268.417.569.475.9.062.328.036.66-.08.997-.11.337-.297.638-.56.901l-7.127 7.26c-.158.167-.324.24-.497.22a.717.717 0 0 1-.424-.205.68.68 0 0 1-.202-.424c-.02-.176.05-.35.209-.52L9.042 5.88a.663.663 0 0 0 .194-.447.56.56 0 0 0-.173-.44.57.57 0 0 0-.431-.168.579.579 0 0 0-.432.198L3.21 10.11c-.259.259-.43.554-.511.886a2.03 2.03 0 0 0-.007.975 1.7 1.7 0 0 0 .46.82 1.777 1.777 0 0 0 1.786.484c.316-.093.602-.271.856-.535l7.17-7.29c.46-.474.765-.98.914-1.516.154-.543.16-1.075.022-1.598A3.141 3.141 0 0 0 13.08.93a2.974 2.974 0 0 0-1.369-.82 2.837 2.837 0 0 0-1.576.006c-.537.147-1.039.457-1.504.93L1.325 8.498a4.66 4.66 0 0 0-1.015 1.51A4.24 4.24 0 0 0 0 11.661c.01.557.123 1.097.339 1.62.216.527.533.998.95 1.413A4.242 4.242 0 0 0 4.27 16a4.04 4.04 0 0 0 1.627-.315A4.473 4.473 0 0 0 7.38 14.66l5.356-5.444a.608.608 0 0 0 .172-.462.604.604 0 0 0-.187-.461.517.517 0 0 0-.439-.183.673.673 0 0 0-.446.197Z' fill='${color}'/%3E%3C/svg%3E")`;
};

const getTickImage = (color) => {
  return `url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='${color}' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3E%3C/svg%3E")`;
};

const colors = {
  light: {
    '--color-background': '0deg 0% 97%',
    '--color-background-panel': '0deg 0% 100%',
    '--color-background-offset': '0deg 0% 93%',

    '--color-foreground': '0deg 0% 9%',
    '--color-foreground-secondary': '240deg 1% 44%',
    '--color-foreground-tertiary': '240deg 2% 78%',
    '--color-foreground-accent': '220deg 100% 50%',

    '--color-border': '0deg 0% 91%',
    '--color-border-active': '48deg 100% 57%',

    '--color-brand': '48deg 100% 57%',
    '--color-outline': '48deg 99% 73%',
    '--color-outline-error': '353deg 93% 89%',
    '--color-error': '353deg 80% 48%',
    '--color-success': '166deg 90% 27%',
    '--color-selection': '0deg 0% 9%',
    '--color-drawing': '232deg 100% 30%'
  },
  dark: {
    '--color-background': '0deg 0% 9%',
    '--color-background-panel': '0deg 0% 12%',
    '--color-background-offset': '0deg 0% 14%',

    '--color-foreground': '0deg 0% 93%',
    '--color-foreground-secondary': '240deg 1% 63%',
    '--color-foreground-tertiary': '240deg 1% 31%',
    '--color-foreground-accent': '48deg 100% 57%',

    '--color-border': '0deg 0% 18%',
    '--color-border-active': '48deg 100% 32%',

    '--color-brand': '48deg 100% 57%',
    '--color-outline': '49deg 89% 18%',
    '--color-outline-error': '0deg 30% 27%',
    '--color-error': '355deg 85% 58%',
    '--color-success': '166deg 100% 30%',
    '--color-selection': '48deg 100% 57%',
    '--color-drawing': '0deg 0% 93%'
  },
  yellow: {
    '--color-background': '48deg 100% 57%',
    '--color-background-panel': '48deg 100% 49%',
    '--color-background-offset': '48deg 100% 50%',

    '--color-foreground': '48deg 28% 15%',
    '--color-foreground-secondary': '48deg 100% 20%',
    '--color-foreground-tertiary': '48deg 100% 10%',
    '--color-foreground-accent': '232deg 100% 30%',

    '--color-border': '48deg 100% 46%',
    '--color-border-active': '49deg 100% 40%',

    '--color-brand': '48deg 100% 57%',
    '--color-outline': '48deg 100% 46%',
    '--color-outline-error': '40deg 83% 53%',
    '--color-error': '0deg 66% 41%',
    '--color-success': '158deg 41% 28%',
    '--color-selection': '49deg 100% 14%',
    '--color-drawing': '49deg 28% 15%'
  }
};

// Preset
module.exports = function (options = { fonts: {} }) {
  return {
    darkMode: ['class', '[data-theme="dark"]'],
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
        '3xl': ['clamp(1.625rem, 0.465vw + 1.503rem, 1.875rem)', { lineHeight: '1.12' }],
        '4xl': [
          'clamp(1.75rem, 0.93vw + 1.506rem, 2.25rem)',
          {
            lineHeight: '1.12',
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
        },
        brand: {
          DEFAULT: 'hsl(var(--color-brand) / <alpha-value>)'
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
        borderColor: (theme) => ({
          DEFAULT: theme('colors.border.DEFAULT')
        }),
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
        },
        opacity: {
          2: '.02'
        },
        boxShadow: {
          sm: '0 1px 1px rgb(0 0 0 / 0.02)',
          DEFAULT: ['0 1px 2px rgb(0 0 0 / 0.02)', '0 2px 4px rgb(0 0 0 / 0.04)'],
          md: ['0 2px 2px rgb(0 0 0 / 0.02)', '0 4px 8px rgb(0 0 0 / 0.06)'],
          lg: ['0 2px 4px rgb(0 0 0 / 0.04)', '0 8px 12px rgb(0 0 0 / 0.08)'],
          xl: ['0 4px 6px rgb(0 0 0 / 0.04)', '0 16px 24px rgb(0 0 0 / 0.08)'],
          '2xl': [
            '0 2px 2px rgb(0 0 0 / 0.02)',
            '0 8px 12px rgb(0 0 0 / 0.04)',
            '0 32px 48px rgb(0 0 0 / 0.08)'
          ]
        }
      }
    },
    plugins: [
      // require('@tailwindcss/forms'),
      plugin.withOptions(function (options = { fonts: {} }) {
        return function ({ addVariant, addBase, addUtilities, theme }) {
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

          // Utility classes
          addUtilities({
            '.elevated-links': {
              position: 'relative',

              'a[href]': {
                position: 'static',
                zIndex: 1
              },
              'a.elevated-link:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }
            },
            // Form elements helpers
            [[`.file-button`]]: {
              backgroundImage: getAttachmentImage(
                `hsl(${colors.light['--color-foreground-secondary']})`
              ),
              backgroundRepeat: 'no-repeat',
              backgroundPosition: `left ${theme('spacing.4')} center`,
              backgroundSize: '0.875em 1em',
              paddingLeft: theme('spacing.10'),

              [`&::file-selector-button`]: {
                width: '0',
                padding: 0,
                margin: 0,
                opacity: 0,
                visibility: 'hidden'
              },

              '[data-theme="dark"] &': {
                backgroundImage: getAttachmentImage(
                  `hsl(${colors.dark['--color-foreground-secondary']})`
                )
              },

              '[data-theme="yellow"] &': {
                backgroundImage: getAttachmentImage(
                  `hsl(${colors.yellow['--color-foreground-secondary']})`
                )
              }
            },
            '.select-chevron': {
              backgroundImage: getChevronImage(
                `hsl(${colors.light['--color-foreground-secondary']})`
              ),

              backgroundRepeat: 'no-repeat',
              backgroundPosition: `right ${theme('spacing.2')} center`,
              backgroundSize: '1.5em 1.5em',
              paddingRight: theme('spacing.10'),

              '[data-theme="dark"] &': {
                backgroundImage: getChevronImage(
                  `hsl(${colors.dark['--color-foreground-secondary']})`
                )
              },

              '[data-theme="yellow"] &': {
                backgroundImage: getChevronImage(
                  `hsl(${colors.yellow['--color-foreground-secondary']})`
                )
              }
            },
            '.checkbox-tick:checked': {
              backgroundImage: getTickImage(`hsl(${colors.light['--color-foreground']})`),
              'background-size': `100% 100%`,
              'background-position': `center`,
              'background-repeat': `no-repeat`,

              '[data-theme="dark"] &:checked': {
                backgroundImage: getTickImage(`hsl(${colors.dark['--color-foreground']})`)
              },

              '[data-theme="yellow"] &:checked': {
                backgroundImage: getTickImage(`hsl(${colors.yellow['--color-foreground']})`)
              }
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
            ':root, .theme-light, [data-theme="light"]': colors.light,
            '.theme-dark, [data-theme="dark"]': colors.dark,
            '.theme-yellow, [data-theme="yellow"]': colors.yellow
          });
        };
      })(options)
    ]
  };
};
