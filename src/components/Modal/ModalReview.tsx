"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ModalReview = () => {
  const router = useRouter();
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white  w-2/3 mx-auto border">
      <div className="bg-gray-100 p-6">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Subtotal</span>
          <span>387.000 IDR</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>PB1</span>
          <span>20.000 IDR</span>
        </div>

        <div className="flex justify-between items-center mt-3">
          <span className="font-semibold text-lg">Total payment</span>
          <span className="font-bold text-orange-600 text-2xl">363.000 IDR</span>
        </div>

        </div>

        {/* Buttons */}
        <div className="flex gap-2  items-center justify-between p-6">
          <div className="flex gap-2">
            <button className=" bg-gray-100 text-gray-700 py-2 px-4 rounded-md h-12 cursor-pointer  hover:bg-gray-200 transition" onClick={()=> {router.back()}}>
              Start over
            </button>
            <button className=" bg-gray-100 text-gray-700 py-2 px-4 rounded-md h-12 cursor-pointer  hover:bg-gray-200 transition" onClick={()=> {router.back()}}>
              Back
            </button>
          </div>

          <div className="flex gap-2">
            <button className=" bg-secondary text-primary py-2 px-4 rounded-md h-12">
              Promo code
            </button>
            <button className="bg-orange-600 text-white py-2 px-4 rounded-md h-12">
              Proceed to payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalReview;
