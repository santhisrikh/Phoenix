import React from "react";
import {  NavLink } from "react-router-dom";

const Links = [
  {
    title: "Dashboard",
    to: "/"
  },
  {
    title: "CreateTask",
    to: "/create-task"
  },
  {
    title: "Summary",
    to: "/summary"
  }
];
const Navbar = () => {
  return (
    <div style ={{margin :"auto",display:"flex"}}>
      {Links.map(({ to, title }) => {
        return (
          <NavLink
            activeStyle={{
              fontWeight: "bold",
              color: "red",
              padding: "10px"
            }}
            to={to}
          >
            {title}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navbar;
