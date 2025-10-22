/**
 * 메시지가 유무에 따른 오류 발생 함수
 * @param {string} msg 오류 메시지 내용
 * @throw Error
 */
export default function throwMessage(msg) {
  if (!msg) return;
  throw new Error(msg);
}
