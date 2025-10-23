import Car from '../../Car.js';

/**
 * 이름 개수 만큼 자동차 클래스 생성
 * @param {string[]} names 자동차 이름 배열
 * @return {Car[]} 자동차 배열
 */
export default function generateCars(names) {
  return names.map((name) => new Car(name, ''));
}
