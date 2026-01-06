import { Car } from "../../src/model/Car"

describe('Car 모델 테스트', () => {

  test('자동차 이름을 반환한다.', () => {
    const myCar = new Car('my')
    expect(myCar.getName()).toBe('my')
  })

  test('자동자 기본 이동거리를 반환한다.', () => {
    const myCar = new Car('my')
    expect(myCar.getDistance()).toBe(0)
  })

  test('숫자가 4 이상이면 자동차는 이동한다.', () => {
    const myCar = new Car('my')

    myCar.move(4)

    expect(myCar.getDistance()).toBe(1)
  })

  test('숫자가 3 이하면 자동차는 정지한다.', () => {
    const myCar = new Car('my')

    myCar.move(3)

    expect(myCar.getDistance()).toBe(0)
  })
})