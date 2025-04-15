import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <>
      <div>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Home
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
          About
        </NavLink>

        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Dashboard
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
