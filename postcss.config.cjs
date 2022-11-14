module.exports = {
	plugins: [
		require('postcss-preset-env')({
			autoprefixer: {
				flexbox: 'no-2009'
			},
			features: {
				'custom-media-queries': {
					importFrom: [
						{
							customMedia: {
								'--sm': '(min-width: 640px)',
								'--md': '(min-width: 768px)',
								'--lg': '(min-width: 1024px)',
								'--xl': '(min-width: 1280px)',
								'--xxl': '(min-width: 1536px)'
							}
						}
					]
				},
				'nesting-rules': true,
				'custom-properties': false
			}
		})
	]
};
