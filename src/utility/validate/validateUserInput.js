import { ERROR_TYPE } from '../const.js';

/**
 * 자동차 이름 검증 함수
 * @param {string[]} cars 자동차 이름 배열
 * @returns {string}
 */
export function validateCarName(cars) {
  const trimmedNames = cars.map((car) => car.trim());

  const hasEmptyName = trimmedNames.some((car) => car.length === 0);
  if (hasEmptyName) return ERROR_TYPE.CAR_NAME_IS_EMPTY;

  const hasOverNameLength = trimmedNames.some((car) => car.length > 5);
  if (hasOverNameLength) return ERROR_TYPE.CAR_NAME_LENGTH_IS_OVER_FIVE;

  const hasOverlapedName = trimmedNames.some((car, idx, carArr) => idx !== carArr.lastIndexOf(car));
  if (hasOverlapedName) return ERROR_TYPE.CAR_NAME_IS_OVERLAPED;

  return '';
}

/**
 * 시도 횟수 검증 함수
 * @param {string} tries 시도 횟수
 * @returns {string}
 */
export function validateTries(tries = '') {
  const isEmpty = tries.trim().length === 0;
  if (isEmpty) return ERROR_TYPE.TRY_NUMBER_IS_EMPTY;

  const hasText = /\D/.test(tries);
  if (hasText) return ERROR_TYPE.TRY_NUMBER_HAS_TEXT;

  const triesNum = Number(tries);

  const isZero = triesNum === 0;
  if (isZero) return ERROR_TYPE.TRY_NUMBER_IS_ZERO;

  const isNegative = Math.sign(triesNum) === -1;
  if (isNegative) return ERROR_TYPE.TRY_NUMBER_IS_NEGATIVE;

  const isNaN = Number.isNaN(triesNum);
  if (isNaN) return ERROR_TYPE.TRY_NUMBER_IS_NAN;

  return '';
}
