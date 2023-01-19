<script lang="ts">
	export let href: string;
</script>

<a {href} {...$$restProps}><slot /></a>

<style lang="postcss">
	a {
		all: unset;

		position: relative;

		padding: var(--space-14px) var(--space-16px);

		border-radius: var(--radii-full);

		color: var(--color-foreground);

		transition: box-shadow var(--transition-appearance), border var(--transition-appearance);

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

		&:disabled {
			pointer-events: none;

			color: var(--color-secondary);
		}

		@media (hover: hover) {
			&:hover {
				&::before {
					border: 1px solid var(--color-accent);
				}
			}
		}

		&:focus-visible {
			&::before {
				border: 1px solid var(--color-accent);
			}
		}
	}
</style>
