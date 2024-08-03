const Button = (props) => (
  <button className={`!border-2 !border-[var(--portfolio-button-border-color)] text-center !rounded-[8px] 
                      !p-[5px_20px] font-medium text-[var(--portfolio-button-text-color)] text-[18px] cursor-pointer 
                      focus:!border-[var(--portfolio-button-border-active-color)] bg-white hover:bg-[#f0f0f0] 
                      focus:text-[var(--font-color)] dark:focus:bg-[#062460] dark:focus:text-white`}
    onClick={props.handleClick}>
    {props.text}
  </button>
);
export default Button;