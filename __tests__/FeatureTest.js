import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getReadLineAsync = () => {
  const readLineSpy = jest.spyOn(MissionUtils.Console, "readLineAsync");
  readLineSpy.mockClear();
  return readLineSpy;
};

describe("기능 테스트", () => {
  test("getUserInput", async () => {
    const inputs = [' '];

    mockQuestions(inputs);

    const readLineSpy = getReadLineAsync();

    const app = new App;
    await app.getUserInput();

    expect(readLineSpy).toHaveBeenCalledWith('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
  });
});
