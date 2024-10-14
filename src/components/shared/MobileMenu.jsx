import { NavLink } from "react-router-dom";
import { navbarList } from "../lib/db";
import { cn } from "../lib/utils/cn";

const MobileMenu = ({toggle, handle}) => {
  return (
    <div>
      {/* mobile menu */}
      <div
        className={cn(
          "absolute md:hidden top-14 left-0 w-full bg-white h-screen flex flex-col items-start gap-4 font-semibold text-2xl",
          toggle ? "opacity-100" : "opacity-0"
        )}
      >
        <ul className="ms-5">
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
      {/* mobile menu end */}
    </div>
  );
}

export default MobileMenu
