const path = require('path');

module.exports = {
	extends: path.join(__dirname, 'index.js'),
	rules: { indent: ['error', 4, { SwitchCase: 1 }] }
};
