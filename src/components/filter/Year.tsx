import { param } from "motion/react-client";
import { FC, useState, FormEvent } from "react";
import { useSearchParams } from "react-router-dom";

const Year: FC = () => {
  const [year, setYear] = useState<string>("");
  const [params, setParams] = useSearchParams();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (year.trim()) {
      params.set("year", year);
    } else {
      params.delete("year");
    }
    setParams(params);
  };
  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <label>Year:</label>

      <input
        type="number"
        className="w-24 py-[6px] px-2 rounded-[4px] shadow text-black bg-white"
        placeholder="Ex:2024"
        onChange={(e) => setYear(e.target.value)}
        defaultValue={params.get("year") as string}
      />
    </form>
  );
};

export default Year;
