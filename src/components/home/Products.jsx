/* eslint-disable react/prop-types */
import SingleProduct from "./SingleProduct";

const Products = ({ productsData }) => {
  return (
    <div className="text-center text-4xl font-bold mt-8">
      <h1>TOP LED PRODUCTS</h1>
      <div className=" mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 px-6 ">
        {productsData.slice(0, 4).map((product) => (
          <SingleProduct key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
