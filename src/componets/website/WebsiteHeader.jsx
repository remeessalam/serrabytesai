import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";
import React, { useState } from "react";
import { companyDetails, logoImg, routes } from "../../constant";
import { Link, useLocation } from "react-router-dom";

const WebsiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-4 fixed top-0 w-full bg-black/60 backdrop-blur-md z-50 text-white">
      <div className="wrapper flex justify-between items-center gap-10">
        <div className="flex justify-between items-center gap-20 w-full pl-[1rem] lg:pl-0">
          <Link to="/" className="relative">
            <img src={logoImg} className="w-[10rem]" alt="logo" />
          </Link>

          <div className="lg:flex items-center gap-10 hidden">
            {routes.map(({ name, link, children }) =>
              name === "Services" ? (
                <div
                  key={link}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link
                    to={link}
                    className={`text-white hover:text-blue-300 dark:hover:text-primary ${
                      pathname === link ? "text-blue-300 dark:text-primary" : ""
                    }`}
                  >
                    {name}
                  </Link>

                  {children && (
                    <div
                      className={`absolute top-full left-0 mt-8 bg-white text-black shadow-md rounded-md py-2 min-w-48 z-10 overflow-hidden transition-all duration-300 ease-in-out ${
                        isServicesOpen
                          ? "max-h-56 opacity-100"
                          : "max-h-0 opacity-0 py-0"
                      }`}
                    >
                      {children.map((child) => (
                        <Link
                          key={child.link}
                          to={child.link}
                          className="block px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link}
                  to={link}
                  className={`link text-sm ${
                    pathname === link ? "active-link" : ""
                  }`}
                >
                  {name}
                </Link>
              )
            )}
            <Link
              // to={`tel:${companyDetails.phone}`}
              to={"/contact-us"}
              className="text-black font-medium cursor-pointer tracking-wide bg-tertiary hover:bg-tertiary/80 text-sm hover:shadow-secondary hover:-translate-y-1 shadow-2xl shadow-transparent rounded-full px-6 py-3 min-w-[7rem] flex justify-center text-center transition-all duration-300"
            >
              Let’s Talk
            </Link>
          </div>
        </div>

        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="py-4 px-10 z-10"
        >
          <div className="mb-6 flex items-center justify-end pr-[.7rem] py-[.4rem]">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-[2.2rem]"
            >
              <IoMdClose />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {routes.map(({ name, link, children }) =>
              name === "Services" ? (
                <Link
                  onClick={() => setIsOpen(false)}
                  key={link}
                  to={link}
                  className="text-3xl text-white font-medium transition-colors duration-300 link"
                >
                  {name}
                  <div className="flex flex-col mt-3 gap-3">
                    {children.map((child) => (
                      <Link to={child.link} className="text-base ml-4">
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </Link>
              ) : (
                <Link
                  onClick={() => setIsOpen(false)}
                  key={link}
                  to={link}
                  className="text-3xl text-white font-medium transition-colors duration-300 link"
                >
                  {name}
                </Link>
              )
            )}
          </div>
        </Drawer>

        <div
          className="block lg:hidden justify-self-end"
          onClick={toggleDrawer}
        >
          <Hamburger
            color="white"
            size="23"
            toggled={isOpen}
            rounded
            toggle={setIsOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default WebsiteHeader;
