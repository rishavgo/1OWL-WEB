import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom"; // 👈 import Link from react-router-dom
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0F172A] text-white px-6 py-4 relative font-inter">
      <div className="flex justify-between items-center">
        {/* Logo Center on Mobile */}
        <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
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

        {/* Logo Left on Desktop */}
        <div className="hidden md:flex items-center space-x-2">
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
              <ScrollLink
                to="product"
                smooth={true}
                duration={500}
                offset={-80}
              >
                +Product
              </ScrollLink>
            </li>
            <li className="hover:underline cursor-pointer">
              <RouterLink to="/about-us">About Us</RouterLink> {/* 👈 goes to AboutUs page */}
            </li>
          </ul>
          <ScrollLink
            to="form"
            smooth={true}
            duration={500}
            offset={-80}
          >
            <button className="ml-4 bg-[#D48A45] text-white px-5 py-2 rounded text-[14px] font-bold leading-[20px] hover:bg-[#c97937] transition">
              Let's Started
            </button>
          </ScrollLink>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden ml-auto z-20"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1 cursor-pointer">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-[#0F172A] text-center space-y-4 py-4 rounded shadow-lg">
          <div className="text-[16px] font-normal leading-6 hover:underline cursor-pointer">
            <ScrollLink
              to="product"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setMenuOpen(false)}
            >
              +Product
            </ScrollLink>
          </div>
          <div className="text-[16px] font-normal leading-6 hover:underline cursor-pointer">
            <RouterLink to="/about-us" onClick={() => setMenuOpen(false)}> {/* 👈 goes to AboutUs page */}
              About Us
            </RouterLink>
          </div>
          <ScrollLink
            to="form"
            smooth={true}
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
