<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Icon from './icon.svelte';

  export let theme: 'light' | 'dark' = 'light';
  $: checked = theme === 'dark';

  const dispatch = createEventDispatcher<{ toggle: undefined }>();
</script>

<label class="wrapper">
  <Icon class="sun" icon="sun" />
  <Icon class="moon" icon="moon" />
  <input type="checkbox" bind:checked on:change={() => dispatch('toggle')} />
  <div class="circle">
    <div class="circleInner">
      <Icon class="sun-inner" icon="sun" />
      <Icon class="moon-inner" icon="moon" />
    </div>
  </div>
</label>

<style lang="postcss">
  label :global(.sun) {
    position: absolute;
    top: 5px;
    left: 5px;
    pointer-events: none;
  }

  label :global(.moon) {
    position: absolute;
    top: 5px;
    right: 5px;
    pointer-events: none;
  }

  input[type='checkbox'] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  .wrapper {
    position: relative;
    display: flex;
    cursor: pointer;
    width: 50px;
    height: 26px;
    background: theme(colors.background.offset);
    border-radius: theme(borderRadius.full);
  }

  .circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 24px;
    height: 24px;
    background: theme(colors.background.DEFAULT);
    border-radius: theme(borderRadius.full);
    overflow: hidden;
    transition: all 0.3s;
  }

  .circleInner {
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    transition: transform 0.5s;
  }

  input[type='checkbox']:checked + .circle .circleInner {
    transform: translateX(0px);
  }

  input:checked + .circle {
    left: calc(100% - 1px);
    transform: translateX(-100%);
  }

  label :global(.moon-inner) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  label :global(.sun-inner) {
    position: absolute;
    top: 50%;
    left: 83%;
    transform: translate(-50%, -50%) translateX(100%);
  }
</style>
