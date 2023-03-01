const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    fontFamily: {
      sans: ['Significa Sans', ...defaultTheme.fontFamily.sans],
      serif: ['Significa Serif', ...defaultTheme.fontFamily.sans],
      mono: ['Significa Mono', ...defaultTheme.fontFamily.sans]
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.005em' }],
      sm: ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.005em' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['clamp(1.625rem, 0.465vw + 1.503rem, 1.875rem)', { lineHeight: '1.2' }],
      '4xl': ['clamp(1.75rem, 0.93vw + 1.506rem, 2.25rem)', { lineHeight: '1.2' }],
      '5xl': [
        'clamp(1.875rem, 2.093vw + 1.326rem, 3rem)',
        { lineHeight: '1.12', letterSpacing: '-0.005em' }
      ],
      '6xl': [
        'clamp(2rem, 3.256vw + 1.145rem, 3.75rem)',
        { lineHeight: '1.12', letterSpacing: '-0.005em' }
      ],
      '7xl': [
        'clamp(2.25rem, 4.186vw + 1.151rem, 4.5rem)',
        { lineHeight: '1.12', letterSpacing: '-0.005em' }
      ],
      '8xl': [
        'clamp(3rem, 5.581vw + 1.535rem, 6rem)',
        { lineHeight: 'clamp(3.36rem, 5.581vw + 1.895rem, 6.36rem)', letterSpacing: '-0.005em' }
      ],
      '9xl': [
        'clamp(3.75rem, 7.907vw + 1.674rem, 8rem)',
        { lineHeight: 'clamp(4.2rem, 7.07vw + 2.344rem, 8rem)', letterSpacing: '-0.005em' }
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
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('light', "[data-theme='light'] &");
      addVariant('yellow', "[data-theme='yellow'] &");
    })
  ]
};
