import { chain } from '.'

it('works', () => {
  expect(
    chain(325)
      .thru((x) => x * 64499)
      .thru((x) => x.toString(36))
      .thru((x) => x.toUpperCase())
      .value(),
  ).toEqual('CHAIN')
})

it('delegates toJSON to its value', () => {
  expect(JSON.stringify(chain(42))).toEqual('42')
})

it('delegates valueOf to its value', () => {
  expect(chain(1) < chain(2)).toBe(true)
})
