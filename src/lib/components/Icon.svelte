<script lang="ts" context="module">
	import arrowRight from './Icons/arrow-right.svg?raw';
	import chevronCircleRight from './Icons/chevron-circle-right.svg?raw';
	import handbook from './Icons/handbook.svg?raw';
	import loading from './Icons/loading.svg?raw';
	import menu from './Icons/menu.svg?raw';
	import moon from './Icons/moon.svg?raw';
	import sun from './Icons/sun.svg?raw';
	import tick from './Icons/tick.svg?raw';

	const icons = {
		['arrow-right']: arrowRight,
		['chevron-circle-right']: chevronCircleRight,
		handbook,
		loading,
		menu,
		moon,
		sun,
		tick
	};

	export let IconOptions: keyof typeof icons;
</script>

<script lang="ts">
	let className: string | undefined = undefined;
	export { className as class };
	export let icon: typeof IconOptions;
</script>

<i data-icon={icon} class={className}>
	{@html icons[icon]}
</i>

<style style="postcss">
	:global(svg) {
		display: block;
	}
</style>
