import React from "react";
import SideBar from "./SideBar";

const PageLayout = (props) => {
  return (
    <div>
      <SideBar />
      {props.children}
    </div>
  );
};

export default PageLayout;
