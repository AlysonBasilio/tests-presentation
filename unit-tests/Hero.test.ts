import Hero from "./Hero";

const hero: Hero = new Hero('homem aranha')

describe('.normalizedFullName', () => {
  test('should return hero normalized full name', () => {
    expect(hero.normalizedFullName()).toEqual('Homem Aranha')
  })
})