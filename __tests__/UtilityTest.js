import validateCarName from "../src/utility/validate/validateCarName";
import validateTries from "../src/utility/validate/validateTries";

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
});

