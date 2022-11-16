<script lang="ts">
	import Avatar from './Avatar.svelte';
	import Link from './Link.svelte';

	export let author: {
		image: string;
		slug: string;
		name: string;
	};

	export let post: {
		image: string;
		slug: string;
		title: string;
	};
</script>

<div class="container elevated-link">
	<a href={post.slug}>
		<img src={post.image} alt={post.title} />
		<p class="text-2xl-beast">{post.title}</p>
	</a>
	<div>
		<Avatar image={author.image} />
		<Link href={author.slug} label={author.name} />
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
	}
</style>
