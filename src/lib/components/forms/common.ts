import { cva, type VariantProps } from 'class-variance-authority';

export const base = cva(`
  appearance-none
  outline-0

  bg-foreground/2
  border
  border-foreground/10

  hover:border-border-active
  hover:ring-2

  focus:border-border-active
  focus:ring-4
  focus:ring-outline
  focus:outline-0

  disabled:opacity-60
  disabled:pointer-events-none

  transition-all
`);

export const input = cva(
  `
  ${base()}

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
      },
      error: {
        true: `
        border-error/50

        hover:border-error/50
        hover:ring-error

        focus:border-error/50
        focus:ring-error
      `
      }
    }
  }
);

export const select: (options: VariantProps<typeof input>) => string = (options) => {
  return `${input(options)} select-chevron`;
};

export const checkbox = cva(`
  ${base()}
  checkbox-tick

  h-4
  w-4
  rounded-2xs

  checked:bg-outline
`);

export const floatingLabel = cva(
  `
  absolute
  top-2.5
  
  pointer-events-none
  
  text-xs
  text-foreground-secondary

  peer-placeholder-shown:top-1/2
  peer-placeholder-shown:-translate-y-1/2
  peer-placeholder-shown:text-base

  transition-all
  ease-motion
`,
  {
    variants: {
      size: {
        sm: 'left-3',
        md: 'left-4',
        lg: 'left-5'
      },
      error: {
        true: 'text-error'
      },
      floating: {
        true: `top-1/2 -translate-y-1/2 text-base`
      }
    }
  }
);

export const floatingInput = cva(`
  peer
  placeholder:text-transparent

  [&:not(:placeholder-shown)]:pt-6
  [&:not(:placeholder-shown)]:pb-2
`);

export const floatingSelect = cva(`peer`, {
  variants: {
    value: {
      true: `pt-6 pb-2`,
      false: `text-transparent`
    }
  }
});
