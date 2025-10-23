/**
 * 가장 높은 점수를 찾는 함수
 * @param {Array} cars 클래스로 생성된 차량
 * @returns 가장 높은 점수
 */
export default function findHighScore(cars) {
  let highScore = 0;

  cars.forEach((car) => {
    const carScore = Number(car.dash.length);
    highScore = Math.max(carScore, highScore);
  });

  return highScore;
}
