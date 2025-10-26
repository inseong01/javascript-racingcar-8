import Car from "../src/Car";

import { validateCarName, validateTries } from "../src/utility/validate/validateUserInput";

import print from "../src/utility/print";

import { findHighScore, findWinners, getWinnerNames } from "../src/utility/race/find";
import { generateRandomNum, generateCars } from "../src/utility/race/generate";
import startRound, { playRoundByCar, printRoundResultByCar } from "../src/utility/race/startRound";

import { getCarNames, splitNames } from "../src/utility/input/getCarNames";
import readUserInput from "../src/utility/input/readUserInput";
import getTryNumber from "../src/utility/input/getTryNumber";

import { chooseErrorMessage, throwErrorMessage } from "../src/utility/error/errorMessage";
import handleErrorMessage from "../src/utility/error/errorHandler";

import { ERROR_MESSAGE, ERROR_TYPE } from "../src/utility/const";

import { Console, Random } from "@woowacourse/mission-utils";

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("유틸리티 테스트", () => {
  describe('validate', () => {
    describe('validateCarName', () => {
      const successCases = [
        {
          input: ['000', '001', '002'],
          output: ''
        },
        {
          input: [' 1 2 3 ', '        abc      ', 'ef'],
          output: ''
        },
        {
          input: ['12345', 'abcde', '가나다라마'],
          output: ''
        },
      ]

      test.each(successCases)("[성공] 입력: $input", async ({ input, output }) => {
        expect(validateCarName(input)).toBe(output);
      })

      const failCases = [
        {
          input: ['first', 'second', '   '],
          output: ERROR_TYPE.CAR_NAME_IS_EMPTY
        },
        {
          input: ['', 'second', 'third'],
          output: ERROR_TYPE.CAR_NAME_IS_EMPTY
        },
        {
          input: ['123456', 'abc', 'ef'],
          output: ERROR_TYPE.CAR_NAME_LENGTH_IS_OVER_FIVE
        },
        {
          input: ['하나', '둘', '하나'],
          output: ERROR_TYPE.CAR_NAME_IS_OVERLAPED
        },
      ]

      test.each(failCases)("[실패] $output - $input", async ({ input, output }) => {
        expect(validateCarName(input)).toBe(output);
      })
    });

    describe('validateTries', () => {
      const successCases = [
        {
          input: '1',
          output: ''
        },
        {
          input: '10',
          output: ''
        },
        {
          input: '3',
          output: ''
        },
      ]

      test.each(successCases)("[성공] 입력: $input", async ({ input, output }) => {
        expect(validateTries(input)).toBe(output);
      })

      const failCases = [
        {
          input: '   ',
          output: ERROR_TYPE.TRY_NUMBER_IS_EMPTY
        },
        {
          input: '0',
          output: ERROR_TYPE.TRY_NUMBER_IS_ZERO
        },
        {
          input: '-1',
          output: ERROR_TYPE.TRY_NUMBER_HAS_TEXT
        },
        {
          input: 'false',
          output: ERROR_TYPE.TRY_NUMBER_HAS_TEXT
        },
        {
          input: 'ob02',
          output: ERROR_TYPE.TRY_NUMBER_HAS_TEXT
        }
      ]

      test.each(failCases)("[실패] $output - $input", async ({ input, output }) => {
        expect(validateTries(input)).toBe(output);
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
    const pickNumberMock = jest.fn();

    afterEach(() => {
      pickNumberMock.mockReset();
    })

    const mockRandoms = (numbers) => {
      Random.pickNumberInRange = pickNumberMock;

      numbers.reduce((acc, number) => {
        return acc.mockReturnValueOnce(number);
      }, Random.pickNumberInRange);
    };


    test('generateRandomNum, 무작위 숫자가 반환된다.', () => {
      const AMOUNT = 1

      mockRandoms([AMOUNT]);

      const result = generateRandomNum();

      expect(pickNumberMock).toHaveBeenCalledTimes(1);
      expect(result).toBe(AMOUNT);
    })

    test('findHighScore, 자동차 대시를 비교해 최고 점수를 반환한다.', () => {
      const input = [new Car('a'), new Car('b')]
      const output = 3;

      // 자동차 dash 임의 설정
      input[0].dash = '-';
      input[1].dash = '---';

      expect(findHighScore(input)).toBe(output);
    })

    test('findWinners, 최고 점수 만큼의 대시를 가지고 있는 자동차를 반환한다.', () => {
      const cars = [new Car('a'), new Car('b')];
      const highScore = 3;
      const output = [cars[1]];

      // 자동차 dash 임의 설정
      cars[0].dash = '-';
      cars[1].dash = '---';

      expect(findWinners(cars, highScore)).toEqual(output);
    })

    test('getWinnerNames, 자동차 클래스에서 이름을 배열로 반환한다.', () => {
      const input = [new Car('b')];
      const output = ['b'];

      expect(getWinnerNames(input)).toEqual(output);
    })

    test('generateCars, 이름 배열을 받아 자동차 클래스로 반환한다.', () => {
      const input = ['a', 'b'];
      const output = [new Car('a'), new Car('b')];

      expect(generateCars(input)).toEqual(output);
    })

    test('printRoundResultByCar, 자동차 이름과 대시가 출력된다.', () => {
      const carArr = [new Car('a'), new Car('b')];
      const carIdx = 0;
      const car = carArr[carIdx];
      const AMOUNT = 3;

      const logSpy = getLogSpy();
      mockRandoms([AMOUNT]);

      printRoundResultByCar(car, carIdx, carArr);

      expect(logSpy).toHaveBeenCalledWith(`${car.name} : ${AMOUNT > 3 ? '-' : ''}`);
    })

    test('playRoundByCar, 차동차가 움직이고 결과(이름, 대시)가 출력된다.', () => {
      const carArr = [new Car('a'), new Car('b')];
      const carIdx = 0;
      const car = carArr[carIdx];
      const AMOUNT = 3;

      const logSpy = getLogSpy();
      mockRandoms([AMOUNT]);

      playRoundByCar(car, carIdx, carArr);

      expect(pickNumberMock).toHaveBeenCalledTimes(1);
      expect(logSpy).toHaveBeenCalledWith(`${car.name} : ${AMOUNT > 3 ? '-' : ''}`);
    })

    test('startRound, 차동차 수 만큼 자동차가 움직이고 결과가 출력된다.', () => {
      const carArr = [new Car('a'), new Car('b')];
      const TRIES = 3;
      const AMOUNT = 0;

      const logSpy = getLogSpy();
      mockRandoms([AMOUNT]);

      startRound(carArr, TRIES);

      expect(pickNumberMock).toHaveBeenCalledTimes(6);
      expect(logSpy).toHaveBeenCalledTimes(6);
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
    test("throwErrorMessage, 메시지가 있으면 오류를 던진다.", async () => {
      const inputs = ['message 1', ''];
      const outputs = ['message 1', ''];

      inputs.forEach((input, i) => {
        function fnBox() {
          throwErrorMessage(input);
        }

        if (!input) return expect(fnBox).not.toThrow(outputs[i])

        expect(fnBox).toThrow(outputs[i]);
      })
    })

    test("chooseErrorMessage, 오류 유형에 맞는 오류 메시지를 반환한다.", async () => {
      const inputs = Object.values(ERROR_TYPE);
      const outputs = Object.values(ERROR_MESSAGE);

      inputs.forEach((input, i) => {
        expect(chooseErrorMessage(input)).toBe(outputs[i]);
      })
    })

    test("handleErrorMessage, 오류 유형을 전달하면 해당 오류 메시지와 오류를 던진다.", async () => {
      const inputs = Object.values(ERROR_TYPE);
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

