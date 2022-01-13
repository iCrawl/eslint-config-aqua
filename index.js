const base = {
	'for-direction': 0,
	'getter-return': 0,
	'no-await-in-loop': 0,
	'no-compare-neg-zero': 2,
	'no-cond-assign': 1,
	'no-console': 0,
	'no-constant-condition': 0,
	'no-control-regex': 0,
	'no-debugger': 2,
	'no-dupe-args': 2,
	'no-dupe-keys': 2,
	'no-duplicate-case': 2,
	'no-empty': 0,
	'no-empty-character-class': 2,
	'no-ex-assign': 0,
	'no-extra-boolean-cast': 0,
	'no-extra-parens': 0,
	'no-extra-semi': 2,
	'no-func-assign': 0,
	'no-inner-declarations': 0,
	'no-invalid-regexp': 1,
	'no-irregular-whitespace': [
		2,
		{
			skipStrings: true,
			skipComments: true,
			skipRegExps: true,
			skipTemplates: true,
		},
	],
	'no-obj-calls': 1,
	'no-prototype-builtins': 0,
	'no-regex-spaces': 1,
	'no-sparse-arrays': 1,
	'no-template-curly-in-string': 0,
	'no-unexpected-multiline': 2,
	'no-unreachable': 1,
	'no-unsafe-finally': 1,
	'no-unsafe-negation': 2,
	'use-isnan': 2,
	'valid-jsdoc': 0,
	'valid-typeof': 2,
	'accessor-pairs': 0,
	'array-callback-return': 0,
	'block-scoped-var': 2,
	'class-methods-use-this': 0,
	complexity: 0,
	'consistent-return': 0,
	curly: [2, 'multi-line', 'consistent'],
	'default-case': 0,
	'dot-location': [2, 'property'],
	'dot-notation': [2, { allowKeywords: true, allowPattern: '(^[A-Z])|(^[a-z]+(_[a-z]+)+$)' }],
	eqeqeq: [2, 'smart'],
	'guard-for-in': 1,
	'no-alert': 2,
	'no-caller': 2,
	'no-case-declarations': 2,
	'no-div-regex': 0,
	'no-else-return': 1,
	'no-empty-function': 0,
	'no-empty-pattern': 0,
	'no-eq-null': 1,
	'no-eval': 2,
	'no-extend-native': 1,
	'no-extra-bind': 0,
	'no-extra-label': 1,
	'no-fallthrough': 0,
	'no-floating-decimal': 2,
	'no-global-assign': 0,
	'no-implicit-coercion': 2,
	'no-implicit-globals': 0,
	'no-implied-eval': 2,
	'no-invalid-this': 0,
	'no-iterator': 0,
	'no-labels': 0,
	'no-lone-blocks': 0,
	'no-loop-func': 0,
	'no-magic-numbers': 0,
	'no-multi-spaces': [2, { ignoreEOLComments: true }],
	'no-multi-str': 2,
	'no-new': 0,
	'no-new-func': 1,
	'no-new-wrappers': 1,
	'no-octal': 2,
	'no-octal-escape': 2,
	'no-param-reassign': 0,
	'no-proto': 0,
	'no-redeclare': 2,
	'no-restricted-properties': 0,
	'no-return-assign': 0,
	'no-return-await': 1,
	'no-script-url': 0,
	'no-self-assign': 2,
	'no-self-compare': 1,
	'no-sequences': 2,
	'no-throw-literal': 2,
	'no-unmodified-loop-condition': 0,
	'no-unused-expressions': 0,
	'no-unused-labels': 2,
	'no-useless-call': 0,
	'no-useless-concat': 1,
	'no-useless-escape': 0,
	'no-useless-return': 1,
	'no-void': 0,
	'no-warning-comments': 0,
	'no-with': 2,
	'prefer-promise-reject-errors': 0,
	radix: 2,
	'require-await': 0,
	'vars-on-top': 0,
	'wrap-iife': [2, 'inside'],
	yoda: 2,
	strict: [2, 'never'],
	'init-declarations': 0,
	'no-catch-shadow': 2,
	'no-delete-var': 2,
	'no-label-var': 2,
	'no-restricted-globals': 0,
	'no-shadow': 0,
	'no-shadow-restricted-names': 2,
	'no-undef': 2,
	'no-undef-init': 0,
	'no-undefined': 0,
	'no-unused-vars': 1,
	'no-use-before-define': 2,
	'array-bracket-newline': [2, 'consistent'],
	'array-bracket-spacing': [2, 'never', { singleValue: false, objectsInArrays: false, arraysInArrays: false }],
	'array-element-newline': 0,
	'block-spacing': [2, 'always'],
	'brace-style': [2, '1tbs', { allowSingleLine: true }],
	camelcase: 0,
	'capitalized-comments': 0,
	'comma-dangle': [2, 'always'],
	'comma-spacing': [2, { before: false, after: true }],
	'comma-style': [2, 'last'],
	'computed-property-spacing': [2, 'never'],
	'consistent-this': [2, 'self'],
	'eol-last': [2, 'always'],
	'func-call-spacing': [2, 'never'],
	'func-name-matching': [1, 'always'],
	'func-names': [1, 'as-needed'],
	'func-style': 0,
	'function-paren-newline': [2, 'consistent'],
	'id-blacklist': 0,
	'id-length': 0,
	'id-match': 0,
	indent: [2, 'tab', { SwitchCase: 1 }],
	'jsx-quotes': [2, 'prefer-double'],
	'key-spacing': [2, { beforeColon: false, afterColon: true, mode: 'strict' }],
	'keyword-spacing': [2, { before: true, after: true }],
	'line-comment-position': 0,
	'linebreak-style': [2, 'unix'],
	'lines-around-comment': 0,
	'lines-between-class-members': [2, 'always', { exceptAfterSingleLine: true }],
	'max-depth': 0,
	'max-len': 0,
	'max-lines': 0,
	'max-nested-callbacks': 0,
	'max-params': 0,
	'max-statements': 0,
	'max-statements-per-line': [2, { max: 2 }],
	'multiline-comment-style': 0,
	'multiline-ternary': [2, 'always-multiline'],
	'new-cap': 0,
	'new-parens': 2,
	'newline-per-chained-call': [2, { ignoreChainWithDepth: 3 }],
	'no-array-constructor': 0,
	'no-bitwise': 0,
	'no-inline-comments': 0,
	'no-lonely-if': 2,
	'no-mixed-operators': 2,
	'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
	'no-multi-assign': 1,
	'no-multiple-empty-lines': 2,
	'no-negated-condition': 2,
	'no-nested-ternary': 0,
	'no-new-object': 2,
	'no-plusplus': 0,
	'no-restricted-syntax': 0,
	'no-tabs': 0,
	'no-ternary': 0,
	'no-trailing-spaces': 2,
	'no-underscore-dangle': 0,
	'no-unneeded-ternary': 0,
	'no-whitespace-before-property': 2,
	'nonblock-statement-body-position': 0,
	'object-curly-newline': [2, { multiline: true, consistent: true }],
	'object-curly-spacing': [2, 'always'],
	'object-property-newline': 0,
	'one-var': [2, 'never'],
	'one-var-declaration-per-line': 0,
	'operator-assignment': [2, 'always'],
	'operator-linebreak': [2, 'after', { overrides: { '?': 'before', ':': 'before' } }],
	'padded-blocks': [2, 'never'],
	'padding-line-between-statements': 0,
	'quote-props': [2, 'consistent-as-needed', { keywords: true, unnecessary: true, numbers: false }],
	quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
	'require-jsdoc': 0,
	semi: [2, 'always', { omitLastInOneLineBlock: false }],
	'semi-spacing': [2, { before: false, after: true }],
	'semi-style': [2, 'last'],
	'sort-keys': 0,
	'sort-vars': 0,
	'space-before-blocks': [2, 'always'],
	'space-before-function-paren': [2, { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
	'space-in-parens': [2, 'never'],
	'space-infix-ops': [2, { int32Hint: true }],
	'space-unary-ops': [2, { words: true, nonwords: false }],
	'spaced-comment': [2, 'always'],
	'switch-colon-spacing': [2, { after: true, before: false }],
	'template-tag-spacing': [2, 'never'],
	'unicode-bom': [2, 'never'],
	'wrap-regex': 0,
	'arrow-body-style': [2, 'as-needed'],
	'arrow-parens': [2, 'as-needed', { requireForBlockBody: false }],
	'arrow-spacing': [2, { before: true, after: true }],
	'constructor-super': 2,
	'generator-star-spacing': [2, 'before'],
	'no-class-assign': 1,
	'no-confusing-arrow': 0,
	'no-const-assign': 2,
	'no-dupe-class-members': 2,
	'no-duplicate-imports': [2, { includeExports: false }],
	'no-new-symbol': 1,
	'no-restricted-imports': 0,
	'no-this-before-super': 2,
	'no-useless-computed-key': 2,
	'no-useless-constructor': 2,
	'no-useless-rename': 2,
	'no-var': 2,
	'object-shorthand': 0,
	'prefer-arrow-callback': 2,
	'prefer-const': [2, { destructuring: 'all' }],
	'prefer-destructuring': 0,
	'prefer-numeric-literals': 0,
	'prefer-rest-params': 1,
	'prefer-spread': 2,
	'prefer-template': 1,
	"prefer-object-has-own": 2,
	'require-yield': 1,
	'rest-spread-spacing': [2, 'never'],
	'sort-imports': 0,
	'symbol-description': 2,
	'template-curly-spacing': [2, 'never'],
	'yield-star-spacing': [2, 'before'],
};

module.exports = {
	parserOptions: {
		ecmaVersion: 2021,
	},
	env: {
		es6: true,
	},
	rules: { ...base },
};
