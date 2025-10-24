/**
 * 시도 횟수 검증 함수
 * @param {number} tries 시도 횟수
 * @returns {string}
 */
export default function validateTries(tries) {
  const isEmpty = !tries;
  if (isEmpty) return ERROR_TYPE.EMPTY_TRY;
  return '';
}
