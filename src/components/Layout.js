import React from "react";
import SEO from "./SEO";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

import "../../tailwind.css";

export function Layout({ children }) {
  return (
    <React.Fragment>
      <div className="flex flex-col max-w-full min-h-screen bg-gray-100">
        <Navbar />
        <div className="flex-grow py-10">{children}</div>
        <Footer />
      </div>
    </React.Fragment>
  );
}
