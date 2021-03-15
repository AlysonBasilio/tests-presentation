import capitalizeFirstChar from "./capitalizeFirstChar"

export default class Hero {
  public fullName: string

  constructor(fullName: string) {
    this.fullName = fullName
  }

  normalizedFullName(): string {
    return this.fullName.split(' ').map((name) => capitalizeFirstChar(name)).join(' ')
  }

  get firstName(): string {
    return this.fullName.split(' ')[0]
  }
}