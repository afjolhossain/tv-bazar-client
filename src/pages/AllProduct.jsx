/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const AllProduct = ({ product, onDelete }) => {
  const { catagory, inameLiveLink, name, productPrice, _id } = product;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tv-bazar-server-2.onrender.com/products/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your product has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div className="card w-70 bg-base-100 shadow-xl">
      <figure>
        <img src={inameLiveLink} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="font-bold">Catagory: {catagory}</p>
        <p className="font-bold">Price: {productPrice}</p>

        <div className="card-actions justify-around">
          <Link to={`/products/${_id}`}>
            <button className="btn btn-outline btn-info">See-details</button>
          </Link>

          <button className="btn btn-outline btn-error">
            <Link to={`edit/${_id}`}>Edit</Link>
          </button>

          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-outline btn-error"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
