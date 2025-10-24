import { ERROR_MESSAGE, ERROR_TYPE } from '../const.js';

/**
 * 메시지가 유무에 따른 오류 발생 함수
 * @param {string} msg 오류 메시지 내용
 * @throw Error
 */
export function throwMessage(msg) {
  if (!msg) return;
  throw new Error(msg);
}

/**
 * 검증 이후 반환된 오류에 따른 메시지 반환 함수
 * @param {string} type 검증 오류 유형
 * @returns 오류 메시지
 */
export function chooseMessage(type) {
  if (type === ERROR_TYPE.EMPTY_CAR_NAME) return ERROR_MESSAGE.EMPTY_CAR_NAME;
  if (type === ERROR_TYPE.EMPTY_TRY) return ERROR_MESSAGE.EMPTY_TRY;
  return '';
}
