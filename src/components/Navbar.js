import React from "react";
import { Link } from "gatsby";
import SvgLogo from "./SvgLogo";

export function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16">
          <div className="flex min-h-full">
            <div className="flex items-center flex-wrap mr-6">
              <Link to="/" className="flex hover:z-50 focus:z-50">
                <div className="flex items-center">
                  <SvgLogo className="h-12" />
                </div>
              </Link>
            </div>
            <PartialNavLink to={"/archive"}>Archive</PartialNavLink>
            <PartialNavLink to={"/donate"}>Donate</PartialNavLink>
            <PartialNavLink to={"/about"}>About</PartialNavLink>
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
    ? {
        className: `ml-2 md:ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out"`,
      }
    : {
        className: `ml-2 md:ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out`,
      };
}

function PartialNavLink(props) {
  return <Link getProps={isPartiallyActive} {...props} />;
}
