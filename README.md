# `@spacet.me/chain`

Like [`_.chain()`](https://lodash.com/docs/4.17.11#chain) but the wrapper
contains only the [`thru(interceptor)`](https://lodash.com/docs/4.17.11#thru)
and [`value()`](https://lodash.com/docs/4.17.11#prototype-value) methods.

- **Familiar interface but without the bloat.** It has same interface as
  [`_.chain()`](https://lodash.com/docs/4.17.11#chain), so if you know Lo-dash,
  you know how to use this.

- **TypeScript-compatible** — it comes with type definitions out-of-the-box.

- **Totally unopinionated** — can be used with lodash/fp, Ramda, Rameda, etc.

For more information, check out the [project documention page](https://docs.dt.in.th/chain/index.html).

[![Project documention page](https://ss.dt.in.th/api/screenshots/docs-chain__index.png)](https://docs.dt.in.th/chain/index.html)

## API

```js
const chain = require('@spacet.me/chain')
```

See [`_.chain()`](https://lodash.com/docs/4.17.11#chain), but keep in mind only
these methods are available:

- [`thru(interceptor)`](https://lodash.com/docs/4.17.11#thru)
- [`value()`](https://lodash.com/docs/4.17.11#prototype-value)
