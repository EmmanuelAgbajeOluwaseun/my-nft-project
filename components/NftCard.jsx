import Image from "next/image";
import Link from "next/link";
import React from "react";
const NftCard = ({ data }) => {
  return (
    <Link
      href={`/nft/${data?.id}`}
      className="transform  overflow-hidden duration-200 hover:scale-105 cursor-pointer"
    >
      <Image
        className="rounded-lg max-h-[23rem] object-cover "
        width={500}
        height={500}
        src={data?.mainimage}
        alt={data?.name}
      />
      <div className="p-2 rounded-lg  text-white/[0.9]">
        <h2 className="text-lg font-medium">{data?.name}</h2>
        <div className="flex items-center text-white/[0.5]">
          <p className="mr-2 text-lg font-semibold">
            {data?.currency} {data?.newPrice}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NftCard;
