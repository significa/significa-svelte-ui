<script lang="ts">
	import type { ComponentType } from 'svelte';
	import ArrowRight from './Icons/ArrowRight.svelte';
	import Handbook from './Icons/Handbook.svelte';
	import Loading from './Icons/Loading.svelte';

	export let variant: 'solid' | 'outline' = 'solid';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let disabled: boolean = false;
	export let loading: boolean = false;
	export let hasArrow: boolean = true;
	export let label: string | undefined = undefined;
	export let icon: ComponentType | undefined = undefined;
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
	{...$$restProps}
>
	{#if icon}
		<i class="handbook"><svelte:component this={icon} /></i>
	{/if}
	{#if label}
		<span class="label">{label}</span>
	{/if}
	{#if hasArrow}
		<i class="arrow"><ArrowRight /></i>
	{/if}
	{#if loading}
		<i class="loadingIcon"><Loading /></i>
	{/if}
</svelte:element>

<style lang="postcss">
	.root {
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

		&:hover {
			outline: 4px solid hsl(var(--color-accent-hsl) / var(--opacity-60));
		}

		&.solid {
			background-color: var(--color-foreground);

			color: var(--color-background);

			&.loading {
				background-color: var(--color-muted);

				color: hsl(var(--color-background-hsl) / var(--opacity-0));
			}

			&.disabled {
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

			&.disabled {
				color: var(--color-secondary);
			}
		}

		&.sm {
			padding: var(--space-14px) var(--space-20px);

			&.icon {
				& i {
					&.arrow {
						right: calc(var(--space-20px) * -1);
					}

					&.handbook {
						position: absolute;

						left: var(--space-20px);
					}
				}

				&:hover {
					& i {
						&.arrow {
							right: var(--space-20px);
						}

						&.handbook {
							left: calc(var(--space-20px) * -1);
						}
					}
				}
			}
		}

		&.md {
			padding: var(--space-16px) var(--space-20px);

			&.icon {
				& i {
					&.arrow {
						right: calc(var(--space-20px) * -1);
					}

					&.handbook {
						position: absolute;

						left: var(--space-20px);
					}
				}

				&:hover {
					& i {
						&.arrow {
							right: var(--space-20px);
						}

						&.handbook {
							left: calc(var(--space-20px) * -1);
						}
					}
				}
			}
		}

		&.lg {
			padding: var(--space-20px) var(--space-24px);

			&.icon {
				& i {
					&.arrow {
						right: calc(var(--space-24px) * -1);
					}

					&.handbook {
						position: absolute;

						left: var(--space-24px);
					}
				}

				&:hover {
					& i {
						&.arrow {
							right: var(--space-24px);
						}

						&.handbook {
							left: calc(var(--space-24px) * -1);
						}
					}
				}
			}
		}

		&.loading {
			& .loadingIcon {
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
				padding: 0px 0px 0px var(--space-24px);

				transition: all var(--transition-motion);
			}

			& i {
				display: flex;

				transition: all var(--transition-motion);

				&.arrow {
					position: absolute;

					right: 0px;
				}

				&.loadingIcon {
					display: inline;
				}
			}

			&:hover {
				& .label {
					padding: 0px var(--space-24px) 0px 0px;
				}
			}
		}
	}

	@keyframes rotating {
		from {
			-ms-transform: rotate(0deg);
			-moz-transform: rotate(0deg);
			-webkit-transform: rotate(0deg);
			-o-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		to {
			-ms-transform: rotate(360deg);
			-moz-transform: rotate(360deg);
			-webkit-transform: rotate(360deg);
			-o-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
</style>
