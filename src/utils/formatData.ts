import { ICar } from "../types";

type ReturnType = [string, string | number | null][];

const formatData = (car: ICar): ReturnType => {
  const accepted = [
    "make",
    "model",
    "cylinders",
    "drive",
    "fueltype",
    "trany",
    "vclass",
    "year",
    "startstop",
    "co2",
    "displ",
    "atvtype",
  ];

  const arrData = Object.entries(car).filter((car) =>
    accepted.includes(car[0])
  );

  return arrData;
};

export default formatData;
