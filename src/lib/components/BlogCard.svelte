<script lang="ts">
	import { AvatarSize } from '../types/types';
	import Avatar from './Avatar.svelte';
	import Link from './Link.svelte';

	export let post: {
		image: string;
		slug: string;
		title: string;
		author: {
			image: string;
			slug: string;
			name: string;
		};
		categories: {
			slug: string;
			name: string;
		}[];
	};
</script>

<div class="container elevated-link">
	<a href={post.slug}>
		<img src={post.image} alt={post.title} />
		<p class="text-2xl-beast">{post.title}</p>
	</a>
	<div class="links text-lg">
		<Avatar style="margin-right: var(--space-6px" size={AvatarSize.XS} image={post.author.image} />
		<Link href={post.author.slug} label={post.author.name} />
		{#each post.categories as category}
			<span class="divider">·</span>
			<Link href={category.slug} label={category.name} />
		{/each}
	</div>
</div>

<style lang="postcss">
	.container {
		max-width: 684px;

		& a {
			text-decoration: none;

			& img {
				width: 100%;
				aspect-ratio: var(--aspect-ratio-landscape);

				border-radius: var(--radii-xl);
			}

			& p {
				margin: var(--space-12px) 0px var(--space-6px);

				color: var(--color-foreground);
			}
		}

		& .links {
			display: flex;
			align-items: center;

			& .divider {
				margin: 0px var(--space-8px);

				color: var(--color-tertiary);
			}
		}
	}
</style>
