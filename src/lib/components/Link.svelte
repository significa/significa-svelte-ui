<script lang="ts">
	export let href: string;
	export let label: string;
</script>

<a {href}>{label}</a>

<style lang="postcss">
	a {
		padding: var(--space-4px) 0px;

		text-decoration: none;
	}
</style>
