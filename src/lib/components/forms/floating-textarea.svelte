<script lang="ts">
  import { textareaAutoResize } from '$lib/actions/textarea-auto-resize';
  import { twMerge } from 'tailwind-merge';
  import { base, input } from './common';
  import FloatingLabel from './floating-label.svelte';

  export let element: undefined | HTMLTextAreaElement = undefined;

  let className: undefined | string = undefined;
  export { className as class };

  export let label: string;
  export let id: string = crypto.randomUUID();
  export let error = false;
  export let value = '';
</script>

<div class={twMerge('relative', className)}>
  <textarea
    bind:this={element}
    use:textareaAutoResize
    bind:value
    on:change
    on:mouseenter
    on:mouseleave
    on:click
    on:focus
    on:blur
    {id}
    class={twMerge(
      base({ error }),
      input({ size: 'lg' }),
      `peer resize-none placeholder:text-transparent [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2`
    )}
    placeholder={label}
    {...$$restProps}
  />
  <FloatingLabel for={id} {error}>{label}</FloatingLabel>
</div>
