"use client";
import React from "react";

const NftImage = ({ images }) => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px]  mx-auto sticky top-[50px]">
      <div
        // infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="NftImage"
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Nft image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default NftImage;
