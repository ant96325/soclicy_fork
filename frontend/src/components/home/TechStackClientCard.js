const TechStackClientCard = (props) => {
  return (
    props.display &&
    <div className="flex items-center justify-center rounded-[10px] overflow-hidden hover:scale-105 transition-all duration-500 ">
      <div className="cursor-pointer">
        <div className="max-w-[335px] min-h-[12px] flex items-center justify-center ">
          <img src={props.src} alt={props.alt}></img>
        </div>
      </div>
    </div>
  );
}

export default TechStackClientCard;