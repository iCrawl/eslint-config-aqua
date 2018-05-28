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
yarn add -D eslint-config-aqua
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

Or to `eslintrc.js` or `eslintrc.json`:

```json
{
	"extends": "aqua"
}
```

# Targets

If you are developing with Javascript consider adding:

```json
{
	"extends": "aqua",
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

or Vue.js:

```json
{
	"extends": "aqua/vue"
}
```

Using the vue extended config will require you to additionally install `eslint-plugin-vue` and `babel-eslint`

```bash
yarn add -D babel-eslint eslint-plugin-vue
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
