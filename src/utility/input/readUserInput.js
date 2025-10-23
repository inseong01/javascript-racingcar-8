import { Console } from '@woowacourse/mission-utils';

/**
 * 사용자 입력 문자 받는 함수
 * @returns {Promise<string>}
 */
export default async function readUserInput(promptMsg) {
  const input = await Console.readLineAsync(promptMsg);
  return input;
}
