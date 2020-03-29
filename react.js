const path = require('path');

module.exports = {
	parserOptions: {
		jsx: true,
		sourceType: 'module',
	},
	extends: [
		'plugin:react-hooks/recommended',
		'plugin:react/recommended',
		path.join(__dirname, 'jsx.js'),
		path.join(__dirname, 'index.js'),
	],
	env: {
		browser: true,
	},
	rules: {
		'react/boolean-prop-naming': 0,
		'react/sort-comp': 0,
		'react/sort-prop-types': 0,
		'react/state-in-constructor': [2, 'never'],
		'react/static-property-placement': 0,
		'react-hooks/rules-of-hooks': 2,
		'react-hooks/exhaustive-deps': 1,
	},
};
