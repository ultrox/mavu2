const postcssPresetEnv = require('postcss-preset-env');
const atImport = require('postcss-import');
const postcssCustomMedia = require('postcss-custom-media');
const tailwindcssNesting = require('tailwindcss/nesting/index.js');
const postcssGlobalData = require('@csstools/postcss-global-data');

const config = {
	plugins: [
		require('postcss-import-ext-glob'),
		atImport(),
		tailwindcssNesting(),
		postcssGlobalData({
			files: ['./src/style/design-tokens/media.css']
		}),
		postcssCustomMedia(),
		require('tailwindcss'),
		postcssPresetEnv({
			stage: 3,
			features: {
				'nesting-rules': true,
				'custom-media-queries': true,
				'media-query-ranges': true,
				'cascade-layers': false
			}
		})
	]
};

module.exports = config;
