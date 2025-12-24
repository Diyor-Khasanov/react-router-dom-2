import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Products = () => {
  let navigate = useNavigate();
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

  const navigateToDetails = (id) => {
    navigate(`/productDetails/${id}`)
  }

  return (
    <div className="flex flex-col gap-6 items-center justify-center">
      <div className="grid grid-cols-5 gap-4 px-24 py-6">
        {data.map((product) => {
          return (
            <div className="col-span-1" key={product.id}>
              <img src={product.images[0]} alt={product.title} />
              <div className="flex items-center gap-2">
                <strong>${product.price}</strong>
              </div>
              <p>{product.title}</p>
              <p className="p-2 bg-slate-800 text-green-400 font-semibold text-xl rounded">
                {product.category}
              </p>
              <button onClick={() => navigateToDetails(product.id)} className="p-2 bg-green-400 text-slate-800 font-semibold text-xl rounded block mx-auto my-4 cursor-pointer w-full">
                Details
              </button>
            </div>
          );
        })}
      </div>
      <button
        className="bg-slate-800 text-green-400 font-semibold text-xl rounded px-6 cursor-pointer py-3 my-3"
        onClick={handleShowMore}
      >
        Show More
      </button>
    </div>
  );
};

export default Products;
