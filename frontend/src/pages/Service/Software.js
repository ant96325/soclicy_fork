import Title from "../../components/Title";
import TechStackTechSoft from "../../components/home/TechStackTechSoft"
import BlockchainCard from "../../components/BlockchainCard";
import MainTitleCard from "../../components/MainTitleCard";

const arrTechs = [
  "./img/services/jsIcon.svg*solana logo",
  "./img/services/vuejs.svg*solana logo",
  "./img/services/react.svg*solana logo",
  "./img/services/next.svg*solana logo",
  "./img/services/reactNative.svg*solana logo",
  "./img/services/angular.svg*solana logo",
  "./img/services/rtk.svg*solana logo",
  "./img/services/sass.svg*solana logo",
  "./img/services/flutter.svg*solana logo",
  "./img/services/typescript.svg*solana logo",
  "./img/services/nodeJs.svg*solana logo",
  "./img/services/express.svg*solana logo",
  "./img/services/nest.svg*solana logo",
  "./img/services/python.svg*solana logo",
  "./img/services/php.svg*solana logo",
  "./img/services/laravel.svg*solana logo",
  "./img/services/java.svg*solana logo",
  "./img/services/kotlin.svg*solana logo",
  "./img/services/swift.svg*solana logo",
  "./img/services/csharp.svg*solana logo",
  "./img/services/core.webp*solana logo",
  "./img/services/net.svg*solana logo",
  "./img/services/serverless.svg*solana logo",
  "./img/services/mongo.svg*solana logo",
  "./img/services/redis.svg*solana logo",
  "./img/services/postgres.svg*solana logo",
  "./img/services/mysql.webp*solana logo",
  "./img/services/prisma.svg*solana logo",
  "./img/services/caspio.svg*solana logo",
  "./img/services/aws.svg*solana logo",
  "./img/services/azure.svg*solana logo",
  "./img/services/docker.svg*solana logo",
  "./img/services/kubernetes.svg*solana logo",
  "./img/services/sqs.svg*solana logo",

]

const Software = () => {
  return (
    <>
      <MainTitleCard
        title="Software Development"
        desc="Solicy offers reliable and scalable software solutions for any operating system, browser, and device. Solicy works with you to discover exactly which features and specifications your custom software requires. We design our products to meet the unique needs and wants of each user and each stakeholder. We create comprehensive, unique software solutions that develop and change your business."
        src="./img/services/software-intro.svg"
        hasButton={false} />


      <div className="techStack_container dark:bg-[#041D4C]">
        <div>
          <div className="title_titleContainer false">
            <Title title="Tech Stack" />
          </div>
          <TechStackTechSoft data={arrTechs} />
        </div>
      </div>


      <div className="ourValues_ourValuesContainer flex flex-col items-center pt-[60px] py-[20px] pb-[80px] bg-white-100 dark:bg-[#041D4C]">
        <div>
          <Title title="Our Services" />
        </div>
      </div>

      <div className="intro_homeContainer bg-[#f1f7ff]">
        <BlockchainCard
          title="Web Development"
          desc="Solicy specializes in website design and development services. Our web experiences are high-performing, feature-oriented and digitally transformative, designed to be user-friendly, fully functional, very secure and able to scale as your enterprise grows."
          src="./img/services/web-light.svg"
          maxWidth="max-w-[840px]"
          bgColor="bg-[#132D5F]"
        />
      </div>
      <div className="intro_homeContainer ">
        <BlockchainCard
          title="Software Architecture"
          desc="To identify a problem and provide a solution, Solicy provides software architecture services that involve technical project analysis. We develop cutting-edge digital products and offer a comprehensive launchcycle, including design, development, promotion, and future development."
          src="./img/services/software.svg"
          maxWidth="max-w-[840px]"
          reverse="flex-row-reverse"
          bgColor="bg-[#041D4C]"
        />
      </div>

      <div className="intro_homeContainer bg-[#f1f7ff]">
        <BlockchainCard
          title="Project Management"
          desc="New ideas are great, but they require handling. Solicy can help you manage your project effectively by planning, coordinating, and executing projects according to specific requirements and constraints. We take into account your time, budget, and available resources to squeeze the best out of the situation."
          src="./img/services/project.svg"
          maxWidth="max-w-[840px]"
          bgColor="bg-[#132D5F]"
        />
      </div>

      <div className="intro_homeContainer ">
        <BlockchainCard
          title="UI/UX Design"
          desc="At Solicy we apply a full range of UI/UX services tobuild effective customer retention strategies, and help brands create genuine, human-centered identities that engage, excite, and build trust. With UX designservices, we encourage brands to leave a lasting impression that motivates and inspires users aimed at optimizing the user-friendliness of the product."
          src="./img/services/ui-ux.svg"
          maxWidth="max-w-[840px]"
          reverse="flex-row-reverse"
          bgColor="bg-[#041D4C]"
        />
      </div>

    </>
  );
}

export default Software;