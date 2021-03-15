import CustomizableHero from "./CustomizableHero";

describe('.normalizedFullName', () => {
  const customNormatizeSingleNameMethod = (name: string): string => {
    return name.split('').reverse().join('')
  }

  test('should return hero normalized full name without calling capitalizeFirstChar', () => {
    const hero: CustomizableHero = new CustomizableHero('homem aranha', customNormatizeSingleNameMethod)

    expect(hero.normalizedFullName()).toEqual('memoh ahnara')
  })

  test('should call mocked method two times', () => {
    const customNormatizeSingleNameMethodMock = jest.fn()
    const hero: CustomizableHero = new CustomizableHero('homem aranha', customNormatizeSingleNameMethodMock)

    expect(hero.normalizedFullName()).toEqual(' ')
    expect(customNormatizeSingleNameMethodMock).toHaveBeenCalledTimes(2)
  })

  test('should call mocked method two times and return hero normalized full name without calling capitalizeFirstChar', () => {
    const customNormatizeSingleNameMethodMock = jest.fn(customNormatizeSingleNameMethod)
    const hero: CustomizableHero = new CustomizableHero('homem aranha', customNormatizeSingleNameMethodMock)

    expect(hero.normalizedFullName()).toEqual('memoh ahnara')
    expect(customNormatizeSingleNameMethodMock).toHaveBeenCalledTimes(2)
  })
})