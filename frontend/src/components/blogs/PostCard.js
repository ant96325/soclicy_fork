const PostCard = (props) => {
  return (
    <div>
      <div className="card_postItem max-w-[454px] w-full min-h-[528px] relative cursor-pointer " >
        <div className="card_imageSection relative h-[235px] w-full rounded-[10px] overflow-hidden">
          <img className="w-full h-full !object-cover max-w-full max-h-full rounded-[10px] hover:scale-105 transition-all duration-250  " src={props.src} alt={props.alt}></img>
        </div>
        <div className="card_postTitle text-ellipsis leading-[1.5] overflow-hidden font-bold text-[28px] my-[15px] bt-[15px] text-[#131313] dark:text-white ">{props.title}</div>
        <div className="card_postDescription text-ellipsis overflow-hidden font-medium text-[16px] mb-[16px]">
          <p className="mt-0 mb-4 dark:text-white ">{props.desc1}</p>
          <p className="mt-0 mb-4 dark:text-white ">{props.desc2}</p>
          <blockquote className="mt-0 ml-0 mr-4"><em>{props.desc3}</em></blockquote>
          <p className="mt-0 mb-4 dark:text-white "><br></br></p>
        </div>
        <div className="card_postDate font-medium text-[16px] leading-[1.5] text-[#818181]">{props.date}</div>
      </div>
    </div>

  )
}

export default PostCard;
