const path = require('path');

module.exports = {
	extends: [path.join(__dirname, '..', 'index.js'), 'plugin:prettier/recommended'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				printWidth: 120,
				useTabs: true,
				singleQuote: true,
				quoteProps: 'as-needed',
				trailingComma: 'all',
				endOfLine: 'lf',
			},
		],
	},
};
