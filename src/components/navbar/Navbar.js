import React, { useState } from "react";
import "./NavbarStyles.css";
import { GiCheckeredFlag } from "react-icons/gi";

const Navbar = () => {
  // handling side menu toogle icon interaction

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="container">

     
      <div className="logo">
        <h3>
          Horse Power
          <span>
            <GiCheckeredFlag size={30} />
          </span>
        </h3>
      </div>
      {/* nav menu */}
      <div></div>]
      </div>
    </div>
    
  );
};

export default Navbar;
