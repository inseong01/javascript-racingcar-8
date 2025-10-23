import App from "../src/App.js";

import { Console } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getReadLineAsync = () => {
  const readLineSpy = jest.spyOn(Console, "readLineAsync");
  readLineSpy.mockClear();
  return readLineSpy;
};

describe("기능 테스트", () => {
  test("getCarNames", async () => {
    const inputs = [' '];

    mockQuestions(inputs);

    const readLineSpy = getReadLineAsync();

    const app = new App;
    await app.getCarNames();

    expect(readLineSpy).toHaveBeenCalledWith('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
  });

  test("getTryNumber", async () => {
    const inputs = [' '];

    mockQuestions(inputs);

    const readLineSpy = getReadLineAsync();

    const app = new App;
    await app.getTryNumber();

    expect(readLineSpy).toHaveBeenCalledWith('시도할 횟수는 몇 회인가요?\n');
  });
});
