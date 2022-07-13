import React from "react";
import { useSelector } from "react-redux";

function Nav() {
  const user = useSelector((state) => state.user.name);
  return <div>MY PRACTICE GROUND {user}</div>;
}

export default Nav;
