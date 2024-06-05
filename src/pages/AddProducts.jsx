import Swal from "sweetalert2";

const AddProducts = () => {
  const handleProductsData = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.product_name.value;
    const productPrice = form.product_price.value;
    const discription = form.discription.value;
    const catagory = form.catagory.value;
    const inameLiveLink = form.image_live_link.value;

    const productsData = {
      productPrice,
      discription,
      name,
      catagory,
      inameLiveLink,
    };

    console.log(productsData);

    await fetch("https://tv-bazar-server-2.onrender.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productsData),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          position: "middle",
          icon: "success",
          title: "Your Product has been added",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      });
  };

  return (
    <div className="text-center min-h-screen font-bold font-3xl text-primary ">
      <h1 className="mt-12">ADD PRODUCTS</h1>

      <form onSubmit={handleProductsData} className="w-3/4 mx-auto ">
        <div className="mt-6">
          <input
            type="text"
            name="product_name"
            placeholder="Name"
            className="input input-bordered input-accent w-full max-w-md "
          />
        </div>
        <div className="mt-6">
          <input
            type="number"
            name="product_price"
            placeholder="price"
            className="input input-bordered input-accent w-full max-w-md "
          />
        </div>
        <div className="mt-6">
          <input
            type="text"
            name="discription"
            placeholder="Discription"
            className="input input-bordered input-accent w-full max-w-md "
          />
        </div>
        <div className="mt-6">
          <input
            name="catagory"
            type="text"
            placeholder="Catagory"
            className="input input-bordered input-accent w-full max-w-md "
          />
        </div>
        <div className="mt-6">
          <input
            name="image_live_link"
            type="text"
            placeholder="Live Product Link"
            className="input input-bordered input-accent w-full max-w-md "
          />
        </div>
        <button className="btn btn-acrive btn-primary w-full max-w-md mt-6">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
