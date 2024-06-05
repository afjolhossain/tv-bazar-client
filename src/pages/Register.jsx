/* eslint-disable no-undef */
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../components/Hook/useAuth";
import GoogleLogIn from "../components/googleLogin/GoogleLogIn";

const Register = () => {
  const { createUser } = useAuth();

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const contact = form.contact.value;
    const password = form.password.value;

    const registrationData = { name, contact, email, password };
    console.log(registrationData);
    createUser(email, password).then((data) => {
      if (data?.user?.email) {
        const userInfo = {
          email: data?.user?.email,
          name: name,
          contact: contact,
        };
        fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        y;
      }
    });

    navigate("/");
  };

  return (
    <div className="text-center min-h-screen mt-6 font-bold font-3xl text-primary">
      <h1>REGISTER</h1>

      <form onSubmit={handleRegister} className="w-3/4 mx-auto ">
        <div className="mt-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered input-accent w-full max-w-md "
          />
        </div>
        <div className="mt-6">
          <input
            type="number"
            name="contact"
            placeholder="contact number"
            className="input input-bordered input-accent w-full max-w-md "
          />
        </div>
        <div className="mt-6">
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="input input-bordered input-accent w-full max-w-md "
          />
        </div>
        <div className="mt-6">
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="input input-bordered input-accent w-full max-w-md "
          />
        </div>
        <button className="btn btn-acrive btn-primary w-full max-w-md mt-6">
          SUBMIT
        </button>
      </form>

      <div className="divider divider-accent max-w-md mx-auto">Or</div>
      <div className=" w-full max-w-md h-12	mx-auto border-indigo-600  flex justify-around	 items-center rounded-md">
        <div>
          {/* <button onClick={signInGoogle}>google</button> */}
          <GoogleLogIn />
        </div>
      </div>
      <div className="pt-4">
        <p className="text-black">Allready User At TV-BAZAR</p>
        <Link to="/login">
          <p className="text-rose-950		">Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Register;
