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
  if (type === 'CAR_NAME_EMPTY') return '[ERROR] 자동차 이름이 비어있습니다.';
  if (type === 'EMPTY_TRY') return '[ERROR] 시도 횟수를 다시 입력해주세요.';
  return '';
}
