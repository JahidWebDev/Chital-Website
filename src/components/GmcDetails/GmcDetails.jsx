import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Chittal-Logo.png";
import gmcimg from "../../images/GmcDetailsImg/Home-Bag-Gogole-Coinicon.png";
import mangoogle from "../../images/GmcDetailsImg/Man-Google-Cross-Eror.png";

const GmcDetails = () => {
    // ************************************
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHideHeader(true); // scrolling down → hide header
      } else {
        setHideHeader(false); // scrolling up → show header
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
//   ***********************************
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
          <nav className="ml-auto mr-20">
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
            Get Link Free Audit
          </button>
        </div>
      </header>
<section className="py-60 bg-white">
  <div className="max-w-[1550px] mx-auto flex flex-col lg:flex-row items-start gap-24 px-10">

    {/* LEFT SIDE */}
    <div className="lg:w-1/2 space-y-2">

      {/* HEADINGS */}
       <h5 className="text-[#B38B00] text-2xl font-semibold">Canadian</h5>

      {/* GOOGLE LOGO TEXT (BIGGER) */}
      <h1 className="text-7xl font-bold leading-tight">
        <span className="text-[#4285F4]">G</span>
        <span className="text-[#EA4335]">o</span>
        <span className="text-[#FBBC05]">o</span>
        <span className="text-[#4285F4]">g</span>
        <span className="text-[#34A853]">l</span>
        <span className="text-[#EA4335]">e</span>
      </h1>

      {/* merchant Center (BIGGER LIKE SCREENSHOT) */}
      <div className="flex items-end gap-3">
        <h2 className="text-5xl text-gray-500 font-medium tracking-wide">
          Merchant Center
          
        </h2>
         
        {/* Fixing Service small, right aligned */}
        
      </div>
          <span className="text-xl ml-64 font-semibold text-gray-500 pb-2">
          Fixing Service
        </span>
      {/* PARAGRAPH BLOCK */}
      <p className="text-gray-800 mt-10 leading-relaxed text-xl font-medium">
        Many e-commerce businesses struggle with Google Merchant Center issues such as account
        suspension, product disapprovals, policy violations, and price/stock mismatches.
        <span className="font-semibold text-gray-900">
          {" "}Our Google Merchant Center Fixing Service provides a complete and permanent
          solution to make your account fully compliant and stable.
        </span>
      </p>

      <p className="text-gray-700 leading-relaxed text-lg">
        We conduct a full audit of your GMC account to identify all policy or data-related issues.
        Your website, landing pages, refund/return policy, contact details, and checkout security
        are optimized according to Google Merchant Center guidelines to ensure long-term compliance.
      </p>
    </div>

    {/* RIGHT SIDE */}
    <div className="lg:w-1/2 flex flex-col items-center">

      {/* BIGGER IMAGE */}
      <img
        src={gmcimg}
        alt="GMC Fixing Illustration"
        className="w-[520px] max-w-full object-contain"
      />

      {/* CTA TEXT */}
      <div className="mt-10 text-center">
        <p className="text-2xl font-semibold text-gray-800 leading-snug">
          Recover. Optimize <br />
          <span className="text-3xl font-bold text-blue-900">
            Grow Your E-Commerce Sales.
          </span>
        </p>
      </div>

    </div>

  </div>
</section>
    
   <section className="w-full bg-gradient-to-r from-[#0B2A73] via-[#0E3A8A] to-[#0A4BAF] text-white py-35">
  <div className="max-w-[1550px] mx-auto px-6">

    {/* Top Heading */}
    <h1 className="text-center text-2xl md:text-3xl font-bold mb-20">
      Get Your Google Merchant Center Back LIVE - Fast & Guaranteed
    </h1>

    {/* Three Column Main Row */}
    <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-1">

      {/* Left Text */}
     <div className="text-center leading-relaxed">
  <p className="text-[17px] font-semibold">
    Trusted GMC Reinstatement <br />
    & Product Feed <br /> Optimization Experts
  </p>
</div>


      {/* Center Image */}
      <div className="flex justify-center">
  <img
    src={mangoogle}
    alt="Google Merchant Illustration"
    className="w-[350px] md:w-[450px] lg:w-[px] drop-shadow-2xl"
  />
</div>


      {/* Right Paragraph */}
      <div className="leading-relaxed text-[15px] opacity-95">
        <p>
          All product feed errors - GTIN, MPN, brand, pricing, availability,
          incorrect categories, image issues - are fixed and optimized based
          on Google Shopping standards. This boosts your product visibility,
          improves feed quality, and reduces the chances of future disapprovals
          or suspensions.
        </p>
      </div>

    </div>

    {/* Bottom Heading */}
    <h2 className="text-center text-2xl md:text-3xl font-bold mt-20 mb-6">
      Misrepresentation Suspension? We Fix It Permanently
    </h2>

    {/* Bottom Paragraph */}
    <p className="text-center max-w-4xl mx-auto text-[15px] leading-relaxed opacity-95">
      If your GMC account is suspended for <span className="font-semibold">“Misrepresentation”</span> 
      or <span className="font-semibold">“Unacceptable Business Practices,”</span> we identify the 
      root cause and submit a strong and accurate review request on your behalf. Our reinstatement 
      process ensures your account gets reactivated quickly and your Google Shopping ads go live again.
    </p>

  </div>
</section>





    </section>
  );
};

export default GmcDetails;
