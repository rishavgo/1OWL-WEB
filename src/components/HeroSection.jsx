import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[#0F172A] text-center px-4 py-20 font-inter">
      {/* Main Title */}
      <h1 className="text-[28px] md:text-[40px] font-semibold uppercase leading-snug text-white mb-10">
        ONE PLATFORM FOR ALL<br />
        YOUR FINANCIAL WORKFLOW
      </h1>

      {/* Top Supporting Text */}
      <p className="text-[#8890A2] text-[16px] md:text-[18px] font-medium leading-relaxed mb-1">
        See your business like never before.
      </p>
      <p className="text-[#8890A2] text-[16px] md:text-[18px] font-medium leading-relaxed mb-10">
        Track what matters, fix what’s broken, and grow smarter.
      </p>

      {/* Button */}
      <div className="mb-12">
        <button className="bg-[#D48A45] hover:bg-orange-600 px-10 py-4 rounded-full text-white text-[16px] font-semibold uppercase tracking-wider transition duration-300">
          What We Do
        </button>
      </div>

      {/* Secondary Heading */}
      <h2 className="text-[28px] md:text-[40px] font-medium text-white mb-6">
        Built to Simplify Business Finances
      </h2>

      {/* Bottom Supporting Text */}
      <p className="text-[#8890A2] text-[16px] md:text-[18px] font-medium leading-relaxed">
        Track income, expenses, and cash flow — all in one place. <br />
        Make smarter business decisions without spreadsheets or confusion.
      </p>
    </section>
  );
};

export default HeroSection;
