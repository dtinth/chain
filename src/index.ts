/**
 * This package implements a subset of Lodash’s `_.chain()`,
 * containing just the {@link https://lodash.com/docs/4.17.11#thru | thru}
 * and {@link https://lodash.com/docs/4.17.11#prototype-value | value} methods.
 * To use this package, look at the {@link chain} function.
 *
 * @packageDocumentation
 */

/**
 * A Chain object, created through the {@link chain} function.
 * @public
 */
export class Chain<T> {
  /**
   * @internal
   */
  constructor(private __wrapped__: T) {}
  /**
   * Apply a function to the value of the chain.
   */
  thru<U>(interceptor: (value: T) => U) {
    return new Chain(interceptor(this.__wrapped__))
  }
  /**
   * Returns the value of the chain.
   */
  value() {
    return this.__wrapped__
  }
  /**
   * Returns the value of the chain, for seamless usage with `JSON.stringify()`.
   */
  toJSON() {
    return this.__wrapped__
  }
  /**
   * Returns the value of the chain, for seamless usage comparison operators.
   */
  valueOf() {
    return this.__wrapped__
  }
}

/**
 * Creates a {@link Chain} object.
 * @param value - The value to wrap.
 * @returns A {@link Chain} object.
 * @public
 */
export function chain<T>(value: T): Chain<T> {
  return new Chain<T>(value)
}
