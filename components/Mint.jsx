import React from "react";
import Mintnft from "./Mintnft";

function Mint() {
  return (
    <div>
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="mt-10 w-[30rem] sm:mx-auto sm:max-w-md">
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

                  <Mintnft />
                </div>
              </div>
            </a>
          </div>
        </div>
      </>
    </div>
  );
}

export default Mint;
