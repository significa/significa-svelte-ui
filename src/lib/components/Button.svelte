<script lang="ts">
	import Icon, { type IconOptions } from './Icon.svelte';

	export let disabled = false;
	export let label: string | undefined = undefined;
	export let leftIcon: typeof IconOptions | undefined = undefined;
	export let loading = false;
	export let rightIcon: typeof IconOptions | undefined = undefined;
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let tag: 'button' | 'a' = 'button';
	export let variant: 'solid' | 'outline' = 'solid';
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
	class:icon={leftIcon !== undefined}
	on:click
	on:mouseenter
	on:mouseleave
	{...$$restProps}
>
	{#if leftIcon}
		<Icon icon={leftIcon} class="leftIcon" />
	{/if}
	{#if label}
		<span class="label">{label}</span>
	{/if}
	{#if rightIcon}
		<Icon icon={rightIcon} class="rightIcon" />
	{/if}
	{#if loading}
		<Icon icon="loading" class="loadingIcon" />
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

		display: inline-flex;
		align-items: center;
		gap: var(--space-6px);

		font-size: var(--font-size-md);
		line-height: var(--font-line-height-none);
		letter-spacing: var(--font-letter-spacing-wide);
		font-weight: var(--font-weight-medium);

		white-space: nowrap;

		@mixin focus-appearance;

		&.solid {
			outline: 1px solid var(--color-foreground);
			background-color: var(--color-foreground);

			color: var(--color-background);

			transition: box-shadow var(--transition-appearance);

			&:disabled {
				outline: 1px solid var(--color-muted);
				background-color: var(--color-muted);

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
			outline: 1px solid var(--color-smooth);

			color: var(--color-foreground);

			transition: box-shadow var(--transition-appearance), outline var(--transition-appearance);

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
					outline: 1px solid var(--color-accent);
				}
			}

			&:focus-visible {
				outline: 1px solid var(--color-accent);
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
			& :global(.loadingIcon) {
				position: absolute;

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
				transition: right var(--transition-motion), left var(--transition-motion);
			}

			& :global(.leftIcon) {
				position: absolute;

				left: var(--space-20px);
			}

			& :global(.rightIcon) {
				position: absolute;

				right: calc(var(--space-20px) * -1);
			}

			@media (hover: hover) {
				&:hover {
					& .label {
						padding-left: 0px;
						padding-right: var(--space-24px);
					}

					& :global(.rightIcon) {
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
