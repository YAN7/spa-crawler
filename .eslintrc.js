module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
	},
	extends: [
		'airbnb-base',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2018,
	},
	rules: {
		semi: 'off',
		indent: ['error', 'tab'],
		'no-tabs': 'off',
	},
};
