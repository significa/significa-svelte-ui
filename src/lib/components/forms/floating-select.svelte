<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { floatingSelect, floatingLabel, select } from './common';

  let className: undefined | string = undefined;
  export { className as class };

  export let label: string;
  export let id: string = crypto.randomUUID();
  export let error = false;
  export let value: string | undefined = undefined;
</script>

<div class={twMerge('relative', className)}>
  <select
    {id}
    class={twMerge(select({ size: 'lg', error }), floatingSelect({ value: !!value }))}
    bind:value
    {...$$restProps}
  >
    <slot />
  </select>
  <label for={id} class={twMerge(floatingLabel({ size: 'lg', error, floating: !value }))}>
    {label}
  </label>
</div>
