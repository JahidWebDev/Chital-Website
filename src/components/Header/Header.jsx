import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../../images/Chittal-Logo.png"; // ⬅️ replace with your actual path
import Bannericon from "../../images/Home-img/Veku&Piller.png"; // ⬅️ replace with your actual path
import { FaWhatsapp, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiMessageCircle } from "react-icons/fi";
import Canadian from "../../images/Home-img/Logo/Canadian-tree.png";
import Beauty from "../../images/Home-img/Logo/Care-to-Beauty.png";
import Merck from "../../images/Home-img/Logo/Merck.png";
import National from "../../images/Home-img/Logo/National-Tree-company.png";
import Pennyblack from "../../images/Home-img/Logo/Pennyblack.png";
import Softmoc from "../../images/Home-img/Logo/Softmoc.png";
import Sothern from "../../images/Home-img/Logo/Sothern-Company-Gas.png";
import Zalando from "../../images/Home-img/Logo/Zalando.png";

import SEO from "../../images/Servicesimages/SEO.png";
import GIconSMS from "../../images/Servicesimages/GIconSMS.png";
import Spiker from "../../images/Servicesimages/Spiker.png";

import Letterr from "../../images/Home-img/Letterr-Boxxx.png";

const logos = [
  Canadian,
  Beauty,
  Merck,
  National,
  Pennyblack,
  Softmoc,
  Sothern,
  Zalando,
  // Add more logos here
];

