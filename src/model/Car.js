export class Car {
  #name

  #distance

  constructor(name) {
    this.#name = name
    this.#distance = 0
  }

  getName() {
    return this.#name
  }

  getDistance() {
    return this.#distance
  }

  move(number) {
    if (number < 4) return
    this.#distance += 1
  }
}