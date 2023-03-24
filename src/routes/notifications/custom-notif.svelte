<script lang="ts">
  import type { Toast } from '$lib/components/toasts/types';

  export let toast: Toast;
</script>

<div class="border border-foreground bg-background p-4">{toast.message}</div>
