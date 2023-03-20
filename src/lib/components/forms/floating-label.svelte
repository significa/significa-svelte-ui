<script lang="ts">
  import { cva } from 'class-variance-authority';

  const label = cva(`absolute pointer-events-none transition-all ease-motion`, {
    variants: {
      size: {
        lg: 'left-5'
      },
      error: {
        true: 'text-error',
        false: 'text-foreground-secondary'
      },
      floating: {
        true: `top-1/2 -translate-y-1/2 text-base`,
        false: `top-2.5 text-xs peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base`
      }
    }
  });

  let forHtml: string;
  export { forHtml as for };
  export let error = false;
  export let floating = false; // we can't use :placeholder-shown in selects, so we need to manually set this
</script>

<label for={forHtml} class={label({ size: 'lg', error, floating })}>
  <slot />
</label>
