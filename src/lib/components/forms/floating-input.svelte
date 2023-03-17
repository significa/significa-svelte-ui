<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { input, floatingInput, floatingLabel } from './common';

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
    class={twMerge(input({ size: 'lg', error }), floatingInput())}
    placeholder={label}
    {...$$restProps}
  />
  <label for={id} class={floatingLabel({ size: 'lg', error })}>
    {label}
  </label>
</div>
