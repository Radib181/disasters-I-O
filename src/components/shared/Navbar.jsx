import { Link, NavLink } from "react-router-dom";
import { navbarList } from "../lib/db";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const bodyClass = document.body.classList;
    toggle ? bodyClass.add("no-scroll") : bodyClass.remove("no-scroll");
  }, [toggle]);

  return (
    <>
      <nav className="flex justify-around items-center bg-whiteLight py-2 border border-b-black">
        <div>
          <Link to="/">
            <img src="Img/logo.png" alt="logo" />
          </Link>
        </div>
        <div>
          <ul className="md:flex hidden justify-center items-center gap-3">
            {navbarList.map(({ label, to }, i) => (
              <li key={i}>
                <NavLink
                  to={to}
                  onClick={handle}
                  className="font-onest text-[14px] text-grayBold"
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center items-center gap-3">
          <button className="md:hidden inline-block" onClick={handle}>
            {toggle ? <IoMdClose /> : <FaBars />}
          </button>

          <img
            src="Img/notification.png"
            alt="notification"
            className="bg-white rounded-full p-1"
          />
          <img src="Img/login-logo.png" alt="login-logo" />
          <div className="md:flex flex-col hidden">
            <p className="text-grayBold text-[14px] ">Usman Zafar</p>
            <p className="text-grayBold text-[14px] ">usmanzafar@gmail.com</p>
          </div>
        </div>
      </nav>
      <MobileMenu toggle={toggle} handle={handle} />
    </>
  );
};

export default Navbar;
