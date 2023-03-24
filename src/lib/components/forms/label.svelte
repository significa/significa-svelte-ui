<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let element: undefined | HTMLLabelElement = undefined;

  let className: undefined | string = undefined;
  export { className as class };
  export let required = false;

  let htmlFor: undefined | string = undefined;
  export { htmlFor as for };
</script>

<label
  bind:this={element}
  class={twMerge('block pb-1 text-sm', className)}
  for={htmlFor}
  {...$$restProps}
>
  <slot />
  {#if required}
    <span class="text-foreground-accent">*</span>
  {/if}
</label>
