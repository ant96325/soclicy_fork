import ForumIcon from '@mui/icons-material/Forum';
import EditIcon from '@mui/icons-material/Edit';
import { SentimentVerySatisfied, 
        KeyboardArrowDownOutlined, 
        Send, 
        MoreVertOutlined, 
        // AttachFile, 
        Workspaces } 
from '@mui/icons-material'
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import AppContext from '../../AppContext';

const ChatUs = () => {
    const [isShowChat, setIsShowChat] = useState(false);
    const [chatSocket, setChatSocket] = useState(null)
    const [message, setMessage] = useState('')
    const {setSizeExpand, setSizeDefault} = useContext(AppContext)
    
    useEffect(() => {
        const socket = new WebSocket(`ws://${window.location.hostname}`)
        
        socket.onopen = () => {
            console.log('Connected to WebScoket Server')
        }
        socket.onmessage = event => {
            const message = JSON.parse(event.data)
            console.log('socket messages ===', message)
        }
        setChatSocket(socket)

        return () => {
            if(socket) {
                console.log('close socket')
                socket.close()
            }
        }
    }, [])

    const openChatUs = () => {
        setSizeExpand()
        setIsShowChat(true)
    }
    const closeChatUs = () => {
        setSizeDefault()
        setIsShowChat(false)
    }

    const onSendMessage = () => {
        setIsShowChat(!isShowChat)
        if(chatSocket && chatSocket.readyState == WebSocket.OPEN) {
            console.log('here', message)
            chatSocket.send(JSON.stringify({
                direction: 'from',
                message: message,
                email: 'ant@gmail.com'
            }))
            setMessage('')
        }
    }
    return (
        <div>
            <button className={`${isShowChat ? 'hidden' : ''} fixed bottom-8 right-24 rounded-[16px] bg-[#fff] h-[42px] whitespace-nowrap p-[10px_15px] 
                          text-[17px] leading-[17px]`} onClick={() => openChatUs()}>
                <span>Chat with us<img className="w-[20px] m-[0px_2px_-5px] inline-block mb-[3px] ml-[5px]" src="./img/chat-1.png" alt="test"></img></span>
            </button>

            <div className="group">
                <button className="group-hover:hidden fixed bottom-6 right-6 rounded-[50%] h-[56px] w-[56px] bg-white" color="secondary" style={{ "background": "linear-gradient(135deg, rgb(42, 39, 218) 0%, rgb(0, 204, 255) 100%)" }}>
                <ForumIcon className="transition-all duration-300" sx={{ color: '#ffffff' }} />
                </button>
                {!isShowChat ?
                (<button className="hidden group-hover:block fixed bottom-6 right-6 rounded-[50%] h-[56px] w-[56px] bg-white"
                    color="secondary" onClick={() => openChatUs()}>
                    <EditIcon className="hidden transition-all duration-300" sx={{ color: '#1976d2' }} />
                </button>)
                :
                (<button className={`send_button z-30 fixed bottom-6 right-6 rounded-[50%] h-[56px] w-[56px] bg-white transition-all duration-300`}
                    color="secondary" onClick={() => onSendMessage()} style={{ "background": "linear-gradient(135deg, rgb(42, 39, 218) 0%, rgb(0, 204, 255) 100%)" }}>
                    <Send className="hidden transition-all duration-300" sx={{ color: '#ffffff' }} />
                </button>)}
            </div>

            <div className={`chat_container ${isShowChat ? 'flex' : ''} flex-col text-white fixed  w-[372px] bottom-[26px] 
                            rounded-[16px] overflow-hidden right-[48px] left-auto shadow-md z-[20]`}
                style={{
                "background": "linear-gradient(135deg, rgb(42, 39, 218) 0%, rgb(0, 204, 255) 100%)", "opacity": isShowChat ? "1" : "0",
                "pointerEvents": isShowChat ? "auto" : "none", "transition": "opacity 0.3s ease-in-out, transform 0.3s ease-in-out"
                }} >
                <div className={`p-[24px_28px_0] flex-[0_0_auto] `} >
                    <div className='flex items-center justify-between'>
                        <h2 className={`font-normal text-[42px] m-[6px_0_16px] pt-[4px] inline-block max-w-[100%-90px] leading-[50px]
                                        whitespace-pre-line pl-[14px]`}>
                            <span>Hi there<img className="w-[32px] m-[0px_2px_-5px] inline-block mb-[3px] ml-[10px]" src="./img/chat-1.png" alt="test"></img></span>
                        </h2>
                        <div className='flex'>
                            <div className='flex cursor-pointer w-10 h-10 rounded-[20px] items-center justify-center 
                            transition-all duration-500 hover:bg-blue-900 hover:bg-opacity-30'
                            onClick={() => setIsShowChat(false)}>
                                <MoreVertOutlined/>
                            </div>
                            <div className='flex cursor-pointer w-10 h-10 rounded-[20px] items-center justify-center 
                            transition-all duration-500 hover:bg-blue-900 hover:bg-opacity-30'
                            onClick={() => closeChatUs(false)}>
                                <KeyboardArrowDownOutlined/>
                            </div>
                            
                        </div>
                    </div>
                    

                    <p className="text-[16px] m-[0_0_32px] leading-[22px] relative pl-[14px] pt-[10px]">
                        <span>Welcome to our website.<br></br>
                        Ask us anything <img className="w-[20px] m-[0px_2px_-5px] inline-block mb-[3px] ml-[10px]" src="./img/chat-2.png" alt="test"></img></span>
                    </p>
                    <div className="operators flex absolute top-[96px] flex-col w-[66px] right-[42px]">
                        <div className="items-center" style={{ "zIndex": "2", "transform": "translate3d(0px, 0px, 0px)" }}>
                            <div className="avatar w-[66px] h-[66px] rounded-[50%] bg-cover bg-center absolute top-0 left-0 transition-all"
                                style={{ "willChange": "transform", "transform": "translate3d(0px, 0px, 0px)" }}></div>
                        </div>
                        
                    </div>

                    <div className="offline-message p-[14p_28px_20px] m-[18px_-28px_0] w-[calc(100%-56px)] relative">
                        <span className="online pl-[40px] relative inline-block text-[16px] mb-[10px]">We reply immediately</span>
                    </div>
                </div>

                <div className="input_group p-[0_28px_6px] w-full relative bg-white flex-[0_0_auto]">
                    <div className="" style={{ "transition": "0.5s ease-in-out", "opacity": "1", "transform": "translateY(0px)" }}>
                        <textarea className="focus:border-0 focus:outline-none tracking-[-0.24px] text-[#06132b] w-full text-[17px] 
                        p-[20px_10px_17px] resize-none leading-[24px] overflow-x-hidden mt-[10px]" 
                        onChange={(e) => setMessage(e.target.value)} placeholder='Enter your message...'>
                        </textarea>
                    </div>
                    <div className="footer_bottom h-[42px] relative px-5 flex justify-between items-center">
                        <div className="flex gap-x-2" style={{ "transition": "0.5s ease-in-out", "opacity": "1", "transform": "translateY(0px)" }}>
                            {/* <button className=" rounded-[50%]  bg-white" color="primary">
                                <AttachFile sx={{ color: 'gray' }} />
                            </button> */}
                            <button className=" rounded-[50%]  bg-white" color="primary">
                                <SentimentVerySatisfied sx={{ color: 'gray' }} />
                            </button>
                        </div>
                        <div className='flex items-center text-gray-500 text-[10px] gap-x-2'>
                            <span>POWERED BY</span>
                            <img src='./img/poweredby.svg' className='h-[15px]'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatUs