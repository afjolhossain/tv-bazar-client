import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const singleTvData = useLoaderData();

  const { catagory, discription, inameLiveLink, name, productPrice } =
    singleTvData;

  console.log(singleTvData);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={inameLiveLink} className="w-full rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="py-6">{discription}</p>
          <p className="text-2xl font-bold">Catagory: {catagory}</p>
          <p className="text-3xl font-bold">Price: {productPrice}</p>
          <button className="btn btn-outline btn-primary mt-4 w-2/4">
            Buy-Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
