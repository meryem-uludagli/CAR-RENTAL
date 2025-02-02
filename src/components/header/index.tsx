import { FC } from "react";
import { Link } from "react-router-dom";
import Button from "../button";

const Header: FC = () => {
  return (
    <header className="w-full z-10">
      <div className="max-width flex justify-between items-center px-6 py-4">
        <Link to="/">
          <img src="/logo.png" className="w-[60px]" />
        </Link>
        <Button text="Register" designs="min-w-[130px]" />
      </div>
    </header>
  );
};

export default Header;
