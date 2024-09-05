import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const NavItem = ({label, address}) => {
  return (
    <NavLink
      to={address}
      className={({ isActive }) =>
        `text-black rounded-md hover:border hover:bg-[#F8F8F8]  transition-all duration-300 text-sm 2xl:text-lg transform ${
          isActive ? "bg-[#F8F8F8] font-semibold" : "font-medium"
        } px-5 py-2`
      }
    >
      {label}
    </NavLink>
  );
};

export default NavItem;

NavItem.propTypes = {
    label: PropTypes.string,
    address: PropTypes.string
}
