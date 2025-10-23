import Car from "../src/Car.js";
import Race from "../src/Race.js";

import { Console } from "@woowacourse/mission-utils";

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("기능 테스트", () => {
  test('부여한 인자로 자동차 생성과 라운드가 설정된다.', () => {
    const inputs = [{ names: ['가나', '다라'], tries: 3 }];
    const outputs = [{ cars: [new Car('가나'), new Car('다라')], tries: 3 }];

    inputs.forEach((input, i) => {
      const race = new Race();
      race.setInitRace(input.names, input.tries)

      expect(race.cars).toEqual(outputs[i].cars);
      expect(race.tries).toBe(outputs[i].tries);
    })
  })

  test('레이스가 시작되면 시도 횟수 만큼 로그가 호출된다.', () => {
    const input = { names: ['가나', '다라'], tries: 3 };
    /** 시작 출력 + ('자동차 라운드 결과' * 시도횟수) 출력 + 결과 출력  */
    const calledTimes = 1 + 2 + 2 + 2 + 1;

    const logSpy = getLogSpy();

    const race = new Race();
    race.setInitRace(input.names, input.tries)

    race.start();

    expect(logSpy).toHaveBeenCalledTimes(calledTimes);
  })
});
