import print from '../print.js';
import { generateRandomNum } from './generate.js';

/**
 * 자동차 라운드 결과 출력 함수
 * @param {Car} car 자동차 클래스
 * @param {number} carIdx 인덱스
 * @param {Car[]} carArr 자동차 클래스 배열
 */
export function printRoundResultByCar(car, carIdx, carArr) {
  const isLastCar = carArr.length - 1 === carIdx;
  if (isLastCar) {
    print(`${car.name} : ${car.dash}\n`);
    return;
  }

  print(`${car.name} : ${car.dash}`);
}

/**
 * 자동차 경주 라운드 실행 함수
 * @param {Car} car 자동차 클래스
 * @param {number} carIdx 인덱스
 * @param {Car[]} carArr 자동차 클래스 배열
 */
export function playRoundByCar(car, carIdx, carArr) {
  const amount = generateRandomNum();
  car.move(amount);

  printRoundResultByCar(car, carIdx, carArr);
}

/**
 * 라운드 횟수 만큼 자동차 라운드 실행 함수
 * @param {Car[]} cars 자동차 클래스 배열
 * @param {number} tries 라운드 횟수
 */
export default function startRound(cars, tries) {
  const matchRounds = Array(tries).fill(0);
  matchRounds.forEach(() => {
    cars.forEach(playRoundByCar);
  });
}
