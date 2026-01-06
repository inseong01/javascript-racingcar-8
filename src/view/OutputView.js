import { Console } from "@woowacourse/mission-utils";

export class OutputView {
  print(prompt) {
    return Console.print(prompt)
  }

  printRoundResult(cars) {
    this.print('실행 결과')

    cars.forEach((car) => {
      this.print(`${car.getName()} : ${'-' * car.getDistance()}`)
    })
  }

  printWinner(winners) {
    this.print(`최종 우승자 : ${winners}`)
  }
}