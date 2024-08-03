import CareerCard from "../../components/career/CareerCard";
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";
import MainTitleCard from "../../components/MainTitleCard";

const Careers = () => {
  return (
    <>
      <MainTitleCard
        title="Careers"
        desc="Solicy believes in hard work, enthusiasm, and passion. We constantly encourage individuals with little or even no experience to join our adventure. As a result of their dedication and ambition, many starting professionals have grown into full-scale experts at Solicy.
It's time for you to join the exciting roller-coaster of career-building. By joining our big family you'll enter the Blockchain and Software world, and essentially become a part of Solicy family."
        src="./img/career/frame.svg"
        hasButton={false} />


      <section className=" w-full min-h-[620px] py-0 px-[20px] m-auto flex items-center justify-center bg-[#1049b3] dark:bg-gradient-to-r dark:from-[#132d5f] dark:to-[#183874]">
        <div className="w-full max-w-[1440px] flex items-center justify-end ">
          <div className="my-[20px] mx-0 w-2/5">
            <span className="overflow-hidden">
              <img src="./img/career/illustration-career.svg" alt="about"></img>
            </span>
          </div>
          <div className="aboutUs_textBox w-3/5 text-2xl">
            <SubTitle textColor="!text-white" title="Join Solicy!" desc="If you want to be part of the future then Solicy is your answer. We appreciate the willingness to learn new technologies and are ready to help you advance your skills and grow with us. Your talent will be noticed and supported by our team, helping you achieve your fullest potential.By joining Solicy you'll enter the Blockchain and Crypto world, becoming highly competitive and demanded in the market. Become part of our big family and get the opportunity to take part in cool blockchain projects, expand your talent and have fun." />
          </div>
        </div>
      </section>

      <section className="max-w-[1900px] my-0 mx-auto py-0 px-[20px] bg-white-100 dark:bg-[#041D4C]">
        <div className="flex flex-col items-center pt-[50px] py-0 pb-[20px] bg-white-100">
          <div>
            <Title title="Join Our Team" />
          </div>
          <div>
            <div className="joinOurTeam_carousel !flex flex-wrap justify-center mb-[60px] min-w-[1300px]">
              <CareerCard
                src1="./img/career/rust.svg"
                src2="./img/career/rust-dark.svg"
                alt="quality"
                title="Rust/Move Developer"
              />
              <CareerCard
                src1="./img/career/php-developer.svg"
                src2="./img/career/php-developer-dark.svg"
                alt="quality"
                title="PHP Developer"
              />

            </div>
          </div>

        </div>
      </section>


    </>
  );
}

export default Careers;