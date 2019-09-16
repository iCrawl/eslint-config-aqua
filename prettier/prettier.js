module.exports = {
	extends: ['plugin:prettier/recommended'],
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
