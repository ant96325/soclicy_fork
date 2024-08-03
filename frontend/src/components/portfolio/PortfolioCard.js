import WhiteButton from "../WhiteButton";

const PortfolioCard = (props) => {
  return (
    <div className={`flex ${props.reverse ? 'flex-row-reverse' : ''} mb-[110px] justify-center gap-x-[45px]`} >
      <div className="m-[0_auto]">
        <img src={props.srcMain} alt={props.altMain}></img>
      </div>
      <div className="flex flex-col justify-between max-w-[580px] items-start">
        <div className="block">
          <img src={props.srcSubMain} alt={props.altSubMain}></img>
        </div>
        <p className="dark:text-white m-[16px_0px] max-w-[588px] font-medium text-[18px] leading-[150%] text-[var(--font-color)] whitespace-pre-line">
          <b>{props.title}</b>{props.desc}
        </p>
        <div>
          <div className="!flex gap-[8px] rounded-[37px] bg-[var(--backgroundTechStack)] shadow-sm mb-[10px] p-[4px_11.5px_4px_13px] w-full justify-start !min-h-[42px] items-center flex-wrap">
            <p className="TechStack_P font-bold text-[16px] pr-[6px] leading-[150%] text-center text-[#000] m-[5px_0_0] whitespace-nowrap">
              {props.subject1}
            </p>
            {props.srcContent1.map((oneContent, index) => (
              <div className="!items-center !my-2 translate-y-[3px]">
                <img src={oneContent} alt={index}></img>
              </div>
            ))}
          </div>

          {props.subject2 !== "" && props.srcContent2.length !== 0 &&
            <div className="!flex gap-x-[8px] rounded-[37px] bg-[var(--backgroundTechStack)] shadow-sm mb-[10px] p-[4px_11.5px_4px_13px] w-full justify-start !min-h-[42px] items-center">
              {props.subject2 !== "" && <p className="TechStack_P font-bold text-[16px] pr-[6px] leading-[150%] text-center text-[#000] m-[5px_0_0] whitespace-nowrap">
                {props.subject2}
              </p>}
              {props.srcContent2.map((oneContent, index) => (
                <div className="!items-center !my-2 translate-y-[3px]">
                  <img src={oneContent} alt={index}></img>
                </div>
              ))}
            </div>}
        </div>
        <WhiteButton text="View Project" className="!max-w-[400px] w-[198px] !h-[50px]" />
      </div>
    </div >
  )
}

export default PortfolioCard;