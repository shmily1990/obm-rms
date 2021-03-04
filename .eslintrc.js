module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ['plugin:vue/essential', '@vue/standard', '@vue/prettier'],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				trailingComma: 'none',
				semi: false,
				useTabs: true,
				printWidth: 110,
				bracketSpacing: true,
				endOfLine: 'auto'
			}
		],
		'vue/no-use-v-if-with-v-for': 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
		'no-unused-vars': process.env.NODE_ENV === 'production' ? 'off' : 'off',
		'no-unreachable': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-callback-literal': 'off',
		eqeqeq: 'off',
		'no-prototype-builtins': 'off',
		'no-new': 'off',
		camelcase: ['error', { allow: ['aa_bb'] }]
	}
}
