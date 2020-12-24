const path = require('path');

module.exports = {
	extends: path.join(__dirname, 'index.js'),
	parserOptions: {
		sourceType: 'module',
	},
	env: {
		browser: true,
	},
	plugins: ['svelte3'],
	overrides: [
		{
			files: ['**/*.svelte'],
			processor: 'svelte3/svelte3',
		},
	],
	settings: {
		'svelte3/ignore-styles': (attributes) => attributes.lang,
	},
};
