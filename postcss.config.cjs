module.exports = {
	plugins: [
		require('postcss-preset-env')({
			autoprefixer: {
				flexbox: 'no-2009'
			},
			features: {
				'custom-media-queries': {
					importFrom: ['./src/lib/config/custom-media.json']
				},
				'nesting-rules': true,
				'custom-properties': false
			}
		}),
		require('postcss-mixins')({
			mixinsDir: ['./src/lib/styles/mixins']
		})
	]
};
