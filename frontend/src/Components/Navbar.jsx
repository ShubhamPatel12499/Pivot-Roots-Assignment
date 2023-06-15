import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css"


export const Navbar = () => {
  return (
    <div className='navbar'>
      <Link style={{marginLeft:"30px", color:"white",textDecoration:"none"}} to={"/"} >Home</Link>
      <Link style={{marginLeft:"30px", color:"white",textDecoration:"none"}} to={"/mens"} >Mens</Link>
      <Link style={{marginLeft:"30px", color:"white",textDecoration:"none"}} to={"/womens"} >Womens</Link>
      <Link style={{marginLeft:"30px",color:"white",textDecoration:"none"}} to={"/kids"}>Kids</Link>
    </div>
  );
};