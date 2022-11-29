<script lang="ts">
	let className: string | undefined = undefined;

	export { className as class };
	export let image: string | undefined = undefined;
	export let size: 'xs' | 'sm' | 'md' | 'xl' = 'md';
</script>

<div
	style={image ? `background-image: url(${image})` : ''}
	class={`${size} ${className}`}
	data-testid="avatar"
/>

<style lang="postcss">
	div {
		background-color: var(--color-accent);
		background-size: cover;
		background-position: center center;
		background-repeat: no-repeat;

		&.xs {
			width: 16px;
			height: 18px;

			clip-path: path(
				'M16 10.0935C16 14.4601 12.4183 18 8 18C3.58172 18 0 14.4601 0 10.0935C0 5.7268 3.58172 0 8 0C12.4183 0 16 5.7268 16 10.0935Z'
			);
		}

		&.sm {
			width: 38px;
			height: 44px;

			clip-path: path(
				'M38 24.6729C38 35.347 29.4934 44 19 44C8.50659 44 0 35.347 0 24.6729C0 13.9988 8.50659 0 19 0C29.4934 0 38 13.9988 38 24.6729Z'
			);
		}

		&.md {
			width: 48px;
			height: 56px;

			clip-path: path(
				'M48 31.4019C48 44.987 37.2548 56 24 56C10.7452 56 0 44.987 0 31.4019C0 17.8167 10.7452 0 24 0C37.2548 0 48 17.8167 48 31.4019Z'
			);
		}

		&.xl {
			width: 68px;
			height: 80px;

			clip-path: path(
				'M68 44.8598C68 64.2672 52.7777 80 34 80C15.2223 80 0 64.2672 0 44.8598C0 25.4524 15.2223 0 34 0C52.7777 0 68 25.4524 68 44.8598Z'
			);
		}
	}
</style>
