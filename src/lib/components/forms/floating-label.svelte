<script lang="ts">
  import { cva } from 'class-variance-authority';

  const label = cva(`absolute pointer-events-none transition-all ease-motion left-5`, {
    variants: {
      error: {
        true: 'text-error',
        false: 'text-foreground-secondary'
      },
      resting: {
        true: `top-4 text-base`,
        false: `top-2.5 text-xs peer-placeholder-shown:top-4 peer-placeholder-shown:text-base`
      }
    }
  });

  let forHtml: string;
  export { forHtml as for };
  export let error = false;
  export let resting = false; // we can't use :placeholder-shown in selects, so we need to manually set this
</script>

<label for={forHtml} class={label({ error, resting })}>
  <slot />
</label>
