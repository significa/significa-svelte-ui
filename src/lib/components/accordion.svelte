<script lang="ts">
  import { slide } from 'svelte/transition';
  import { circInOut } from 'svelte/easing';
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import { getRandomId } from '$lib/utils/get-random-id';

  /* 
    User can provide an id 
    useful when using groups and wants to start with a specific accordion expanded
  */
  export let id: string = getRandomId();
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

  interface $$Slots {
    default: Record<string, never>;
    header: {
      expanded: boolean;
      onClick: () => void;
      attributes: { id: string; 'aria-expanded': boolean; 'aria-controls': string };
    };
  }
</script>

<div {...$$restProps}>
  <slot
    name="header"
    expanded={isExpanded}
    onClick={handleClick}
    attributes={{
      id: `accordion-header-${id}`,
      'aria-expanded': isExpanded,
      'aria-controls': `accordion-panel-${id}`
    }}
  />
  {#if isExpanded}
    <section
      id={`accordion-panel-${id}`}
      aria-labelledby={`accordion-header-${id}`}
      transition:slide|global={{ duration: 300, easing: circInOut }}
    >
      <slot />
    </section>
  {/if}
</div>
