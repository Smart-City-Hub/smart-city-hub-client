import React from "react";
import Navbar from "../scenes/navbar/index";
import NavigationCard from "./NavigationCard";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="flex mt-4 max-w-4xl mx-auto gap-6 ">
        <div className="w-1/4">
          <NavigationCard />
        </div>
        <div className="w-3/4">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
