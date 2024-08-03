const Title = (props) => {
  return (
    <div className="flex justify-center  text-[#131313] mb-[30px]" >
      <h1 className="!font-bold font-['Inter'] !text-[50px] leading-[1.5] !mb-0 dark:text-white">{props.title}</h1>
    </div >

  )
}

export default Title;
