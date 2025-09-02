/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ModalCheckout = () => {
    const router = useRouter();
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white  w-2/3 mx-auto border z-50">
        {/* Buttons */}
        <div className="flex gap-2 items-center justify-between p-6">
          <div className="flex gap-2">
            <button className=" bg-gray-100 text-gray-700 py-2 px-4 rounded-md h-12">
              Start over
            </button>
            <button className=" bg-gray-100 text-gray-700 py-2 px-4 rounded-md h-12">
              Back
            </button>
          </div>

          <div className="flex gap-4">
            <div className="flex gap-2">
              <div className=" flex flex-col items-center">
                <span className="text-sm text-gray-500">Subtotal</span>
                <p className="text-primary font-semibold">0 IDR</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="/cupbox.png" alt="subtotal" className="h-10" />
              </div>
            </div>
            <button className="bg-orange-600 text-white py-2 px-6 rounded-md h-12 cursor-pointer  hover:bg-orange-600/90 transition" onClick={()=> {router.push('/review')}}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCheckout;
