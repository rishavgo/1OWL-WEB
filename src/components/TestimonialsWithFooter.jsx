import React from "react";

const testimonials = [
  {
    quote:
      "Thanks to 1OWL, managing our hotel’s finances feels effortless — no more paper logs or end-of-month surprises.",
    by: "Karan Mehta, General Manager, Blue Horizon Hotel",
  },
  {
    quote:
      "Before 1OWL, I never knew exactly how much I was spending on staff meals. Now it’s all tracked.",
    by: "Rajesh Sharma, Hotel Owner, Indore",
  },
  {
    quote:
      "Earlier, I spent hours chasing bills and receipts. With 1OWL, everything is organised and just a tap away.",
    by: "Rohit Sinha, Operations Head, Lakeview Residency",
  },
];

const TestimonialsWithFooter = () => {
  return (
    <>
      {/* Transition Strip */}
      <div className="bg-[#0F172A] h-16 w-full"></div>

      {/* Testimonials Section */}
      <section className="font-inter text-center">
        <section className="bg-white px-6 py-20">
          <h3 className="text-[36px] md:text-[48px] font-medium text-black mb-12">
            Why Hotel Owners Love <span className="text-[#D48A45]">1OWL</span>
          </h3>

          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-2 gap-6 w-full max-w-6xl mx-auto">
            {/* Top 2 cards */}
            {testimonials.slice(0, 2).map((t, i) => (
              <div
                key={i}
                className="bg-[#97A83A] bg-opacity-70 rounded-[16px] p-6 text-left text-[22px] text-black leading-relaxed shadow flex flex-col justify-between min-h-[200px] h-full"
              >
                <p className="mb-4">“{t.quote}”</p>
                <span className="font-semibold text-[20px]">— {t.by}</span>
              </div>
            ))}

            {/* Full-width bottom card */}
            <div className="col-span-2 flex justify-center">
              <div className="bg-[#97A83A] bg-opacity-70 rounded-[16px] p-6 text-left text-[22px] text-black leading-relaxed shadow flex flex-col justify-between min-h-[200px] w-full max-w-[649px]">
                <p className="mb-4">“{testimonials[2].quote}”</p>
                <span className="font-semibold text-[20px]">— {testimonials[2].by}</span>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="md:hidden flex flex-col gap-6 w-full max-w-2xl mx-auto">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-[#97A83A] bg-opacity-70 rounded-[16px] p-6 text-left text-[20px] text-black leading-relaxed shadow flex flex-col justify-between min-h-[200px] h-full"
              >
                <p className="mb-4">“{t.quote}”</p>
                <span className="font-semibold text-[18px]">— {t.by}</span>
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#0F172A] text-white py-6 px-4">
        <div className="text-[14px] md:text-[16px] leading-6 font-medium font-inter text-center max-w-[100%] mx-auto flex flex-wrap md:flex-nowrap justify-center items-center gap-x-4 gap-y-2">
          <span>2025 10WL Pvt. Ltd., India</span>
          <a href="#" className="underline hover:opacity-80">Privacy</a>
          <a href="#" className="underline hover:opacity-80">Compliance</a>
          <a href="#" className="underline hover:opacity-80">Terms & Conditions</a>
          <a href="#" className="underline hover:opacity-80">Customer Support</a>
        </div>
      </footer>
    </>
  );
};

export default TestimonialsWithFooter;
