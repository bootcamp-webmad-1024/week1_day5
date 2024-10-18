
describe("sumNumbers function", () => {

  it("should exist", () => {
    expect(typeof sumNumbers).toBe('function')
    expect(sumNumbers).toBeDefined()
  })

  it("should return the sum of numbers", () => {
    expect(sumNumbers([1, 2, 3])).toBe(6)
    expect(sumNumbers([-1, 2, 3])).toBe(4)
  })

  it("should return null with an empty array", () => {
    expect(sumNumbers([])).toBeNull()
  })

})