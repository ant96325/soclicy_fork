import React from "react";


const About = () => {
    
    return (
        <div id="about_container" className="about_container max-[942px]:flex-col flex items-center justify-evenly py-[90px]
                max-[1200px]:px-5 max-[1200px]:py-10 max-[1200px]:gap-x-10 max-md:gap-y-5 max-[1200px]:gap-y-5"> 
            <div id="about_gif_box" className="flex min-w-[340px] items-center justify-center">
                <img src="./img/home/aboutLogo.svg" className="max-[942px]:w-32"/>
            </div>
            <div id="about_text_box" className="max-w-[820px] max-md:text-center text-white">
                <div id="sub_title" className="font-['inter'] font-bold mb-10 max-[942px]:text-center text-left">
                    <h1 className="max-[942px]:text-[32px] max-md:text-[32px]">About Solicy</h1>
                </div>
                <div id="description" className="font-medium leading-[150%] max-md:text-[20px] text-[24px] max-lg:text-base max-w-none">
                We fiercely climb the growth ladder to generate more value for the world. Solicy emphasizes employing the most advanced technologies to surpass any expectations our clients might have. To provide the highest quality services, we continue to learn, aspire, and achieve new professional milestones.
                </div>
                <div className="flex justify-start">
                    <button className="w-[224px] h-[50px] max-md:w-full shadow-lg shadow-['rgb(0,0,0, 0.25)'] mt-10 rounded-[10px] text-[18px] bg-white hover:bg-slate-200 font-bold text-[#1456d1]">See More</button>
                </div>
            </div>
        </div>
    )
}

export default About