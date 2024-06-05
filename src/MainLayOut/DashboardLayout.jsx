import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-6 w-80 min-h-full bg-base-200 text-base-content gap-3">
          <li>
            <NavLink to="home">PROFILE</NavLink>
          </li>
          <li>
            <NavLink to="addProduct">ADD-PRODUCT</NavLink>
          </li>

          <li>
            <NavLink to="allProducts">ALL-PRODUCTS</NavLink>
          </li>
          <li>
            <NavLink className="text-red-950 font-bold" to="/">
              HOME
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
