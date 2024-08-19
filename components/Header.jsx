"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/next.svg";

function Header() {
  return (
    <div className="bg-[#04111d] justify-between  w-screen px-[1.2rem] py-[1.8rem] flex ">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <Image src={Logo} height={40} width={40} />
          <div className="ml-[0.8rem] text-white font-semibold text-2xl">
            NFTPlace
          </div>
        </div>
      </Link>
      <div className="hidden sm:flex flex-1  mx-[9.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]">
        <div className="text-[#8a939b] mx-3 font-bold text-lg"></div>
        <input
          className="h-[2.6rem] border-0 bg-transparent outline-0 ring-0 px-4 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]"
          placeholder="Search"
        />
      </div>
      <div className="hidden sm:flex items-center justify-end">
        <Link href="/collections">
          <div className=" px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer">
            {" "}
            Collections{" "}
          </div>
        </Link>
        <div className=" px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer">
          {" "}
          Trending{" "}
        </div>
        <div className=" px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer">
          {" "}
          Mint{" "}
        </div>
        <div className=" px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer">
          {" "}
          About{" "}
        </div>
      </div>
      <div className="text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer">
        <w3m-button />
      </div>
    </div>
  );
}

export default Header;
