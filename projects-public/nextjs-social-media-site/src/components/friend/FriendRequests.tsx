import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { FaCheck } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";

const FriendRequests = () => {
  return (
    <div className="bg-white shadow rounded py-4">
      <div className="font-semibold text-gray-500 px-4">Friend Requests</div>
      <div className="mt-4">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="py-2 px-4 hover:bg-gray-50 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div className="relative h-8 w-8 overflow-hidden rounded-full">
                  <Image
                    loading="lazy"
                    alt=""
                    fill
                    src={`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1c11a64e-b138-445b-b89f-b69755e09685/dg5hwoc-cbd45ce4-ac59-4f5d-ae37-33b447eac0cf.png/v1/fit/w_828,h_474,q_70,strp/samurai_wallpaper_by_definesleep_dg5hwoc-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzMyIiwicGF0aCI6IlwvZlwvMWMxMWE2NGUtYjEzOC00NDViLWI4OWYtYjY5NzU1ZTA5Njg1XC9kZzVod29jLWNiZDQ1Y2U0LWFjNTktNGY1ZC1hZTM3LTMzYjQ0N2VhYzBjZi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.QYxwo5p9cersF8X86RAp7Y3tO2j11Y9PmkuN180eDQk`}
                  />
                </div>
                <div className="font-semibold">Jack</div>
              </div>
              <div className="flex items-center gap-2">
                <button className="w-5 h-5 overflow-hidden rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center">
                  <IoCheckmark />
                </button>
                <button className="w-5 h-5 overflow-hidden rounded-full bg-gray-600 hover:bg-gray-500 text-white flex items-center justify-center">
                  <IoIosClose />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FriendRequests;
