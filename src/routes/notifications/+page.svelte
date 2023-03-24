<script lang="ts">
  import Button from '$lib/components/button.svelte';
  import Notifications from '$lib/components/notifications/notifications.svelte';
  import { notifications } from '$lib/components/notifications/store';
  import CustomNotif from './custom-notif.svelte';

  const promise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.5 ? reject() : resolve('');
      }, 2000);
    });
  };
</script>

<div data-theme="light" class="flex h-screen w-screen flex-col items-center justify-center gap-4">
  <Notifications />
  <Button
    size="sm"
    variant="secondary"
    on:click={() => notifications({ message: 'This is a notification' })}>Default</Button
  >
  <Button
    size="sm"
    variant="secondary"
    on:click={() =>
      notifications({
        message: 'This is a notification',
        description:
          'This is the text below. It can be quite long if you keep on writing! Something more just to fill up the available space and make it break another line.',
        timeout: 5000
      })}>Description</Button
  >
  <Button
    size="sm"
    variant="secondary"
    on:click={() => notifications.success({ message: 'Great success' })}>Success</Button
  >
  <Button
    size="sm"
    variant="secondary"
    on:click={() =>
      notifications.success({
        message: 'Your message has been delivered!',
        description: `Keep an eye on your inbox. If you didn't mistype your message, you should be getting an e-mail right now.`
      })}>Success 2</Button
  >
  <Button
    size="sm"
    variant="secondary"
    on:click={() => notifications.error({ message: 'Something went wrong' })}>Error</Button
  >
  <Button
    size="sm"
    variant="secondary"
    on:click={() =>
      notifications.error({
        message: `We couldn't deliver your message!`,
        description: `We must've forgotten to feed our pidgeons. Please try again or contact us directly.`,
        timeout: 0
      })}>Error 2</Button
  >
  <Button
    size="sm"
    variant="secondary"
    on:click={() =>
      notifications({
        id: 'copied-to-clipboard',
        message: `Copied to clipboard!`,
        type: 'success'
      })}>ID (click multiple)</Button
  >
  <Button
    size="sm"
    variant="secondary"
    on:click={() =>
      notifications.promise(promise(), {
        style: 'width: 400px',
        loading: { message: 'Loading...' },
        success: { message: 'Success!' },
        error: { message: 'Error!' }
      })}>Promise</Button
  >
  <Button
    size="sm"
    variant="secondary"
    on:click={() =>
      notifications({
        id: 'custom-component',
        component: CustomNotif,
        message: 'Hello from custom component'
      })}>Custom component</Button
  >
</div>
