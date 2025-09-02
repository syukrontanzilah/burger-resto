import SidebarMenu from "@/components/SidebarMenu/SidebarMenu";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex">
      {/* Left Menu */}
      <div className="sidebar w-[30%]  md:w-[8%] lg:w-[16%] xl:w-[30%] top-0 sticky overflow-y-auto h-screen bg-white z-20">
        <Link href={"/"} className="flex p-4 items-center justify-center">
          <Image src={"/logo1.png"} alt="logo" width={130} height={30} className="transform rotate-0"/>
        </Link>
        <SidebarMenu/>
      </div>

      {/* Right content */}
      <div className=" bg-white w-[70%] md:w-[92%] lg:w-[70%] overflow-scroll">
        <div className="mt-[50px] px-6 mb-10">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
