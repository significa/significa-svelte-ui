<script lang="ts">
	import Icon from './Icon.svelte';

	export let variant: 'solid' | 'outline' = 'solid';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let disabled: boolean = false;
	export let loading: boolean = false;
	export let hasArrow: boolean = true;
	export let label: string | undefined = undefined;
	export let icon: 'handbook' | undefined = undefined;
	export let tag: 'button' | 'a' = 'button';
</script>

<svelte:element
	this={tag}
	class="root"
	class:loading
	{disabled}
	class:solid={variant === 'solid'}
	class:outline={variant === 'outline'}
	class:sm={size === 'sm'}
	class:md={size === 'md'}
	class:lg={size === 'lg'}
	class:icon={icon !== undefined}
	on:click
	on:mouseenter
	on:mouseleave
	{...$$restProps}
>
	{#if icon}
		<Icon {icon} class="leftIcon" />
	{/if}
	{#if label}
		<span class="label">{label}</span>
	{/if}
	{#if hasArrow}
		<Icon icon="arrow-right" />
	{/if}
	{#if loading}
		<Icon icon="loading" />
	{/if}
</svelte:element>

<style lang="postcss">
	.root {
		all: unset;

		--button-vertical-padding: var(--space-14px);
		--button-horizontal-padding: var(--space-20px);

		padding: var(--button-vertical-padding) var(--button-horizontal-padding);

		position: relative;

		overflow: hidden;

		border-radius: var(--radii-full);

		display: flex;
		align-items: center;
		gap: var(--space-6px);

		font-size: var(--font-size-md);
		line-height: var(--font-line-height-none);
		letter-spacing: var(--font-letter-spacing-wide);

		white-space: nowrap;

		&.solid {
			background-color: var(--color-foreground);

			color: var(--color-background);

			&.loading {
				background-color: var(--color-muted);

				color: hsl(var(--color-background-hsl) / var(--opacity-0));
			}

			&:disabled {
				background-color: var(--color-muted);

				color: var(--color-secondary);
			}

			@media (hover: hover) {
				&:hover {
					box-shadow: 0px 0px 0px 4px hsl(var(--color-accent-hsl) / var(--opacity-60));
				}
			}
		}

		&.outline {
			border: 1px solid var(--color-smooth);

			box-shadow: 0px 0px 0px 0px hsl(var(--color-accent-hsl) / var(--opacity-60));

			color: var(--color-foreground);

			transition: box-shadow var(--transition-motion);

			&.loading {
				color: hsl(var(--color-foreground-hsl) / var(--opacity-0));
			}

			&:disabled {
				color: var(--color-secondary);
			}

			@media (hover: hover) {
				&:hover {
					box-shadow: 0px 0px 0px 4px hsl(var(--color-accent-hsl) / var(--opacity-60));
				}
			}
		}

		&.md {
			--button-vertical-padding: var(--space-16px);
		}

		&.lg {
			--button-vertical-padding: var(--space-20px);
			--button-horizontal-padding: var(--space-24px);
		}

		&.loading {
			& :global([data-icon='loading']) {
				position: absolute;
				left: calc(50% - calc(var(--button-horizontal-padding) / 2));

				color: var(--color-secondary);

				animation: rotating 2s linear infinite;
			}
		}

		&:disabled {
			pointer-events: none;
		}

		&.icon {
			& .label {
				padding-left: var(--space-24px);
				padding-right: 0px;

				transition: padding-left var(--transition-motion), padding-right var(--transition-motion);
			}

			& :global([data-icon]) {
				display: flex;

				transition: right var(--transition-motion), left var(--transition-motion);
			}

			& :global(.leftIcon) {
				position: absolute;

				left: var(--space-20px);
			}

			& :global([data-icon='arrow-right']) {
				position: absolute;

				right: calc(var(--space-20px) * -1);
			}

			& :global([data-icon='loading']) {
				display: inline;
			}

			@media (hover: hover) {
				&:hover {
					& .label {
						padding-left: 0px;
						padding-right: var(--space-24px);
					}

					& :global([data-icon='arrow-right']) {
						right: var(--space-20px);
					}

					& :global(.leftIcon) {
						left: calc(var(--space-20px) * -1);
					}
				}
			}
		}
	}

	@keyframes rotating {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}
</style>
