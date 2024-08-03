import ValueCard from "../../components/about/ValueCard";
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";
import MainTitleCard from "../../components/MainTitleCard";

const About = () => {
  return (
    <>
      <MainTitleCard src="./img/about/aboutIntro.svg" title="About Us" desc="Solicy is a fast-growing company providing Blockchain and Software solutions to customers all over the world. We have built over 100+ trustworthy projects, each magnifying the innovation environment. We work collaboratively and offer solutions of the highest standards: unmatched customer service and expert technical support. We care deeply about the people we serve. Nothing gives us greater pride than seeing our clients delighted with the work we’ve done." hasButton={false} />

      <section className="aboutVideo_container w-full flex items-center  dark:bg-[#041d4c] py-[60px]">
        <div className="aboutVideo_content max-w-[1440px] w-full flex justify-center mx-auto relative items-center">
          <video poster="/image/solicy_video.webp" autoplay="" playsinline="" preload="auto" className="aboutVideo_video max-w-[1140px]" data-xblocker="passed" style={{ visibility: "visible" }}>
            <source src="https://ik.imagekit.io/2zlgs27bjo/public/about-video.mp4"></source>
            {/* <track kind="captions"></track> */}
          </video>
        </div>
      </section>

      <div className="dark:bg-[#041d4c]">
        <section className="aboutVideo_container  aboutUs_lightBackground w-full min-h-[620px] px-[40px] m-auto flex items-center justify-center">
          <div className="aboutUs_aboutUsBox w-full max-w-[1440px] flex items-center justify-end gap-[6%]">
            <div className="aboutUs_imageBox">
              <img src="./img/about/about.svg" alt="about"></img>
            </div>
            <div className="aboutUs_textBox w-3/5 text-2xl">
              <SubTitle textColor="text-white " title="Excellence Is What We Aim For" desc="We fiercely climb the growth ladder to generate more value for the world. Solicy emphasizes employing the most advanced technologies to surpass any expectations our clients might have. To provide the highest quality services, we continue to learn, aspire, and achieve new professional milestones." />
            </div>
          </div>
        </section>
      </div>

      <div className="dark:bg-[#041d4c]">
        <section className="ourMission_ourMission  max-w-[1400px] pt-[70px] mx-auto mb-0 px-[28px] py-[20px]">
          <div className="ourMission_content flex flex-row-reverse gap-[70px]">
            <div className="ourMission_rightPart">
              <img src="./img/about/mission.webp" alt="mission"></img>
            </div>
            <div className="aboutUs_textBox w-3/5 text-2xl">
              <SubTitle maxWidth="max-w-[800px]" title="Our Mission" desc="We keep up with innovations and provide a wide range of services since the high demand for blockchain development services in the market. We grow exponentially, yet preserve the values that have driven us from the first day. We aim to inhale the benefits of blockchain and software technologies into our client's business ambitions." />
            </div>
          </div>
        </section>
      </div>

      <div className="ourValues_ourValuesContainer dark:bg-[#041d4c] flex flex-col items-center pt-[60px] py-[20px] pb-[80px] bg-white-100">
        <div>
          <Title title="Our Values" />
        </div>
        <div className="ourValues_cards mt-[20px] grid grid-cols-3 gap-4 justify-center items-center max-w-[1800px] ">
          <ValueCard
            src="./img/about/quality.svg"
            alt="quality"
            title="Quality"
            desc="Our primary focus goes on providing high-quality
              services. We take the best technological
              advancement has to offer to build effective
              solutions." />
          <ValueCard
            src="./img/about/clock.svg"
            alt="clock"
            title="Fast delivery"
            desc="We know a thing or two about fast delivery. We 
              solve even the most complex issues in a 
              comparably short time." />
          <ValueCard
            src="./img/about/lamp.svg"
            alt="lamp"
            title="Enthusiasm"
            desc="Oh, we enjoy our work; every second of it brings 
              us joy. Perhaps that’s why we are good at what we 
              do." />
          <ValueCard
            src="./img/about/person.svg"
            alt="person"
            title="People"
            desc="We care about people: not just our clients, but all 
              of the stakeholders a project might have. We put 
              people's safety and well-being first. Our priority 
              for those individuals is unprecedented." />
          <ValueCard
            src="./img/about/wokspace.svg"
            alt="workspace"
            title="Integrity"
            desc="Our team employs strict integrity policies: 
              intellectual property protection, non-disclosure 
              rules, and a no-cheating code are of great 
              significance to us." />
          <ValueCard
            src="./img/about/text.svg"
            alt="text"
            title="Learning"
            desc="In this evolving industry, we try to keep up. 
              Learning is key to many doors, and we aim to 
              open a lot of those." />
        </div>
      </div>

    </>
  );
}

export default About;