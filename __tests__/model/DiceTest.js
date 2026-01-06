import { Dice } from "../../src/model/Dice"

describe('Dice 모델 테스트', () => {
  test('굴리면 숫자 형태로 나온다.', () => {
    expect(typeof Dice.roll()).toBe('number')
  })

  test('굴리면 0~9 사이 숫자가 나온다.', () => {
    const random = Dice.roll()

    const lessThan10 = random < 10
    const biggerThanNegative = random > -1

    expect(lessThan10).toBe(true)
    expect(biggerThanNegative).toBe(true)
  })
})