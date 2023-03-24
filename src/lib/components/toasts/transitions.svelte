<script lang="ts">
  import { reducedMotion } from '$lib/stores/reduced-motion';
  import { circInOut, circOut } from 'svelte/easing';
  import { tweened } from 'svelte/motion';
  import type { Toast, Position } from './types';

  export let toast: Toast;
  export let position: Position;

  function bounds(value: number, [outMin, outMax]: [number, number], [inMin, inMax] = [0, 1]) {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  }

  function animate(
    node: HTMLElement,
    params: { direction: 'in' | 'out'; position: typeof position }
  ) {
    const { height: h } = node.getBoundingClientRect();
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;

    return {
      duration: params.direction === 'in' ? 300 : 200,
      easing: params.direction === 'in' ? circInOut : circOut,
      css: (t: number) => {
        return $reducedMotion
          ? `opacity: ${t}`
          : `
          ${params.direction === 'out' ? 'z-index: 1;' : ''}
          transform-origin: ${params.position?.startsWith('top') ? 'top' : 'bottom'};
          transform: ${transform} scale(${bounds(t, [0.6, 1])}) translateY(${
              params.direction === 'out'
                ? bounds(t, [params.position?.startsWith('top') ? h * -1 : h, 0])
                : '0'
            }px);
          opacity: ${t}
        `;
      }
    };
  }

  let scale = tweened(1, { duration: 100 });
  let lastreoccuredAt: number | undefined = undefined;
  $: if (toast.reoccuredAt !== lastreoccuredAt) {
    lastreoccuredAt = toast.reoccuredAt;
    $scale = 1.05;
    setTimeout(() => scale.set(1, { duration: 600 }), 200);
  }
</script>

<div
  in:animate={{ direction: 'in', position }}
  out:animate={{ direction: 'out', position }}
  style="transform: scale({$scale})"
>
  <slot />
</div>
