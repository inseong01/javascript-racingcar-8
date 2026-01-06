import { Car } from "../../src/model/Car"
import { Judgment } from "../../src/model/Judgment"

describe('Judgment 모델 테스트', () => {
  test('시도 횟수 만큼 배열 개수를 반환한다.', () => {
    const judgment = new Judgment(3)

    expect(judgment.getRound().length).toBe(3)
    expect(judgment.getRound()).toEqual([0, 0, 0])
  })

  test('가장 멀리 간 자동차 이름 목록을 반환한다.', () => {
    const judgment = new Judgment(3)

    const aCar = new Car('aaa')
    const bCar = new Car('bbb')
    const cars = [aCar, bCar]
    aCar.move(4)

    const winners = judgment.getWinner(cars)
    expect(winners.length).toBe(1)
    expect(winners[0]).toBe('aaa')
  })
})