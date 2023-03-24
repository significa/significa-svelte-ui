<script lang="ts">
  import type { NotificationType } from '$lib/components/notifications/store';

  export let notification: NotificationType;
</script>

<div class="border border-foreground bg-background p-4">{notification.message}</div>
