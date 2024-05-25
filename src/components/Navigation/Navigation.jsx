import { NavLink } from "react-router-dom";
import css from "../Navigation/Navigation.module.css";

export default function Navigation() {
  const linkStyle = ({ isActive }) => {
    return isActive && css.active;
  };

  return (
    <header>
      <nav>
        <ul className={css.cont}>
          <li>
            <NavLink to="/" className={linkStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={linkStyle}>Movies</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
