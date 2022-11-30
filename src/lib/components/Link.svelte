<script lang="ts">
	export let href: string;
	export let variant: 'subtle' | 'accent' = 'subtle';
</script>

<a {href} class={variant} {...$$restProps}><slot /></a>

<style lang="postcss">
	a {
		position: relative;

		display: inline-flex;
		align-items: center;
		gap: 6px;

		text-decoration: none;

		box-sizing: border-box;

		&:after {
			content: '';

			position: absolute;
			left: 0px;
			bottom: -4px;

			width: 100%;
			height: 2px;

			transform: scaleX(0);
			transform-origin: bottom right;
			transition: transform var(--transition-smooth);
		}

		&:hover {
			&:after {
				transform: scaleX(1);
				transform-origin: bottom left;
			}
		}

		&:focus-visible {
			outline: none;

			&:before {
				content: '';

				position: absolute;
				left: 0px;
				top: -2px;

				width: 100%;
				height: calc(100% + 4px);

				border-radius: 6px;
				border: 1px solid var(--color-accent);
			}

			&:after {
				content: '';

				position: absolute;
				left: -2px;
				top: -4px;

				width: calc(100% + 2px);
				height: calc(100% + 6px);

				border-radius: var(--radii-md);
				border: 2px solid hsl(var(--color-accent-hsl) / var(--opacity-60));
			}
		}

		&.subtle {
			color: var(--color-foreground);

			&:after {
				background-color: var(--color-tertiary);
			}

			&:focus {
				&:after {
					background-color: hsl(var(--color-tertiary-hsl) / var(--opacity-0));
				}
			}
		}

		&.accent {
			color: var(--color-drawing);

			&:after {
				background-color: var(--color-drawing);
			}

			&:focus {
				&:after {
					background-color: hsl(var(--color-drawing-hsl) / var(--opacity-0));
				}
			}
		}
	}
</style>
