import { useState } from "react";

const SocialCard = (props) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className={`group max-w-[360px] w-full h-[70px] flex items-center justify-between bg-[#fff] rounded-[15px] 
                    shadow-[0_4px_10px_rgba(0,0,0,.1)] p-[23px_40px] cursor-pointer duration-300 
                    max-[1200px]:max-h-[45px] max-[1200px]:rounded-[6px]
                    ${props.hover}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className={`flex items-center gap-x-[30px]`}>
        <div className={`${isHovered ? props.cardName + "_dark" : props.cardName} w-8 h-8 bg-[50%] bg-contain bg-no-repeat `}></div>
        <span class={`!text-2xl group-hover:text-[#fff]`}>{props.name}</span>
      </div>
      <div className={`${isHovered ? "social_card_arrow_dark" : "social_card_arrow"}  w-[10px] h-[17px] bg-cover bg-[50%]`}></div>
    </div>
  )
}

export default SocialCard;
