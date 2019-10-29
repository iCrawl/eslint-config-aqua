const path = require('path');

module.exports = {
	extends: path.join(__dirname, 'index.js'),
	env: {
		es6: true,
		node: true,
	},
	rules: {
		'no-extra-parens': [2, 'all', { nestedBinaryExpressions: false }],
		'no-template-curly-in-string': 1,
		'valid-jsdoc': [
			2,
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
		'array-callback-return': 1,
		'object-shorthand': [1, 'always'],
		'prefer-destructuring': [
			1,
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
		'prefer-promise-reject-errors': 1,
		'keyword-spacing': [
			1,
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
