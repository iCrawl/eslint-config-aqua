const path = require('path');

module.exports = {
	'parser': 'vue-eslint-parser',
	'parserOptions': {
		parser: 'babel-eslint'
	},
	'extends': [
		'plugin:vue/recommended',
		path.join(__dirname, 'index.js')
	],
	'env': {
		browser: true
	},
	'rules': {
		'vue/html-indent': ['error', 'tab'],
		'vue/max-attributes-per-line': [2, {
			singleline: 1,
			multiline: {
				max: 1,
				allowFirstLine: true
			}
		}],
		'vue/html-closing-bracket-newline': ['error', {
			singleline: 'never',
			multiline: 'never'
		}],
		'vue/attributes-hyphenation': 0
	}
};
