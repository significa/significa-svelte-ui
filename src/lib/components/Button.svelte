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
	export let onClick: () => void | undefined = undefined;
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
	on:click={onClick}
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

		border-radius: var(--radii-full);

		display: flex;
		align-items: center;
		gap: var(--space-6px);

		position: relative;

		font-size: var(--font-size-md);
		line-height: var(--font-line-height-none);
		letter-spacing: var(--font-letter-spacing-wide);

		white-space: nowrap;

		overflow: hidden;

		@media (hover: hover) {
			&:hover {
				outline: 4px solid hsl(var(--color-accent-hsl) / var(--opacity-60));
			}
		}

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
		}

		&.outline {
			border: 1px solid var(--color-smooth);

			color: var(--color-foreground);

			&.loading {
				color: hsl(var(--color-foreground-hsl) / var(--opacity-0));
			}

			&:disabled {
				color: var(--color-secondary);
			}
		}

		&.sm {
			padding: var(--space-14px) var(--space-20px);

			&.icon {
				& :global([data-icon='arrow-right']) {
					right: calc(var(--space-20px) * -1);
				}

				& :global(.leftIcon) {
					position: absolute;

					left: var(--space-20px);
				}

				@media (hover: hover) {
					&:hover {
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

		&.md {
			padding: var(--space-16px) var(--space-20px);

			&.icon {
				& :global([data-icon='arrow-right']) {
					right: calc(var(--space-20px) * -1);
				}

				& :global(.leftIcon) {
					position: absolute;

					left: var(--space-20px);
				}

				@media (hover: hover) {
					&:hover {
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

		&.lg {
			padding: var(--space-20px) var(--space-24px);

			&.icon {
				& :global([data-icon='arrow-right']) {
					right: calc(var(--space-24px) * -1);
				}

				& :global(.leftIcon) {
					position: absolute;

					left: var(--space-24px);
				}

				@media (hover: hover) {
					&:hover {
						& :global([data-icon='arrow-right']) {
							right: var(--space-24px);
						}

						& :global(.leftIcon) {
							left: calc(var(--space-24px) * -1);
						}
					}
				}
			}
		}

		&.loading {
			& :global([data-icon='loading']) {
				position: absolute;
				left: 0px;
				right: 0px;

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

			& :global([data-icon='arrow-right']) {
				position: absolute;

				right: 0px;
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
