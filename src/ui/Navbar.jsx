import { NavLink, useLocation } from "react-router-dom";
import BattleSearch from "../features/battles/BattleSearch";
import Logo from "./Logo";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="flex items-center justify-between bg-cerulean">
      <Logo />

      {location.pathname === "/battles" && <BattleSearch />}

      <ul className="flex items-center justify-between space-x-3 mx-2">
        <li>
          <NavLink
            to="/battles"
            className={({ isActive }) =>
              isActive
                ? "text-hunyadiYellow font-semibold text-md transition-all duration-250"
                : "text-cosmicLatte font-semibold text-sm"
            }
          >
            Battles
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "text-hunyadiYellow text-md font-semibold transition-all duration-250"
                : "text-cosmicLatte text-sm font-semibold"
            }
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-[#3C787E] bg-khaki rounded-md px-3 py-1.5 font-semibold text-md transition-all duration-250"
                : "text-cosmicLatte bg-khaki rounded-md font-semibold text-sm px-3 py-1.5 "
            }
            // className="bg-hunyadiYellow text-cosmicLatte rounded-md px-3 py-1.5"
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
