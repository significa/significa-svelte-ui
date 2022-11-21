<script lang="ts">
	export let href: string;
	export let variant: 'subtle' | 'accent' = 'subtle';
</script>

<a {href} class={variant} {...$$restProps}><slot /></a>

<style lang="postcss">
	a {
		position: relative;

		text-decoration: none;

		box-sizing: border-box;

		transition: all var(--transition-in-out);

		&:after {
			content: '';

			position: absolute;
			left: 0px;
			bottom: -2px;

			width: 100%;
			height: 2px;

			transition: background-color var(--transition-in-out);
		}

		&:hover {
			&:after {
				content: '';

				position: absolute;
				left: 0px;
				bottom: -2px;

				width: 100%;
				height: 2px;
			}
		}

		&:disabled {
			opacity: var(--opacity-40);

			box-shadow: 0px 2px 0px var(--color-foreground);
		}

		&:focus {
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
				background-color: hsl(var(--color-tertiary-hsl) / var(--opacity-0));
			}

			&:hover {
				&:after {
					background-color: hsl(var(--color-tertiary-hsl) / var(--opacity-100));
				}
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
				background-color: hsl(var(--color-drawing-hsl) / var(--opacity-0));
			}

			&:hover {
				&:after {
					background-color: hsl(var(--color-drawing-hsl) / var(--opacity-100));
				}
			}

			&:focus {
				&:after {
					background-color: hsl(var(--color-drawing-hsl) / var(--opacity-0));
				}
			}
		}
	}
</style>
