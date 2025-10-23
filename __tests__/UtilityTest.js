import Car from "../src/Car";

import chooseMessage from "../src/utility/chooseMessage";
import throwMessage from "../src/utility/throwMessage";
import validateCarName from "../src/utility/validate/validateCarName";
import validateTries from "../src/utility/validate/validateTries";
import splitNames from "../src/utility/splitNames";
import generateRandomNum from "../src/utility/race/generateRandomNum";
import findHighScore from "../src/utility/race/findHighScore";
import { findWinner, getWinnerNames } from "../src/utility/race/findWinner";
import generateCars from "../src/utility/race/generateCars";


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

  test('splitNames', () => {
    const input = 'a, b,c,   d,e   ';
    const output = ['a', 'b', 'c', 'd', 'e'];

    expect(splitNames(input)).toEqual(output);
  })

  describe('race', () => {
    test('generateRandomNum', () => {
      expect(typeof generateRandomNum()).toBe('number');
    })

    test('findHighScore', () => {
      const input = [new Car('a', '-'), new Car('b', '---')]
      const output = 3;

      expect(findHighScore(input)).toBe(output);
    })

    test('findWinner', () => {
      const input = [[new Car('a', '-'), new Car('b', '---')], 3]
      const output = [new Car('b', '---')];

      expect(findWinner(input[0], input[1])).toEqual(output);
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
});

