import { Validator } from "../../src/utility/Validator"

describe('Validator 테스트', () => {
  describe('repeatNumberInput', () => {
    test('빈 칸을 입력하면 오류를 발생시킨다.', () => {
      function errorBox() {
        Validator.repeatNumberInput('')
      }
      expect(errorBox).toThrow('[ERROR]')
    })

    test('문자를 입력하면 오류를 발생시킨다.', () => {
      function errorBox() {
        Validator.repeatNumberInput('ㅁㄴㅇ')
      }
      expect(errorBox).toThrow('[ERROR]')
    })

    test('음수를 입력하면 오류를 발생시킨다.', () => {
      function errorBox() {
        Validator.repeatNumberInput('-1')
      }
      expect(errorBox).toThrow('[ERROR]')
    })

    test('0을 입력하면 오류를 발생시킨다.', () => {
      function errorBox() {
        Validator.repeatNumberInput('0')
      }
      expect(errorBox).toThrow('[ERROR]')
    })

    test('양수를 입력하면 오류가 발생하지 않는다.', () => {
      function errorBox() {
        Validator.repeatNumberInput('123')
      }
      expect(errorBox).not.toThrow('[ERROR]')
    })
  })

  describe('carNameInput', () => {
    test('빈 칸을 입력하면 오류를 발생시킨다.', () => {
      function errorBox() {
        Validator.carNameInput('')
      }
      expect(errorBox).toThrow('[ERROR]')
    })

    test('5글자 초과 이름을 입력하면 오류를 발생시킨다.', () => {
      function errorBox() {
        Validator.carNameInput('12345, 123456')
      }
      expect(errorBox).toThrow('[ERROR]')
    })

    test('이름이 중복되면 오류를 발생시킨다.', () => {
      function errorBox() {
        Validator.carNameInput('1234, 1234')
      }
      expect(errorBox).toThrow('[ERROR]')
    })

    test('글자를 입력하면 오류가 발생하지 않는다.', () => {
      function errorBox() {
        Validator.carNameInput('111, 222, 333')
      }
      expect(errorBox).not.toThrow('[ERROR]')
    })
  })
})