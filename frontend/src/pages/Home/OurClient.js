import React from "react";

const OurClient = () => {
    const card_list = ["pass-new", "daomaker", "lif3", "pollum-new", "cryptoPool-new", "cool-cats"]
    const mobile_list = ["kreios", "passbase", "recrout", "exgoland", "pumapay", "rubilink", "ordict-new-logo", "tomb"]
    return (
        <div id="our_client_container" className="flex flex-col items-center justify-center py-[52px] 
            dark:bg-[var(--outline-button-dark)] dark:text-white">
            <span>
                <div className="flex justify-center text-[50px] font-bold max-md:text-2xl pb-5">
                    <span>Our Clients</span>
                </div>
            </span>
            <div id="clients_card" className="grid items-center  gap-x-10 gap-y-5 mb-5 px-5 grid-flow-col-dense">
                { card_list.map(item => 
                    <div className="p-0 rounded-[10px]"><img src={`./img/home/${item}.svg`} /></div>
                )}
            </div>
            <div id="mobile_second_butch" className="grid items-center  gap-x-10 gap-y-5 mb-5 px-5 grid-flow-col-dense">
                { mobile_list.slice(1,6).map(item => 
                    <div className="p-0 rounded-[10px]"><img src={`./img/home/${item}.svg`} /></div>
                )}
            </div>
            <div id="mobile_second_butch" className="grid items-center  gap-x-10 gap-y-5 mb-5 px-5 grid-flow-col-dense">
                { mobile_list.slice(6,8).map(item => 
                    <div className="p-0 rounded-[10px]"><img src={`./img/home/${item}.svg`} /></div>
                )}
            </div>
        </div>
    )
}

export default OurClient;