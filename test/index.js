const chain = require('../lib')
const expect = require('expect')

expect(
  chain(325)
    .thru(x => x * 64499)
    .thru(x => x.toString(36))
    .thru(x => x.toUpperCase())
    .value()
).toEqual('CHAIN')

console.log('OK')
