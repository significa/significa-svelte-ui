<script lang="ts">
	import arrowRight from './Icons/arrow-right.svg?raw';
	import handbook from './Icons/handbook.svg?raw';
	import loading from './Icons/loading.svg?raw';

	const icons = {
		['arrow-right']: arrowRight,
		handbook,
		loading
	};

	export let icon: keyof typeof icons;
</script>

<i data-icon={icon}>
	{@html icons[icon]}
</i>
