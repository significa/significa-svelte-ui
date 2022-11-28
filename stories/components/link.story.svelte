<!-- Based on 
https://github.com/cerebrl/forgerock-web-login-framework/pull/3/files#diff-8317ec6b5e00bb1202c179aeb2b4fe2e8e29e586e898dafee6da8a6a54af746e -->
<script lang="ts">
	import Link from '../../src/lib/components/Link.svelte';

	export let href: string;
	export let variant: 'subtle' | 'accent' = 'subtle';
</script>

<Link {href} {variant} {...$$restProps}>A link</Link>
