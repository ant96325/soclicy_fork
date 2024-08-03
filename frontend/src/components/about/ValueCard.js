const ValueCard = (props) => {
  return (
    <div className="ourValueCard_wrap flex flex-wrap place-center p-0 m-0 rounded-2xl dark:bg-[#132D5F]">
      <div className="ourValueCard_wrapCard justify-start text-center">
        <div className="ourValueCard group w-[467px] min-h-[310px] px-[40px] py-[35px] cursor-pointer rounded-2xl shadow-lg bg-white-100 hover:bg-[url('https://ik.imagekit.io/2zlgs27bjo/public/image/our-service-light-new.webp')] bg-cover">
          <div className="ourValueCard_card_top flex justify-start items-center">
            <img className="w-[41px] h-[41px]" src={props.src} alt={props.alt}></img>
          </div>
          <div className="ourValueCard_card_bottom mt-[20px]">
            <h2 className="font-bold text-[24px] text-[#131313] dark:text-white text-start group-hover:text-[#ffffff]">{props.title}</h2>
            <p className="font-normal text-[16px] text-[#131313] dark:text-white text-start whitespace-pre-wrap group-hover:text-[#ffffff]">{props.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ValueCard;