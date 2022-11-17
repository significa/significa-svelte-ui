<script lang="ts">
	export let href: string;
	export let label: string;
</script>

<a {href}>{label}</a>

<style lang="postcss">
	a {
		padding: var(--space-4px) 0px;

		text-decoration: none;

		box-sizing: border-box;

		box-shadow: inset 0 -1px 0 var(--color-muted);

		color: var(--color-foreground);

		transition: all var(--transition-in-out);

		&:hover {
			box-shadow: inset 0 -1px 0 var(--color-foreground);
		}

		&:disabled {
			opacity: 0.44;

			box-shadow: inset 0 -1px 0 var(--color-foreground);
		}

		/* &:focus {
			outline: none;

			position: relative;

			&:after {
				content: '';

				position: absolute;

				top: -2px;
				left: -4px;

				width: calc(100% + 4px);
				height: calc(100% + 4px);

				border-radius: var(--radii-full);
				border: 2px solid var(--color-accent);
			}
		} */
	}
</style>
