import { FcGoogle } from "react-icons/fc";
import useAuth from "../Hook/useAuth";

const GoogleLogIn = () => {
  const { googleLogin } = useAuth();

  const handleGoogleSignIn = () => {
    googleLogin().then((data) => {
      if (data?.user?.email) {
        const userInfo = {
          email: data?.user?.email,
          name: data?.user?.displayName,
        };
        fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            // localStorage.setItem("token", data?.token);
            console.log(data);
          });
      }
    });
  };

  return (
    <button onClick={handleGoogleSignIn} className="btn w-full">
      <div className="flex items-center gap-2">
        <FcGoogle size={24} />
        <p>Google</p>
      </div>
    </button>
  );
};

export default GoogleLogIn;