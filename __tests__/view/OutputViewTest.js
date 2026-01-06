import { MissionUtils } from "@woowacourse/mission-utils";
import { EOL as LINE_SEPARATOR } from "os";

import { OutputView } from "../../src/view/OutputView"

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
})