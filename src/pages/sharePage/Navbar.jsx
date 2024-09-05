import { Link } from "react-router-dom";
import NavItem from "../../components/NavItem";
import shop from "../../assets/shop.png"

const Navbar = () => {
const user = null;

  const navLink = (
    <ul className="flex flex-col lg:flex-row items-center text-sm lg:gap-4 *:cursor-pointer font-semibold">
      <NavItem address="/" label="Home"></NavItem>
      <NavItem address="/products" label="Products"></NavItem>
      <NavItem address="/categories" label="Categories"></NavItem>
      <NavItem address="/custom" label="Custom"></NavItem>
      <NavItem address="/blog" label="Blog"></NavItem>
    </ul>
  );

  return (
    <div className="max-w-[1440px] mx-auto lg:w-[85%]">
      <div className="navbar mt-4">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
          <img className="lg:w-fit w-24" src="/Logo.png" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">{navLink}</div>
        <div className="navbar-end">
          <img className="w-6 md:w-fit" src={shop} alt="" />
          {user ? (
            <>
              <div
                className="avatar cursor-pointer"
              >
                <div className="w-9  rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </>
          ) : (
            <>
              <Link to="/singIn">
                <button className="font-bold text-xs ml-3 lg:ml-6 mr-2 py-1 md:py-2 rounded-full px-3 md:px-6 bg-[#1E99F5] transition-all shadow-md duration-300 border-y hover:bg-black text-white">
                  Sing In
                </button>
              </Link>
              <Link to="/singUp">
                <button className="font-bold text-xs py-1 md:py-2 rounded-full px-3 md:px-6 bg-[#1E99F5] transition-all shadow-md duration-300 border-y hover:bg-black text-white">
                  Sing Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
