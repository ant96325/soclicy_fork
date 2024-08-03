import Title from "../../components/Title";
import TechStackTechSoft from "../../components/home/TechStackTechSoft"
import BlockchainCard from "../../components/BlockchainCard";
import MainTitleCard from "../../components/MainTitleCard";

const arrTechs = [
  "./img/services/solana.webp*solana logo",
  "./img/services/solidity.webp*solidity logo",
  "./img/services/ethereum.svg*ethereum logo",
  "./img/services/aptos.webp*aptos logo",
  "./img/services/polygon.webp*polygon logo",
  "./img/services/avalanche.webp*avalanche logo",
  "./img/services/cardano.webp*cardano logo",
  "./img/services/binance.webp*binance logo",
  "./img/services/algorand.webp*solana logo",
  "./img/services/palkadot.webp*solidity logo",
  "./img/services/eos.webp*ethereum logo",
  "./img/services/pancakeSwap.webp*aptos logo",
  "./img/services/fantom.webp*polygon logo",
  "./img/services/hyperledger.webp*avalanche logo",
  "./img/services/bitcoin.webp*cardano logo",
  "./img/services/Cosmos.webp*binance logo",
  "./img/services/Cosmos.webp*binance logo",
  "./img/services/makerDao.svg*binance logo",
  "./img/services/openSea.svg*binance logo",
  "./img/services/ipfs.svg*binance logo",
  "./img/services/ipfs.svg*binance logo",
]

const Blockchain = () => {
  return (
    <>
      <MainTitleCard
        title="Blockchain Development"
        desc="Solicy keeps up with the latest developments and offers a wide range of services due to the strong demand for blockchain development services in the industry. Being experts in this area, we provide services ranging from decentralized exchange (DEX) development to NFT marketplace creation. Ethereum, Solana, Cardano, Polkadot, and ATOS are among the top Blockchain platforms that we employ."
        src="./img/services/blockchain-intro.svg"
        hasButton={false} />

      <div className="techStack_container dark:bg-[#041D4C]">
        <div>
          <div className="title_titleContainer false">
            <Title title="Tech Stack" />
          </div>
          <TechStackTechSoft data={arrTechs} />
        </div>
      </div>


      <div className="ourValues_ourValuesContainer flex flex-col items-center pt-[60px] py-[20px] pb-[80px] bg-white-100 dark:bg-[#041D4C]">
        <div>
          <Title title="Our Services" />
        </div>
      </div>

      <div className="intro_homeContainer bg-[#f1f7ff]">
        <BlockchainCard
          title="Cryptocurrency Exchange Development"
          desc="To facilitate quick and secure transactions on leading blockchains, Solicy will provide sustainable cryptocurrency exchange platforms."
          src="./img/services/cryptocurrency.webp"
          maxWidth="max-w-[839px]"
          bgColor="bg-[#132D5F]"
        />
      </div>
      <div className="intro_homeContainer ">
        <BlockchainCard
          title="Cryptocurrency Wallet Development"
          desc="For any platform and currency, Solicy is skilled in developing secure cryptocurrency wallets. Using the best that technologies can offer, we create and include your cryptocurrency wallet on various trading or investment sites."
          src="./img/services/wallet-block-light.svg"
          maxWidth="max-w-[839px] "
          reverse="flex-row-reverse"
          bgColor="bg-[#041D4C]"
        />
      </div>

      <div className="intro_homeContainer bg-[#f1f7ff]">
        <BlockchainCard
          title="Smart Contract Development"
          desc="Your business logic can be incorporated inside the Smart Contract by our developers.We can create highly customizable digital contracts that are adjusted to your company's needs due to our extensive experience with Solidity and other blockchain-compatible programming languages."
          src="./img/services/smart.svg"
          maxWidth="max-w-[839px]"
          bgColor="bg-[#132D5F]"
        />
      </div>

      <div className="intro_homeContainer ">
        <BlockchainCard
          title="NFT Development"
          desc="Solicy builds the best NFT Marketplace development strategies for your company.
We assist companies in developing NFT Marketplaces where users may bid, sell, and trade NFTs. Thanks to our solid foundation in Decentralized Apps and the most recent blockchain technologies, we do that with high quality. The marketplace 's integrated smart contract also makes it possible to execute all conditions."
          src="./img/services/nft.svg"
          maxWidth="max-w-[839px]"
          reverse="flex-row-reverse"
          bgColor="bg-[#041D4C]"
        />
      </div>

    </>
  );
}

export default Blockchain;