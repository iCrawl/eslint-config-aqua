const path = require('path');

module.exports = {
	extends: ['plugin:vue/vue3-recommended', path.join(__dirname, 'index.js')],
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@babel/eslint-parser',
		sourceType: 'module',
	},
	env: {
		browser: true,
	},
	rules: {
		'vue/html-indent': [2, 'tab'],
		'vue/max-attributes-per-line': 0,
		'vue/html-closing-bracket-newline': [
			1,
			{
				singleline: 'never',
				multiline: 'never',
			},
		],
		'vue/attributes-hyphenation': 0,

		'no-unused-vars': 0,
		'no-unused-labels': 0,
		'no-label-var': 0,
	},
};
