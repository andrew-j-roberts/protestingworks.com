import React from "react";
import { Link } from "gatsby";
import SvgLogo from "./SvgLogo";

export function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16">
          <div className="flex">
            <div className="flex items-center mr-6">
              <SvgLogo className="h-12" />
            </div>
            <a
              href="#"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out"
            >
              Archive
            </a>
            <a
              href="#"
              className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
            >
              Donate
            </a>
            <a
              href="#"
              className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

// this link will be active when itself or deeper routes
// are current
function isPartiallyActive({ isPartiallyCurrent }) {
  return isPartiallyCurrent
    ? { classNameName: `text-brand-2 px-2 z-1 text-xl md:text-2xl mr-2` }
    : {
        classNameName: `mr-2 text-default-soft px-2 text-default-soft hover:z-50 hover:text-brand-2 focus:z-50 focus:text-brand-2 text-xl md:text-2xl`,
      };
}

function PartialNavLink(props) {
  return <Link getProps={isPartiallyActive} {...props} />;
}
