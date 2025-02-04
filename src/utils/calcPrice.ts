import { ICar } from "../types";

function calcPrice(car: ICar): number {
  let basePrice = 1000;

  basePrice += car.fuelcost08 * 2;

  if (car.displ > 3.0) {
    basePrice += 700;
  } else if (car.displ > 2.0) {
    basePrice += 500;
  } else {
    basePrice += 300;
  }

  if (car.co2 > 400) {
    basePrice += 500;
  } else if (car.co2 > 300) {
    basePrice += 300;
  }

  if (car.comb08 < 20) {
    basePrice += 400;
  } else if (car.comb08 < 30) {
    basePrice += 200;
  }

  const currentYear = new Date().getFullYear();
  const age = currentYear - parseInt(car.year);

  if (age <= 2) {
    basePrice += 600;
  } else if (age >= 10) {
    basePrice -= 400;
  }

  return Math.round(basePrice);
}

export default calcPrice;
