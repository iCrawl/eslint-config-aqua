const path = require('path');

module.exports = {
	parserOptions: {
		jsx: true,
	},
	extends: [
		'plugin:react-hooks',
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
		'react/state-in-constructor': [1, 'never'],
		'react/static-property-placement': 0,
		'react-hooks/rules-of-hooks': 1,
		'react-hooks/exhaustive-deps': 2,
	},
};
