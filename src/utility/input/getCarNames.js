import readUserInput from './readUserInput.js';

/**
 * 자동차 이름 문자를 배열로 나누는 함수
 * @param {string} names 쉼표로 구분된 자동차 이름 문자
 * @returns 공백 없는 자동차 이름 배열
 */
export function splitNames(names) {
  const nameArr = names.split(',');
  return nameArr.map((name) => name.trim());
}

/**
 * 자동차 이름 입출력 함수
 * @param {string} prompt 안내 프롬프트 문구
 * @returns {Promise<string[]>}
 */
export async function getCarNames(prompt) {
  const names = await readUserInput(prompt);
  const carNameArr = splitNames(names);
  return carNameArr;
}
