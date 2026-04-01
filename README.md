# svgo-loader

<!-- prettier-ignore -->
> svgo loader for webpack.
>
> [![NPM Version][npm-image]][npm-url]
> [![Download Status][download-image]][npm-url]
> [![Languages Status][languages-image]][github-url]
> [![Tree Shakeable][tree-shakeable-image]][bundle-phobia-url]
> [![Side Effect][side-effect-image]][bundle-phobia-url]
> [![License][license-image]][license-url]

## Install

```bash
pnpm add -D @nuintun/svgo-loader svgo
```

> You can also use `npm` or `yarn`.

## Usage

### Webpack

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/i,
        type: 'asset/resource',
        use: [
          {
            loader: '@nuintun/svgo-loader',
            options: {
              configFile: false,
              multipass: true,
              plugins: ['preset-default']
            }
          }
        ]
      }
    ]
  }
};
```

### Rspack

```js
// rspack.config.js
export default {
  module: {
    rules: [
      {
        test: /\.svg$/i,
        type: 'asset/resource',
        use: [
          {
            loader: '@nuintun/svgo-loader/rspack',
            options: {
              configFile: false,
              multipass: true,
              plugins: ['preset-default']
            }
          }
        ]
      }
    ]
  }
};
```

## Options

All SVGO options are supported (except `path`, which is handled internally by the loader).

### `configFile`

- Type: `string | false`
- Default: `undefined`

Control how loader reads SVGO config:

- `undefined`: auto load SVGO config from current context
- `string`: load SVGO config from a specific path
- `false`: disable external config file

### Common SVGO options

You can pass common SVGO options directly:

- `multipass`
- `floatPrecision`
- `plugins`
- `js2svg`
- `datauri`

See [SVGO configuration docs](https://github.com/svg/svgo#configuration).

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/@nuintun/svgo-loader?style=flat-square
[npm-url]: https://www.npmjs.org/package/@nuintun/svgo-loader
[download-image]: https://img.shields.io/npm/dm/@nuintun/svgo-loader?style=flat-square
[languages-image]: https://img.shields.io/github/languages/top/nuintun/svgo-loader?style=flat-square
[github-url]: https://github.com/nuintun/svgo-loader
[tree-shakeable-image]: https://img.shields.io/badge/tree--shakeable-true-brightgreen?style=flat-square
[side-effect-image]: https://img.shields.io/badge/side--effect-free-brightgreen?style=flat-square
[bundle-phobia-url]: https://bundlephobia.com/result?p=@nuintun/svgo-loader
[license-image]: https://img.shields.io/github/license/nuintun/svgo-loader?style=flat-square
[license-url]: https://github.com/nuintun/svgo-loader/blob/main/LICENSE
