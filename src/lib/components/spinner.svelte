<script lang="ts">
  import clsx from 'clsx';
  import type { HTMLAttributes } from 'svelte/elements';

  interface $$Props extends HTMLAttributes<HTMLSpanElement> {
    size?: 'xs' | 'sm';
  }

  export let size: $$Props['size'] = 'sm';
</script>

<svg
  aria-label="loading"
  role="progressbar"
  class={clsx(
    'animate-spin bg-',
    size === 'xs' && 'h-4 w-4',
    size === 'sm' && 'h-5 w-5',
    $$props.class
  )}
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
>
  <circle class="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
  <path
    class="opacity-75"
    fill="currentColor"
    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  />
</svg>
