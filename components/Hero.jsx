import React from "react";

function Hero() {
  return (
    <div className="relative">
      <div className="before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://plus.unsplash.com/premium_photo-1669876271015-55e215f60bc4?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] before:bg-cover before:bg-center before:opacity-30 before:blur">
        <div className="flex h-screen relative justify-center flex-wrap items-center">
          <div className="w-[80%] sm:w-1/2">
            <div className=" max-w-[35rem]">
              <h1 className="text-4xl md:text-6xl lg:textxl md:!leading-snug font-semibold text-left bg-clip-text  from-gray-50 to-gray-50 ">
                Explore, Mint, Buy and sell rare NFTs
              </h1>
              <p className="text-base text-[#8a939b] mb-5 md:text-lg text-foreground/80 mt-6 text-left">
                Invest in digital art, rare collectibles, and unique assets with
                just a few clicks. NFT Place makes it easy to buy NFTs directly
                from creators and other collectors.
              </p>

              <div className="flex">
                <a href="/collections">
                  <button className="relative w-[200px] text-md font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer">
                    Discover
                  </button>
                </a>
                <a href="/mint">
                  <button className="relative w-[200px] text-md font-semibold  py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer">
                    Mint NFT
                  </button>
                </a>
              </div>
            </div>
          </div>

          <a href="/collections">
            <div class="aspect-h-1 mx-6 aspect-w-1 overflow-hidden rounded-lg bg-[#313338] hover:opacity-90 hover:scale-105 transition-all ">
              <div>
                <img
                  src="https://plus.unsplash.com/premium_photo-1669876271015-55e215f60bc4?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="NFT"
                  class="object-cover object-center rounded-t-lg max-w-[27rem] sm:max-w-[40rem] max-h-[30rem]"
                />
              </div>

              <div className="flex p-3 justify-between">
                <div className="flex flex-col justify-center ml-4">
                  <h3 className="">John James</h3>
                  <a className="text-[#1868b7]" href="#">
                    Johns Collection
                  </a>
                </div>
                <button className="relative px-2 w-[200px] text-md font-semibold  py-4 bg-[#2181e2]  rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer">
                  Buy Now 0.004 ETH
                </button>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
