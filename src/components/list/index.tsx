import { FC, useEffect, useState } from "react";
import { fetchCars } from "../../utils/service";
import { ICar } from "../../types";
import Warning from "./warning";
import Card from "./card";
import { useSearchParams } from "react-router-dom";
import ReactPaginate from "react-paginate";

const List: FC = () => {
  const [params, setParams] = useSearchParams();
  const [cars, setCars] = useState<ICar[] | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const paramsObj = Object.fromEntries(params.entries());

  useEffect(() => {
    fetchCars({ ...paramsObj })
      .then((data) => {
        setCars(data.results);
        setTotal(data.total_count);
      })
      .catch((err) => setError(err.message));
  }, [params]);

  if (!cars) return <Warning>Loading..</Warning>;

  if (error) return <Warning>Error Message</Warning>;

  if (cars.length < 1) return <Warning>Data not found</Warning>;

  return (
    <div className="padding-x max-width">
      <section className="home-cars-wrapper">
        {cars.map((car, i) => (
          <Card key={i} car={car} />
        ))}
      </section>

      {total && (
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          containerClassName="pagination"
          initialPage={Number(params.get("page") || 1) - 1}
          onPageChange={(e) => {
            params.set("page", String(e.selected + 1));
            setParams(params);

            document.querySelector("#filter")?.scrollIntoView();
          }}
          renderOnZeroPageCount={null}
          pageCount={Math.ceil(total / 10)}
        />
      )}
    </div>
  );
};

export default List;
