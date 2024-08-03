const IconButton = (props) => (
  <button className={`rounded-[10px] !w-[224px] !h-[50px] !border-none shadow-[0_4px_4px_0_var(--more-button-shadow)] 
                      transition-all duration-500 hover:bg-[var(--get-in-touch-hover)] active:scale-95 
                      active:shadow-inner flex items-center justify-center flex-row-reverse gap-x-[10px]`}>
    <p className='font-bold text-[20px] p-[4px] text-blue-800'>{props.text}</p>
    <div>
      <img src="./img/home/call.svg" alt="sss"></img>
    </div>
  </button>
);
export default IconButton;