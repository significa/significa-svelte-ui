<script lang="ts">
  import Transitions from '$lib/components/toasts/transitions.svelte';
  import type { Position, Toast } from '$lib/components/toasts/types';

  export let toast: Toast;
  export let position: Position;
</script>

<Transitions {toast} {position}>
  <div class="border border-foreground bg-background p-4">{toast.message}</div>
</Transitions>
