import { Car } from "./model/Car.js";
import { Dice } from "./model/Dice.js";
import { Judgment } from "./model/Judgment.js";
import { splitCarNames } from "./utility/SplitCarNames.js";
import { Validator } from "./utility/Validator.js";
import { InputView } from "./view/InputView.js";
import { OutputView } from "./view/OutputView.js";

class App {
  #judgment

  constructor() {
    this.input = new InputView()
    this.output = new OutputView()
  }

  async run() {
    // 자동차 이름 입력
    const carNameInput = await this.input.getCarNames()
    Validator.carNameInput(carNameInput)

    // 반복 횟수 입력
    const repeatInput = await this.input.getRepeatNumber()
    Validator.repeatNumberInput(repeatInput)
    this.#judgment = new Judgment(Number(repeatInput))

    // 자동차 등록
    const cars = []
    const carNames = splitCarNames(carNameInput)
    carNames.forEach((name) => {
      const car = new Car(name)
      cars.push(car)
    });

    // 경주 반복
    this.output.printRoundStart()
    const repeat = this.#judgment.getRound()
    repeat.forEach(() => {
      cars.forEach((car) => {
        const diceNumber = Dice.roll()
        car.move(diceNumber)
      })

      this.output.printRoundResult(cars)
    })

    // 승자 반환
    const winners = this.#judgment.getWinner(cars)
    this.output.printWinner(winners)
  }
}

export default App;
