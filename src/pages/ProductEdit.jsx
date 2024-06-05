import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductEdit = () => {
  const updateDataLoad = useLoaderData();

  const { catagory, inameLiveLink, name, productPrice, _id, discription } =
    updateDataLoad;

  const handleUpdateData = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.product_name.value;
    const productPrice = form.product_price.value;
    const discription = form.discription.value;
    const catagory = form.catagory.value;
    const inameLiveLink = form.inameLiveLink.value;

    const productsData = {
      productPrice,
      discription,
      name,
      catagory,
      inameLiveLink,
    };

    // console.log(productsData);

    await fetch(`https://tv-bazar-server-2.onrender.com/products/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productsData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="text-center min-h-screen font-bold font-3xl ">
      <h1 className="mt-12">UPDATE PRODUCTS</h1>

      <form onSubmit={handleUpdateData} className="w-3/4 mx-auto ">
        <div className="mt-6">
          <input
            type="text"
            defaultValue={name}
            name="product_name"
            className="input input-bordered input-accent w-full max-w-md font-black "
          />
        </div>
        <div className="mt-6">
          <input
            type="text"
            defaultValue={productPrice}
            name="product_price"
            className="input input-bordered input-accent w-full max-w-md "
          />
        </div>
        <div className="mt-6">
          <input
            type="text"
            defaultValue={discription}
            name="discription"
            className="input input-bordered input-accent w-full max-w-md "
          />
        </div>
        <div className="mt-6">
          <input
            name="catagory"
            defaultValue={catagory}
            type="text"
            className="input input-bordered input-accent w-full max-w-md "
          />
        </div>
        <div className="mt-6">
          <input
            name="inameLiveLink"
            defaultValue={inameLiveLink}
            type="text"
            className="input input-bordered input-accent w-full max-w-md "
          />
        </div>
        <button
          type="submit"
          value="update product"
          className="btn btn-acrive btn-primary w-full max-w-md mt-6"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ProductEdit;
