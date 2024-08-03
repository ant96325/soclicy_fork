import React, { useEffect } from "react";
import TelegramIcon from '@mui/icons-material/Telegram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { animateScroll as scroll } from 'react-scroll';

const IntroHome = () => {
   
    const scrollToMove = () => {
        const position = document.getElementById('get_in_touch').getBoundingClientRect().top
        scroll.scrollTo(position-55, { duration: 500, smooth: true });
    }
    const btnStyle = "flex flex-wrap justify-center items-center gap-2 text-[18px] py-3 px-5 rounded-[11px] max-w-[300px] min-w-[150px] min-h-[50px] font-bold max-md:max-w-[100%]"
    return (
        <div className="dark:bg-[#132D5F]">
            <div id="intro_home" className="relative py-[100px] max-w-[1400px] m-auto max-md:py-6 dark:text-white z-10">
                <div className="relative grid gap-3 grid-cols-2 items-center max-md:grid-cols-1 max-md:row-start-2 max-md:row-end-3 max-md:text-center">
                    <div id="intro_content" className="pl-5 box-border ">
                        <div id="subtitle" className="text-[32px] font-bold mb-10 leading-[150%]">
                            <h1 className="max-md:text-[24px] font-['Inter']">Fluent in Development</h1>
                        </div>
                        <div id="description" className="max-w-[620px] text-start text-[24px] font-medium w-auto h-auto whitespace-pre-line max-md:text-[16px] max-md:text-center">
                            We provide flexible and intuitive web3, software, and blockchain solutions
                        </div>
                        <div id="intro_button" className="relative flex flex-col gap-5 px-6 lg:flex-row mt-[30px]">
                            <button onClick={()=>scrollToMove()} className={`${btnStyle} bg-blue-600
                            text-white hover:shadow-md hover:shadow-gray-400 hover:bg-gray-50 hover:text-blue-600 `}>
                                <TelegramIcon />
                                Get in touch
                            </button>
                            <button className={`${btnStyle} text-blue-600 shadow-md shadow-gray-500 hover:bg-gray-200 dark:bg-white`}>
                                <LocalPhoneIcon />
                                Schedule a call
                            </button>
                        </div>
                    </div>
                    
                    <div id="intro_image" className="flex items-center justify-center">
                        <div className="max-md:aspect-video max-md:max-h-[250px]">
                        <img src="./img/home/home-intro.avif" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroHome;