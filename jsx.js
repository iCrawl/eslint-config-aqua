const path = require('path');

module.exports = {
	parserOptions: {
		jsx: true,
	},
	extends: [path.join(__dirname, 'index.js')],
	env: {
		browser: true,
	},
	rules: {
		'react/jsx-boolean-value': [1, 'never'],
		'react/jsx-closing-bracket-location': 0,
		'react/jsx-closing-tag-location': 1,
		'react/jsx-curly-newline': [1, 'consistent'],
		'react/jsx-curly-spacing': [
			1,
			{
				when: 'never',
				attributes: {
					allowMultiline: false,
				},
				children: true,
			},
		],
		'react/jsx-equals-spacing': [1, 'always'],
		'react/jsx-filename-extension': [1, { extension: ['.jsx'] }],
		'react/jsx-first-prop-new-line': [1, 'never'],
		'react/jsx-handler-names': 0,
		'react/jsx-indent': [1, 'tab'],
		'react/jsx-indent-props': [1, 'tab'],
		'react/jsx-max-depth': 0,
		'react/jsx-max-props-per-line': [1, { maximum: 1, when: 'always' }],
		'react/jsx-no-target-blank': 1,
		'react/jsx-no-undef': [2, { allowGlobals: true }],
		'react/jsx-one-expression-per-line': [1, { allow: 'none' }],
		'react/jsx-pascal-case': [1, { allowAllCaps: false }],
		'react/jsx-sort-default-props': 0,
		'react/jsx-sort-props': 0,
		'react/jsx-tag-spacing': 1,
		'react/jsx-uses-vars': 1,
	},
};
