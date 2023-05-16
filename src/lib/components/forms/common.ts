import { cva } from 'class-variance-authority';

export const base = cva(
  `
  appearance-none
  outline-none

  bg-foreground/2
  border
  border-foreground/10

  hover:border-border-active
  hover:ring-2

  focus:border-border-active
  focus:ring-4
  focus:ring-outline
  focus:outline-none
  peer-focus:border-border-active
  peer-focus:ring-4
  peer-focus:ring-outline
  peer-focus:outline-none
  checked:bg-outline

  disabled:opacity-60
  disabled:pointer-events-none

  transition-all
`,
  {
    variants: {
      error: {
        true: `
          border-error/50

          hover:border-error/50
          hover:ring-error

          focus:border-error/50
          focus:ring-error
          checked:bg-error
        `
      }
    }
  }
);

export const input = cva(
  `
  w-full

  placeholder:text-base
  placeholder:text-foreground-secondary
  placeholder:antialiased

  text-foreground
  leading-snug
  `,
  {
    variants: {
      size: {
        sm: `
        py-1.5
        rounded-sm
        px-3
      `,
        md: `
        py-2.5
        rounded-md
        px-4
      `,
        lg: `
        py-4
        rounded-lg
        px-5
      `
      }
    }
  }
);
