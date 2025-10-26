/**
 * 가장 높은 점수를 찾는 함수
 * @param {Car[]} cars 클래스로 생성된 차량  배열
 * @returns 가장 높은 점수
 */
export function findHighScore(cars) {
  let highScore = 0;

  cars.forEach((car) => {
    const carScore = car.dash.length;
    highScore = Math.max(carScore, highScore);
  });

  return highScore;
}

/**
 * 최고점수로 승리 차량 판별해 차량 이름 배열 반환하는 함수
 * @param {Car[]} cars 클래스로 생성된 차량 배열
 * @param {number} highScore 최고점수
 * @returns 승리한 차량 배열
 */
export function findWinners(cars, highScore) {
  const winners = cars.filter((car) => car.dash.length === highScore);
  return winners;
}

/**
 * 승리한 차량 이름 배열 반환하는 함수
 * @param {Car[]} winners 클래스로 생성된 차량 배열
 * @returns 승리한 차량 이름 배열
 */
export function getWinnerNames(winners) {
  const winnerNames = winners.map((car) => car.name);
  return winnerNames;
}
