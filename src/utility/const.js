export const PROMPT = {
  SET_CAR_NAME: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  SET_TRY_NUMBER: '시도할 횟수는 몇 회인가요?\n',
};

export const ERROR_TYPE = {
  /* 자동차 이름 */
  CAR_NAME_IS_EMPTY: 'CAR_NAME_IS_EMPTY',
  /* 시도횟수 */
  TRY_NUMBER_IS_EMPTY: 'TRY_NUMBER_IS_EMPTY',
  TRY_NUMBER_HAS_TEXT: 'TRY_NUMBER_HAS_TEXT',
  TRY_NUMBER_IS_ZERO: 'TRY_NUMBER_IS_ZERO',
  TRY_NUMBER_IS_NEGATIVE: 'TRY_NUMBER_IS_NEGATIVE',
  TRY_NUMBER_IS_NAN: 'TRY_NUMBER_IS_NAN',
};

export const ERROR_MESSAGE = {
  /* 자동차 이름 */
  CAR_NAME_IS_EMPTY: '[ERROR] 자동차 이름이 비어있습니다.',
  /* 시도횟수 */
  TRY_NUMBER_IS_EMPTY: '[ERROR] 시도 횟수를 다시 입력해주세요.',
  TRY_NUMBER_HAS_TEXT: '[ERROR] 시도 횟수는 1회 이상으로 숫자를 입력해주세요.',
  TRY_NUMBER_IS_ZERO: '[ERROR] 시도 횟수는 1회 이상이어야 합니다.',
  TRY_NUMBER_IS_NEGATIVE: '[ERROR] 시도 횟수는 1회 이상이어야 합니다.',
  TRY_NUMBER_IS_NAN: '[ERROR] 시도 횟수를 다시 입력해주세요.',
};
