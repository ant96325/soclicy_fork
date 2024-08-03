const WhiteButton = (props) => (
  <button className={`bg-white rounded-[10px] !w-[224px] !h-[50px] !border-none shadow-[0_4px_4px_0_var(--more-button-shadow)] transition-all duration-500 hover:bg-[var(--get-in-touch-hover)] active:scale-95  active:shadow-inner ${props.opacity}`}>
    <p className='font-bold text-[20px] pb-[4px] text-blue-800'>{props.text}</p>
  </button>
);
export default WhiteButton;