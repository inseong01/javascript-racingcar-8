import { ERROR_TYPE } from '../const.js';

/**
 * 자동차 이름 검증 함수
 * @param {string[]} cars 자동차 이름 배열
 * @returns {string}
 */
export function validateCarName(cars) {
  const hasEmptyName = cars.some((car) => !car.trim());
  if (hasEmptyName) return ERROR_TYPE.EMPTY_CAR_NAME;

  return '';
}

/**
 * 시도 횟수 검증 함수
 * @param {string} tries 시도 횟수
 * @returns {string}
 */
export function validateTries(tries = '') {
  const isEmpty = tries.trim().length === 0;
  if (isEmpty) return ERROR_TYPE.EMPTY_TRY_NUMBER;

  const hasText = /\D/.test(tries);
  if (hasText) return ERROR_TYPE.TRY_HAS_TEXT;

  const triesNum = Number(tries);

  const isZero = triesNum === 0;
  if (isZero) return ERROR_TYPE.TRY_NUMBER_ZERO;

  const isNegative = Math.sign(triesNum) === -1;
  if (isNegative) return ERROR_TYPE.NEGATIVE_TRY_NUMBER;

  return '';
}
