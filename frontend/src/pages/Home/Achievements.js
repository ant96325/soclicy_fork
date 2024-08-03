import React from "react";

const Achevements = () => {
    const achivements = [
        {value: '2+', title: '', content: 'Years in industry'},
        {value: '100+', title: 'Projects', content: 'successfully'},
        {value: '70+', title: '', content: 'Employess'},
        {value: '40+', title: 'Ongoing', content: 'Partners'},
    ]
    return (
        <div className="achievements_container">
            <div id="achievements_section" className="flex m-auto py-[75px] 
                justify-center gap-x-[12px] max-w-[1400px] max-lg:flex-wrap">
                <div className="grid grid-cols-2 gap-x-[12px]">
                    { achivements.slice(0, 2).map((item, idx) =>
                        <>
                        <div id="achievements_years" className="flex justify-end text-2xl min-[1400px]:text-3xl">        
                            {idx > 0 && <div className="h-32 bg-white  w-[1px] mr-2 "></div> }
                            <div id="achievements_all" className="flex flex-wrap items-center gap-x-[20px] text-white">
                                <h1 className="min-[1400px]:text-[60px]">{item.value}</h1>
                                <div id="achievements_industry" className="flex flex-col gap-x-[70px]">
                                    <span>{item.title}</span>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        </div>
                        </>
                    )}
                </div>
                <div className="h-32 bg-white w-[1px] max-lg:hidden"></div>
                <div className="grid grid-cols-2 gap-x-[12px]">
                    { achivements.slice(2,4).map((item, idx) =>
                        <div id="achievements_years" className="flex items-center text-2xl min-[1400px]:text-3xl">        
                            { idx > 0 && <div className="h-32 bg-white w-[1px] mr-2"></div> }
                            <div id="achievements_all" className="flex flex-wrap  items-center gap-x-[20px] text-white">
                                <h1 className="min-[1400px]:text-[60px]">{item.value}</h1>
                                <div id="achievements_industry" className="flex flex-col gap-x-[70px]">
                                    <span>{item.title}</span>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            
        </div>
    )
}

export default Achevements