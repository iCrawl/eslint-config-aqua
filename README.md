# eslint-config-aqua

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html)

<div align="center">
	<p>
		<a href="https://www.npmjs.com/package/eslint-config-aqua"><img src="https://img.shields.io/npm/v/eslint-config-aqua.svg?maxAge=3600" alt="NPM version" /></a>
		<a href="https://www.npmjs.com/package/eslint-config-aqua"><img src="https://img.shields.io/npm/dt/eslint-config-aqua.svg?maxAge=3600" alt="NPM downloads" /></a>
		<a href="https://david-dm.org/iCrawl/eslint-config-aqua"><img src="https://david-dm.org/iCrawl/eslint-config-aqua/status.svg?maxAge=3600" alt="Dependencies" /></a>
	</p>
	<p>
		<a href="https://nodei.co/npm/eslint-config-aqua/"><img src="https://nodei.co/npm/eslint-config-aqua.png?downloads=true&stars=true" alt="NPM info" /></a>
	</p>
</div>

## Install

```bash
npm i -D eslint-config-aqua
```

## Usage

Add the ESLint config to your `package.json`:

```json
{
	"name": "my-project",
	...
	"eslintConfig": {
		"extends": "aqua"
	}
}
```

Or `eslintrc.json`:

```json
{
	"extends": "aqua"
}
```

# Targets

If you are developing with Javascript in the browser consider adding:

```json
{
	"extends": "aqua"
	"env": {
		"browser": true
	}
}
```

or use the platform specific configs for Node.js:

```json
{
	"extends": "aqua/node"
}
```

or Svelte:

```json
{
	"extends": "aqua/svelte"
}
```

or React:

```json
{
	"extends": "aqua/react"
}
```

or any other JSX:

```json
{
	"extends": "aqua/jsx"
}
```

or Vue.js:

```json
{
	"extends": "aqua/vue"
}
```

Using the Vue extended config will require you to additionally install `eslint-plugin-vue` and `babel-eslint`

```bash
npm i -D babel-eslint eslint-plugin-vue
```

# Prettier usage

If you want to apply your own `.prettierrc` rules with support for disabling the correct rules, just add `/prettier` before the target name.

Also make sure you install `prettier`, `eslint-plugin-prettier` and `eslint-config-prettier` for this to work.

```bash
npm i -D prettier eslint-plugin-prettier eslint-config-prettier
```

```json
{
	"extends": "aqua/prettier"
}
```

```json
{
	"extends": "aqua/prettier/node"
}
```

or Svelte:

```json
{
	"extends": "aqua/prettier/svelte"
}
```

or React:

```json
{
	"extends": "aqua/prettier/react"
}
```

or any other JSX:

```json
{
	"extends": "aqua/prettier/jsx"
}
```

or Vue.js:

```json
{
	"extends": "aqua/prettier/vue"
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**eslint-config-aqua** © [iCrawl](https://github.com/iCrawl), Released under the [MIT](https://github.com/iCrawl/eslint-config-aqua/blob/master/LICENSE) License.<br>
Authored and maintained by iCrawl.

> GitHub [@iCrawl](https://github.com/iCrawl) · Twitter [@iCrawlToGo](https://twitter.com/iCrawlToGo)
