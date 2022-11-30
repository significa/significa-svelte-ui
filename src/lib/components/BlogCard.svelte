<script lang="ts">
	import Avatar from './Avatar.svelte';
	import Link from './Link.svelte';

	export let post: {
		image: string;
		href: string;
		title: string;
		author: {
			image: string;
			href: string;
			name: string;
		};
		categories: {
			href: string;
			name: string;
		}[];
	};
</script>

<div class="container elevated-link">
	<a href={post.href} data-elevated>
		<img src={post.image} alt={post.title} />
		<p>{post.title}</p>
	</a>
	<div class="links">
		<Link href={post.author.href}
			><Avatar size="xs" image={post.author.image} />{post.author.name}</Link
		>
		{#each post.categories as category}
			<span class="divider">·</span>
			<Link href={category.href}>{category.name}</Link>
		{/each}
	</div>
</div>

<style lang="postcss">
	.container {
		& a {
			text-decoration: none;

			@mixin text-xl-beast;

			& img {
				width: 100%;
				aspect-ratio: var(--aspect-ratio-landscape);

				border-radius: var(--radii-xl);
			}

			& p {
				margin: var(--space-12px) 0px var(--space-6px);

				color: var(--color-foreground);
			}

			@media (--md) {
				@mixin text-2xl-beast;
			}
		}

		& .links {
			display: flex;
			align-items: center;

			@mixin text-lg;

			& .divider {
				margin: 0px var(--space-8px);

				color: var(--color-tertiary);
			}
		}
	}
</style>
