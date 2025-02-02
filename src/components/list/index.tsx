import { FC, useEffect, useState } from "react";
import { fetchCars } from "../../utils/service";
import { ICar } from "../../types";
import { div } from "motion/react-client";

const List: FC = () => {
  const [cars, setCars] = useState<ICar[]>([]);
  const [error, setError] = useState<String | null>(null);

  useEffect(() => {
    fetchCars()
      .then((data) => setCars(data.results))
      .catch((err) => setError(err.message));
  }, []);

  if (!cars) return <Warning>Loading..</Warning>;

  if (error) return <Warning>Error Message</Warning>;

  if (cars.length < 1) return <Warning>Data not found</Warning>;

  return (
    <div>
      <section>
        {cars.map((car, i) => (
          <div key={i}>Card</div>
        ))}
      </section>
      <section></section>
    </div>
  );
};

export default List;
