import { getCarNames } from './utility/input/getCarNames.js';
import getTryNumber from './utility/input/getTryNumber.js';
import { validateCarName, validateTries } from './utility/validate/validateUserInput.js';
import handleErrorMessage from './utility/error/errorHandler.js';
import { PROMPT } from './utility/const.js';

import Race from './Race.js';

class App {
  constructor() {
    this.firstPrompt = PROMPT.SET_CAR_NAME;
    this.secondPrompt = PROMPT.SET_TRY_NUMBER;
  }

  async run() {
    const carNames = await getCarNames(this.firstPrompt);
    const carNameError = validateCarName(carNames);
    handleErrorMessage(carNameError);

    const tries = await getTryNumber(this.secondPrompt);
    const triesError = validateTries(tries);
    handleErrorMessage(triesError);

    const race = new Race();
    race.setInitRace(carNames, tries);
    race.start();
  }
}

export default App;
