import React from "react";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "./SideBar";

const Page = () => (
  <div className="row">
    <SideBar/>
    <h2 className="col-md-7">
      Other text Other text Other text Other text Other text Other text Other text Other
      Other text Other text Other text Other text Other text Other text Other text Other
      Other text Other text Other text Other text Other text Other text Other text Other
      Other text Other text Other text Other text Other text Other text Other text Other
      Other text Other text Other text Other text Other text Other text Other text Other
      Other text Other text Other text Other text Other text Other text Other text Other
      Other text Other text Other text Other text Other text Other text Other text Other
      Other text Other text Other text Other text Other text Other text Other text Other
      Other text Other text Other text Other text Other text Other text Other text Other
      Other text Other text Other text Other text Other text Other text Other text Other
      Other text Other text Other text Other text Other text Other text Other text Other
      text Other text Other text Other text Other text Other text
    </h2>
  </div>
);

render(
  <Page />,
  document.getElementById('root')
);
