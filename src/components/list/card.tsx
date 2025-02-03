import { FC } from "react";
import { ICar } from "../../types";
import calcPrice from "../../utils/calcPrice";
import Info from "./info";
import { motion } from "motion/react";

type Props = {
  car: ICar;
};

const Card: FC<Props> = ({ car }) => {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      className="car-card"
    >
      <h2>
        {car.make} {car.model}
      </h2>

      <div className="flex mt-6 text-[19]">
        <span className="font-semibold">$</span>
        <span className="text-[32px]">{calcPrice(car)}</span>
        <span className="font-semibold self-end">/day</span>
      </div>

      <div className="w-full">
        <img src="hero.png" alt="" className="w-full h-full object-contain" />
      </div>

      <Info car={car} />
    </motion.div>
  );
};

export default Card;
