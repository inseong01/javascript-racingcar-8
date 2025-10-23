import readUserInput from './readUserInput.js';

const INPUT_CAR_NAME_PROMPT = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';

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
 * @returns {Promise<string[]>}
 */
export async function getCarNames() {
  const names = await readUserInput(INPUT_CAR_NAME_PROMPT);
  const carNameArr = splitNames(names);
  return carNameArr;
}
