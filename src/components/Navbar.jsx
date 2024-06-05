import { Link, NavLink } from "react-router-dom";
import useAuth from "./Hook/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const links = (
    <>
      <li className="mr-4">
        <NavLink to="/">HOME</NavLink>
      </li>
      <li className="mr-4">
        <NavLink to="/about">ABOUT</NavLink>
      </li>
      <li className="mr-4">
        <NavLink to="/contact">CONTACT</NavLink>
      </li>
      {user && (
        <li className="mr-4">
          <NavLink to="/dashboard">DASHBOARD</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex"
          >
            {links}
          </ul>
        </div>
        <Link to="/">
          <a className="btn btn-ghost text-xl">TV-BAZAR</a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  px-1 flex ">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex font-bold">
            <h1 className="mr-2  text-red-700	">{user.displayName}</h1>
            <Link onClick={logout} to={"/login"}>
              logOut
            </Link>
          </div>
        ) : (
          <div>
            <Link to="login">
              <button className="btn btn-outline btn-info">LOGIN</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
