const path = require('path');

module.exports = {
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: 'babel-eslint',
	},
	extends: ['plugin:vue/recommended', path.join(__dirname, 'index.js')],
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
	},
};
