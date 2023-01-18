<!-- Based on 
https://github.com/cerebrl/forgerock-web-login-framework/pull/3/files#diff-8317ec6b5e00bb1202c179aeb2b4fe2e8e29e586e898dafee6da8a6a54af746e -->
<script lang="ts">
	import Tag from '../../src/lib/components/Tag.svelte';

	export let href: string;
</script>

<Tag {href} {...$$restProps}>A link</Tag>
