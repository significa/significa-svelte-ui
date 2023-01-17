<script lang="ts">
	export let href: string;
</script>

<a {href} {...$$restProps}><slot /></a>

<style lang="postcss">
	a {
		all: unset;

		padding: var(--space-14px) var(--space-16px);

		border-radius: var(--radii-full);

		outline: 1px solid var(--color-smooth);

		color: var(--color-foreground);

		transition: box-shadow var(--transition-appearance), outline var(--transition-appearance);

		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-10px);

		font-size: var(--font-size-md);
		line-height: var(--font-line-height-none);
		letter-spacing: var(--font-letter-spacing-wide);
		font-weight: var(--font-weight-medium);

		white-space: nowrap;

		cursor: pointer;
		user-select: none;

		@mixin focus-appearance;

		&:disabled {
			pointer-events: none;

			color: var(--color-secondary);
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
</style>
