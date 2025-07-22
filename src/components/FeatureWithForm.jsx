import React from "react";

const FeatureWithForm = () => {
  return (
    <section className="bg-white pt-12 pb-16 md:pb-0 overflow-hidden font-inter">
      {/* Heading */}
      <h2 className="text-[28px] md:text-[48px] font-medium leading-[36px] md:leading-[56px] text-black text-center mb-12 px-4 md:px-10">
        We’re with you – <br className="md:hidden" />
        from the first question <br className="md:hidden" />
        to the first success
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 md:px-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center lg:justify-start mt-10 md:mt-0">
          <img
            src="/images/feature-full.png"
            alt="Feature visual"
            className="w-full max-w-[320px] md:max-w-[500px] lg:max-w-[679px] h-auto object-contain"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 flex justify-end mt-10 md:mt-0">
          <form className="space-y-6 w-full max-w-md">
            {/* Name */}
            <div className="flex flex-col">
              <label className="mb-2 text-[14px] font-normal text-gray-700">Name*</label>
              <input
                type="text"
                required
                className="w-full h-[38px] px-[13px] py-[9px] border border-gray-300 rounded-[6px] text-black bg-white"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-2 text-[14px] font-normal text-gray-700">Email*</label>
              <input
                type="email"
                required
                className="w-full h-[38px] px-[13px] py-[9px] border border-gray-300 rounded-[6px] text-black bg-white"
              />
            </div>

            {/* Mobile */}
            <div className="flex flex-col">
              <label className="mb-2 text-[14px] font-normal text-gray-700">Mobile Number*</label>
              <input
                type="tel"
                required
                className="w-full h-[38px] px-[13px] py-[9px] border border-gray-300 rounded-[6px] text-black bg-white"
              />
            </div>

            {/* State */}
            <div className="flex flex-col">
              <label className="mb-2 text-[14px] font-normal text-gray-700">State*</label>
              <input
                type="text"
                required
                className="w-full h-[38px] px-[13px] py-[9px] border border-gray-300 rounded-[6px] text-black bg-white"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#D48A45] text-white font-bold text-[14px] h-[37px] w-[114.22px] rounded-[8px] hover:brightness-110 transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FeatureWithForm;
