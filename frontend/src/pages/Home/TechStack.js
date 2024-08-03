import React from "react";

const TechStack = () => {
    const text_boxes = [
        {subTitle: "Blockchain", images: ["solana.webp", "solidity.webp", "ethereum.svg", "aptos.webp", "polygon.webp", "avalanche.webp", "cardano.webp", "binance.webp"], ext: "webp"},
        {subTitle: "Software", images: ["js-icon.svg", "vuejs.svg", "react.svg", "angularIcon.svg", "net.svg", "nodejs.svg", "pythonIcon.svg", "azure.svg"], ext: 'svg'}
    ]
    return (
        <div id="tech_stack_container"  className="bg-slate-100 flex flex-col items-center 
            dark:bg-gradient-to-r dark:from-[#132d5f] dark:to-[#183874] dark:text-white">
            <p className="font-['inter'] text-center font-bold text-[50px] pb-10 max-sm:text-[24px]">Tech Stack</p>
            {text_boxes.map((box, idx) => (
                <div id="tech_box" className="flex flex-col px-10 max-[1070px]:max-w-[880px]" key={`tech_box_${idx}`}>
                    <p className="font-['quantico'] font-bold text-[40px] text-blue-900 max-md:text-[32px] dark:text-white">{box.subTitle}</p>
                    <div id="box" className="py-[60px] flex flex-wrap justify-center items-center max-md:py-[30px]">
                        {box.images.map((image, count) => (
                            <div className="p-2.5 rounded-[10px] overflow-hidden cursor-pointer hover:scale-105 transition-all duration-700">
                                <img src={`./img/home/${image}`} className="max-[1070px]:max-w-[180px]"/>   
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-start mb-[50px]">
                        <button className="w-[224px] h-[50px] max-md:w-full 
                                shadow-lg shadow-['rgb(0,0,0, 0.25)'] rounded-[10px] 
                                text-[18px] font-bold text-[#1456d1]
                                bg-white hover:bg-slate-200">
                                See More
                        </button>
                    </div>
                </div>
            ))}
            
        </div>
    )
}
export default TechStack