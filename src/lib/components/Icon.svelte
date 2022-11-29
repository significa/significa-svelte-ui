<script lang="ts">
	import arrowRight from './Icons/arrow-right.svg?raw';
	import handbook from './Icons/handbook.svg?raw';
	import loading from './Icons/loading.svg?raw';
	import chevronCircleRight from './Icons/chevron-circle-right.svg?raw';

	const icons = {
		['arrow-right']: arrowRight,
		['chevron-circle-right']: chevronCircleRight,
		handbook,
		loading
	};

	let className: string | undefined = undefined;

	export { className as class };
	export let icon: keyof typeof icons;
</script>

<i data-icon={icon} class={className}>
	{@html icons[icon]}
</i>
