import Title from "../../components/Title";
import SocialCard from "../../components/home/SocialCard";

const Careers = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-[#f7f7f7] dark:bg-[#041D4C] p-[60px_20px_0]">
        <Title title="Join community" />

        <div className="flex max-w-[1420px] justify-between w-full gap-[15px]">
          <div className="max-w-[505px] w-full">
            <img src="./img/home/illustration.svg" alt="illustration.svg"></img>
          </div>
          <div className="max-w-[725px] w-full flex flex-wrap flex-col gap-[60px]">
            <div style={{ maxWidth: "none" }} className={`text-2xl font-medium leading-8 dark:text-white text-[#131313] w-auto !h-auto whitespace-pre-line`}>
              Our social networks are for everyone who wants to be a part of the future, so don't hesitate about joining us!
            </div>
            <div className="!max-w-[710px] grid grid-cols-2 grid-rows-4 gap-y-[32px] gap-x-[20px]">
              <SocialCard cardName="social_card1" name="Twitter" hover="hover:bg-[#000000]" />
              <SocialCard cardName="social_card2" name="Linkedin" hover="hover:bg-[#0077B7]" />
              <SocialCard cardName="social_card3" name="Discord" hover="hover:bg-[#5865F2]" />
              <SocialCard cardName="social_card4" name="Github" hover="hover:bg-[#000000]" />
              <SocialCard cardName="social_card5" name="Instagram" hover="hover:bg-gradient-to-r from-[#7422ba] to-[#dc8d40]" />
              <SocialCard cardName="social_card6" name="Youtube" hover="hover:bg-[#F61C0D]" />
              <SocialCard cardName="social_card7" name="Tiktok" hover="hover:bg-[#000000]" />
              <SocialCard cardName="social_card8" name="Facebook" hover="hover:bg-[#1877F2]" />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Careers;