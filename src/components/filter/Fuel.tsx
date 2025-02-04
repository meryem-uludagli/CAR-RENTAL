import { FC } from "react";

const Fuel: FC = () => {
  return (
    <form className="flex flex-col">
      <label>Fuel:</label>

      <input
        type="string"
        className="w-24 py-[6px] px-2 rounded-[4px] shadow text-black bg-white"
        placeholder="gasoline"
      />
    </form>
  );
};

export default Fuel;
