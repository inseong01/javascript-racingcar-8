class Car {
  constructor(name) {
    this.name = name;
    this.dash = '';
  }

  /**
   * 무작위 수에 따른 dash '-' 추가
   * @param {number} randomNum 무작위 수
   * @returns {undefined}
   */
  move(randomNum) {
    if (randomNum < 4) return;
    this.dash += '-';
  }
}

export default Car;
