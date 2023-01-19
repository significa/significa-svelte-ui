<script lang="ts">
	import Icon from './Icon.svelte';

	export let checked = false;
	export let onClick: () => void;
</script>

<label class={checked ? 'checked' : 'unchecked'} {...$$restProps} on:click|preventDefault={onClick}>
	<input type="checkbox" bind:checked />
	<div class="container">
		<Icon icon="sun" />
		<Icon icon="moon" />
		<div class="thumb">
			<Icon icon="sun" class="leftIcon" />
			<Icon icon="moon" class="rightIcon" />
		</div>
	</div>
</label>

<style lang="postcss">
	label {
		position: relative;

		display: inline-block;

		cursor: pointer;

		user-select: none;

		&.checked {
			& .container {
				& :global([data-icon='sun']) {
					color: var(--color-secondary);
				}

				& .thumb {
					left: calc(100% - var(--space-2px));

					transform: translateX(-100%);

					& :global(.leftIcon) {
						transform: translateX(100%);
					}

					& :global(.rightIcon) {
						transform: translateX(-100%);
					}
				}
			}
		}

		&.unchecked {
			& .container {
				& :global([data-icon='moon']) {
					color: var(--color-secondary);
				}

				& .thumb {
					left: var(--space-2px);

					& :global(.leftIcon) {
						transform: translateX(0%);
					}

					& :global(.rightIcon) {
						transform: translateX(-200%);
					}
				}
			}
		}

		@media (hover: hover) {
			&:hover {
				& .container {
					& .thumb {
						width: 28px;
					}
				}
			}
		}

		& input {
			position: absolute;
			opacity: 0;
			cursor: pointer;
			height: 0;
			width: 0;
		}

		& .container {
			position: relative;

			width: 50px;
			height: 26px;

			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: var(--space-4px);

			border-radius: var(--radii-full);

			background-color: var(--color-smooth);

			&::before {
				content: '';

				position: absolute;
				top: -1px;
				left: -1px;

				width: 100%;
				height: 100%;

				border-radius: var(--radii-full);
				border: 1px solid var(--color-smooth);
			}

			& :global([data-icon]) {
				width: 24px;
				height: 24px;

				display: flex;
				align-items: center;
				justify-content: center;
			}

			& .thumb {
				position: absolute;
				top: 1px;

				overflow: hidden;

				width: 24px;
				height: 24px;

				border-radius: var(--radii-full);

				color: var(--color-foreground);
				background-color: var(--color-panel);

				display: flex;

				transition: left var(--transition-motion), transform var(--transition-motion),
					width var(--transition-appearance);

				& :global([data-icon]) {
					flex: 1 0 100%;

					transition: transform var(--transition-motion);
				}
			}
		}
	}
</style>
