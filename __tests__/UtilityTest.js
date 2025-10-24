import Car from "../src/Car";

import { validateCarName, validateTries } from "../src/utility/validate/validateUserInput";

import print from "../src/utility/print";

import generateRandomNum from "../src/utility/race/generateRandomNum";
import findHighScore from "../src/utility/race/findHighScore";
import { findWinners, getWinnerNames } from "../src/utility/race/findWinners";
import generateCars from "../src/utility/race/generateCars";

import { getCarNames, splitNames } from "../src/utility/input/getCarNames";
import readUserInput from "../src/utility/input/readUserInput";
import getTryNumber from "../src/utility/input/getTryNumber";

import { chooseMessage, throwMessage } from "../src/utility/error/errorMessage";
import handleErrorMessage from "../src/utility/error/errorHandler";

import { ERROR_MESSAGE, ERROR_TYPE } from "../src/utility/const";

import { Console } from "@woowacourse/mission-utils";

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("유틸리티 테스트", () => {
  describe('validate', () => {
    test("validateCarName, 비어있는 이름을 입력한 경우 오류를 반환한다.", async () => {
      const inputs = [['first', 'second', ' ']];
      const outputs = [ERROR_TYPE.EMPTY_CAR_NAME];

      inputs.forEach((input, i) => {
        expect(validateCarName(input)).toBe(outputs[i]);
      })
    })

    test("validateTries, 시도 회수가 0 이하면 오류를 반환한다.", async () => {
      const inputs = ['   ', '0', '1', '-1', 'false'];
      const outputs = [ERROR_TYPE.EMPTY_TRY_NUMBER, ERROR_TYPE.TRY_NUMBER_ZERO, '', ERROR_TYPE.TRY_HAS_TEXT, ERROR_TYPE.TRY_HAS_TEXT];

      inputs.forEach((input, i) => {
        expect(validateTries(input)).toBe(outputs[i]);
      })
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
      const input = [new Car('a'), new Car('b')]
      const output = 3;

      // 자동차 dash 임의 설정
      input[0].dash = '-';
      input[1].dash = '---';

      expect(findHighScore(input)).toBe(output);
    })

    test('findWinners', () => {
      const cars = [new Car('a'), new Car('b')];
      const highScore = 3;
      const output = [cars[1]];

      // 자동차 dash 임의 설정
      cars[0].dash = '-';
      cars[1].dash = '---';

      expect(findWinners(cars, highScore)).toEqual(output);
    })

    test('getWinnerNames', () => {
      const input = [new Car('b')];
      const output = ['b'];

      expect(getWinnerNames(input)).toEqual(output);
    })

    test('generateCars', () => {
      const input = ['a', 'b'];
      const output = [new Car('a'), new Car('b')];

      expect(generateCars(input)).toEqual(output);
    })
  })

  describe('input', () => {
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

    test("getCarNames, 자동차 이름을 입력하고 이름을 배열로 반환하며 설정한 프롬프트를 출력한다.", async () => {
      const inputs = [['a, b,c,   d,e   ']];
      const outputs = [['a', 'b', 'c', 'd', 'e']];
      const prompt = 'getCarNames 함수입니다.';

      inputs.forEach(async (input, i) => {
        mockQuestions(input);

        const readLineSpy = getReadLineAsync();

        const result = await getCarNames(prompt);
        expect(result).toEqual(outputs[i]);

        expect(readLineSpy).toHaveBeenCalledWith(prompt);
      })
    });

    test("getTryNumber, 입력한 시도횟수를 숫자로 반환하며 설정한 프롬프트를 출력한다.", async () => {
      const inputs = [['3']];
      const outputs = ['3'];
      const prompt = 'getTryNumber 함수입니다.';

      inputs.forEach(async (input, i) => {
        mockQuestions(input);

        const readLineSpy = getReadLineAsync();

        const result = await getTryNumber(prompt);
        expect(result).toBe(outputs[i]);

        expect(readLineSpy).toHaveBeenCalledWith(prompt);
      })
    });
  })

  describe('error', () => {
    test("throwMessage, 메시지가 있으면 오류를 던진다.", async () => {
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

    test("chooseMessage, 오류 유형에 맞는 오류 메시지를 반환한다.", async () => {
      const inputs = Object.keys(ERROR_TYPE);
      const outputs = Object.values(ERROR_MESSAGE);

      inputs.forEach((input, i) => {
        expect(chooseMessage(input)).toBe(outputs[i]);
      })
    })

    test("handleErrorMessage, 오류 유형을 전달하면 해당 오류 메시지와 오류를 던진다.", async () => {
      const inputs = Object.keys(ERROR_TYPE);
      const outputs = Object.values(ERROR_MESSAGE);


      inputs.forEach((input, i) => {
        function fnBox() {
          handleErrorMessage(input)
        }

        if (!input) return expect(fnBox).not.toThrow(outputs[i]);

        expect(fnBox).toThrow(outputs[i]);
      })
    })
  })
});

