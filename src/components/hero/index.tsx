import { FC } from "react";
import Button from "../button";
import { motion } from "motion/react";

const Hero: FC = () => {
  return (
    <div className="hero">
      <div className="pt-14 padding-x flex-1 max-h-[920px]">
        <h1 className="hero-title">Feel Freedom, Start Your Journey</h1>
        <p className="hero-subtitle">
          Are you ready for an unforgettable journey with gold-standard service?
          You can elevate your car rental experience with Golden Options and
          make every moment special.
        </p>
        <Button text="Discover cars" designs="mt-10" />
      </div>

      <div className="flex justify-center">
        <motion.img
          initial={{ translateX: 200, scale: 0.7 }}
          animate={{ translateX: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          src="/hero.png"
          className="object-contain max-w-[600px]"
        />
      </div>
    </div>
  );
};

export default Hero;
