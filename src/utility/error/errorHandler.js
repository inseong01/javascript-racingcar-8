import { chooseMessage, throwMessage } from './errorMessage.js';

/**
 * 오류 유형을 받아 메시지로 오류를 던지는 함수
 * @param {string} errorType 오류 유형
 */
export default function handleErrorMessage(errorType) {
  const errorMsg = chooseMessage(errorType);
  throwMessage(errorMsg);
}
