<script lang="ts">
	import Icon from './Icon.svelte';

	export let checked = false;
	export let label: string | undefined = undefined;
</script>

<label class={checked ? 'checked' : 'unchecked'} {...$$restProps}>
	<input type="checkbox" bind:checked />
	<div class="checkmark">
		<Icon icon="tick" class="icon" />
	</div>
	{#if label}
		<p class="label">{label}</p>
	{/if}
</label>

<style lang="postcss">
	label {
		display: flex;
		gap: var(--space-12px);
		align-items: center;

		position: relative;

		cursor: pointer;

		user-select: none;

		&.checked {
			& .checkmark {
				outline: 1px solid var(--color-foreground);
				background-color: hsl(var(--color-foreground-hsl) / var(--opacity-100));

				color: var(--color-background);
			}

			& :global(.icon) {
				opacity: 1;
				left: 0;
				transform: rotate(0deg);
			}

			& .label {
				&:after {
					background-color: hsl(var(--color-foreground-hsl) / var(--opacity-100));
				}
			}
		}

		&.unchecked {
			& :global(.icon) {
				opacity: 0;
				left: -8px;
				transform: rotate(-45deg);
			}
		}

		@mixin focus-appearance-on-class checkmark;

		& input {
			position: absolute;
			opacity: 0;
			cursor: pointer;
			height: 0;
			width: 0;
		}

		& .checkmark {
			position: relative;

			overflow: hidden;

			min-width: 16px;
			width: 16px;
			height: 16px;

			background-color: hsl(var(--color-foreground-hsl) / var(--opacity-0));

			outline: 1px solid var(--color-smooth);
			border-radius: var(--radii-sm);

			transition: box-shadow var(--transition-appearance), outline var(--transition-appearance),
				background-color var(--transition-appearance);

			& :global(.icon) {
				position: absolute;

				transition: left var(--transition-smooth), transform var(--transition-smooth),
					opacity var(--transition-smooth);
			}
		}

		& .label {
			margin: 0px;

			white-space: nowrap;

			position: relative;

			font-size: var(--font-size-xl);
			line-height: var(--font-line-height-normal);
			font-weight: var(--font-weight-regular);

			color: var(--color-foreground);

			&:after {
				content: '';

				position: absolute;
				top: calc(50% + 1px);
				left: 0px;

				height: 2px;
				width: 100%;

				background-color: hsl(var(--color-foreground-hsl) / var(--opacity-0));

				transition: background-color var(--transition-smooth);
			}
		}

		@media (hover: hover) {
			&:hover {
				& .checkmark {
					outline: 1px solid var(--color-accent);
				}
			}
		}
	}
</style>
