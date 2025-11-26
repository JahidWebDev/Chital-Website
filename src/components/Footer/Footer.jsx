import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import logo from "../../images/Chittal-Logo.png";
const Footer = () => {
  return (
<footer className="bg-[#5A3B2E] text-[#C8A46C] pt-20 pb-10">
  <div className="max-w-[1550px] mx-auto px-6">

    {/* Top Section */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

      {/* Logo + Social */}
      <div>
        <img 
          src={logo}   /* Replace with your logo */
          alt="Chital"
          className="w-80 mb-5"
        />

        <p className="text-lg mb-3">Follow Chital Media —</p>

        <div className="flex gap-3 text-3xl">
          <FaFacebook className="cursor-pointer hover:text-white" />
          <FaInstagram className="cursor-pointer hover:text-white" />
          <FaLinkedin className="cursor-pointer hover:text-white" />
          <FaYoutube className="cursor-pointer hover:text-white" />
        </div>
      </div>

      {/* Support */}
      <div className="ml-20">
        <h4 className="font-semibold text-2xl mb-4">Support</h4>
        <ul className="space-y-2 text-lg text-[#A39B97]">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">Services</li>
          <li className="hover:text-white cursor-pointer">Case Study</li>
          <li className="hover:text-white cursor-pointer">About Us</li>
          <li className="hover:text-white cursor-pointer">FAQs</li>
          <li className="hover:text-white cursor-pointer">Contact Us</li>
        </ul>
      </div>

      {/* Services */}
      <div className="ml-20">
        <h4 className="font-semibold text-2xl mb-4">Services</h4>
        <ul className="space-y-2 text-lg text-[#A39B97]">
          <li className="hover:text-white cursor-pointer">SEO</li>
          <li className="hover:text-white cursor-pointer">GMC Fixing</li>
          <li className="hover:text-white cursor-pointer">Google Ads</li>
          <li className="hover:text-white cursor-pointer">Social Media Ads</li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="ml-20">
        <h4 className="font-semibold text-2xl mb-4">Chital Studio</h4>
        <p className="text-lg leading-relaxed text-[#A39B97]">
          4491 7 Ave SE <br />
          Calgary <br />
          AB T2A 5E4 <br /> 
          Canada
        </p>

        <p className="mt-4 text-lg text-[#A39B97]">sales@chital.com</p>
        <p className="text-lg text-[#A39B97]">+1 565 455 66587</p>
      </div>
    </div>
   

    {/* Bottom Navigation Links */}
    <div className="flex flex-wrap justify-end gap-13 text-lg text-[#C8A46C] opacity-90 py-10 mt-10 tracking-wide mr-25">
      <button className="hover:text-white duration-200">Legal notice</button>
      <button className="hover:text-white duration-200">Privacy Policy</button>
      <button className="hover:text-white duration-200">Security</button>
      <button className="hover:text-white duration-200">Terms & Conditions</button>
      <button className="hover:text-white duration-200">Cookie setting</button>
      <button className="hover:text-white duration-200">Accessibility</button>
    </div>

    {/* Copyright */}
    <div className="flex flex-col items-center gap-2 text-lg opacity-80 text-[#A39B97] ml-80">
      <p className="flex items-center gap-2">
        Copyright © 2025 
        <img 
          src={logo}
          alt="Chital logo"
          className="w-27 mx-[8px]"
        />
        All Rights Reserved.
      </p>
    </div>

  </div>
</footer>


  );
};

export default Footer;
