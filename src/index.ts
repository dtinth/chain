/**
 * A Chain object.
 * @public
 */
export class Chain<T> {
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
  toJSON() {
    return this.__wrapped__
  }
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
