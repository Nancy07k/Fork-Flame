import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav>
      {/* Logo */}
      <div className="logo">
        <img src="/logo.png" alt="Fork & Flame" />
      </div>

      {/* Navigation Links */}
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {data[0].navbarLinks.map((element) => (
            <Link
              to={element.link}
              spy={true}
              smooth={true}
              duration={500}
              key={element.id}
            >
              {element.title}
            </Link>
          ))}
        </div>

        <button className="menuBtn">OUR MENU</button>
      </div>

      {/* Mobile Menu */}
      <div
        className="hamburger"
        onClick={() => setShow(!show)}
      >
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;