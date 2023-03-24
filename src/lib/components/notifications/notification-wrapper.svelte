<script lang="ts">
  import { tweened } from 'svelte/motion';
  import type { NotificationType } from './store';

  export let notification: NotificationType;

  let scale = tweened(1, { duration: 0 });
  let lastreoccuredAt: number | undefined = undefined;
  $: if (notification.reoccuredAt !== lastreoccuredAt) {
    lastreoccuredAt = notification.reoccuredAt;
    $scale = 1.02;
    setTimeout(() => scale.set(1, { duration: 500 }), 200);
  }
</script>

<div
  role={notification.type === 'error' ? 'alert' : 'status'}
  aria-live="polite"
  style="transform: scale({$scale})"
>
  <slot />
</div>