const Header = () => {
  const { id } = useParams();
  const [shuffled, setShuffled] = useState(logos);

  // Shuffle logos every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShuffled((prev) => [...prev].sort(() => Math.random() - 0.5));
    }, 3000);

    return () => clearInterval(interval);
  }, []);
 const messages = [
    "Sure! How can I help you today?",
    "Yes, we provide Shopify full store setup.",
    "Tell me more about your project.",
    "We offer theme customization & speed optimization.",
    "Support is available 24/7. Ask anything!",
    "That's interesting, tell me more!",
    "Absolutely, we can handle that!",
    "I am happy to assist you!",
  ];

  const [reply, setReply] = useState("Any query regarding our Shopify Services?");
  const [open, setOpen] = useState(false);

  const showRandomMessage = () => {
    const msg = messages[Math.floor(Math.random() * messages.length)];
    setReply(msg);
  };

   const [hideHeader, setHideHeader] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 50) {
        // Scrolling down → hide header
        setHideHeader(true);
      } else {
        // Scrolling up → show header
        setHideHeader(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);
  return (
    <section>
     <header
      className={`
        w-full fixed top-0 z-50 py-9 transition-transform duration-300 ease-in-out
        bg-[#352B2C]
        ${hideHeader ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="max-w-[1550px] mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              src={logo}
              alt="Chital Logo"
              className="h-22 w-auto object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Menu */}
        <nav className="ml-auto mr-20 mt-4">
          <ul className="hidden md:flex items-end gap-8 text-[16px] text-gray-300">
            <li className="text-[#C8A46C] cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[#C8A46C] cursor-pointer">
              <Link to="/services">Services</Link>
            </li>
            <li className="hover:text-[#C8A46C] cursor-pointer">
              <Link to="/case-study">Case Study</Link>
            </li>
            <li className="hover:text-[#C8A46C] cursor-pointer">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-[#C8A46C] cursor-pointer">
              <Link to="/faqs">FAQs</Link>
            </li>
            <li className="hover:text-[#C8A46C] cursor-pointer">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>

        {/* Button */}
        <button className="hidden md:block bg-[#D1AE86] text-black text-sm font-medium px-3 py-3 rounded-md hover:bg-[#c99546] transition">
          Get Link  Free Audit
        </button>
      </div>
    </header>
      <section className=" w-full  bg-[#352B2C]">
        <section className="relative max-w-[1550px] mx-auto text-white min-h-[810px] overflow-hidden">
          <div className=" justify-between flex ">
            <div className=" flex justify-between align-middle">
              {/* Left vertical logo + tagline */}
              <div className="relative   flex items-start">
                {/* LEFT PADDING */}
                <div className="ml-10  pt-45 flex">
                  {/* Vertical Caption */}
                  <div className="hidden md:block relative">
                    <div
                      className="absolute top-5 left-0 text-[20px] uppercase tracking-[2.2px]  text-gray-200"
                      style={{
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                      }}
                    >
                      Google Growth Made Simple
                    </div>
                  </div>

                  {/* CHITAL Vertical Text */}
                  <div className="hidden md:flex flex-col items-center text-center tracking-wider select-none ml-6">
                    <div className=" ml-5">
                      <div className="text-[100px] mb-10  font-thin leading-none text-white">
                        CH
                      </div>

                      <div className="text-[100px] mb-10 font-thin leading-none text-white">
                        IT
                      </div>

                      <div className="text-[100px] font-thin leading-none text-white">
                        AL
                      </div>
                    </div>

                    <div className="mt-2 ml-4 text-[30px] opacity-80 text-white tracking-widest">
                      STUDIO
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="pt-35 ml-[444px] z-999">
<img
  src={Bannericon}
  alt=""
  className="w-[550px] h-[400px] banner-side-zoom"
/>

</div>

                <div className=" text-[16px]">
                  <p className="mb-2 ml-10 pt-2">
                    At Chital Studio, we help businesses grow faster through
                    smart Google-based marketing solutions. Our goal is simple
                    to make your business visible, trusted, and profitable
                    online.
                  </p>
                  <p className="ml-10 mt-2">
                    We provide complete setup, optimization, and management for
                    your brand’s Google presence-from Merchant Center to SEO and
                    Ads.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative mt-10 h-[300px] flex items-center px-6">
              {/* LEFT TEXT BOX */}
               <div className="absolute left-6 top-10 space-y-3">

      {/* dynamic message (no design changed) */}
      <div className="bg-white text-black font-extralight px-5 py-3 rounded-xl shadow-lg w-max border border-gray-200">
        {reply}
      </div>

      {/* Buttons */}
      <div className="">
        <div className="mb-3">
          <button
            onClick={showRandomMessage}
            className="bg-white px-5 text-black py-2.5 rounded-xl shadow-md border border-gray-200 
                       hover:bg-gray-50 hover:shadow-lg transition-all text-sm font-medium"
          >
            I have Question
          </button>
        </div>

        <button
          onClick={showRandomMessage}
          className="bg-white px-5 py-2.5 text-black rounded-xl shadow-md border border-gray-200 
                     hover:bg-gray-50 hover:shadow-lg transition-all text-sm font-medium"
        >
          Tell me more
        </button>
      </div>

      {/* icon – untouched */}
     
        {!open && (
        <div
          onClick={() => setOpen(true)}
          className="cursor-pointer w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md border border-gray-200"
        >
          <FiMessageCircle className="w-6 h-6 text-gray-700" />
        </div>
      )}
       <div className="relative">

      {/* Chat Icon */}
    

      {/* Popup Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-10 bg-white rounded-xl shadow-xl p-5 border border-gray-300 w-[260px] space-y-4 z-50">

          {/* Message Bubble */}
          <div className="bg-white text-black font-extralight px-5 py-3 rounded-xl shadow-lg border border-gray-200">
            {reply}
          </div>

          {/* Buttons */}
          <div>
            <div className="mb-3">
              <button
                onClick={showRandomMessage}
                className="bg-white px-5 text-black py-2.5 rounded-xl shadow-md border border-gray-200 
                           hover:bg-gray-50 hover:shadow-lg transition-all text-sm font-medium w-full"
              >
                I have Question
              </button>
            </div>

            <button
              onClick={showRandomMessage}
              className="bg-white px-5 py-2.5 text-black rounded-xl shadow-md border border-gray-200 
                         hover:bg-gray-50 hover:shadow-lg transition-all text-sm font-medium w-full"
            >
              Tell me more
            </button>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="mt-2 text-xs text-gray-500 hover:text-black w-full text-center"
          >
            Close
          </button>
        </div>
      )}

    </div>
    </div>

              {/* RIGHT SOCIAL ICONS */}
  <div className="absolute right-6 flex flex-col gap-4">

  {/* WhatsApp */}
  <Link
    to="https://wa.me/your-number"
    target="_blank"
    className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow 
    hover:scale-110 transition icon-float"
    style={{ animationDelay: "0s" }}   // moves first
  >
    <FaWhatsapp size={26} color="white" />
  </Link>

  {/* Email */}
  <Link
    to="mailto:webdeveloper2324@gmail.com"
    className="w-12 h-12 rounded-full bg-[#fca311] flex items-center justify-center shadow 
    hover:scale-110 transition icon-float"
    style={{ animationDelay: "0.3s" }}  // second delay
  >
    <MdEmail size={26} color="white" />
  </Link>

  {/* Discord */}
  <Link
    to="#"
    className="w-12 h-12 rounded-full bg-[#5865F2] flex items-center justify-center shadow 
    hover:scale-110 transition icon-float"
    style={{ animationDelay: "0.6s" }}  // third delay
  >
    <FaDiscord size={26} color="white" />
  </Link>

</div>


            </div>
          </div>
        </section>
      </section>
      <section className="bg-[#2a2320] py-40 px-4">
        <div className="max-w-[1550px] mx-auto ">
          {/* Top Text */}
          <div className=" flex justify-between">
            <div className="ml-7 mb-6">
              <h2 className="text-white  text-[27px] font-light">
                Chital Studio is delivering measurable ROI <br /> for
                <span className=" font-bold text-[#C8A469]"> 174+ </span>
                successful partners by doing
              </h2>
            </div>

            <div>
              <h3 className="text-white text-3xl mr-7 mt-10">
                <span className="text-blue-400 text-bold">
                  <span className=" text-[#0071BB]">G</span>
                  <span className=" text-[#D41C23]">o</span>
                  <span className=" text-[#F8C00B]">o</span>
                  <span className=" text-[#0071BB]">g</span>
                  <span className=" text-[#12683A]">l</span>
                  <span className=" text-[#F8C00B]">e</span>
                </span>{" "}
                merchant Fix,{" "}
                <span className="text-blue-400">
                  <span className=" text-[#0071BB]">G</span>
                  <span className=" text-[#D41C23]">o</span>
                  <span className=" text-[#F8C00B]">o</span>
                  <span className=" text-[#0071BB]">g</span>
                  <span className=" text-[#12683A]">l</span>
                  <span className=" text-[#F8C00B]">e</span>
                </span>{" "}
                Ads & SEO
              </h3>
            </div>
          </div>
          {/* Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 mt-10 px-7">
            {shuffled.map((logo, index) => (
              <div
                key={index}
                className="rounded-lg flex items-center justify-center transform transition-all duration-700 ease-in-out hover:scale-105"
              >
                <img
                  src={logo}
                  alt="partner logo"
                  className="w-90 h-40 object-contain opacity-0 animate-fadeIn"
                  loading="lazy" // <-- Lazy loading added
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tailwind Animation */}
        <style jsx>{`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.7s ease-in-out forwards;
          }
        `}</style>
      </section>
      <section className=" bg-[#EBEBEC]">
        <div className="max-w-[1500px] mx-auto px-4">
          {/* Title */}
          <div className="text-center pt-30 pb-20">
            <p className="text-5xl   text-gray-800">
              Our <span className="text-black font-bold">Services</span>
            </p>
          </div>

          {/* Icons Row */}
          <div className="flex justify-around md:justify-center gap-100 mb-16">
            <img src={SEO} alt="SEO" className="w-30 h-25" />
            <img src={GIconSMS} alt="GMC" className="w-30 h-25" />
            <img src={Spiker} alt="Ads" className="w-30 h-25" />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 – SEO */}
            <div className="border border-gray-300 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-[#C8A46C] hover:scale-[1.02] transition duration-300">
              <h5 className="text-xl font-semibold mb-3">
                SEO (Search Engine Optimization)
              </h5>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We don’t just optimize-we re-engineer your digital presence. Our
                specialized SEO methodology pinpoints high-value keywords and
                audience intent, guaranteeing that every ranking improvement
                brings highly qualified, conversion-ready traffic. Move beyond
                generic visibility; achieve precise targeting and sustainable,
                measurable growth in search engine dominance.
              </p>

                 <Link to={"/seo-details"}>

      <div className="flex items-center gap-2 text-[#C8A46C] font-medium cursor-pointer hover:underline">
        <p>View Details</p>
        <span>➜</span>
      </div>
    </Link>
            </div>

            {/* Card 2 – Google Merchant Center */}
            <div className="border border-gray-300 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-[#C8A46C] hover:scale-[1.02] transition duration-300">
              <h5 className="text-xl font-semibold mb-3">
                Google Merchant Center Fixing
              </h5>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Keep your e-commerce business running smoothly. If your Google
                Shopping Ads depend on Google Merchant Center (GMC), then
                account suspension or product disapproval can be Link  major
                setback. Link  suspended listing means Link  stopped revenue flow. Our
                expert service provides fast and permanent solutions to your GMC
                issues-so your products stay active, approved, and ready to
                sell.
              </p>

              <Link to="/gmc-details">
      <div className="flex items-center gap-2 text-[#C8A46C] font-medium cursor-pointer hover:underline">
        <p>View Details</p>
        <span>➜</span>
      </div>
    </Link>
            </div>

            {/* Card 3 – Google + Social Ads */}
            <div className="border border-gray-300 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-[#C8A46C] hover:scale-[1.02] transition duration-300">
              <h5 className="text-xl font-semibold mb-3">
                Google & Social Media Ads
              </h5>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                When your product or service needs instant reach, Google Ads
                (PPC) and Social Media Ads are the most powerful promotional
                tools. We know every click matters, so we build an optimized,
                ROI-focused paid strategy delivering maximum returns at minimum
                cost. By combining both platforms, we ensure full coverage-when
                customers search on Google and when they scroll on social media,
                your brand is always visible.
              </p>

          <Link to="/ads-details">
      <div className="flex items-center gap-2 text-[#C8A46C] font-medium cursor-pointer hover:underline">
        <p>View Details</p>
        <span>➜</span>
      </div>
    </Link>
            </div>
          </div>
        </div>
        <section className="bg-[#352B2C] text-[#e6d7b7] py-40 mt-40">
          <div className="max-w-[1500px] mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left column text */}
              <div className="w-full lg:w-2/3">
                <h1 className="text-4xl md:text-5xl font-semibold text-[#B1915F] leading-tight mb-6">
                  We Build the <span className="font-bold">Bridge.</span> You
                  Handle the <span className="font-bold">Business</span>
                </h1>

               <p className="text-[#C2BEBF] text-[18.50px] max-w-[480px] leading-relaxed">
  Let Chital Studio be the bridge between your business 
  and high-intent customers. Stop chasing clients. We optimize your
  channels to make the right clients chase you.
</p>


                <div className="mt-20">
                  <Link 
                    to="#"
                    className="inline-block bg-[#d4b77a] text-[#2b1e1e] px-5 py-3 rounded-md font-medium shadow-sm hover:shadow-md transition-shadow"
                  >
                    Get Link  Free Audit
                  </Link >
                </div>
              </div>

              {/* Right column bubbles */}
            <div className="w-full lg:w-1/2 relative flex items-center justify-center min-h-[380px]">

  {/* 91% top-right */}
  <div className="absolute top-0 right-40 w-36 h-36 
      bg-[#87734f]
      backdrop-blur-[20px] 
      border border-white/5
      shadow-[0_0_40px_rgba(212,192,140,0.45)]
      rounded-full flex flex-col items-center justify-center">
    <span className="text-3xl font-bold text-white">91%</span>
    <span className="text-xs mt-1 text-white">Retention Rate</span>
  </div>

  {/* 87% middle-left */}
  <div className="absolute top-24 left-10 w-36 h-36 
      bg-[#b6b6b6] 
      backdrop-blur-[12px] 
      border border-white/10
      shadow-[0_0_40px_rgba(217,217,217,0.45)]
      rounded-full flex flex-col items-center justify-center">
    <span className="text-3xl font-bold text-white">87%</span>
    <span className="text-xs mt-1 text-center text-white">
      E-commerce <br /> Business Growth
    </span>
  </div>

  {/* 53% bottom-right */}
  <div className="absolute bottom-0 right-40 w-36 h-36 
      bg-[#985f4e] 
      backdrop-blur-[12px] 
      border border-white/10
      shadow-[0_0_40px_rgba(197,122,99,0.45)]
      rounded-full flex flex-col items-center justify-center">
    <span className="text-3xl font-bold text-white">53%</span>
    <span className="text-xs mt-1 text-center text-white">
      Annual <br /> Organic Traffic
    </span>
  </div>

</div>

            </div>

            {/* Mobile version bubbles */}
            <div className="mt-10 lg:hidden flex justify-center gap-6">
              <div className="bg-[#b98f56] text-[#2b1e1e] rounded-full w-20 h-20 flex items-center justify-center font-semibold">
                91%
              </div>
              <div className="bg-[#c9c9c9] text-[#2b2b2b] rounded-full w-20 h-20 flex items-center justify-center font-semibold">
                87%
              </div>
              <div className="bg-[#b86b63] text-white rounded-full w-20 h-20 flex items-center justify-center font-semibold">
                53%
              </div>
            </div>
          </div>
        </section>
         <section className="bg-[#5A3B2E] w-full py-40  flex justify-center items-center">
 <div className="bg-[#E6E7E8] max-w-[1550px] w-full mx-auto mt-12 shadow-xl px-16 pt-20 rounded-t-3xl relative">

  <div className="flex items-end gap-50 relative">

    {/* Left Image */}
    <div className="flex-shrink-0 ml-30 mt-50">
      <img src={Letterr} alt="mailbox" className="w-40" />
    </div>

    {/* Right Text */}
    <div className="ml-20 pt-7 mb-6">
      <h2 className="text-5xl mb-10 md:text-7xl font-semibold text-[#4A2E21] leading-snug">
        Let's create your <br />
        <span className="bg-[#3e281d] text-[#a96e55] mb-2.5 text-center px-2 rounded-md">growth</span> plan!
      </h2>

      <p className="text-base md:text-lg text-[#4A2E21] mt-5 leading-relaxed">
        to book your free consultation, enter your preferred time below,
        or email us directly.
      </p>

      <p className="mt-6 text-[#4A2E21] text-lg md:text-xl">
        sales@chital.com
      </p>
    </div>

  </div>

  {/* 🔥 Bottom line fix */}
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1800px] rounded-full h-1 bg-[#C8A469]"></div>


</div>


    </section>
      </section>
    </section>
  );
};

export default Header;
