const AchievementItem = (props) => {
  return (
    <div className="flex items-center gap-x-[40px]">
      <div className="flex items-center gap-x-[20px]">
        <h1 className="!font-bold text-[60px] text-[#fff]">
          {props.title}
        </h1>
        <div className="flex flex-col">
          {props.subtitle.map((line, index) => (
            <span className="m-0 !font-medium !text-[28px] text-[#fff]" key={index}>{line}</span>
          ))}

        </div>
      </div>
      {props.showDivider && <div className="w-[1px] h-[150px] bg-[#fff]"></div>}
    </div>
  )
}

export default AchievementItem