import React from "react";
import logo from "../assets/Logo.jpeg";
import { FaUser } from "react-icons/fa";

const NavBar = () => {
  return (
    <header className=" fixed w-full h-20 px-[135px] bg-white">
      <nav className="flex items-center justify-between h-full w-full">
        <a href="/">
          <img src={logo} width={200} alt="logo" />
        </a>
        <div className="flex gap-10">
          <ul className="flex items-center gap-10">
            <li>
              <a className=" text-gray-600 active:text-gray-950" href="/">
                Home
              </a>
            </li>
            <li>
              <a className=" text-gray-600 active:text-gray-950" href="/">
                Courses
              </a>
            </li>
            <li>
              <a className=" text-gray-600 active:text-gray-950" href="/">
                Assessments
              </a>
            </li>
            <li>
              <a className=" text-gray-600 active:text-gray-950" href="/">
                Jobs
              </a>
            </li>
          </ul>
          <div className="flex shadow-md cursor-pointer items-center justify-center h-10 w-10 rounded-full object-cover">
            <FaUser color="gray" height={100} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
