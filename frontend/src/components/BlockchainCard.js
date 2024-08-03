import SubTitle from "./SubTitle";

const BlockchainCard = (props) => {
  return (
    <div className={`dark:${props.bgColor}`}>
      <div className={`max-w-[1440px] w-full flex items-center justify-between m-[0_auto] overflow-hidden p-[10px]  ${props.reverse}`}>
        <SubTitle maxWidth={props.maxWidth} title={props.title} desc={props.desc} />

        <div className="overflow-hidden transition-all duration-200 pr-[100px] m-[20px]">
          <div className="w-[400px] h-[400px] flex items-center">
            <img src={props.src} alt="home-intro" className="object-contain max-w-full max-h-full min-h-full"></img>
          </div>
        </div>

      </div>
    </div>

  )
}

export default BlockchainCard;
