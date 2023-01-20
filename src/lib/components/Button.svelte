<script lang="ts">
	import Icon, { type IconOptions } from './Icon.svelte';

	export let variant: 'solid' | 'outline' = 'solid';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let disabled = false;
	export let loading = false;
	export let hasArrow = true;
	export let label: string | undefined = undefined;
	export let icon: typeof IconOptions | undefined = undefined;
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
	class:justIcon={icon !== undefined && (label === undefined || label === '') && hasArrow === false}
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
		<Icon icon="arrow-right" class="arrowIcon" />
	{/if}
	{#if loading}
		<Icon icon="loading" class="loadingIcon" />
	{/if}
</svelte:element>

<style lang="postcss">
	.root {
		all: unset;

		--sm-button-height: 44px;
		--md-button-height: 48px;
		--lg-button-height: 56px;

		position: relative;

		box-sizing: border-box;

		border-radius: var(--radii-full);

		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-6px);

		font-size: var(--font-size-md);
		line-height: var(--font-line-height-none);
		letter-spacing: var(--font-letter-spacing-wide);
		font-weight: var(--font-weight-medium);

		white-space: nowrap;

		cursor: pointer;
		user-select: none;

		@mixin focus-appearance;

		&.solid {
			background-color: var(--color-foreground);

			border: 1px solid var(--color-foreground);

			color: var(--color-background);

			transition: box-shadow var(--transition-appearance);

			&:disabled {
				background-color: var(--color-muted);

				border: 1px solid var(--color-muted);

				color: var(--color-secondary);
			}

			&.loading {
				color: hsl(var(--color-background-hsl) / var(--opacity-0));

				& :global(.loadingIcon) {
					color: var(--color-background);

					left: calc(50% - calc(var(--button-horizontal-padding) / 2) + 2px);
				}
			}
		}

		&.outline {
			border: 1px solid var(--color-smooth);

			color: var(--color-foreground);

			transition: box-shadow var(--transition-appearance), border var(--transition-appearance);

			&:disabled {
				color: var(--color-secondary);
			}

			&.loading {
				color: hsl(var(--color-foreground-hsl) / var(--opacity-0));

				& :global(.loadingIcon) {
					color: var(--color-foreground);

					left: calc(50% - calc(var(--button-horizontal-padding) / 2) + 2px);
				}
			}

			@media (hover: hover) {
				&:hover {
					border: 1px solid var(--color-accent);
				}
			}

			&:focus-visible {
				border: 1px solid var(--color-accent);
			}
		}

		&.sm {
			padding: 0px var(--space-20px);

			height: var(--sm-button-height);
		}

		&.md {
			padding: 0px var(--space-20px);

			height: var(--md-button-height);
		}

		&.lg {
			padding: 0px var(--space-24px);

			height: var(--md-button-height);
		}

		&.loading {
			& :global(.loadingIcon) {
				position: absolute;

				animation: rotating 2s linear infinite;
			}
		}

		&:disabled {
			pointer-events: none;
		}

		&.icon:not(.justIcon) {
			& .label {
				padding-left: var(--space-24px);
				padding-right: 0px;

				transition: padding-left var(--transition-motion), padding-right var(--transition-motion);
			}

			& :global([data-icon]) {
				transition: right var(--transition-motion), left var(--transition-motion);
			}

			& :global(.leftIcon) {
				position: absolute;

				left: var(--space-20px);
			}

			& :global(.arrowIcon) {
				position: absolute;

				right: calc(var(--space-20px) * -1);
			}

			@media (hover: hover) {
				&:hover {
					& .label {
						padding-left: 0px;
						padding-right: var(--space-24px);
					}

					& :global(.arrowIcon) {
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
