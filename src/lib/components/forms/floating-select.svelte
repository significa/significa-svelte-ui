<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { floatingSelect, floatingLabel, select } from './common';

  type T = $$Generic<string>;

  let className: undefined | string = undefined;
  export { className as class };

  export let label: string;
  export let id: string = crypto.randomUUID();
  export let error = false;
  export let value: undefined | T = undefined;
</script>

<div class={twMerge('relative', className)}>
  <select
    bind:value
    on:change
    on:mouseenter
    on:mouseleave
    on:click
    on:focus
    {id}
    class={twMerge(select({ size: 'lg', error }), floatingSelect({ value: !!value }))}
    {...$$restProps}
  >
    <slot />
  </select>
  <label for={id} class={twMerge(floatingLabel({ size: 'lg', error, floating: !value }))}>
    {label}
  </label>
</div>
