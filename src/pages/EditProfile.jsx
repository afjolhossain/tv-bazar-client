import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditProfile = () => {
  const data = useLoaderData();
  console.log(data);
  const handleProfileData = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const age = form.age.value;
    const mobile = form.mobile.value;
    const occupation = form.occupation.value;

    const profileData = {
      email,
      age,
      mobile,
      occupation,
      name,
    };

    await fetch(`https://tv-bazar-server.vercel.app/user/${data?.email}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(profileData),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          position: "middle",
          icon: "success",
          title: "Profile has been Updated",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      });
  };

  return (
    <div className="text-center min-h-screen font-bold font-3xl  ">
      <h1 className="mt-12">EDIT YOUR PROFILE</h1>

      <form onSubmit={handleProfileData} className="w-3/4 mx-auto ">
        <div className="mt-6">
          <input
            type="text"
            name="name"
            defaultValue={data?.name}
            placeholder="Name"
            className="input input-bordered input-accent w-full max-w-md "
          />
        </div>
        <div className="mt-6">
          <input
            type="number"
            name="age"
            placeholder="User Age"
            className="input input-bordered input-accent w-full max-w-md "
          />
        </div>
        <div className="mt-6">
          <input
            type="email"
            value={data?.email}
            disabled
            name="email"
            placeholder="User Email"
            className="input input-bordered input-accent w-full max-w-md "
          />
        </div>
        <div className="mt-6">
          <input
            name="occupation"
            type="text"
            placeholder="Occupation"
            className="input input-bordered input-accent w-full max-w-md "
          />
        </div>
        <div className="mt-6">
          <input
            name="mobile"
            type="text"
            defaultValue={data?.contact}
            placeholder="User Mobile"
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

export default EditProfile;
