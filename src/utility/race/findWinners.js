/**
 * 최고점수로 승리 차량 판별해 차량 이름 배열 반환하는 함수
 * @param {Array} cars 클래스로 생성된 차량
 * @param {number} highScore 최고점수
 * @returns 승리자 이름 배열
 */
export function findWinners(cars, highScore) {
  const winners = cars.filter((car) => car.dash.length === highScore);
  return winners;
}

/**
 * 승리 차량 이름 배열 반환하는 함수
 * @param {Car[]} winners 클래스로 생성된 차량
 * @returns 승리자 이름 배열
 */
export function getWinnerNames(winners) {
  const winnerNames = winners.map((car) => car.name);
  return winnerNames;
}
