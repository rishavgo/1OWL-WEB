import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0F172A] text-white px-6 py-4 relative font-inter">
      {/* Flex Container */}
      <div className="flex justify-between items-center">
        {/* Logo - works for all screens now */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/owl.png"
            alt="Logo"
            className="w-[60px] h-[58px] object-contain"
          />
          <span
            className="text-[32px] font-medium leading-[36px]"
            style={{ color: "#D48A45" }}
          >
            1OWL
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 ml-auto">
          <ul className="flex space-x-6 text-[16px] font-normal leading-6">
            <li className="hover:underline cursor-pointer">
              <ScrollLink to="product" smooth={true} duration={500} offset={-80}>
                +Product
              </ScrollLink>
            </li>
            <li className="hover:underline cursor-pointer">
              <RouterLink to="/about-us">About Us</RouterLink>
            </li>
          </ul>
          <ScrollLink to="form" smooth={true} duration={500} offset={-80}>
            <button className="ml-4 bg-[#D48A45] text-white px-5 py-2 rounded text-[14px] font-bold leading-[20px] hover:bg-[#c97937] transition">
              Let's Started
            </button>
          </ScrollLink>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-6 bg-[#0F172A] text-center py-6 rounded shadow-lg">
          <div className="text-[16px] font-normal leading-6 hover:underline cursor-pointer mb-4">
            <ScrollLink
              to="product"
              smooth
              duration={500}
              offset={-80}
              onClick={() => setMenuOpen(false)}
            >
              +Product
            </ScrollLink>
          </div>
          <div className="text-[16px] font-normal leading-6 hover:underline cursor-pointer mb-4">
            <RouterLink to="/about-us" onClick={() => setMenuOpen(false)}>
              About Us
            </RouterLink>
          </div>
          <ScrollLink
            to="form"
            smooth
            duration={500}
            offset={-80}
            onClick={() => setMenuOpen(false)}
          >
            <button className="bg-[#D48A45] text-white px-5 py-2 rounded text-[14px] font-bold leading-[20px] hover:bg-[#c97937] transition">
              Get Started
            </button>
          </ScrollLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
