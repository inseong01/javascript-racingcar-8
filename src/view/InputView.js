import { Console } from "@woowacourse/mission-utils";

export class InputView {
  async getInput(prompt) {
    return await Console.readLineAsync(prompt)
  }

  async getCarNames() {
    return await this.getInput('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)')
  }

  async getRepeatNumber() {
    return await this.getInput('시도할 횟수는 몇 회인가요?')
  }
}