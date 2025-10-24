/**
 * 자동차 이름 검증 함수
 * @param {string[]} cars 자동차 이름 배열
 * @returns {string}
 */
export default function validateCarName(cars) {
  const hasEmptyName = cars.some((car) => !car.trim());
  if (hasEmptyName) return ERROR_TYPE.EMPTY_CAR_NAME;
  return '';
}
