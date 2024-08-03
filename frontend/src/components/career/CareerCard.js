const CareerCard = (props) => {
  return (
    <div className="dark:bg-[#132D5F] group min-h-[228px] gap-y-[7px] pt-[35px] max-w-[470px] flex bg-white-100 w-full flex-col relative rounded-[15px] cursor-pointer !m-[10px] transition-all duration-300 shadow-xl hover:bg-[#1049b3]">
      <div className="flex items-center min-h-[70px] justify-center">
        <img className="group-hover:hidden" src={props.src1} alt={props.alt}></img>
        <img className="hidden group-hover:block" src={props.src2} alt={props.alt}></img>
      </div>
      <div className="flex flex-col items-center justify-center min-h-[50px]">
        <span className="font-bold text-[24px] mb-0 text-[#000] group-hover:text-[#fff]">{props.title}</span>
      </div>
      <div className="career_link font-medium text-[16px] text-[#1049b3] relative max-w-max mt-auto mr-[60px] mb-[20px] ml-auto group-hover:text-[#fff]">
        Learn more
      </div>
    </div>
  )
}

export default CareerCard;