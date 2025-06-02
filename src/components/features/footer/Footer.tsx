import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-[560px] bg-[#1E1E1E] flex flex-col justify-between px-[50px] py-[90px] pb-0">
      <div></div>
      <div>
        <Separator orientation="horizontal" />
        <div className="flex h-[125px] items-center">
          <div className="flex justify-between w-full">
            <p className="text-[18px] text-white">
              Copyright © June 2025 Binary Bandits | All Rights Reserved
            </p>
            <div className="flex gap-4">
              <div className="w-[36px] h-[34px] flex items-center justify-center bg-[#333333] rounded-sm cursor-pointer">
                <Facebook
                  color="white"
                  fill="white"
                  strokeWidth={0}
                  size={20}
                />
              </div>
              <div className="w-[36px] h-[34px] flex items-center justify-center bg-[#333333] rounded-sm cursor-pointer">
                <Instagram color="white" size={20} />
              </div>
              <div className="w-[36px] h-[34px] flex items-center justify-center bg-[#333333] rounded-sm cursor-pointer">
                <Linkedin color="white" size={20} />
              </div>
              <div className="w-[36px] h-[34px] flex items-center justify-center bg-[#333333] rounded-sm cursor-pointer">
                <Youtube color="white" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
