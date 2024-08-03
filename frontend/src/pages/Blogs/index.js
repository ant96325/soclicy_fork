
import PostCard from "../../components/blogs/PostCard";

const Blogs = () => {
  return (
    <>
      <section className="blog_blog min-h-[80vh] dark:bg-[#041D4C]">
        <div className="blog_inner flex flex-col items-center justify-center max-w-[1440px] w-full my-0 mx-auto py-0 px-[20px]">
          <div className="intro_containter mt-[90px] w-full mb-[40px] relative">
            <div className="intro_header flex flex-col">
              <h1 className="dark:text-white text-[48px] font-bold text-left font-['Inter'] text-[#000]">Lessons learned on our journey</h1>
              <p className="dark:text-white  text-[20px] font-medium pt-[5px] leading-[30px] text-left mb-[30px] whitespace-pre-line">Here at Solicy, we deliver impactful solutions that can give you the best competitive edge. We first burst
                onto the scene...</p>
            </div>

            <div className="intro_content flex flex-row">
              <div className="relative rounded-[10px]">
                <div className="rounded-[10px] overflow-hidden cursor-pointer ">
                  <img className="hover:scale-105 duration-300" src="./img/blog/intro.webp" alt="test"></img>
                </div>
              </div>

              <div className="intro_title pl-[40px] max-w-[440px] w-full">
                <h2 className="intro_title dark:text-white  !text-[40px] font-bold leading-[50px] text-left overflow-hidden">Understanding Bitcoin Network Congestion: High Fees, and What to Do</h2>

                <div className="intro_text text-[16px] font-medium leading-[28px] text-left overflow-hidden">
                  <p className="mb-4 dark:text-white ">The Bitcoin network is currently experiencing significant congestion, leading to high transaction fees and delays in confirmation times.</p>
                  <h2 className="mb-2 dark:text-white  text-[22px]">Why is the Bitcoin Network Congested?</h2>
                  <p className="mb-4 dark:text-white ">The growing popularity of Bitcoin has resulted in an increased number of transactions, straining the network’s capacity.</p>
                  <p className="mb-4 dark:text-white ">Additionally, the limited block size of 1MB means that only a fixed number of transactions can be processed per block, creating a bottleneck. Finally, the surge in DApps, and NFTs/Ordinals has contributed to the heightened network activity.</p>
                </div>

                <div className="intro_date dark:text-white  text-[16px] font-medium leading-[24px] text-left text-[var(--post-date-color)] mt-2">
                  Solicy | May 17, 2024
                </div>
              </div>

            </div>
          </div>

          <div className="posts_Container mt-[60px] w-full">
            <div className="posts_postsContainer w-full flex gap-x-[19px] gap-y-[40px] flex-wrap mb-[144px] justify-center relative " >
              <PostCard
                src="./img/blog/first.webp"
                alt="first"
                title="The Science of Boosting Productivity In A Workplace: Techniques and Tips"
                desc1="Productivity is the key to success in any workplace. Every business should have goals aimed at increasing productivity in the workplace. An excellent plan and bright, diligent personnel are required for any successful business or project. However, workplace productivity, or the final effectiveness of your efforts, has a significant impact on how far and quickly you may go. To boost productivity, you must have a clear plan for what and how things should happen in order to reach a certain goal."
                desc2="According to a recent Harvard Business Review research, people work harder when they know someone is watching and appreciating their efforts. It takes time, patience, and flexibility to prioritize a productivity technique. There are numerous strategies to increase productivity, ranging from KPIs to motivation and even physical wellness."
                desc3="In this article, we’ll share some of our techniques to help you stay focused and be more productive at work and to make your business more productive."
                date="Solicy | May 21, 2024" />

              <PostCard
                src="./img/blog/second.webp"
                alt="first"
                title="From Art to NFT: The Wide-Ranging Impact of NFTs"
                desc1="How can a JPEG be worth that much money is the most frequently asked question concerning NFTs. What gives these digital files their worth?"
                desc2="According to a recent Harvard Business Review research, people work harder when they know someone is watching and appreciating their efforts. It takes time, patience, and flexibility to prioritize a productivity technique. There are numerous strategies to increase productivity, ranging from KPIs to motivation and even physical wellness."
                desc3="In this article, we’ll share some of our techniques to help you stay focused and be more productive at work and to make your business more productive."
                date="Solicy | May 21, 2024" />

              <PostCard
                src="./img/blog/third.webp"
                alt="first"
                title="The Future of Entertainment: How Technology is Changing the Way We Consume"
                desc1="Technology is transforming the entertainment industry in ways that were unimaginable just a few years ago. With the rise of streaming services, virtual and augmented reality, and other cutting-edge technologies, the way we consume entertainment is changing rapidly."
                desc2="According to a recent Harvard Business Review research, people work harder when they know someone is watching and appreciating their efforts. It takes time, patience, and flexibility to prioritize a productivity technique. There are numerous strategies to increase productivity, ranging from KPIs to motivation and even physical wellness."
                desc3="In this article, we’ll share some of our techniques to help you stay focused and be more productive at work and to make your business more productive."
                date="Solicy | May 21, 2024" />

              <PostCard
                src="./img/blog/fourth.webp"
                alt="first"
                title="How Can Blockchain Be Used For Business?"
                desc1="ockchain technology has the potential to transform the way businesses operate. By providing a secure, transparent, and decentralized way of conducting transactions and managing data, blockchain can lead to more efficient and cost-effective business processes."
                desc2="According to a recent Harvard Business Review research, people work harder when they know someone is watching and appreciating their efforts. It takes time, patience, and flexibility to prioritize a productivity technique. There are numerous strategies to increase productivity, ranging from KPIs to motivation and even physical wellness."
                desc3="In this article, we’ll share some of our techniques to help you stay focused and be more productive at work and to make your business more productive."
                date="Solicy | May 21, 2024" />

              <PostCard
                src="./img/blog/fifth.webp"
                alt="first"
                title="FDA Approves Neuralink for First-in-Human Clinical Study, Opening New Frontiers in Neurotechnology"
                desc1="With the recent FDA , a neurotechnology startup founded by Elon Musk, to perform its first-in-human clinical research, the field of neurotechnology has reached an important turning point."
                desc2="According to a recent Harvard Business Review research, people work harder when they know someone is watching and appreciating their efforts. It takes time, patience, and flexibility to prioritize a productivity technique. There are numerous strategies to increase productivity, ranging from KPIs to motivation and even physical wellness."
                desc3="In this article, we’ll share some of our techniques to help you stay focused and be more productive at work and to make your business more productive."
                date="Solicy | May 21, 2024" />

              <PostCard
                src="./img/blog/sixth.webp"
                alt="first"
                title="Passion in Action: How Love Shapes Software Creation"
                desc1="One frequently asks what motivates developers to provide ground-breaking software solutions in the dynamic field of software development, where creativity and innovation thrive."
                desc2="According to a recent Harvard Business Review research, people work harder when they know someone is watching and appreciating their efforts. It takes time, patience, and flexibility to prioritize a productivity technique. There are numerous strategies to increase productivity, ranging from KPIs to motivation and even physical wellness."
                desc3="In this article, we’ll share some of our techniques to help you stay focused and be more productive at work and to make your business more productive."
                date="Solicy | May 21, 2024" />
            </div>

          </div>
        </div>
      </section>

    </>
  );
}

export default Blogs;