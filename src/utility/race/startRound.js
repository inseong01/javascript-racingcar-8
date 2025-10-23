import print from '../print.js';
import generateRandomNum from './generateRandomNum.js';

/**
 * 라운드 회수 만큼 자동차 시합 실행 함수
 * @param {Car[]} cars 자동차 클래스 배열
 * @param {number} tries 라운드 횟수
 */
export default function startRound(cars, tries) {
  /**
   * 왜 Array.forEach는 한 번에 끝나고
   * for 문은 여러 번 될까?
   * 이전) Array(tries).fill(0).forEach(() => {})
   * 이후) Array(Number(tries)).fill(0).forEach(() => {})
   * Array를 만들 때 tries가 문자열이어서 배열 하나만 존지
   * 테스트에서는 tries 숫자형으로 전달 중이어서 정상 반환했음
  */

  // 시도 만큼 반복
  Array(Number(tries)).fill(0).forEach(() => {
    cars.forEach((car, carIdx, carArr) => {
      const amount = generateRandomNum();
      car.move(amount);

      // 마지막이면 개행 문자 넣기
      const isLastCar = carArr.length - 1 === carIdx;
      if (isLastCar) {
        print(`${car.name} : ${car.dash}\n`);
        return;
      }

      print(`${car.name} : ${car.dash}`);
    });
  });
}
