<script lang="ts" context="module">
	import arrowRight from './Icons/arrow-right.svg?raw';
	import handbook from './Icons/handbook.svg?raw';
	import loading from './Icons/loading.svg?raw';

	const icons = {
		['arrow-right']: arrowRight,
		handbook,
		loading
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
