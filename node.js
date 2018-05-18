const path = require('path');

module.exports = {
	'extends': path.join(__dirname, 'index.js'),
	'env': {
		es6: true,
		node: true
	},
	'rules': {
		'no-extra-parens': ['warn', 'all', { nestedBinaryExpressions: false }],
		'no-template-curly-in-string': 'error',
		'valid-jsdoc': ['warn', {
			requireReturn: false,
			requireReturnDescription: false,
			preferType: {
				'String': 'string',
				'Number': 'number',
				'Boolean': 'boolean',
				'Symbol': 'symbol',
				'function': 'Function',
				'object': 'Object',
				'date': 'Date',
				'error': 'Error'
			}
		}],
		'array-callback-return': 'error',
		'object-shorthand': ['error', 'always'],
		'prefer-destructuring': ['error', {
			VariableDeclarator: {
				array: false,
				object: true
			},
			AssignmentExpression: {
				array: true,
				object: false
			}
		}],
		'prefer-promise-reject-errors': 'error',
		'keyword-spacing': ['error', {
			overrides: {
				'if': { after: true },
				'for': { after: true },
				'while': { after: true },
				'catch': { after: true },
				'switch': { after: true }
			}
		}]
	}
};
