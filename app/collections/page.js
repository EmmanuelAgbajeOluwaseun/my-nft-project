"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "@/components/Wrapper";
import NftCard from "@/components/NftCard";
import { nfts } from "@/lib/data";

const page = () => {
  return (
    <div className="w-full md:py-20 relative">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-10 font-semibold leading-tight">
            Explore NFT Collections
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-7 px-5 md:px-0">
          {nfts.map((nft) => (
            <NftCard key={nft.id} data={nft} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default page;
