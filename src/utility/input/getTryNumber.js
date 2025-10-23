import readUserInput from './readUserInput.js';

const INPUT_TRY_NUMBER_PROMPT = '시도할 횟수는 몇 회인가요?\n';

/**
 * 경주 횟수 입출력 함수
 * @returns {Promise<number>}
 */
export default async function getTryNumber() {
  const tries = await readUserInput(INPUT_TRY_NUMBER_PROMPT);
  return Number(tries);
}
