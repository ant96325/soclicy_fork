const TechStackTechSoft = (props) => {
  return (
    <div className={`flex max-w-[1440px] flex-wrap  p-[60px_0] m-[0_auto] ${props.margin ? "ml-[10px] justify-start" : "justify-center"}`}>
      {props.data.map((oneProp, index) => (
        <div className="justify-start p-[10px] rounded-[10px] overflow-hidden">
          <div className="cursor-pointer">
            <div className="max-w-[335px] max-h-[120px] flex justify-center hover:scale-105 transition-all duration-500">
              <span key={index}>
                <img src={oneProp.split("*")[0]} alt={oneProp.split("*")[0]} ></img>
              </span>
            </div>
          </div>
        </div>
      ))}

    </div>
  )
}

export default TechStackTechSoft;