import capitalizeFirstChar from './capitalizeFirstChar'

test('should return an empty string when string is empty', () => {
  expect(capitalizeFirstChar('')).toEqual('')
})

test('should return a string with first capitalized char', () => {
  expect(capitalizeFirstChar('alyson')).toEqual('Alyson')
  expect(capitalizeFirstChar('b')).toEqual('B')
  expect(capitalizeFirstChar('B')).toEqual('B')
})