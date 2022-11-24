<script lang="ts">
	import { fly } from 'svelte/transition';

	import ChevronCircleRight from './Icons/ChevronCircleRight.svelte';

	export let title: string;
	export let items: any[];

	let isOpen = false;

	function toggle() {
		isOpen = !isOpen;
	}
</script>

<button class:isOpen on:click={toggle}><i><ChevronCircleRight /></i>{title}</button>
<ul>
	{#if isOpen}
		{#each items as item, i}
			<li
				in:fly={{ x: 100, duration: 200, delay: i * 100 }}
				out:fly={{ x: 100, duration: 200, delay: (items.length - i) * 100 }}
			>
				{item}
			</li>
		{/each}
	{/if}
</ul>

<style lang="postcss">
	button {
		display: flex;
		align-items: center;
		gap: 8px;

		font-size: var(--font-size-md);
		line-height: var(--font-line-height-none);
		letter-spacing: var(--font-letter-spacing-wide);
		color: var(--color-secondary);

		cursor: pointer;

		transition: color var(--transition-appearance);

		& i {
			transition: transform var(--transition-motion);
		}

		&.isOpen {
			color: var(--color-foreground);

			& i {
				transform: rotate(90deg);
			}
		}

		&:hover {
			color: var(--color-foreground);
		}

		&:focus {
			border-radius: var(--radii-full);

			outline: 4px solid hsl(var(--color-palette-yellow-hsl) / var(--opacity-60));

			color: var(--color-foreground);
		}
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;

		display: flex;
		flex-direction: column;
		gap: 12px;

		color: var(--color-foreground);

		& li {
			padding-left: 22px;

			&:first-of-type {
				margin-top: var(--space-12px);
			}
		}
	}
</style>
