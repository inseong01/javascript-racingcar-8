import print from '../print.js';
import { findHighScore, findWinners, getWinnerNames } from './find.js';

/**
 * 자동차 경주 연산 결과 보여주는 함수
 * @param {Car[]} cars 자동차 클래스 배열
 */
export default function printRaceResult(cars) {
  const highScore = findHighScore(cars);
  const winners = findWinners(cars, highScore);
  const winnerNames = getWinnerNames(winners);

  print(`최종 우승자 : ${winnerNames.join(', ')}`);
}
