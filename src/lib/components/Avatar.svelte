<script lang="ts">
	export let image: string;
	export let style: string = '';
</script>

<svg
	width="16"
	height="18"
	viewBox="0 0 16 18"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	{style}
>
	<path
		d="M16 10.0935C16 14.4601 12.4183 18 8 18C3.58172 18 0 14.4601 0 10.0935C0 5.7268 3.58172 0 8 0C12.4183 0 16 5.7268 16 10.0935Z"
		fill="url(#pattern0)"
	/>
	<defs>
		<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
			<use
				xlink:href="#image0_448_3597"
				transform="translate(-0.3 -0.2) scale(0.003125 0.00277778)"
			/>
		</pattern>
		<image id="image0_448_3597" width="600" height="500" href={image} />
	</defs>
</svg>
