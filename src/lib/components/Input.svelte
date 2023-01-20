<script lang="ts">
	import Icon, { IconOptions } from './Icon.svelte';

	export let disabled = false;
	export let error: string | undefined = undefined;
	export let icon: typeof IconOptions | undefined = undefined;
	export let label = 'Name';
	export let name = 'text';
	export let value = '';
</script>

<div class={`root ${disabled ? 'disabled' : ''} ${error ? 'error' : ''}`}>
	{#if icon}
		<Icon {icon} class="leftIcon" />
	{/if}
	<input id={name} class={icon ? 'hasIcon' : ''} bind:value placeholder={label} {...$$restProps} />
	<label for={name}>{label}</label>
	{#if error}
		<p>{error}</p>
	{/if}
</div>

<style lang="postcss">
	@define-mixin error-style {
		box-shadow: var(--box-shadow-danger-2px-spread);

		border: 1px solid var(--color-danger);
	}

	.root {
		position: relative;

		box-sizing: border-box;

		height: 56px;

		border-radius: var(--radii-xl);
		border: 1px solid var(--color-smooth);

		font-size: var(--font-size-md);
		line-height: var(--font-line-height-none);
		letter-spacing: var(--font-letter-spacing-wide);
		font-weight: var(--font-weight-medium);

		@mixin focus-appearance;

		transition: box-shadow var(--transition-appearance), border var(--transition-appearance);

		@media (hover: hover) {
			&:hover {
				border: 1px solid var(--color-accent);
			}
		}

		&:focus-within {
			border: 1px solid var(--color-accent);
		}

		&.disabled {
			pointer-events: none;

			color: var(--color-tertiary);
		}

		&.error {
			@mixin error-style;

			&:focus-within {
				@mixin error-style;
			}

			& p {
				all: unset;

				position: absolute;
				bottom: calc((var(--font-size-sm) + var(--space-8px)) * -1);

				font-size: var(--font-size-sm);
				color: var(--color-danger);
			}
		}

		& input {
			all: unset;

			padding: var(--space-20px);

			position: relative;

			width: 100%;
			width: 100%;

			color: var(--color-foreground);

			&::placeholder {
				opacity: 0;
			}

			&:not(:placeholder-shown) {
				padding-top: var(--space-27px);
				padding-bottom: var(--space-13px);

				& ~ label {
					top: var(--space-12px);
					transform: translateY(0);

					font-size: var(--font-size-xs);
				}
			}

			&.hasIcon {
				padding-left: var(--space-44px);

				& ~ label {
					left: var(--space-44px);
				}
			}
		}

		& :global(.leftIcon) {
			position: absolute;
			top: 50%;
			left: var(--space-16px);

			transform: translateY(-50%);

			pointer-events: none;
		}

		& label {
			position: absolute;
			top: 50%;
			left: var(--space-20px);

			color: var(--color-tertiary);

			transform: translateY(-50%);

			transition: all var(--transition-motion);

			pointer-events: none;
		}
	}
</style>
