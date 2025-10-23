import throwMessage from './utility/throwMessage.js';
import chooseMessage from './utility/chooseMessage.js';
import { getCarNames } from './utility/input/getCarNames.js';
import getTryNumber from './utility/input/getTryNumber.js';
import validateCarName from './utility/validate/validateCarName.js';
import validateTries from './utility/validate/validateTries.js';
import Race from './Race.js';

class App {
  async run() {
    const carNames = await getCarNames();
    const carNameError = validateCarName(carNames);
    this.handleErrorMessage(carNameError);

    const tries = await getTryNumber();
    const triesError = validateTries(tries);
    this.handleErrorMessage(triesError);

    const race = new Race();
    race.setInitRace(carNames, tries);

    race.start();
  }

  handleErrorMessage(errorType) {
    const errorMsg = chooseMessage(errorType);
    throwMessage(errorMsg);
  }
}

export default App;
