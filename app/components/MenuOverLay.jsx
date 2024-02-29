import React from "react";
import NavLink from "./NavLink";

const MenuOverLay = ({ navLinks }) => {
  return (
    <ul className="flex flex-col py-2 items-center">
      {navLinks.map((item, index) => (
        <li key={index}>
          <NavLink href={item.path} title={item.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverLay;
