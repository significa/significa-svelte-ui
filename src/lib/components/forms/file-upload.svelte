<script lang="ts" context="module">
  export type FileUploadItem = {
    id: string;
    file: File;
    status: 'queued' | 'uploading' | 'success' | 'error';
    url?: string;
    controller?: AbortController;
  };
  const truncateText = (text: string, maxLength: number) => {
    if (!text) return text;
    if (maxLength <= 0) return text;

    if (text && text?.trim().length < maxLength) return text.trim();

    const dots = '...';
    const truncatedText = text.trim().substring(0, maxLength - dots.length);

    return (truncatedText + dots).trim();
  };
</script>

<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';
  import type { VariantProps } from 'class-variance-authority';
  import clsx from 'clsx';
  import { twMerge } from 'tailwind-merge';
  import CircleButton from '../circle-button.svelte';
  import Icon from '../icon.svelte';
  import Spinner from '../spinner.svelte';
  import { base, input as inputStyle } from './common';
  import { createEventDispatcher } from 'svelte';

  export let placeholder = 'Select your files';
  export let files: FileUploadItem[] = [];
  export let getSignedUrl: (file: File) => Promise<string>;
  export let size: VariantProps<typeof inputStyle>['size'] = 'md';

  let className: undefined | string = undefined;
  export { className as class };
  export let style: undefined | string = undefined;
  export let inputProps: HTMLInputAttributes = {};

  type ChangeEvent = Event & { currentTarget: EventTarget & HTMLInputElement };
  const dispatch = createEventDispatcher<{
    change: ChangeEvent;
    error: FileUploadItem;
    success: FileUploadItem;
  }>();
  const onChange = (e: ChangeEvent) => {
    dispatch('change', e);

    if (e.currentTarget.files) {
      files = [
        ...files,
        ...(Array.from(e.currentTarget.files).map((file) => ({
          id: crypto.randomUUID(),
          file,
          status: 'queued'
        })) satisfies FileUploadItem[])
      ];

      if (input) {
        input.value = '';
      }
    }
  };

  const onRemove = (item: FileUploadItem) => {
    if (item.status === 'uploading') {
      if (item.controller) {
        item.controller.abort();
      }
    }

    // remove file from list
    files = files.filter((f) => f.file.name !== item.file.name);
  };

  const updateFile = (item: FileUploadItem, payload: Partial<FileUploadItem>) => {
    files = files.map((f) => (f.id === item.id ? { ...f, ...payload } : f));
  };

  const handleUpload = async (file: FileUploadItem) => {
    try {
      updateFile(file, { status: 'uploading' });

      // get signed url
      const signedUrl = await getSignedUrl(file.file);
      const url = new URL(signedUrl).origin + new URL(signedUrl).pathname;

      // abort controller
      const controller = new AbortController();
      const signal = controller.signal;
      updateFile(file, { controller });

      // upload file
      await fetch(signedUrl, {
        method: 'PUT',
        signal,
        headers: {
          'content-type': file.file.type
        },
        body: file.file
      });
      dispatch('success', file);
      updateFile(file, { status: 'success', url });
    } catch (error) {
      dispatch('error', file);
      updateFile(file, { status: 'error' });
    }
  };

  $: if (files.length > 0) {
    files.filter((f) => f.status === 'queued').forEach(handleUpload);
  }

  let input: HTMLInputElement;
</script>

<div class={className} {style} {...$$restProps}>
  <label>
    <input
      on:change={onChange}
      on:mouseenter
      on:mouseleave
      on:click
      on:focus
      on:blur
      class="peer sr-only"
      bind:this={input}
      type="file"
      multiple
      {...inputProps}
    />
    <div
      class={clsx(base(), inputStyle({ size }), 'cursor-pointer', files.length && 'rounded-b-none')}
    >
      <div class="flex items-center gap-2 text-foreground-secondary">
        <Icon icon="attachment" />
        <span>{placeholder}</span>
      </div>
    </div>
  </label>

  {#if files.length}
    <div
      class={twMerge(
        base(),
        inputStyle({ size }),
        'rounded-t-none border-t-0 p-0 hover:border-foreground/10 hover:ring-0'
      )}
    >
      {#each files as file}
        <div
          class={clsx(
            'group flex items-center justify-between transition-colors hover:bg-foreground/2',
            size === 'sm' ? 'p-2' : 'p-3'
          )}
        >
          <div class="flex items-center gap-3">
            {#if file.file.type.startsWith('image')}
              <img
                alt=""
                src={URL.createObjectURL(file.file)}
                class="h-6 w-6 rounded-2xs object-cover object-center"
              />
            {/if}
            <span class="text-sm text-foreground-secondary">{truncateText(file.file.name, 20)}</span
            >
          </div>
          <div class="text-foreground-tertiary">
            <div class="flex h-6 w-6 items-center justify-center group-hover:hidden">
              {#if file.status === 'uploading' || file.status === 'queued'}
                <Spinner size="sm" />
              {:else if file.status === 'success'}
                <Icon class="text-success" icon="check-circle" />
              {:else if file.status === 'error'}
                <Icon class="text-error" icon="close-circle" />
              {/if}
            </div>
            <CircleButton
              type="button"
              size="xs"
              icon="close"
              class="hidden group-hover:flex"
              on:click={() => onRemove(file)}
            />
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
