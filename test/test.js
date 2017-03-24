const test = require('ava');
const eslint = require('eslint');

const hasRule = (errors, ruleID) => errors.some(x => x.ruleId === ruleID);

function runEslint(str, conf) {
	const linter = new eslint.CLIEngine({
		useEslintrc: false,
		configFile: conf
	});

	return linter.executeOnText(str).results[0].messages;
}

test('main', t => {
	const errors = runEslint('console.log(\'aqua\');\n', 'index.js');
	t.true(hasRule(errors, 'no-console'));
});

test('es2017', t => {
	const errors = runEslint(
		'let unused; const x = async () => {\n\tawait Promise.resolve({ b: 1, ...x });\n};\n', 'index.js'
	);
	t.true(hasRule(errors, 'no-unused-vars'));
});
