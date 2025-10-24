import { Random } from '@woowacourse/mission-utils';

import Car from '../../Car.js';

/**
 * 이름 개수 만큼 자동차 클래스 생성
 * @param {string[]} names 자동차 이름 배열
 * @return {Car[]} 자동차 클래스 배열
 */
export function generateCars(names) {
  return names.map((name) => new Car(name));
}

/**
 * 라이브러리 활용한 0-9 난수 생성 함수
 * @returns 난수
 */
export function generateRandomNum() {
  const number = Random.pickNumberInRange(0, 9);
  return number;
}
