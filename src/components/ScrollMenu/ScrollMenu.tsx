/* eslint-disable @next/next/no-img-element */
import React from "react";

const ScrollMenu = () => {
  return (
    <div className="flex space-x-3 overflow-x-auto no-scrollbar mt-4">
      {/* Card 1 */}
      <div className="flex-shrink-0 min-w-[160px] sm:w-1/3 bg-green-100 text-green-700 px-3 py-2 rounded-lg text-xs font-medium flex items-center sm:flex-row flex-col">
        <div className="flex items-center justify-center">
          <img src="/salads.png" alt="" className="h-14" />
        </div>
        <p className="text-sm sm:ml-2 mt-2 sm:mt-0 text-center sm:text-left">
          Berry, Salad, Potato
        </p>
      </div>

      {/* Card 2 */}
      <div className="flex-shrink-0 min-w-[160px] sm:w-1/3 bg-yellow-100 text-yellow-700 px-3 py-2 rounded-lg text-xs font-medium flex items-center sm:flex-row flex-col">
        <div className="flex items-center justify-center">
          <img src="/treats.png" alt="" className="h-14" />
        </div>
        <p className="text-sm sm:ml-2 mt-2 sm:mt-0 text-center sm:text-left">
          Lemonade, Ice Dream, ...
        </p>
      </div>

      {/* Card 3 */}
      <div className="flex-shrink-0 min-w-[160px] sm:w-1/3 bg-red-100 text-red-700 px-3 py-2 rounded-lg text-xs font-medium flex items-center sm:flex-row flex-col">
        <div className="flex items-center justify-center">
          <img src="/beverages.png" alt="" className="h-14" />
        </div>
        <p className="text-sm sm:ml-2 mt-2 sm:mt-0 text-center sm:text-left">
          Dr Paper, Iced Tea
        </p>
      </div>
    </div>
  );
};

export default ScrollMenu;
