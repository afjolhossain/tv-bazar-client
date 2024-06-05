/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import AllProduct from "./AllProduct";
import { useState } from "react";

const AllProducts = () => {
  const [products, setProduct] = useState([]);
  const productsData = useLoaderData();

  const handleDeleteProduct = (id) => {
    setProduct(products.filter((product) => product._id !== id));
  };
  return (
    <div>
      <h1 className="font-bold text-center pt-6 text-3xl">ALL PRODUCTS</h1>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto gap-2">
        {productsData.map((product) => (
          <AllProduct
            key={product._id}
            product={product}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
