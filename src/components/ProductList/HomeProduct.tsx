/* eslint-disable @next/next/no-img-element */
import React from 'react'

const HomeProduct = () => {
  return (
     <div className="grid grid-cols-3 gap-6">
            {/* Item 1 - Hot */}
            <div className="flex flex-col">
              <div className="relative bg-[#FDFBF7] rounded-2xl p-4 flex flex-col items-center">
                {/* Badge */}
                <div className="absolute top-3 -left-2">
                  <div className="relative bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-tr-md rounded-br-md rounded-tl-md">
                    🔥 Hot
                    <div className="absolute -bottom-2 left-0 w-0 h-0 border-l-[10px] border-r-[0px] border-t-[10px] border-l-transparent border-r-transparent border-t-red-700"></div>
                  </div>
                </div>
                <img
                  src="/burger4.png"
                  alt="Chicken Sandwich"
                  className="w-40 h-40 object-contain"
                />
              </div>
              <p className="text-orange-600 font-semibold text-lg mt-3">
                39.000 IDR
              </p>
              <p className="text-base font-medium text-gray-900">
                Chicken Sandwich
              </p>
              <p className="text-sm text-gray-500">370 Cal</p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col ">
              <div className="relative bg-[#FDFBF7] rounded-2xl p-4 flex flex-col items-center">
                <div className="absolute top-3 -left-2">
                  <div className="relative  bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-tr-md rounded-br-md rounded-tl-md">
                    Best Seller
                    <div className="absolute -bottom-2 left-0 w-0 h-0 border-l-[10px] border-r-[0px] border-t-[10px] border-l-transparent border-r-transparent border-t-orange-700"></div>
                  </div>
                </div>
                <img
                  src="/burger5.png"
                  alt="Chicken Sandwich"
                  className="w-40 h-40 object-contain"
                />
              </div>

              <p className="text-orange-600 font-semibold text-lg mt-3">
                39.000 IDR
              </p>
              <p className="text-base font-medium text-gray-900">
                Chicken Sandwich
              </p>
              <p className="text-sm text-gray-500">370 Cal</p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col ">
              <div className="relative bg-[#FDFBF7] rounded-2xl p-4 flex flex-col items-center">
                <img
                  src="/burger6.png"
                  alt="Chicken Sandwich"
                  className="w-40 h-40 object-contain"
                />
              </div>
              <p className="text-orange-600 font-semibold text-lg mt-3">
                39.000 IDR
              </p>
              <p className="text-base font-medium text-gray-900">
                Chicken Sandwich
              </p>
              <p className="text-sm text-gray-500">370 Cal</p>
            </div>
          </div>
  )
}

export default HomeProduct