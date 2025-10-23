import print from './utility/print.js';
import generateCars from './utility/race/generateCars.js';
import showRaceResult from './utility/race/showRaceResult.js';
import startRound from './utility/race/startRound.js';

class Race {
  constructor() {
    this.cars = [];
    this.tries = 0;
  }

  /**
   * 경주 초기 환경 설정
   * @param {string[]} names 자동차 이름 문자 배열
   * @param {number} tries 라운드 횟수
   */
  setInitRace(names, tries) {
    this.cars = generateCars(names);
    this.tries = tries;
  }

  /**
   * 경주 시작
   */
  start() {
    print('\n실행 결과');

    startRound(this.cars, this.tries);

    showRaceResult(this.cars);
  }
}

export default Race;
