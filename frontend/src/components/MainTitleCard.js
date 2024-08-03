import SubTitle from "./SubTitle";
import { useState } from "react";

const MainTitleCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="w-full min-h-[600px] m-auto flex items-center p-[100px_0] dark:bg-[#041d4c]">
      <div className="flex items-center justify-center m-[0_auto] w-full max-w-[1440px] min-h-[600px]">
        <div className="grid items-center max-w-[1440px] w-full grid-cols-2 gap-[15px]">
          <div className=" box-border">
            <SubTitle customStyle="max-w-[620px] ml-[-20px]" title={props.title} desc={props.desc} />

            {props.hasButton &&
              <div className="ml-[28px] mt-[30px] flex flex-row gap-x-[20px]">
                <button className={`group ${!isHovered ? "bg-gradient-to-r from-[#1049b3]  to-[#1457d2]" : "bg-white"} bg-white rounded-[10px] !w-[200px] !h-[50px] 
                      !border-none shadow-[0_6px_6px_0_var(--more-button-shadow)] 
                      transition-all duration-500  active:scale-95 
                      active:shadow-inner flex items-center justify-center flex-row-reverse gap-x-[10px]`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}>
                  <p className='font-bold text-[20px] p-[4px] text-white group-hover:text-blue-800 active:'>Get in touch</p>
                  <div>
                    <img src="./img/home/telegram-get.svg" alt="sss"></img>
                  </div>
                </button>

                <button className={`rounded-[10px] !w-[224px] !h-[50px] !border-none shadow-[0_6px_6px_0_var(--more-button-shadow)] bg-white
                      transition-all duration-500 hover:bg-[var(--get-in-touch-hover)] active:scale-95 
                      active:shadow-inner flex items-center justify-center flex-row-reverse gap-x-[10px]`}>
                  <p className='font-bold text-[20px] p-[4px] text-blue-800'>Schedule a call</p>
                  <div>
                    <img src="./img/home/call.svg" alt="sss"></img>
                  </div>
                </button>

                {/* <IconButton text="Schedule a call" /> */}

              </div>}
          </div>

          <div className="flex justify-center">
            <img src={props.src} alt="home-intro"></img>
          </div>
        </div>
      </div>
    </section>

  )
}

export default MainTitleCard;
