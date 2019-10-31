module.exports = {
	extends: ['plugin:prettier/recommended'],
	rules: {
		'prettier/prettier': [
			2,
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
