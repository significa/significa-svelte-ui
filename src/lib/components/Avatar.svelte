<script lang="ts">
	import { AvatarSize } from '../types/types';

	let className: string;

	export { className as class };
	export let image: string;
	export let size: AvatarSize = AvatarSize.MD;

	const sizes = {
		[AvatarSize.XS]: [16, 18],
		[AvatarSize.SM]: [38, 44],
		[AvatarSize.MD]: [48, 56],
		[AvatarSize.XL]: [68, 80]
	};
</script>

<svg
	width={sizes[size][0]}
	height={sizes[size][1]}
	viewBox="0 0 16 18"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	data-testid="avatar"
	class={className}
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
