test('FilterTest', () => {
  const filterTestFn = jest.fn()

  // Make the mock return `true` for the first call,
  // and `false` for the second call
  filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false)

  let result = [11, 12].filter(num => filterTestFn(num))

  console.log(result)
  // > [11]

  result = [11, 12].filter(num => filterTestFn(num))
  console.log(result)

  console.log(filterTestFn.mock.calls)
// > [ [11], [12] ]
})
