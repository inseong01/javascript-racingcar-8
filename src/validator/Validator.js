export class Validator {
  static repeatNumberInput(string) {
    string = string.trim()

    if (!string) {
      throw new Error("[ERROR] 숫자를 입력해주세요.")
    }

    if (/\D/.test(string)) {
      throw new Error("[ERROR] 숫자로 입력해주세요.")
    }

    const repeat = Number(string)

    if (repeat <= 0) {
      throw new Error("[ERROR] 시도 횟수는 1 이상이어야 합니다.")
    }
  }

  static carNameInput(string) {
    string = string.trim()

    if (!string) {
      throw new Error("[ERROR] 문자를 입력해주세요.")
    }

    const carNames = string.split(',').map((str) => str.trim())

    const overNamelength = carNames.some((name) => name.length > 5)
    if (overNamelength) {
      throw new Error("[ERROR] 이름은 5글자 이하로 입력해주세요.")
    }

    const hasSameName = new Set(carNames).size !== carNames.length
    if (hasSameName) {
      throw new Error("[ERROR] 중복되는 이름 없이 입력해주세요.")
    }
  }
}