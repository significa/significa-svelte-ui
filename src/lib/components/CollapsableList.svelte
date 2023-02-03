<script lang="ts">
	import { fly } from 'svelte/transition';

	import Icon from './Icon.svelte';

	export let title: string;
	export let items: { label: string; href?: string; isActive?: boolean }[];
	export let defaultOpen = false;

	let isOpen = defaultOpen;

	function toggle() {
		isOpen = !isOpen;
	}
</script>

<button class:isOpen on:click={toggle}><Icon icon="chevron-circle-right" />{title}</button>
<ul>
	{#if isOpen}
		{#each items as item, i}
			<li
				in:fly={{ x: 20, duration: 250, delay: i * 50 }}
				out:fly={{ x: 20, duration: 200, delay: (items.length - i) * 25 }}
			>
				{#if item.href}
					<a class:active={item.isActive} href={item.href}>{item.label}</a>
				{:else}
					{item.label}
				{/if}
			</li>
		{/each}
	{/if}
</ul>

<style lang="postcss">
	button {
		all: unset;

		display: flex;
		align-items: center;
		gap: var(--space-8px);

		@mixin text-md-beast;

		color: var(--color-secondary);

		cursor: pointer;

		transition: color var(--transition-appearance);

		& :global([data-icon='chevron-circle-right']) {
			transition: transform var(--transition-motion);
		}

		&.isOpen {
			color: var(--color-foreground);

			& :global([data-icon='chevron-circle-right']) {
				transform: rotate(90deg);
			}
		}

		@media (hover: hover) {
			&:hover {
				color: var(--color-foreground);
			}
		}

		&:focus-visible {
			border-radius: var(--radii-full);

			outline: 1px solid hsl(var(--color-accent-hsl) / var(--focus-opacity));

			box-shadow: var(--box-shadow-accent-4px-spread);

			color: var(--color-foreground);
		}
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;

		display: flex;
		flex-direction: column;
		gap: var(--space-12px);

		color: var(--color-foreground);

		& li {
			padding-left: var(--space-22px);

			@mixin text-md;

			&:first-of-type {
				margin-top: var(--space-12px);
			}

			&:last-of-type {
				margin-bottom: var(--space-8px);
			}

			& a {
				color: var(--color-secondary);
				transition: color var(--transition-appearance);

				@media (hover: hover) {
					&:hover {
						color: var(--color-foreground);
					}
				}

				&:focus-visible {
					border-radius: var(--radii-full);

					outline: 1px solid hsl(var(--color-accent-hsl) / var(--focus-opacity));

					box-shadow: var(--box-shadow-accent-4px-spread);

					color: var(--color-foreground);
				}

				&.active {
					color: var(--color-foreground);
					@mixin text-md-beast;
				}
			}
		}
	}
</style>
