import React from "react";
import { SideBar } from "../components";
import { MdEdit } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiAddLine } from "react-icons/ri";

const ProfilePage = () => {
  return (
    <section className="px-[135px] flex pt-20 w-full h-full">
      <SideBar />
      <div className="w-full h-full py-12 flex flex-col justify-between">
        <div className=" h-[35%] bg-[#EDEDED] rounded-2xl relative">
          <div className="h-[60%] bg-transparent"></div>
          <div className="h-[40%] bg-white rounded-b-2xl px-6 flex items-center justify-between ">
            <div>
              <h5 className="text-2xl font-medium">Your Name</h5>
              <p className="text-md">Position</p>
            </div>
            <MdEdit fontSize={25} cursor={"pointer"} />
          </div>
          <div className=" cursor-pointer absolute top-[40%] w-20 h-20 mx-6 rounded-full flex justify-center items-center bg-[#D6D6D6]">
            <FaUser fontSize={30} />
          </div>
        </div>
        <div className=" min-h-[60%] bg-white rounded-2xl px-6 overflow-auto">
          <div className=" h-[14.7%] my-2 border-b-2 flex items-center justify-between">
            <p className=" text-xl font-medium text-gray-600">Profile</p>
            <MdEdit fontSize={20} cursor={"pointer"} />
          </div>
          <div className=" h-[14.7%] my-2 border-b-2 flex items-center justify-between">
            <p className=" text-xl font-medium text-gray-600">Address</p>
            <MdEdit fontSize={20} cursor={"pointer"} />
          </div>
          <div className=" h-[14.7%] my-2 border-b-2 flex items-center justify-between">
            <p className=" text-xl font-medium text-gray-600">
              Educational Details
            </p>
            <div className="flex items-center gap-7">
              <RiAddLine fontSize={30} cursor={"pointer"} />
              <MdEdit fontSize={20} cursor={"pointer"} />
            </div>
          </div>
          <div className=" h-[14.7%] my-2 border-b-2 flex items-center justify-between">
            <p className=" text-xl font-medium text-gray-600">Projects</p>
            <MdEdit fontSize={20} cursor={"pointer"} />
          </div>
          <div className=" h-[14.7%] my-2 border-b-2 flex items-center justify-between">
            <p className=" text-xl font-medium text-gray-600">Resume</p>
            <MdEdit fontSize={20} cursor={"pointer"} />
          </div>
          <div className=" h-[14.7%] my-2 flex items-center justify-between">
            <p className=" text-xl font-medium text-gray-600">Certificate</p>
            <MdEdit fontSize={20} cursor={"pointer"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
