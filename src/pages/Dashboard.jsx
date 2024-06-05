import { useEffect, useState } from "react";
import useAuth from "../components/Hook/useAuth";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState();
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
    console.log(setUserInfo);
  }, [user]);

  console.log(userInfo);
  return (
    <div className="flex justify-center">
      <div className="card card-compact w-98  mt-16 bg-base-100 shadow-xl">
        <h1 className="text-3xl font-bold text-center">Profile Information</h1>
        <div className="avatar">
          <div className="w-24 rounded-full mx-auto mt-6">
            <img src={user?.photoURL} />
          </div>
        </div>
        <div className="card-body mt-3">
          <h2 className="card-title">Name : {userInfo?.name}</h2>
          <h2 className="card-title">Email:{userInfo?.email}</h2>
          <h2 className="card-title">Phone Number : {userInfo?.contact}</h2>
          <h2 className="card-title">Occupation : {userInfo?.occupation}</h2>

          <div className="card-actions justify-end">
            <Link
              to={`/dashboard/profile/edit/${userInfo?._id}`}
              className="btn btn-neutral btn-md"
            >
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
