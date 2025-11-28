import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import logo from "../../images/Chittal-Logo.png";
import optimization from "../../images/SeoDetailsimg/Man-Optimization-Ranking .png";
import SEOGraphic from "../../images/SeoDetailsimg/SEO.png";

const SeoDetails = () => {
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Hide Navbar on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setHideHeader(currentScroll > lastScroll && currentScroll > 50);
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed banner w-full top-0 z-[200] py-7 px-6 bg-[#352B2C] shadow-lg
        transition-all duration-300 ${hideHeader ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="max-w-[1550px] mx-auto flex justify-between items-center">
          <Link to="/">
            <img src={logo} className="h-20 w-auto object-contain cursor-pointer" alt="logo" />
          </Link>

          <nav className="hidden md:block lg:ml-120">
            <ul className="flex gap-8 text-[16px] text-gray-300">
              <li className="text-[#C8A46C]"><Link to="/">Home</Link></li>
              <li className="hover:text-[#C8A46C]"><Link to="/services">Services</Link></li>
              <li className="hover:text-[#C8A46C]"><Link to="/case-study">Case Study</Link></li>
              <li className="hover:text-[#C8A46C]"><Link to="/about">About Us</Link></li>
              <li className="hover:text-[#C8A46C]"><Link to="/faqs">FAQs</Link></li>
              <li className="hover:text-[#C8A46C]"><Link to="/contact">Contact Us</Link></li>
            </ul>
          </nav>

          <button className="hidden md:block bg-[#D1AE86] text-black text-sm px-4 py-3 rounded-md hover:bg-[#c99546] transition">
            Get Link Free Audit
          </button>

          <button className="md:hidden text-white text-3xl" onClick={() => setMenuOpen(true)}>
            <FiMenu />
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className={`fixed top-0 right-0 h-full w-64 bg-[#352B2C] text-white shadow-xl p-6 duration-500 z-[500] ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Menu</h2>
            <FiX className="text-3xl cursor-pointer" onClick={() => setMenuOpen(false)} />
          </div>
          <ul className="flex flex-col gap-6 mt-10 text-lg">
            {["/", "/services", "/case-study", "/about", "/faqs", "/contact"].map((link, idx) => (
              <li key={idx}>
                <Link onClick={() => setMenuOpen(false)} to={link}>
                  {["Home", "Services", "Case Study", "About Us", "FAQs", "Contact Us"][idx]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[400] md:hidden"
          />
        )}
      </header>

      {/* =================== SECTION CONTENT =================== */}
      <section className="py-28 bg-white mt-28">
        <div className="max-w-[1550px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-7">
            <h3 className="text-[45px] font-semibold text-gray-900 leading-snug">
              Why Do You Need Professional <span className="font-bold">SEO</span> Services?
            </h3>
            <p className="text-[24px] text-gray-900 leading-[36px]">
              <span className="font-bold text-gray-800">Build Trust & Credibility,</span> Ranking on the first page instantly increases your brand’s authority.
            </p>
            <p className="text-[20px] text-gray-700 leading-[34px]">
              Our experienced team uses proven SEO strategies to position your website at the top of search results helping you attract high-quality traffic.
            </p>
            <p className="text-[20px] text-gray-700 leading-[34px]">
              To keep you ahead of your competitors, we analyze what your competitors are doing and build strategic plans.
            </p>
            <p className="text-[20px] text-gray-700 leading-[34px]">
              Once your website is properly optimized, the results continue for months and even years. We provide customized SEO strategies.
            </p>
          </div>

          <div className="flex items-center justify-center w-full">
            <img src={optimization} alt="SEO Optimization" className="w-full max-w-[700px] object-contain" loading="lazy" />
          </div>
        </div>

        {/* Floating Icons */}
        <div className="fixed right-6 top-1/2 flex flex-col gap-4 z-50">
         
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

        {/* SEO Services */}
        <section className="bg-[#563727] py-35 mt-7">
          <div className="max-w-[1550px] mx-auto px-6">
            <h1 className="text-center text-[38px] font-semibold text-[#E8C27C] mb-30">
              Our Core SEO Services Include
            </h1>
            <div className="grid md:grid-cols-2 gap-12 text-[#EEDCC2]">
              <div className="space-y-4">
                <h2 className="text-[30px] font-semibold text-white">1. Technical SEO</h2>
                <ul className="space-y-2 text-[20px] leading-9">
                  <li>• Boosting website speed and ensuring full mobile responsiveness</li>
                  <li>• Enhancing site architecture and fixing crawling and indexing issues</li>
                  <li>• Implementing Schema Markup and securing your website with HTTPS</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-[30px] font-semibold text-white">2. On-Page SEO</h2>
                <ul className="space-y-2 text-[20px] leading-9">
                  <li>• Deep keyword research and competitor analysis</li>
                  <li>• Optimizing title tags, meta descriptions, and headings</li>
                  <li>• Creating engaging, user-focused content</li>
                </ul>
              </div>
              <div className="space-y-4 mt-5 md:col-span-2">
                <h2 className="text-[30px] font-semibold text-white">3. Off-Page SEO</h2>
                <ul className="space-y-2 text-[20px] leading-9">
                  <li>• Building strong, relevant backlinks through strategic link building</li>
                  <li>• Increasing authority through guest posting and brand mentions</li>
                  <li>• Local SEO optimization for businesses (Google My Business)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Strategy Section */}
        <section className="bg-[#352B2C] py-20 px-4">
          <div className="max-w-[1550px] mx-auto text-white">
            <h1 className="text-[100px] font-bold leading-tight mb-5 text-[#E8C27C]">
              How Our <br /> SEO Strategy <br /> Works?
            </h1>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-4 text-[27px] leading-relaxed">
                <p className="text-[35px] mb-7">We follow a transparent, result-oriented process</p>
                <ul className="space-y-4 text-[#EEDCC2]">
                  <li className="flex items-start gap-4">
                    <span className="w-3 h-3 bg-[#C8A96A] rounded-full mt-5"></span>
                    Comprehensive audit of your website and competitor performance
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-3 h-3 bg-[#C8A96A] rounded-full mt-5"></span>
                    Developing a customized SEO roadmap based on your business goals
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-3 h-3 bg-[#C8A96A] rounded-full mt-5"></span>
                    Executing technical, on-page, and off-page optimizations
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-3 h-3 bg-[#C8A96A] rounded-full mt-5"></span>
                    Tracking rankings, traffic, and conversions with clear monthly reports
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-3 h-3 bg-[#C8A96A] rounded-full mt-5"></span>
                    Updating strategies based on algorithm changes and performance improvements
                  </li>
                </ul>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img src={SEOGraphic} alt="SEO Graphic" className="max-w-[700px]" />
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default SeoDetails;
