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

			color: var(--color-foreground);

			@mixin text-xl-beast;

			& img {
				width: 100%;
				aspect-ratio: var(--aspect-ratio-landscape);

				border-radius: var(--radii-xl);

				transition: transform var(--transition-appearance), filter var(--transition-appearance);
			}

			& p {
				margin: var(--space-12px) 0px var(--space-6px);
			}

			@media (--md) {
				@mixin text-2xl-beast;
			}
		}

		& .links {
			display: flex;
			align-items: center;
			gap: var(--space-8px);

			font-size: var(--font-size-lg);
			line-height: var(--font-line-height-none);
			letter-spacing: var(--font-letter-spacing-wide);
			font-weight: var(--font-weight-medium);

			& .divider {
				color: var(--color-tertiary);
			}
		}

		@media (hover: hover) {
			&:hover {
				& a {
					& img {
						filter: drop-shadow(0px 12px 24px rgba(0, 0, 0, 0.16));

						transform: scale(1.04);
					}
				}
			}
		}
	}
</style>
