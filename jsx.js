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
		'react/jsx-boolean-value': [2, 'never'],
		'react/jsx-closing-bracket-location': 0,
		'react/jsx-closing-tag-location': 2,
		'react/jsx-curly-newline': [2, 'consistent'],
		'react/jsx-curly-spacing': [
			2,
			{
				when: 'never',
				attributes: {
					allowMultiline: false,
				},
				children: true,
			},
		],
		'react/jsx-equals-spacing': [2, 'always'],
		'react/jsx-filename-extension': [2, { extensions: ['.jsx'] }],
		'react/jsx-first-prop-new-line': [2, 'never'],
		'react/jsx-handler-names': 0,
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-max-depth': 0,
		'react/jsx-max-props-per-line': [2, { maximum: 2, when: 'always' }],
		'react/jsx-no-target-blank': 2,
		'react/jsx-no-undef': [1, { allowGlobals: true }],
		'react/jsx-one-expression-per-line': [2, { allow: 'none' }],
		'react/jsx-pascal-case': [2, { allowAllCaps: false }],
		'react/jsx-sort-default-props': 0,
		'react/jsx-sort-props': 0,
		'react/jsx-tag-spacing': 2,
		'react/jsx-uses-vars': 2,
	},
};
