import { Random } from '@woowacourse/mission-utils';

/**
 * 라이브러리 활용한 0-9 난수 생성 함수
 * @returns 난수
 */
export default function generateRandomNum() {
  const number = Random.pickNumberInRange(0, 9);
  return number;
}
