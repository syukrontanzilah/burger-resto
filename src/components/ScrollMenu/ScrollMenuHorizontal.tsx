"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const ScrollMenuHorizontal = () => {
  const menus = [
    {
      img: "/salads.png",
      bg: "bg-green-100",
      text: "text-green-700",
      label: "Berry, Salad, Potato",
    },
    {
      img: "/treats.png",
      bg: "bg-yellow-100",
      text: "text-yellow-700",
      label: "Lemonade, Ice Dream, ...",
    },
    {
      img: "/beverages.png",
      bg: "bg-red-100",
      text: "text-red-700",
      label: "Dr Paper, Iced Tea",
    },
  ];

  return (
    <div className="relative py-6 bg-white">
      <div className="relative flex overflow-hidden">
        {/* blur kiri */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white via-white/80 to-transparent backdrop-blur-sm z-10" />
        {/* blurr kanan */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white via-white/80 to-transparent backdrop-blur-sm z-10" />

        <motion.div
          animate={{ translateX: "-50%" }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="flex gap-6 flex-none"
        >
          {menus.map((menu, idx) => (
            <div
              key={idx}
              className={`flex-shrink-0 min-w-[160px] ${menu.bg} ${menu.text} px-3 py-2 rounded-lg text-xs font-medium flex items-center sm:flex-row flex-col`}
            >
              <div className="flex items-center justify-center">
                <Image src={menu.img} alt={menu.label} width={56} height={56} />
              </div>
              <p className="text-sm sm:ml-2 mt-2 sm:mt-0 text-center sm:text-left">
                {menu.label}
              </p>
            </div>
          ))}

          {menus.map((menu, idx) => (
            <div
              key={`dup-${idx}`}
              className={`flex-shrink-0 min-w-[160px] ${menu.bg} ${menu.text} px-3 py-2 rounded-lg text-xs font-medium flex items-center sm:flex-row flex-col`}
            >
              <div className="flex items-center justify-center">
                <Image src={menu.img} alt={menu.label} width={56} height={56} />
              </div>
              <p className="text-sm sm:ml-2 mt-2 sm:mt-0 text-center sm:text-left">
                {menu.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
