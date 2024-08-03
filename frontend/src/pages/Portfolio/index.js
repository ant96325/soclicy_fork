import PortfolioCard from "../../components/portfolio/PortfolioCard";
import Title from "../../components/Title";
import Button from "../../components/portfolio/Button";
import MainTitleCard from "../../components/MainTitleCard";
import { useState } from "react";



const Portfolio = () => {
  const [currentCards, setCurrentCards] = useState(arrCards)

  const handleClick = (key) => {
    if (key === 0) {
      setCurrentCards(arrCards);
      return;
    }

    let newArr = []
    arrCards.forEach((one) => {
      if (one.key === key) {
        newArr.push(one)
      }
    })
    setCurrentCards(newArr);
  }

  return (
    <>
      <MainTitleCard title="Portfolio"
        desc="We prioritize the needs of our clients and offer sustainable, transparent, and highly effective collaboration prospects. Let’s explore our portfolio for a closer look."
        src="./img/portfolio/portfolio.svg"
        hasButton={false} />

      <section className="max-w-[1900px] my-0 mx-auto py-0 px-[20px] bg-white-100 dark:bg-[#041D4C]">
        <div className="flex flex-col items-center pt-[50px] py-0 pb-[20px] bg-white-100">
          <div>
            <Title title="Our Works" />
          </div>
          <div className="flex flex-wrap justify-center items-center max-w-[1440px] gap-[25px] gap-y-[30px] ml-[40px] mb-[30px]">
            {arrButtons.map((one) => (<Button text={one.name} handleClick={() => handleClick(one.key)} />))}
          </div>
          <div>
            <div className="joinOurTeam_carousel !flex flex-wrap justify-center mb-[60px] min-w-[1300px]">
              {currentCards.map((one, index) => (
                <PortfolioCard
                  srcMain={one.srcMain}
                  srcSubMain={one.srcSubMain}
                  srcContent1={one.srcContent1}
                  srcContent2={one.srcContent2}

                  alt={one.alt}
                  title={one.title}
                  desc={one.desc}
                  subject1={one.subject1}
                  subject2={one.subject2}

                  reverse={index % 2 === 0 ? false : true}
                />))}

            </div>
          </div>

        </div>
      </section>


    </>
  );
}
const arrButtons = [
  { "name": "All", "key": 0 },
  { "name": "BlockChain", "key": 1 },
  { "name": "Business Automation", "key": 2 },
  { "name": "Community Management", "key": 3 },
  { "name": "Electronics", "key": 4 },
  { "name": "Environmental Services", "key": 5 },
  { "name": "Finance", "key": 6 },
  { "name": "HR", "key": 7 },
  { "name": "KYC", "key": 8 },
  { "name": "Saas", "key": 9 },
  { "name": "Smart Parking", "key": 10 },
  { "name": "Social Media", "key": 11 },
];

