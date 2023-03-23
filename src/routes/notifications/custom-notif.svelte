<script lang="ts">
  import type { Notification } from '$lib/components/notifications/store';

  export let notification: Notification;
</script>

<div class="border border-foreground bg-background p-4">{notification.message}</div>
