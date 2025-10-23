import Car from "../src/Car";

describe("기능 테스트", () => {
  test('부여한 인자로 자동차가 생성된다.', () => {
    const inputs = [{ name: '가나', dash: '' }, { name: '다라', dash: '-' }];
    const outputs = [{ name: '가나', dash: '' }, { name: '다라', dash: '-' }];

    inputs.forEach((input, i) => {
      const car = new Car(input.name, input.dash);
      expect(car.name).toBe(outputs[i].name);
      expect(car.dash).toBe(outputs[i].dash);
    })
  })

  test('부여된 숫자에 따라 움직임("-")이 추가된다.', () => {
    const inputs = [0, 4, 3, 8];
    const outputs = ['', '-', '-', '--'];

    const car = new Car('a', '');

    inputs.forEach((input, i) => {
      car.move(input);
      expect(car.dash).toBe(outputs[i]);
    })
  })
});
