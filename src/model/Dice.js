import { MissionUtils } from "@woowacourse/mission-utils";

export class Dice {
  static roll() {
    return MissionUtils.Random.pickNumberInRange(0, 9)
  }
}