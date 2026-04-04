import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-semibold" : "text-gray-600"
        }
      >
        Dashboard
      </NavLink>
    </nav>
  );
}