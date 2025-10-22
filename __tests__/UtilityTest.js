import validateCarName from "../src/utility/validate/validateCarName";

describe("유틸리티 테스트", () => {
  test("getCarNames", async () => {
    const inputs = [['first', 'second', ' ']];
    const outputs = ['CAR_NAME_EMPTY'];

    inputs.forEach((input, i) => {
      expect(validateCarName(input)).toBe(outputs[i]);
    })
  })
});

