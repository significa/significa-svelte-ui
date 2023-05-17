<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  let className: undefined | string = undefined;
  export { className as class };
</script>

<span
  class={twMerge(
    'rounded-md bg-foreground-tertiary/50 px-1.5 py-0.5 text-xs tabular-nums',
    className
  )}><slot /></span
>
