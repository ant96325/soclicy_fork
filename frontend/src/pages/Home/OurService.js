import React from "react";

const OurService = () => {
    const boxs = [ 
        {img:"ourServiceBlockchain", subTitle:"Blockchain Development"}, 
        {img:"ourServiceSoftware", subTitle:"Software Development"},
    ]
    return (
        <div id="our_service_container" className="min-h-[470px] py-[60px] px-5 bg-slate-100 dark:bg-[#041d4c] w-auto
        dark:text-white">
            <p className="font-['inter'] text-center font-bold text-[50px] pb-10 max-sm:text-[24px]">Our Services</p>
            <div id="our_image_box" className="flex gap-x-10 justify-center py-10 max-lg:py-0 max-md:flex-col">
                {boxs.map((box, idx) => (
                    <div className="flex flex-col justify-end  relative h-72 max-lg:h-52
                    bg-white dark:bg-[#132d5f] hover:bg-blue-700 dark:hover:bg-blue-900
                    text-blue-700 hover:text-white dark:text-white
                    rounded-[20px] mt-28 p-8
                    transition-all cursor-pointer shadow-md text-center items-center">
                        <img 
                            className="w-96 hover:-translate-y-5 transition-all duration-300 pb-10
                            max-md:hover:-translate-y-0 max-md:w-72" 
                            src={`./img/home/${box.img}.svg`} 
                        />
                        <div className="font-bold text-[24px] max-lg:text-xl">{box.subTitle}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurService