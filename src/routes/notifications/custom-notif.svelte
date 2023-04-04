<script lang="ts">
  import Transitions from '$lib/components/toasts/transitions.svelte';
  import type { Toast } from '$lib/components/toasts/types';

  export let toast: Toast;
</script>

<Transitions {toast}>
  <div class="border border-foreground bg-background p-4">{toast.message}</div>
</Transitions>
