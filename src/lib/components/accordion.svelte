<script lang="ts">
  import { slide } from 'svelte/transition';
  import { circInOut } from 'svelte/easing';
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';

  /* 
    User can provide an id 
    useful when using groups and wants to start with a specific accordion expanded
  */
  export let id: string = crypto.randomUUID();
  /* Only works when not in a group */
  export let expanded = false;

  /* when in a group, we get our expanded from its context (only one at a time) */
  let groupExpanded = getContext<Writable<string | null>>('accordion-group-expanded');

  $: isExpanded = $groupExpanded !== undefined ? $groupExpanded === id : expanded;
  const handleClick = () => {
    if ($groupExpanded !== undefined) {
      /* control group accordion */
      groupExpanded.update((value) => (value === id ? null : id));
    } else {
      /* control independent accordion */
      expanded = !expanded;
    }
  };
</script>

<div class="accordion">
  <button
    id={`accordion-header-${id}`}
    aria-expanded={isExpanded}
    aria-controls={`accordion-panel-${id}`}
    on:click={handleClick}
  >
    <slot name="header" expanded={isExpanded} />
  </button>
  {#if isExpanded}
    <section
      id={`accordion-panel-${id}`}
      aria-labelledby={`accordion-header-${id}`}
      transition:slide={{ duration: 300, easing: circInOut }}
    >
      <slot />
    </section>
  {/if}
</div>

<style lang="postcss">
  /* 
    Available vars:
    --accordion-border-radius (just for outline with focus-visible)
   */
  button {
    all: unset;

    cursor: pointer;
    border-radius: var(--accordion-border-radius, var(--border-radius-sm));

    transition: all var(--transition-appearance);

    &:focus-visible {
      box-shadow: 0 0 0 var(--outline-width) var(--accordion-outline-color, var(--color-outline));
    }
  }
</style>
