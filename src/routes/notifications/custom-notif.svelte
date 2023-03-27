<script lang="ts">
  import Transitions from '$lib/components/toasts/transitions.svelte';
  import type { Toast, ToastPosition } from '$lib/components/toasts/types';

  export let toast: Toast;
  export let position: ToastPosition;
</script>

<Transitions {toast} {position}>
  <div class="border border-foreground bg-background p-4">{toast.message}</div>
</Transitions>
