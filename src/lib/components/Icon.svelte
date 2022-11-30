<script lang="ts">
	import arrowRight from './Icons/arrow-right.svg?raw';
	import handbook from './Icons/handbook.svg?raw';
	import loading from './Icons/loading.svg?raw';

	export const iconOptions = {
		['arrow-right']: arrowRight,
		handbook,
		loading
	};

	let className: string | undefined = undefined;

	export { className as class };
	export let icon: keyof typeof iconOptions;
</script>

<i data-icon={icon} class={className}>
	{@html iconOptions[icon]}
</i>
