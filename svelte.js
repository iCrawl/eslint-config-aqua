const path = require('path');

module.exports = {
	extends: path.join(__dirname, 'index.js'),
	parserOptions: {
		sourceType: 'module'
	},
	plugins: [
		'svelte3'
	],
	overrides: [
		{
			files: [
				'**/*.svelte'
			],
			processor: 'svelte3/svelte3'
		}
	],
	settings: {
		'import/code-modules': ['svelte'],
		'svelte3/ignore-styles': attributes => attributes.lang,
	}
};
