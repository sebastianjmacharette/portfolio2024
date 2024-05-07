import React, { useState } from "react";
import FullStack from '../assets/images/full-stack.webp';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-gray-500 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
          target="_blank"
            href="https://github.com/sebastianjmacharette"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={FullStack}
              className="h-10"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl text-black font-bold whitespace-nowrap dark:text-white">
              Portfolio Digital
            </span>
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg 
            md:hidden hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400
             dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 text-white h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full bg-gray-500 md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg
             bg-gray-500 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0
              md:bg-gray-500  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li
                            className="bg-gray-500"

              >
                <a
                  href="/home"
                  className="block py-2 px-3 font-bold text-black text-xl hover:text-white rounded md:bg-transparent
                   md:p-0 dark:text-white "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li
              className="bg-gray-500"
              >
                <a
                  href="/skills"
                  className="block py-2 px-3 font-bold text-black text-xl hover:text-white rounded md:bg-transparent
                  md:p-0 dark:text-white "

                >
                  Skills
                </a>
              </li>
              <li
                            className="bg-gray-500"

              >
                <a
                  href="/estudios"
                  className="block py-2 px-3 font-bold text-black text-xl hover:text-white rounded md:bg-transparent
                   md:p-0 dark:text-white "

                >
                  Estudios
                </a>
              </li>
              <li
                            className="bg-gray-500"

              >
                <a
                  href="/proyectos"
                  className="block py-2 px-3 font-bold text-black text-xl hover:text-white rounded md:bg-transparent
                  md:p-0 dark:text-white "

                >
                  Proyectos
                </a>
              </li>
              <li
                            className="bg-gray-500"

              >
                <a
                  href="/contacto"
                  className="block py-2 px-3 text-black text-xl hover:text-white rounded md:bg-transparent
                  md:p-0 dark:text-white "

                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
