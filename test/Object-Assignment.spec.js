test('object assignment', () => {
  const data = { one: 1 }
  data.two = 2
  data.three = 3
  expect(data).toEqual({ one: 1, two: 2, three: 3 })
  expect(data).toEqual({ one: 1, two: 2, three: 3 })
})
