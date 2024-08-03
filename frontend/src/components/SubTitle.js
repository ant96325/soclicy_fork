const SubTitle = (props) => {
  return (
    <div className={`mt-[30px] !mb-0 flex flex-col !gap-y-[40px] leading-[33px] w-full p-[28px] ${props.maxWidth}`}>
      <div className=" text-[32px] font-bold mb-[40px] w-full">
        <h1 className={`whitespace-pre !font-bold !font-["inter"] !text-[40px] leading-[1.5] dark:text-white !mb-0 ${props.textColor}`}>{props.title}</h1>
      </div>
      <div className={`text-[24px] font-normal leading-[33px] w-auto !h-auto whitespace-pre-line dark:text-white ${props.textColor}`}>
        {props.desc}
      </div>
    </div>
  )
}

export default SubTitle;
