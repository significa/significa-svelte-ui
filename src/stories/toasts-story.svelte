<script lang="ts">
  import { toast } from '$lib';
  import Toaster from '$lib/components/toasts/toaster.svelte';
  import type { ComponentProps } from 'svelte';
  import Toast from '../lib/components/toast.svelte';
  import CustomNotif from '../routes/notifications/custom-notif.svelte';

  type $$Props = Omit<ComponentProps<Toaster>, 'component'>;

  const promise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.5 ? reject() : resolve('');
      }, 2000);
    });
  };
</script>

<Toaster component={Toast} {...$$restProps} />
<div class="flex h-screen w-screen flex-col items-center justify-center gap-2">
  <button on:click={() => toast({ message: 'This is a notification' })}>Default</button>
  <button
    on:click={() =>
      toast({
        message: 'This is a notification',
        description:
          'This is the text below. It can be quite long if you keep on writing! Something more just to fill up the available space and make it break another line.',
        timeout: 5000
      })}>Description</button
  >
  <button on:click={() => toast.success({ message: 'Great success' })}>Success</button>
  <button
    on:click={() =>
      toast.success({
        message: 'Your message has been delivered!',
        description: `Keep an eye on your inbox. If you didn't mistype your message, you should be getting an e-mail right now.`
      })}>Success 2</button
  >
  <button on:click={() => toast.error({ message: 'Something went wrong' })}>Error</button>
  <button
    on:click={() =>
      toast.error({
        message: `We couldn't deliver your message!`,
        description: `We must've forgotten to feed our pidgeons. Please try again or contact us directly.`,
        timeout: 0
      })}>Error 2</button
  >
  <button
    on:click={() =>
      toast({
        id: 'copied-to-clipboard',
        message: `Copied to clipboard!`,
        type: 'success'
      })}>ID (click multiple)</button
  >
  <button
    on:click={() =>
      toast.promise(promise(), {
        style: 'width: 400px',
        loading: { message: 'Loading...' },
        success: { message: 'Success!' },
        error: { message: 'Error!' }
      })}>Promise</button
  >
  <button
    on:click={() =>
      toast({
        component: CustomNotif,
        message: 'Hello from custom component'
      })}>Custom component</button
  >
</div>
