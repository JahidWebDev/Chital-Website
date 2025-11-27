import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../images/Chittal-Logo.png";

const SeoDetails = () => {
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Header hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setHideHeader(currentScroll > lastScroll && currentScroll > 50);
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <section>
      <header
        className={`fixed w-full top-0 z-[200] py-7 px-6 bg-[#352B2C] shadow-lg 
        transition-all duration-300 ${hideHeader ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="max-w-[1550px] mx-auto flex justify-between items-center">

          {/* Logo */}
          <Link to="/">
            <img src={logo} className="h-22 w-auto object-contain cursor-pointer" alt="logo" />
          </Link>

          {/* Desktop Menu (No Change for lg) */}
          <nav className="hidden md:block lg:ml-120 mt-4">
            <ul className="flex gap-8 text-[16px] text-gray-300">
              <li className="text-[#C8A46C]"><Link to="/">Home</Link></li>
              <li className="hover:text-[#C8A46C]"><Link to="/services">Services</Link></li>
              <li className="hover:text-[#C8A46C]"><Link to="/case-study">Case Study</Link></li>
              <li className="hover:text-[#C8A46C]"><Link to="/about">About Us</Link></li>
              <li className="hover:text-[#C8A46C]"><Link to="/faqs">FAQs</Link></li>
              <li className="hover:text-[#C8A46C]"><Link to="/contact">Contact Us</Link></li>
            </ul>
          </nav>

          {/* Desktop Button */}
          <button className="hidden md:block bg-[#D1AE86] text-black text-sm 
            px-4 py-3 rounded-md hover:bg-[#c99546] transition">
            Get Link  Free Audit
          </button>

          {/* Mobile Menu Icon (Now visible!) */}
          <button 
            className="md:hidden text-white text-3xl z-[300]" 
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu />
          </button>
        </div>

        {/* Mobile Drawer */}
        <div className={`fixed top-0 right-0 h-full w-64 bg-[#352B2C] text-white 
          shadow-xl p-6 duration-500 z-[500]
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
          
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Menu</h2>
            <FiX className="text-3xl cursor-pointer" onClick={() => setMenuOpen(false)} />
          </div>

          <ul className="flex flex-col gap-6 mt-10 text-lg">
            <li><Link onClick={()=>setMenuOpen(false)} to="/">Home</Link></li>
            <li><Link onClick={()=>setMenuOpen(false)} to="/services">Services</Link></li>
            <li><Link onClick={()=>setMenuOpen(false)} to="/case-study">Case Study</Link></li>
            <li><Link onClick={()=>setMenuOpen(false)} to="/about">About Us</Link></li>
            <li><Link onClick={()=>setMenuOpen(false)} to="/faqs">FAQs</Link></li>
            <li><Link onClick={()=>setMenuOpen(false)} to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Overlay */}
        {menuOpen && (
          <div 
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[400] md:hidden"
          />
        )}
      </header>

      {/* Dummy content to scroll */}
      <section className="pt-32">
        <div className="py-40 text-center text-white text-3xl">
          hhhhhhhhhjfgdftrdfruhkdegdfsa
        </div>
      </section>
    </section>
  );
};

export default SeoDetails;
