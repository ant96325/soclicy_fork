import { useContext, useEffect, useState } from "react";
import AppContext from "../AppContext";

const ChatUs = () => {
    // const { chatus_size, sizeW } = useSelector(({ user }) => user)
    const { sizeX, sizeY } = useContext(AppContext)
    console.log('context X====', sizeX);
    useEffect(() => {
        console.log('context X====', sizeX);
        console.log('context Y====', sizeY);
    }, [sizeX, sizeY])

    return (
        <iframe id="chat_us" src="chatus" className={`w-[${540}px] h-[${747}px] fixed bottom-5 right-5 z-[500]`}>
        </iframe>
    )
}

export default ChatUs