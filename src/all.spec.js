import { all } from './all'

const numArr = [0, 1, 2, 3, 4]

test('when true', () => {
  const fn = x => x > -1

  expect(all(fn)(numArr)).toBeTruthy()
})

test('when false', () => {
  const fn = x => x > 2

  expect(all(fn, numArr)).toBeFalsy()
})
