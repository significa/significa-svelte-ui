<script lang="ts">
  import { cva, type VariantProps } from 'class-variance-authority';
  import { twMerge } from 'tailwind-merge';
  import Notification from './notification.svelte';
  import { notifications } from './store';

  const style = cva('pointer-events-none fixed z-[99999]', {
    variants: {
      position: {
        'top-left': 'flex flex-col items-start',
        'top-center': 'flex flex-col items-center',
        'top-right': 'flex flex-col items-end',
        'bottom-left': 'flex flex-col-reverse items-start',
        'bottom-center': 'flex flex-col-reverse items-center',
        'bottom-right': 'flex flex-col-reverse items-end'
      },
      gap: {
        sm: 'gap-2',
        md: 'gap-4',
        lg: 'gap-6',
        xl: 'gap-8'
      },
      inset: {
        sm: 'inset-2',
        md: 'inset-4',
        lg: 'inset-6',
        xl: 'inset-8'
      }
    }
  });

  let className: undefined | string = undefined;
  export { className as class };
  export let position: VariantProps<typeof style>['position'] = 'bottom-right';
  export let gap: VariantProps<typeof style>['gap'] = 'md';
  export let inset: VariantProps<typeof style>['inset'] = 'md';
</script>

<div class={twMerge(style({ position, gap, inset }), className)}>
  {#each $notifications as notification (notification.id)}
    <Notification {...notification} on:dismiss={({ detail: id }) => notifications.remove(id)} />
  {/each}
</div>
