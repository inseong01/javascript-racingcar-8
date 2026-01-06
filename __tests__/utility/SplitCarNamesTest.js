import { splitCarNames } from "../../src/utility/splitCarNames"

describe('splitCarNames 유틸리티 테스트', () => {
  test('자동차 이름 배열을 반환한다.', () => {
    const carNames = splitCarNames('  aa,bb, cc ')

    expect(carNames).toEqual(['aa', 'bb', 'cc'])
  })
})