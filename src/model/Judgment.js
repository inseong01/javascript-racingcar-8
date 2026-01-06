export class Judgment {
  #round

  constructor(repeat) {
    this.#round = new Array(repeat)
  }

  getRound() {
    return this.#round
  }

  getWinner(cars) {
    let highScore = -Infinity

    cars.forEach((car) => {
      highScore = Math.max(highScore, car.getDistance())
    })

    const winners = cars.filter((car) => car.getDistance() === highScore)
    return winners.map((winner) => winner.getName())
  }
}