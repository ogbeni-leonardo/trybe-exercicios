export const MOVE_CAR = 'MOVE_CAR';

const moveCar = (car, side) => ({ type: MOVE_CAR, car, side });
export default moveCar;
