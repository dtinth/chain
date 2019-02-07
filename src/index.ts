class _Chain<T> {
  constructor(private __wrapped__: T) {}
  thru<U>(interceptor: (value: T) => U) {
    return new _Chain(interceptor(this.__wrapped__))
  }
  value() {
    return this.__wrapped__
  }
  /** @ignore */
  toJSON() {
    return this.__wrapped__
  }
  /** @ignore */
  valueOf() {
    return this.__wrapped__
  }
}

function chain<T>(value: T): _Chain<T> {
  return new _Chain<T>(value)
}

chain.Chain = _Chain

export = chain
