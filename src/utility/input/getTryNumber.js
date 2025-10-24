import readUserInput from './readUserInput.js';

/**
 * 경주 횟수 입출력 함수
 * @param {string} prompt 안내 프롬프트 문구
 * @returns {Promise<number>}
 */
export default async function getTryNumber(prompt) {
  const tries = await readUserInput(prompt);
  return Number(tries);
}
