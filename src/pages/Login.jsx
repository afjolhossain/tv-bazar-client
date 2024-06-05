import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../components/Hook/useAuth";
import { useEffect } from "react";
import GoogleLogIn from "../components/googleLogin/GoogleLogIn";

const Login = () => {
  const { signIn, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const loginData = { email, password };
    await signIn(email, password);
    e.target.reset();
    console.log(loginData);
  };
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  return (
    <div className="text-center min-h-screen mt-6 font-bold font-3xl text-primary">
      <h1>LOGIN</h1>

      <form onSubmit={handleLogin} className="w-3/4 mx-auto ">
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
        <button className="btn btn-active btn-primary w-full max-w-md mt-6">
          SUBMIT
        </button>
      </form>
      <div className="divider divider-accent max-w-md mx-auto">Or</div>
      <div className=" w-full max-w-md h-12	mx-auto   flex justify-around	 items-center rounded-md">
        <div>
          <GoogleLogIn />
        </div>
      </div>
      <div className="pt-4">
        <p className="text-black">Are You New At TV-BAZAR ?</p>
        <Link to="/register">
          <p className="text-rose-950		">Registration First</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
