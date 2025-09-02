/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { MenuResto } from "./MenuResto";
import Link from "next/link";

export const role = "admin";

const SidebarMenu = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const handleDropdownToggle = (label: string) => {
    setDropdownOpen((prev) => (prev === label ? null : label));
  };

  return (
    <div className="mb-28">
      {MenuResto.map((item, index) => (
        <div key={index} className="flex flex-col gap-1 md:p-4">
          {item.items.map((menu, i) => {
            if (menu.visible.includes(role)) {
              const isActive = pathname.startsWith(menu.href);
              return (
                <div key={i}>
                  {/* menu utama */}
                  <Link href={menu.href} passHref>
                    <div
                      onClick={() => handleDropdownToggle(menu.label)}
                      className={`flex items-center justify-center lg:justify-start gap-2 py-0  rounded-md transition-all durat300 cursor-pointer 
                        border-1
                        border-gray-100
                        mb-2 h-[100px]
                ${
                  isActive
                    ? "bg-secondary text-primary border-secondary"
                    : "text-gray-500 hover:bg-secondary hover:text-gray-500"
                }`}
                      style={{ transition: "all 0.3s ease-in-out" }}
                    >
                      <div className={`hidden md:block w-1 h-1/3 rounded-full transition ${isActive ? "bg-primary" : "bg-transparent"}`}></div>
                      <img src={menu.icon} alt="burger" className="md:w-[60px] w-[55px]" />
                      <span className="text-[20px] hidden md:block">{menu.label}</span>
                    </div>
                  </Link>
                </div>
              );
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
};

export default SidebarMenu;
