import { Console } from "@woowacourse/mission-utils";

export class OutputView {
  print(prompt) {
    return Console.print(prompt)
  }

  printRoundStart() {
    this.print('실행 결과')
  }

  printRoundResult(cars) {
    cars.forEach((car) => {
      this.print(`${car.getName()} : ${'-'.repeat(car.getDistance())}`)
    })
  }

  printWinner(winners) {
    this.print(`최종 우승자 : ${winners}`)
  }
}