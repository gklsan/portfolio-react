import React from "react";

const SideBar = () => {
  return(
    <div className="col-md-4 text-center m-auto">
      <div>
        <h1 className="text-capitalize">Gokul P</h1>
        <p>Full stack web application developer</p>
      </div>
      <div style={{display: 'grid'}}>
        <a href='#'> About me </a>
        <a href='#' className="mt-3"> Education </a>
        <a href='#' className="mt-3"> Skills </a>
        <a href='#' className="mt-3"> Experience </a>
      </div>
    </div>
  )
};

export default SideBar;
