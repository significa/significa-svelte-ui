<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { base, input } from './common';
  import FloatingLabel from './floating-label.svelte';

  let className: undefined | string = undefined;
  export { className as class };

  export let label: string;
  export let id: string = crypto.randomUUID();
  export let error = false;
  export let value = '';
</script>

<div class={twMerge('relative', className)}>
  <input
    bind:value
    on:change
    on:mouseenter
    on:mouseleave
    on:click
    on:focus
    {id}
    class={twMerge(
      base({ error }),
      input({ size: 'lg' }),
      `peer placeholder:text-transparent [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2`
    )}
    placeholder={label}
    {...$$restProps}
  />
  <FloatingLabel for={id} {error}>{label}</FloatingLabel>
</div>
