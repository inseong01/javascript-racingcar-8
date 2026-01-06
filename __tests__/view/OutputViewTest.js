import { MissionUtils } from "@woowacourse/mission-utils";
import { EOL as LINE_SEPARATOR } from "os";

import { OutputView } from "../../src/view/OutputView"
import { Car } from "../../src/model/Car";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();

  return logSpy;
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join(LINE_SEPARATOR);
};

const expectLogContains = (received, expectedLogs) => {
  expectedLogs.forEach((log) => {
    expect(received).toContain(log);
  });
};

describe('OutputView 뷰 테스트', () => {
  test('print 매서드는 인자를 전달하면 출력한다.', () => {
    // given
    const logSpy = getLogSpy()

    // when
    const output = new OutputView()
    output.print('123')

    // then
    const expected = [
      '123',
    ]

    expectLogContains(getOutput(logSpy), expected);
  })

  test('printRoundResult는 라운드 결과를 출력한다.', () => {
    // given
    const logSpy = getLogSpy()

    // when
    const aCar = new Car('aaa')
    const bCar = new Car('bbb')
    const cars = [aCar, bCar]
    aCar.move(4)
    bCar.move(3)
    aCar.move(6)
    bCar.move(4)

    const output = new OutputView()
    output.printRoundResult(cars)

    // then
    const expected = [
      'aaa : --',
      'bbb : -',
    ]

    expectLogContains(getOutput(logSpy), expected);
  })
})