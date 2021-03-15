import Hero from "./Hero"
import capitalizeFirstChar from "./capitalizeFirstChar"

export default class CustomizableHero extends Hero {
  public fullName: string
  private normalizeSingleName: (name: string) => string

  constructor(fullName: string, normalizeStringMethod=capitalizeFirstChar) {
    super(fullName)
    this.normalizeSingleName = normalizeStringMethod
  }

  normalizedFullName(): string {
    return this.fullName.split(' ').map((name) => this.normalizeSingleName(name)).join(' ')
  }
}