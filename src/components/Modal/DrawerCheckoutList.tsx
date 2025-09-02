/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Drawer,
  DrawerContent,
} from "@/components/ui/drawer";
import { useRouter } from "next/navigation";

interface ModalCheckoutListProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DrawerCheckoutList: React.FC<ModalCheckoutListProps> = ({
  open,
  onOpenChange,
}) => {
  const router = useRouter();

  if (!open) return null;
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="p-0 border-none shadow-none bg-transparent">
        <div className="fixed bottom-0 left-0 right-0 bg-white md:w-2/3 mx-auto border-t shadow-lg z-50">
          <div className="flex gap-2 items-center justify-between p-6">
            {/* Kiri */}
            <div className="flex gap-2">
              <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-md h-12 hidden md:block cursor-pointer  hover:bg-gray-200 transition" onClick={() => onOpenChange(false)}>
                Start over
              </button>
              <button
                className="bg-gray-100 text-gray-700 py-2 px-4 rounded-md h-12 cursor-pointer  hover:bg-gray-200 transition"
                onClick={() => onOpenChange(false)}
              >
                Back
              </button>
            </div>

            {/* Kanan */}
            <div className="flex gap-4 items-center">
              <div className="flex gap-2 items-center">
                <div className="flex flex-col items-end">
                  <span className="text-sm text-gray-500">Subtotal</span>
                  <p className="text-orange-600 font-semibold">387.000 IDR</p>
                </div>
                <div className="flex justify-center items-center">
                  <img src="/cupbox.png" alt="subtotal" className="h-10" />
                </div>
              </div>
              <button
                className="bg-orange-600 text-white py-2 px-6 rounded-md h-12 cursor-pointer hover:bg-orange-600/90 transition"
                onClick={() => router.push("/review")}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerCheckoutList;
