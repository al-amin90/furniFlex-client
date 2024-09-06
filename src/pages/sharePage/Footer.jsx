import logo from "../../assets/whiteLogo.png";
import social from "../../assets/social.png";
import flag from "../../assets/flag.png";

const Footer = () => {
  return (
    <footer className="bg-[#0E0E0E]">
      <div className="pt-20 max-w-[1440px] mx-auto ">
        <div className="lg:w-[85%] w-[90%] mx-auto">
          <div className="footer text-base-content pb-24 border-b border-[#252948]">
            <aside>
              <img src={logo} alt="" />
            </aside>
            <div className="hidden lg:block"></div>
            <div className="hidden lg:block"></div>
            <div className="hidden lg:block"></div>
            <div className="hidden lg:block"></div>
            <nav className="text-lg">
              <h6 className="text-white font-semibold mb-4">About US</h6>
              <a className="link link-hover text-[#81859F]">Master Plan</a>
              <a className="link link-hover text-[#81859F]">Jobs</a>
              <a className="link link-hover text-[#81859F]">Invest</a>
              <a className="link link-hover text-[#81859F]">Pressroom</a>
              <a className="link link-hover text-[#81859F]">Blog</a>
              <a className="link link-hover text-[#81859F]">Contact</a>
            </nav>
            <nav className="text-lg">
              <h6 className="text-white font-semibold mb-4">Explore EEVE</h6>
              <a className="link link-hover text-[#81859F]">
                Unlock my Robot Power
              </a>
              <a className="link link-hover text-[#81859F]">Starlight</a>
              <a className="link link-hover text-[#81859F]">Robot Platform</a>
              <a className="link link-hover text-[#81859F]">EEVE Roadmap</a>
            </nav>
            <nav className="text-lg">
              <h6 className="text-white font-semibold mb-4">
                Community & Support
              </h6>
              <a className="link link-hover text-[#81859F]">
                Willow X Community
              </a>
              <a className="link link-hover text-[#81859F]">
                Developer & Maker Access
              </a>
              <a className="link link-hover text-[#81859F]">Special Cases</a>
            </nav>
          </div>

          {/* footer  part 2 */}
          <div>
            <div className="flex flex-wrap gap-4 justify-between mt-10">
              <img src={social} alt="" />
              <div className="flex flex-wrap gap-2 md:gap-6">
                <a className="link link-hover text-[#81859F]">March22 Recap</a>
                <a className="link link-hover text-[#81859F]">Privacy Policy</a>
                <a className="link link-hover text-[#81859F]">General Terms</a>
                <a className="link link-hover text-[#81859F]">Contact</a>
              </div>
              <div className="flex items-center gap-2">
                <img src={flag} alt="" />
                <p className=" text-[#81859F]">United States (English)</p>
              </div>
            </div>
            <p className="text-center text-[#323544] font-semibold pb-8 mt-11">
              EEVE © 2024. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
