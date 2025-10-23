import { Console } from '@woowacourse/mission-utils';

import splitNames from './utility/splitNames.js';
import validateCarName from './utility/validate/validateCarName.js';
import throwMessage from './utility/throwMessage.js';
import validateTries from './utility/validate/validateTries.js';
import chooseMessage from './utility/chooseMessage.js';
import Race from './Race.js';

class App {
  async run() {
    const names = await this.getCarNames();
    const nameArr = splitNames(names);
    const carNameError = validateCarName(nameArr);
    this.handleErrorMessage(carNameError);

    const tries = await this.getTryNumber();
    const triesError = validateTries(tries);
    this.handleErrorMessage(triesError);

    const race = new Race();
    race.setInitRace(nameArr, tries);

    race.start();
  }

  async getCarNames() {
    const input = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    return input;
  }

  async getTryNumber() {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return Number(input);
  }

  handleErrorMessage(errorType) {
    const errorMsg = chooseMessage(errorType);
    throwMessage(errorMsg);
  }
}

export default App;