const arrCards = [
  {
    "key": 1,
    "srcMain": "./img/portfolio/dao.webp",
    "srcSubMain": "./img/portfolio/dao-logo.svg",
    "srcContent1": ["./img/portfolio/nodejs-logo-new.svg", "./img/portfolio/angular-logo-new.svg"],
    "srcContent2": ["./img/portfolio/ethereum-logo-new.svg", "./img/portfolio/binance-logo-new.svg"],
    "alt": "Dao Maker",
    "title": "Dao Maker",
    "desc": " is a growth technologies provider that creates SaaS solutions for nascent and growing crypto startups. Its flagship product is the DAO Pad, a multi-investment platform that allows DAO token holders to participate in early-stage token sales for stringently vetted upcoming projects. It stands behind this year’s most successful projects — including Orion Protocol, My Neighbor Alice, LaunchX and DAFI Protocol.",
    "subject1": "Tech Stack: ",
    "subject2": "Blockchain: ",
  },
  {
    "key": 1,
    "srcMain": "./img/portfolio/coolcats.webp",
    "srcSubMain": "./img/portfolio/cool-cats-logo-new.svg",
    "srcContent1": ["./img/portfolio/nodejs-logo-new.svg", "./img/portfolio/react-logo-new.svg"],
    "srcContent2": ["./img/portfolio/ethereum-logo-new.svg"],
    "alt": "Cool Cats",
    "title": "Cool Cats",
    "desc": "  are a collection of random-generated NFTs on the ETH blockchain.The idea in turning these Cool Cats into NFTs is to create an opportunity for the masses to become part of the Cool Cat community and help in deciding the development, growth and direction of the Cool Cat story and ecosystem.",
    "subject1": "Tech Stack: ",
    "subject2": "Blockchain: ",
  },
  {
    "key": 1,
    "srcMain": "./img/portfolio/pass.webp",
    "srcSubMain": "./img/portfolio/pass-logo.svg",
    "srcContent1": ["./img/portfolio/nodejs-logo-new.svg", "./img/portfolio/angular-logo-new.svg"],
    "srcContent2": ["./img/portfolio/ethereum-logo-new.svg", "./img/portfolio/binance-logo-new.svg"],
    "alt": "PassXYZ",
    "title": "PassXYZ",
    "desc": " NFT is an innovative platform that combines the security of passXYZ-based encryption with the uniqueness and tradability of Non-Fungible Tokens (NFTs). It provides a secure and decentralized solution for storing and trading NFTs, ensuring the privacy and ownership of digital assets through the use of passphrase encryption.",
    "subject1": "Tech Stack: ",
    "subject2": "Blockchain: ",
  },
  {
    "key": 1,
    "srcMain": "./img/portfolio/lif3.webp",
    "srcSubMain": "./img/portfolio/lif3-logo.svg",
    "srcContent1": ["./img/portfolio/swift-logo-new.svg", "./img/portfolio/kotlin-logo-new.svg", "./img/portfolio/java-logo-new.svg", "./img/portfolio/nodejs-logo-new.svg", "./img/portfolio/react-logo-new.svg", "./img/portfolio/typescript-logo.svg", "./img/portfolio/tailwindcss.svg", "./img/portfolio/sass.svg"],
    "srcContent2": ["./img/portfolio/blockchain-solidity.svg", "./img/portfolio/subgraphs.svg"],
    "alt": "Lif3",
    "title": "Lif3",
    "desc": " is a DeFi mobile wallet app that lets users stake their tokens to earn rewards. It's part of a larger ecosystem offering both wallet storage and blockchain solutions, providing a comprehensive tool for managing and growing digital assets efficiently.",
    "subject1": "Tech Stack: ",
    "subject2": "Blockchain: ",
  },
  {
    "key": 8,
    "srcMain": "./img/portfolio/rubilink.webp",
    "srcSubMain": "./img/portfolio/rubilink-logo.svg",
    "srcContent1": ["./img/portfolio/react-logo-new.svg", "./img/portfolio/react-native-logo.svg", "./img/portfolio/python-logo-new.svg", "./img/portfolio/nodejs-logo-new.svg"],
    "srcContent2": ["./img/portfolio/blockchain-solidity.svg", "./img/portfolio/subgraphs.svg"],
    "alt": "Rubi Labs",
    "title": "Rubi Labs",
    "desc": " is a dynamic and innovative company composed of science graduates who are dedicated to research and technological development. With a strong emphasis on scientific knowledge and expertise, Rubi Labs aims to push the boundaries of innovation and make significant contributions to various industries",
    "subject1": "Tech Stack: ",
    "subject2": "Blockchain: ",
  },
  {
    "key": 1,
    "srcMain": "./img/portfolio/pumaPay.webp",
    "srcSubMain": "./img/portfolio/pumapay-logo.svg",
    "srcContent1": ["./img/portfolio/nodejs-logo-new.svg", "./img/portfolio/react-logo-new.svg"],
    "srcContent2": ["./img/portfolio/ethereum-logo-new.svg"],
    "alt": "PumaPay",
    "title": "PumaPay",
    "desc": " is the first blockchain-based payment solution to be embraced by a large number of merchants. PumaPay provides real utility for your cryptocurrency. Use your crypto to pay for real products and services with network of crypto-friendly merchants. Easily manage everything via crypto wallet.",
    "subject1": "Tech Stack: ",
    "subject2": "Blockchain: ",
  },
  {
    "key": 1,
    "srcMain": "./img/portfolio/exgoland.webp",
    "srcSubMain": "./img/portfolio/exgoland-logo.svg",
    "srcContent1": ["./img/portfolio/nodejs-logo-new.svg", "./img/portfolio/react-logo-new.svg"],
    "srcContent2": ["./img/portfolio/solana-logo-new.svg", "./img/portfolio/ethereum-logo-new.svg"],
    "alt": "PumaPay",
    "title": "PumaPay",
    "desc": " is the first blockchain-based payment solution to be embraced by a large number of merchants. PumaPay provides real utility for your cryptocurrency. Use your crypto to pay for real products and services with network of crypto-friendly merchants. Easily manage everything via crypto wallet.",
    "subject1": "Tech Stack: ",
    "subject2": "Blockchain: ",
  },
  {
    "key": 1,
    "srcMain": "./img/portfolio/crypto-pool.webp",
    "srcSubMain": "./img/portfolio/cryptopool-logo.svg",
    "srcContent1": ["./img/portfolio/nodejs-logo-new.svg", "./img/portfolio/react-logo-new.svg"],
    "srcContent2": ["./img/portfolio/trx-logo-new.svg.svg", "./img/portfolio/ethereum-logo-new.svg"],
    "alt": "CryptoPool",
    "title": "CryptoPool",
    "desc": "is a tokenomics-based On-Off Ramp Solution that allows users to buy and sell cryptocurrencies directly while supporting several tokens for DEXs, NFTs & marketplaces on major chains.",
    "subject1": "Tech Stack: ",
    "subject2": "Blockchain: ",
  },
  {
    "key": 1,
    "srcMain": "./img/portfolio/raizers-new.webp",
    "srcSubMain": "./img/portfolio/raizers-logo.svg",
    "srcContent1": ["./img/portfolio/nodejs-logo-new.svg", "./img/portfolio/react-logo-new.svg"],
    "srcContent2": ["./img/portfolio/ethereum-logo-new.svg"],
    "alt": "Raizers ",
    "title": "Raizers ",
    "desc": "emerges as your guiding star In the intricate maze of cryptocurrency. Crafted as a comprehensive hub, Raize lets you champion budding blockchain projects, pool funds collectively, and immerse yourself in the latest high-profile crypto ventures At the heart of Raizers lies a singular vision: to carve out a sanctuary for investors. A space where finding the next big opportunity in the crypto and blockchain domain isn't like finding a needle in a haystack, but a thrilling treasure hunt.",
    "subject1": "Tech Stack: ",
    "subject2": "Blockchain: ",
  },
  {
    "key": 11,
    "srcMain": "./img/portfolio/youmeme.webp",
    "srcSubMain": "./img/portfolio/youmeme-new.svg",
    "srcContent1": ["./img/portfolio/nodejs-logo-new.svg", "./img/portfolio/react-logo-new.svg"],
    "srcContent2": ["./img/portfolio/ethereum-logo-new.svg"],
    "alt": "YouMeme ",
    "title": "YouMeme ",
    "desc": "is a state-of-the-art social network designed to deliver joy on demand. Enjoy the latest and funniest memes in the form of images, GIFs, and videos! The platform includes a native meme & GIF editor, special events, a reward system based on a Meme-To-Earn model, a next-gen NFT marketplace, and much more!",
    "subject1": "Tech Stack: ",
    "subject2": "Blockchain: ",
  },
  {
    "key": 4,
    "srcMain": "./img/portfolio/flair.webp",
    "srcSubMain": "./img/portfolio/flair-logo.svg",
    "srcContent1": ["./img/portfolio/nodejs-logo-new.svg", "./img/portfolio/python-logo-new.svg"],
    "srcContent2": ["./img/portfolio/shopify-logo-new.svg"],
    "alt": "Flair ",
    "title": "Flair ",
    "desc": "is a state-of-the-art social network designed to deliver joy on demand. Enjoy the latest and funniest memes in the form of images, GIFs, and videos! The platform includes a native meme & GIF editor, special events, a reward system based on a Meme-To-Earn model, a next-gen NFT marketplace, and much more!",
    "subject1": "Tech Stack: ",
    "subject2": "",
  },
  {
    "key": 10,
    "srcMain": "./img/portfolio/cleverciti.webp",
    "srcSubMain": "./img/portfolio/celeverciti-logo.svg",
    "srcContent1": ["./img/portfolio/net-logo-new.svg", "./img/portfolio/angular-logo-new.svg"],
    "srcContent2": ["./img/portfolio/shopify-logo-new.svg"],
    "alt": "Cleverciti ",
    "title": "Cleverciti ",
    "desc": "is a pioneering company specialized in Integrated Parking Intelligence Solutions that tackle parking, congestion, and compliance issues by harnessing the power of integrated technology solutions.",
    "subject1": "Tech Stack: ",
    "subject2": "",
  },
  {
    "key": 1,
    "srcMain": "./img/portfolio/hearst.webp",
    "srcSubMain": "./img/portfolio/hearst-logo.svg",
    "srcContent1": ["./img/portfolio/nodejs-logo-new.svg", "./img/portfolio/react-logo-new.svg"],
    "srcContent2": [],
    "alt": "Hearst ",
    "title": "Hearst ",
    "desc": "is an innovative platform that revolutionizes the concept of mining servers by bridging the gap between server owners and users seeking computing power. It serves as a decentralized marketplace where clients can offer their mining servers for rent, while users have the opportunity to utilize these servers for various purposes in exchange for monetary compensation.",
    "subject1": "Tech Stack: ",
    "subject2": "",
  },
  {
    "key": 6,
    "srcMain": "./img/portfolio/cryptosensei.webp",
    "srcSubMain": "./img/portfolio/cryptosensei-logo.svg",
    "srcContent1": ["./img/portfolio/nodejs-logo-new.svg", "./img/portfolio/react-logo-new.svg"],
    "srcContent2": [],
    "alt": "Crypto Sensei AI Auto Trading ",
    "title": "Crypto Sensei AI Auto Trading ",
    "desc": "Bot is an advanced software designed to assist cryptocurrency traders in executing automated trades. Leveraging the power of artificial intelligence (AI) and machine learning, the bot analyzes market data, identifies trends, and executes trades based on predefined strategies.",
    "subject1": "Tech Stack: ",
    "subject2": "",
  },
  {
    "key": 5,
    "srcMain": "./img/portfolio/sustaincert.webp",
    "srcSubMain": "./img/portfolio/sustaincert-logo.svg",
    "srcContent1": ["./img/portfolio/net-logo-new.svg", "./img/portfolio/react-logo-new.svg"],
    "srcContent2": [],
    "alt": "SustainCERT ",
    "title": "SustainCERT ",
    "desc": "is developing the world's first software platform to enable digital verification of impact claims across carbon markets and value chains. They are developing digital verification solutions to bring credibility to climate action. In a context where uncertainty and concerns around greenwashing are high, their work ensures that impacts are real, realized, and in line with global standards.",
    "subject1": "Tech Stack: ",
    "subject2": "",
  },
  {
    "key": 2,
    "srcMain": "./img/portfolio/akneplatz.webp",
    "srcSubMain": "./img/portfolio/akneplatz-logo.svg",
    "srcContent1": ["./img/portfolio/nodejs-logo-new.svg", "./img/portfolio/react-logo-new.svg"],
    "srcContent2": ["./img/portfolio/graphql-logo-new.svg"],
    "alt": "Aktenplatz ",
    "title": "Aktenplatz ",
    "desc": "is a professional service provider specialized in organizing and managing file spaces for small and medium-sized offices. Their expertise lies in creating efficient and streamlined file management systems that eliminate the challenges of maintaining clear and organized records.",
    "subject1": "Tech Stack: ",
    "subject2": "",
  },
  {
    "key": 1,
    "srcMain": "./img/portfolio/kazm.webp",
    "srcSubMain": "./img/portfolio/kazm-logo.svg",
    "srcContent1": ["./img/portfolio/nodejs-logo-new.svg", "./img/portfolio/react-logo-new.svg"],
    "srcContent2": ["./img/portfolio/firebase-logo-new.svg"],
    "alt": "Kazm ",
    "title": "Kazm ",
    "desc": "uses AI to power web3 communities of the future. They organize on- and off-chain data to make it universally accessible and useful, and help projects acquire, engage, and reward members. You can better understand your members with linked activity across blockchains and social platforms.",
    "subject1": "Tech Stack: ",
    "subject2": "",
  },
  {
    "key": 3,
    "srcMain": "./img/portfolio/mbrcld.webp",
    "srcSubMain": "./img/portfolio/mbrcld-logo.svg",
    "srcContent1": ["./img/portfolio/angular-logo-new.svg", "./img/portfolio/react-logo-new.svg"],
    "srcContent2": ["./img/portfolio/net-logo-new.svg"],
    "alt": "MBRCLD ",
    "title": "MBRCLD ",
    "desc": "is the website for the Mohammed bin Rashid Center for Leadership Development. The center experiences positive outcomes resulting from the development programs it has implemented.",
    "subject1": "Tech Stack: ",
    "subject2": "",
  },
  {
    "key": 1,
    "srcMain": "./img/portfolio/ninja.webp",
    "srcSubMain": "./img/portfolio/ninja-logo.svg",
    "srcContent1": ["./img/portfolio/angular-logo-new.svg", "./img/portfolio/react-logo-new.svg"],
    "srcContent2": ["./img/portfolio/nodejs-logo-new.svg"],
    "alt": "NINJA Protocol ",
    "title": "NINJA Protocol ",
    "desc": "is an ecosystem of decentralized applications on the Solana blockchain with a focus on gaming and NFTs. Together, they offer a full suite of ways for users of the Ninja Protocol ecosystem to interact with various gaming and NFT products.",
    "subject1": "Tech Stack: ",
    "subject2": "",
  },
  {
    "key": 9,
    "srcMain": "./img/portfolio/pacescheduler.webp",
    "srcSubMain": "./img/portfolio/pacescheduler-logo.svg",
    "srcContent1": ["./img/portfolio/react-logo-new.svg", "./img/portfolio/python-logo-new.svg"],
    "srcContent2": [],
    "alt": "Pace Scheduler ",
    "title": "Pace Scheduler ",
    "desc": "is a cutting-edge, cloud-based scheduling solution that caters specifically to organizations requiring 24/7 scheduling capabilities. Pace Scheduler's diverse client base includes Police Departments, Sheriff's Offices, Campus Security, Fire Departments, Public Transportation, and many others.",
    "subject1": "Tech Stack: ",
    "subject2": "",
  },
  {
    "key": 7,
    "srcMain": "./img/portfolio/recrout.webp",
    "srcSubMain": "./img/portfolio/recrout-logo.svg",
    "srcContent1": ["./img/portfolio/react-logo-new.svg", "./img/portfolio/python-logo-new.svg"],
    "srcContent2": [],
    "alt": "Recrout's ",
    "title": "Recrout's ",
    "desc": "innovative HR technology helps you automate the labor-intensive application and selection process. No more cumbersome, repetitive tasks, such as endless CV and cover letter screening. It's the easiest-to-use and competency-driven recruitment system that helps you predict the best matches based on soft skills.",
    "subject1": "Tech Stack: ",
    "subject2": "",
  },
  {
    "key": 1,
    "srcMain": "./img/portfolio/ordict-project.webp",
    "srcSubMain": "./img/portfolio/ordict-new-logo.svg",
    "srcContent1": ["./img/portfolio/typescript-logo-new.svg", "./img/portfolio/nodejs-logo-new.svg", "./img/portfolio/saas-logo-new.svg", "./img/portfolio/swiper-js-logo.svg", "./img/portfolio/eslint-logo-new.svg", "./img/portfolio/prettier-logo-new.svg"],
    "srcContent2": [],
    "alt": "Ordict ",
    "title": "Ordict ",
    "desc": "is a new platform for making predictions, using Bitcoin and AI to create events. People earn unique marks for good predictions, which let them handle bigger bets. As they get better, they can bet more and win more. Ordict also has its digital currency, offering discounts and attracting more users to its betting community.",
    "subject1": "Tech Stack: ",
    "subject2": "",
  },
  {
    "key": 8,
    "srcMain": "./img/portfolio/passbase.webp",
    "srcSubMain": "./img/portfolio/passbase.svg",
    "srcContent1": ["./img/portfolio/react-logo-new.svg", "./img/portfolio/graphql-logo-new.svg"],
    "srcContent2": ["./img/portfolio/net-logo-new.svg"],
    "alt": "Passbase ",
    "title": "Passbase ",
    "desc": "is a suite of customizable identification tools including liveness detection, document verification, facial recognition, and more. These tools are combined to estimate the authenticity of a user's true identity. A User submits a video selfie and valid identifying Resources during a Verification guided by the Passbase client-side integration.",
    "subject1": "Tech Stack: ",
    "subject2": "",
  },
  {
    "key": 1,
    "srcMain": "./img/portfolio/tomb.webp",
    "srcSubMain": "./img/portfolio/tomb.svg",
    "srcContent1": ["./img/portfolio/nodejs-logo-new.svg", "./img/portfolio/react-logo-new.svg"],
    "srcContent2": ["./img/portfolio/blockchain-solidity.svg"],
    "alt": "Tomb ",
    "title": "Tomb ",
    "desc": "is a decentralized finance or platform. Users can participate in various financial activities such as lending, borrowing, providing liquidity, and yield farming. It's the best place to Stake your Tokens & Earn Yield.",
    "subject1": "Tech Stack: ",
    "subject2": "BlockChain",
  },
];
export default Portfolio;