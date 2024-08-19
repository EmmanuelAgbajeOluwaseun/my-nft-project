import { nfts } from "@/lib/data";
import Wrapper from "@/components/Wrapper";
import SendTransaction from "@/components/SendTransaction";
import NftImage from "@/components/NftImage";

export async function generateStaticParams() {
  return nfts.map((nft) => ({
    id: nft.id,
  }));
}

export default function NftDetails({ params }) {
  const nft = nfts.find((nft) => nft.id === params.id);

  if (!nft) {
    return <div>Nft not found</div>;
  }

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            {nft?.images && <NftImage images={nft.images} />}
          </div>
          <div className="flex-[1] py-3">
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {nft.name}
            </div>
            <div className="text-lg font-semibold mb-5">{nft.subtitle}</div>

            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">
                {" "}
                {nft.currency} {nft.newPrice}
              </p>
            </div>

            <div className="text-md cursor-pointer underline font-medium text-white/[0.5]">
              Owner: {nft.vendorName}
            </div>

            <div className="mt-5">
              <div className="text-lg font-bold mb-5">About {nft.name}</div>
              <div className="markdown text-md mb-5">
                <div>{nft.description}</div>
              </div>
              <div className="markdown text-md mb-5">
                <div>{nft.description}</div>
              </div>
            </div>

            <SendTransaction key={nft.id} data={nft} />
            <button className="w-full py-4 rounded-lg border border-white text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Make an Offer
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
