<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { base, input } from './common';
  import FloatingLabel from './floating-label.svelte';

  export let element: undefined | HTMLInputElement = undefined;

  let className: undefined | string = undefined;
  export { className as class };

  export let label: string;
  export let id: string = crypto.randomUUID();
  export let error = false;
  export let value = '';
</script>

<div class={twMerge('relative', className)}>
  <input
    bind:this={element}
    bind:value
    on:change
    on:mouseenter
    on:mouseleave
    on:click
    on:focus
    on:blur
    on:input
    {id}
    class={twMerge(
      base({ error }),
      input({ size: 'lg' }),
      `peer placeholder:text-transparent [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6`
    )}
    placeholder={label}
    {...$$restProps}
  />
  <FloatingLabel for={id} {error}>{label}</FloatingLabel>
</div>
