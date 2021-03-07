const path = require('path');

module.exports = {
	extends: path.join(__dirname, 'index.js'),
	env: {
		es6: true,
		node: true,
	},
	rules: {
		'no-extra-parens': [1, 'all', { nestedBinaryExpressions: false }],
		'no-template-curly-in-string': 2,
		'valid-jsdoc': [
			1,
			{
				requireReturn: false,
				requireReturnDescription: false,
				preferType: {
					String: 'string',
					Number: 'number',
					Boolean: 'boolean',
					Symbol: 'symbol',
					function: 'Function',
					object: 'Object',
					date: 'Date',
					error: 'Error',
				},
			},
		],
		'array-callback-return': 2,
		'object-shorthand': [2, 'always'],
		'prefer-destructuring': [
			2,
			{
				VariableDeclarator: {
					array: false,
					object: true,
				},
				AssignmentExpression: {
					array: true,
					object: false,
				},
			},
		],
		'prefer-promise-reject-errors': 2,
		'keyword-spacing': [
			2,
			{
				overrides: {
					if: { after: true },
					for: { after: true },
					while: { after: true },
					catch: { after: true },
					switch: { after: true },
				},
			},
		],
	},
};
