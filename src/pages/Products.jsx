import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  let [data, setData] = useState([]);
  let [limit, setLimit] = useState(10);

  useEffect(() => {
    async function fetchData() {
      let products = await axios.get(`https://dummyjson.com/products?limit=${limit}`);
      setData(products.data.products);
    }

    fetchData();
  }, [limit]);

  const handleShowMore = () => {
    setLimit(limit + 10)
  };

  return (
    <div className="flex flex-col gap-6 items-center justify-center">
      <div className="grid grid-cols-5 gap-4 px-24 py-6">
        {data.map((product) => {
          return (
            <div className="col-span-1">
              <img src={product.images[0]} alt={product.title} />
              <div className="flex items-center gap-2">
                <strong>${product.price}</strong>
              </div>
              <p>{product.title}</p>
              <p className="p-2 bg-slate-800 text-green-400 font-semibold text-xl rounded">
                {product.category}
              </p>
            </div>
          );
        })}
      </div>
      <button
        className="p-2 bg-slate-800 text-green-400 font-semibold text-xl rounded"
        onClick={handleShowMore}
      >
        Show More
      </button>
    </div>
  );
};

export default Products;
