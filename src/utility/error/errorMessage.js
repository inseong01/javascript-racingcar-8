import { ERROR_MESSAGE, ERROR_TYPE } from '../const.js';

/**
 * 메시지가 유무에 따른 오류 발생 함수
 * @param {string} msg 오류 메시지 내용
 * @throw Error
 */
export function throwErrorMessage(msg) {
  if (!msg) return;
  throw new Error(msg);
}

/**
 * 검증 이후 반환된 오류에 따른 메시지 반환 함수
 * @param {string} type 검증 오류 유형
 * @returns 오류 메시지
 */
export function chooseErrorMessage(type) {
  /* 자동차 이름 */
  if (type === ERROR_TYPE.CAR_NAME_IS_EMPTY) return ERROR_MESSAGE.CAR_NAME_IS_EMPTY;
  /* 시도횟수 */
  if (type === ERROR_TYPE.TRY_NUMBER_IS_EMPTY) return ERROR_MESSAGE.TRY_NUMBER_IS_EMPTY;
  if (type === ERROR_TYPE.TRY_NUMBER_HAS_TEXT) return ERROR_MESSAGE.TRY_NUMBER_HAS_TEXT;
  if (type === ERROR_TYPE.TRY_NUMBER_IS_ZERO) return ERROR_MESSAGE.TRY_NUMBER_IS_ZERO;
  if (type === ERROR_TYPE.TRY_NUMBER_IS_NEGATIVE) return ERROR_MESSAGE.TRY_NUMBER_IS_NEGATIVE;
  if (type === ERROR_TYPE.TRY_NUMBER_IS_NOT_INTEGER) return ERROR_MESSAGE.TRY_NUMBER_IS_NOT_INTEGER;
  if (type === ERROR_TYPE.TRY_NUMBER_IS_NAN) return ERROR_MESSAGE.TRY_NUMBER_IS_NAN;
  return '';
}
