const path = require('path');

module.exports = {
	extends: path.join(__dirname, 'index.js'),
	env: {
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
		'no-restricted-globals': [
			'error',
			{
				name: 'Buffer',
				message: 'Import Buffer from `node:buffer` instead',
			},
			{
				name: 'process',
				message: 'Import process from `node:process` instead',
			},
			{
				name: 'setTimeout',
				message: 'Import setTimeout from `node:timers` instead',
			},
			{
				name: 'setInterval',
				message: 'Import setInterval from `node:timers` instead',
			},
			{
				name: 'setImmediate',
				message: 'Import setImmediate from `node:timers` instead',
			},
			{
				name: 'clearTimeout',
				message: 'Import clearTimeout from `node:timers` instead',
			},
			{
				name: 'clearInterval',
				message: 'Import clearInterval from `node:timers` instead',
			},
			{
				name: 'clearImmediate',
				message: 'Import clearImmediate from `node:timers` instead',
			},
		],
	},
};
