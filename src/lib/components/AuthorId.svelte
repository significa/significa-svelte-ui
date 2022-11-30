<script lang="ts">
	import Avatar from './Avatar.svelte';

	export let role: string | undefined = undefined;
	export let name: string;
	export let image: string;
</script>

<div data-testid="author-id">
	<Avatar {image} size="sm" />
	<div class="authorInfo">
		<p class="authorName">{name}</p>
		{#if role}
			<p class="authorRole">{role}</p>
		{/if}
	</div>
</div>

<style lang="postcss">
	div {
		display: flex;
		align-items: center;
		flex-direction: row;
		gap: 12px;

		& p {
			all: unset;
		}

		& .authorInfo {
			@mixin text-md-beast;

			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 0px;

			& .authorName {
				color: var(--color-foreground);
			}

			& .authorRole {
				color: var(--color-secondary);
			}
		}
	}
</style>
