## API Report File for "@spacet.me/chain"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

// @public
export class Chain<T> {
    // @internal
    constructor(__wrapped__: T);
    thru<U>(interceptor: (value: T) => U): Chain<U>;
    toJSON(): T;
    value(): T;
    valueOf(): T;
}

// @public
export function chain<T>(value: T): Chain<T>;

```
