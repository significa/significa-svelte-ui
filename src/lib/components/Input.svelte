<script lang="ts">
	import Icon, { IconOptions } from './Icon.svelte';

	export let disabled = false;
	export let error: string | undefined = undefined;
	export let icon: typeof IconOptions | undefined = undefined;
	export let label: string = 'Name';
	export let name: string = 'text';
	export let value: string = '';
</script>

<div class={`root ${disabled ? 'disabled' : ''} ${error ? 'error' : ''}`}>
	{#if icon}
		<Icon {icon} class="leftIcon" />
	{/if}
	<div class={`container ${value !== '' ? 'interacted' : ''}`}>
		<label for={name}>{label}</label>
		<input id={name} bind:value {...$$restProps} />
	</div>
	{#if error}
		<p>{error}</p>
	{/if}
</div>

<style lang="postcss">
	@define-mixin interacted-padding {
		padding-top: var(--space-12px);
		padding-bottom: var(--space-13px);
	}

	@define-mixin error-style {
		outline: 1px solid var(--color-danger);
		box-shadow: var(--box-shadow-danger-2px-spread);
	}

	.root {
		padding: var(--space-0) var(--space-20px);

		height: 56px;

		position: relative;

		display: flex;
		align-items: center;
		gap: var(--space-12px);

		outline: 1px solid var(--color-smooth);

		border-radius: var(--radii-xl);

		font-size: var(--font-size-md);
		line-height: var(--font-line-height-none);
		letter-spacing: var(--font-letter-spacing-wide);
		font-weight: var(--font-weight-medium);
		color: var(--color-foreground);

		@mixin focus-appearance;

		@media (hover: hover) {
			&:hover {
				outline: 1px solid var(--color-accent);
			}
		}

		&:focus-within {
			outline: 1px solid var(--color-accent);

			& .container {
				@mixin interacted-padding;

				& label {
					font-size: var(--font-size-xs);
				}
			}
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

		& .container {
			padding: var(--space-20px) var(--space-0) var(--space-4px);

			width: 100%;

			display: flex;
			flex-direction: column;

			transition: padding var(--transition-appearance);

			& label {
				color: var(--color-tertiary);

				transition: font-size var(--transition-appearance), top var(--transition-appearance);
			}

			& input {
				all: unset;

				width: 100%;
			}

			&.interacted {
				@mixin interacted-padding;

				& label {
					font-size: var(--font-size-xs);
				}
			}
		}
	}
</style>
