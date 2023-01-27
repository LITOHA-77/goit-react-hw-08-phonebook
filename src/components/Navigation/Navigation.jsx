import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      to="/contacts"
      className={(navData) => navData.isActive ? s.activeLink : s.link}
    >
      Phonebook
    </NavLink>

    <NavLink
      to="/login"
      className={(navData) => navData.isActive ? s.activeLink : s.link}
    >
      Log in
    </NavLink>

    <NavLink
      to="/register"
      className={(navData) => navData.isActive ? s.activeLink : s.link}
    >
      Sign up
    </NavLink>
  </nav>
);

export default Navigation;