import { useState, useEffect, } from "react";
import AntForm from '../components/Form'
import { Link } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const [ourY, setOurY] = useState(2200) 
  const [techY, setTechY] = useState(2500) 
  const [headerH, setHaderH] = useState(0)
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: true });
  }

  useEffect(() => {
    const our_elem = document.getElementById('our_service_container')
    const ourYY = our_elem ? our_elem.getBoundingClientRect().top + window.scrollY : ourY
    setOurY(ourYY)
    const tech_elem = document.getElementById('tech_stack_container')
    const techYY = tech_elem ? tech_elem.getBoundingClientRect().top + window.scrollY : techY
    setTechY(techYY)
    const header_H = document.getElementById('header_container').getBoundingClientRect().height
    setHaderH(header_H)
  }, [])

  const toOurService = () => {
    const our_elem = document.getElementById('our_service_container')
    const ourYY = our_elem ? our_elem.getBoundingClientRect().top + window.scrollY : ourY
    setOurY(ourYY)
    scroll.scrollTo(ourYY-headerH, { duration: 200, smooth: true });
  }

  const toTechStack = () => {
    const tech_elem = document.getElementById('tech_stack_container')
    const techYY = tech_elem ? tech_elem.getBoundingClientRect().top + window.scrollY : techY
    setTechY(techYY)
    scroll.scrollTo(techYY-headerH, { duration: 200, smooth: true });
  }

  return (
    <>
      <div className="contactUsForm_contactUsContainer flex flex-col items-center m-auto !p-[40px_0_108px] bg-[#f1f7ff] dark:bg-[#041d4c]" id="get_in_touch">
        <div className="contactUsForm_contactTitle flex items-center justify-center mb-[59px]">
          <h1 className="title_title !text-[32px] font-bold font-['Inter'] dark:text-white">Get In Touch</h1>
        </div>

        <div className="contactUsForm_formDetails flex flex-wrap gap-x-[80px] justify-center" >
          <div className="contactUsForm_formBox">
            <AntForm />
          </div>

          <div className="contactUsForm_rightSection flex flex-col justify-between items-center">
            <div className="contactUsForm_detail flex gap-y-[30px] p-[20px_60px_0] flex-col">
              <div className="contactUsForm_detailInfoBox mb-[20px] w-full flex gap-y-[20px] p-[0_15px] flex-col">
                <div className="contactUsForm_contactSection flex gap-x-[10px]">
                  <div>
                    <div className="contactUsForm_detailInfo flex gap-x-[25px] items-center cursor-pointer leading-[1.2]">
                      <div className="contactUsForm_imgBox w-10 h-10 rounded-[50%] cursor-pointer transition-all duration-500">
                        <img src="./img/footer/mail.svg" alt="mail"></img>
                      </div>
                      <p className={`contactUsForm_emailLine border-b-2 border-b-[#222] transition-all duration-500 
                                      m-0 text-[18px] font-normal text-[var(--font-color)] dark:text-white dark:border-b-[#fff]`}>contact@solicy.net</p>
                    </div>
                  </div>
                  <div className="contactUsForm_copyIcon !max-w-[30px] !w-full relative cursor-pointer flex items-center">
                    <img src="./img/footer/copy-new.svg" alt="copy"></img>
                  </div>
                </div>
              </div>
              <div className="contactUsForm_contactUsImage">
                <img src="./img/footer/contact-us.svg" alt="contact us"></img>
              </div>
            </div>

            <div className="contactUsForm_partnershipLinks flex gap-x-[40px] p-[15px_0]">
              <div className="contactusForm_links !max-w-[90px] !w-full cursor-pointer hover:opacity-80 ">
                <img src="./img/footer/telegram-new.svg" alt="telegram new"></img>
              </div>
              <div className="contactusForm_links !max-w-[90px] !w-full cursor-pointer hover:opacity-80 ">
                <img src="./img/footer/whatsapp-new.svg " alt="whatsapp"></img>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="footer_footerContainter p-[30px_30px_20px] bg-[var(--primary-color)] relative dark:bg-[#132D5F]">
        <div className="footer_footerBox m-auto flex flex-wrap max-w-[1440px] gap-x-[50px] max-[915px]:gap-x-2 max-[915px]:justify-between">
          <div className="footer_footerLogoInfo mb-[20px] gap-y-[30px] flex items-baseline flex-col justify-content mr-[77px]">
            <div className="footer_solicyLogo">
              <img src="./img/solicy-logo.svg" alt="solicy-log"></img>
            </div>

            <div className="footer_socialIcons flex flex-wrap max-w-[240px] gap-[20px]">
              <Link to="/">
                <div className="relative rounded-[50%] flex items-center justify-center bg-[#fff] w-8 h-8 hover:bg-[#f1f1f1]">
                  <img src="./img/footer/twiter-footer.svg" alt="twiter logo"></img>
                </div>
              </Link>
              <Link to="/">
                <div className="relative rounded-[50%] flex items-center justify-center bg-[#fff] w-8 h-8 hover:bg-[#f1f1f1]">
                  <img src="./img/footer/linkedin-footer.svg" alt="linkedin logo"></img>
                </div>
              </Link>
              <Link to="/">
                <div className="relative rounded-[50%] flex items-center justify-center bg-[#fff] w-8 h-8 hover:bg-[#f1f1f1]">
                  <img src="./img/footer/discord-footer.svg" alt="discord logo"></img>
                </div>
              </Link>
              <Link to="/">
                <div className="relative rounded-[50%] flex items-center justify-center bg-[#fff] w-8 h-8 hover:bg-[#f1f1f1]">
                  <img src="./img/footer/footer-git.svg" alt="git logo"></img>
                </div>
              </Link>
              <Link to="/">
                <div className="relative rounded-[50%] flex items-center justify-center bg-[#fff] w-8 h-8 hover:bg-[#f1f1f1]">
                  <img src="./img/footer/telegram-footer.svg" alt="telegram logo"></img>
                </div>
              </Link>
              <Link to="/">
                <div className="relative rounded-[50%] flex items-center justify-center bg-[#fff] w-8 h-8 hover:bg-[#f1f1f1]">
                  <img src="./img/footer/instagram-footer.svg" alt="instagram logo"></img>
                </div>
              </Link>
              <Link to="/">
                <div className="relative rounded-[50%] flex items-center justify-center bg-[#fff] w-8 h-8 hover:bg-[#f1f1f1]">
                  <img src="./img/footer/you-tube-footer.svg" alt="youtube logo"></img>
                </div>
              </Link>
              <Link to="/">
                <div className="relative rounded-[50%] flex items-center justify-center bg-[#fff] w-8 h-8 hover:bg-[#f1f1f1]">
                  <img src="./img/footer/tiktok-footer.svg" alt="tiktok logo"></img>
                </div>
              </Link>
              <Link to="/">
                <div className="relative rounded-[50%] flex items-center justify-center bg-[#fff] w-8 h-8 hover:bg-[#f1f1f1]">
                  <img src="./img/footer/facebook-footer.svg" alt="facebook logo"></img>
                </div>
              </Link>
              <Link to="/">
                <div className="relative rounded-[50%] flex items-center justify-center bg-[#fff] w-8 h-8 hover:bg-[#f1f1f1]">
                  <img src="./img/footer/reddit-footer.svg" alt="reddit logo"></img>
                </div>
              </Link>
            </div>
          </div>
          
          <div className="footer_whatWeDoContainer">
            <div className="footer_infoTitle text-[#e5f1ff] text-[24px] font-bold">What We Do</div>

            <div className="footer_whatWeDo flex gap-x-[50px] mt-[20px] 
             ">
              <div className="footer_middleBox flex flex-col gap-[18px] text-[#e5f1ff]">
                <div className="link_linkBox text-[20px] whitespace-pre-line">
                  <Link to="/" onClick={() => toOurService()} className="text-[16px] font-semibold max-w-[100px]">Our Services</Link>
                </div>
                <div className="link_linkBox text-[20px] whitespace-pre-line">
                  <Link to="/" className="text-[16px] font-semibold max-w-[100px]">Blockchain</Link>
                </div>
                <div className="link_linkBox text-[20px] whitespace-pre-line">
                  <Link to="/" className="text-[16px] font-semibold max-w-[100px]">Software</Link>
                </div>
              </div>

              <div className="footer_middleBox flex flex-col gap-[18px] text-[#e5f1ff]">
                <div className="link_linkBox text-[20px] whitespace-pre-line">
                  <Link to="/" onClick={()=>toTechStack()} className="text-[16px] font-semibold max-w-[100px]">Teck Stack</Link>
                </div>
                <div className="link_linkBox text-[20px] whitespace-pre-line">
                  <Link to="/" className="text-[16px] font-semibold max-w-[100px]">Portfolio</Link>
                </div>
                <div className="link_linkBox text-[20px] whitespace-pre-line">
                  <Link to="/" className="text-[16px] font-semibold max-w-[100px]">Careers</Link>
                </div>
              </div>

              <div className="footer_middleBox flex flex-col gap-[18px] text-[#e5f1ff]">
                <div className="link_linkBox text-[20px] whitespace-pre-line">
                  <Link to="/" className="text-[16px] font-semibold max-w-[100px]">About Us</Link>
                </div>
                <div className="link_linkBox text-[20px] whitespace-pre-line">
                  <Link to="/" className="text-[16px] font-semibold max-w-[100px]">Terms and Conditions</Link>
                </div>
                <div className="link_linkBox text-[20px] whitespace-pre-line">
                  <Link to="/" className="text-[16px] font-semibold max-w-[100px]">Privacy Policy</Link>
                </div>
              </div>
            </div>

          </div>

          <div className="footer_contactInfoContianer">
            <div className="footer_infoTitle text-[#e5f1ff] font-bold text-[24px]">Contact Us</div>
            <div className="footer_contactInfo flex translate-y-[5px] flex-col m-0 gap-0">
              <Link to="/" className="text-[#fff] mb-[5px] text-[16px] font-bold leading-[21.76px] flex gap-x-[10px] items-end mt-[15px]">
                <div className="w-6 h-6 relative flex items-center justify-center bg-[#fff] rounded-[20px]">
                  <img src="./img/footer/navigation-footer.svg" alt="navigation"></img>
                </div>
                30/1 Sevan St., Yerevan
              </Link>
              <Link to="/" className="text-[#fff]  mb-[5px] text-[16px] font-bold leading-[21.76px] flex gap-x-[10px] items-end mt-[15px]">
                <div className="w-6 h-6 relative flex items-center justify-center bg-[#fff] rounded-[20px]">
                  <img src="./img/footer/email-footer.svg" alt="email"></img>
                </div>
                contact@solicy.net
              </Link>
            </div>
          </div>

        </div>

        <div className={` bg-white w-[50px] h-[50px] cursor-pointer flex items-center justify-center absolute 
                          right-[30%] rounded-[50%] hover:scale-110 transition-all duration-300 
                          max-[1480px]:bottom-[30%] max-[1480px]:right-[50%]`}
                          onClick={() => scrollToTop()}>
            <span>
              <img className="w-[12px] h-[10px]" src="./img/footer/arrow-up.svg" alt="arrow-up"></img>
            </span>
          </div>

        <p className="footer_footerText text-[14px] text-white mt-[100px] my-auto mb-0 text-center tracking-[2px]">© 2024 Solicy LLC. All rights reserved</p>
      </div>
    </>
  )
}

export default Footer