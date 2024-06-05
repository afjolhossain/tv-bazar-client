/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

/* eslint-disable no-undef */
const SingleProduct = ({ product }) => {
  const { name, inameLiveLink, productPrice, _id } = product;
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure>
        <img src={inameLiveLink} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{productPrice}</p>
        <div className="card-actions justify-end">
          <Link to={`/products/${_id}`}>
            <div className="badge badge-outline">Details</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
