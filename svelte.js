const path = require('path');

module.exports = {
	extends: path.join(__dirname, 'index.js'),
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module'
	},
	env: {
		es6: true,
		browser: true
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
