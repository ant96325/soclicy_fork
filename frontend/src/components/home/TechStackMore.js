import TechStackTechSoft from "./TechStackTechSoft";
import WhiteButton from "../WhiteButton";
import { Link } from "react-router-dom";

const TechStackMore = (props) => {
  return (
    <div className={`flex flex-col justify-start w-full mt-[60px] pb-[20px] `}>

      <div className="flex justify-start">
        <h1 className="font-['quantico'] text-[#1049b3] dark:text-white !text-[40px] !font-bold !mb-0 ml-[20px]">{props.stackname}</h1>
      </div >

      <TechStackTechSoft data={props.data} margin={props.margin} />
      <div className="pl-[20px]">
        <Link to={props.linkto}>
          <WhiteButton type="primary" text="See More" />
        </Link>
      </div>
    </div>

  );
}

export default TechStackMore;