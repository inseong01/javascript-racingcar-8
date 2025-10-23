import Car from "../src/Car";

import chooseMessage from "../src/utility/chooseMessage";
import throwMessage from "../src/utility/throwMessage";
import validateCarName from "../src/utility/validate/validateCarName";
import validateTries from "../src/utility/validate/validateTries";
import print from "../src/utility/print";

import generateRandomNum from "../src/utility/race/generateRandomNum";
import findHighScore from "../src/utility/race/findHighScore";
import { findWinners, getWinnerNames } from "../src/utility/race/findWinners";
import generateCars from "../src/utility/race/generateCars";

import { getCarNames, splitNames } from "../src/utility/input/getCarNames";
import readUserInput from "../src/utility/input/readUserInput";
import getTryNumber from "../src/utility/input/getTryNumber";

import { Console } from "@woowacourse/mission-utils";

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("유틸리티 테스트", () => {
  test("getCarNames", async () => {
    const inputs = [['first', 'second', ' ']];
    const outputs = ['CAR_NAME_EMPTY'];

    inputs.forEach((input, i) => {
      expect(validateCarName(input)).toBe(outputs[i]);
    })
  })

  test("validateTries", async () => {
    const inputs = [0, 1];
    const outputs = ['EMPTY_TRY', ''];

    inputs.forEach((input, i) => {
      expect(validateTries(input)).toBe(outputs[i]);
    })
  })

  test("throwMessage", async () => {
    const inputs = ['message 1', ''];
    const outputs = ['message 1', ''];

    inputs.forEach((input, i) => {
      function fnBox() {
        throwMessage(input);
      }

      if (!input) return expect(fnBox).not.toThrow(outputs[i])

      expect(fnBox).toThrow(outputs[i]);
    })
  })

  test("chooseMessage", async () => {
    const inputs = ['CAR_NAME_EMPTY', 'EMPTY_TRY', ''];
    const outputs = ['[ERROR] 자동차 이름이 비어있습니다.', '[ERROR] 시도 횟수를 다시 입력해주세요.', ''];

    inputs.forEach((input, i) => {
      expect(chooseMessage(input)).toBe(outputs[i]);
    })
  })

  test("print", async () => {
    const inputs = ['결과'];
    const outputs = ['결과'];

    const logSpy = getLogSpy();

    inputs.forEach((input, i) => {
      print(input);
      expect(logSpy).toHaveBeenCalledWith(outputs[i]);
    })
  });

  describe('race', () => {
    test('generateRandomNum', () => {
      expect(typeof generateRandomNum()).toBe('number');
    })

    test('findHighScore', () => {
      const input = [new Car('a', '-'), new Car('b', '---')]
      const output = 3;

      expect(findHighScore(input)).toBe(output);
    })

    test('findWinners', () => {
      const input = [[new Car('a', '-'), new Car('b', '---')], 3]
      const output = [new Car('b', '---')];

      expect(findWinners(input[0], input[1])).toEqual(output);
    })

    test('getWinnerNames', () => {
      const input = [new Car('b', '---')];
      const output = ['b'];

      expect(getWinnerNames(input)).toEqual(output);
    })

    test('generateCars', () => {
      const input = ['a', 'b'];
      const output = [new Car('a', ''), new Car('b', '')];

      expect(generateCars(input)).toEqual(output);
    })
  })

  describe.only('input', () => {
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

    test("readUserInput, 프롬프트 안내글을 출력한다.", async () => {
      const inputs = [' '];
      const logs = ['경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n', '시도할 횟수는 몇 회인가요?\n'];

      mockQuestions(inputs);

      const readLineSpy = getReadLineAsync();

      logs.forEach(async (log) => {
        await readUserInput(log);
        expect(readLineSpy).toHaveBeenCalledWith(log);
      })
    });

    test('splitNames, 문자열을 문자로 분리한다.', () => {
      const input = 'a, b,c,   d,e   ';
      const output = ['a', 'b', 'c', 'd', 'e'];

      expect(splitNames(input)).toEqual(output);
    })

    test("getCarNames, 자동차 이름을 입력하고 자동차 이름 배열로 반환한다.", async () => {
      const inputs = [['a, b,c,   d,e   ']];
      const outputs = [['a', 'b', 'c', 'd', 'e']];

      inputs.forEach(async (input, i) => {
        mockQuestions(input);

        const result = await getCarNames();
        expect(result).toEqual(outputs[i]);
      })
    });

    test("getTryNumber, 입력한 시도횟수를 숫자로 반환한다.", async () => {
      const inputs = [['3']];
      const outputs = [3];

      inputs.forEach(async (input, i) => {
        mockQuestions(input);

        const result = await getTryNumber();
        expect(result).toBe(outputs[i]);
      })
    });
  })
});

