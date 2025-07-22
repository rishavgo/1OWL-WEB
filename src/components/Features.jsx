const features = [
  {
    title: "Money Flow, Not Just Order Flow",
    desc: "While others track what was sold, we help you track where your money is going - income, expenses, collections, and profit in one place.",
    img: "/images/chart1.png",
  },
  {
    title: "Owner-First Dashboard",
    desc: "Designed for hotel owners, not just staff. Skip the kitchen details — focus on what really matters: your bottom line.",
    img: "/images/chart2.png",
  },
  {
    title: "Smart Expense & Staff Khata Management",
    desc: "Log daily expenses, salaries, and purchases in one place. No more paper diaries or lost entries.",
    img: "/images/chart3.png",
  },
  {
    title: "Instant Reports for GST, Profit, and Audits",
    desc: "One-click reports for your accountant, CA, or bank. Stay ready for audits and tax filings.",
    img: "/images/chart4.png",
  },
];

const Features = () => {
  return (
    <section className="bg-[#0F172A] px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
      {features.map((f, idx) => (
        <div
          key={idx}
          className="bg-white rounded-3xl shadow-lg px-6 py-10 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300"
        >
          {/* Title */}
          <h3 className="font-['Inter'] text-[#D48A45] text-[18px] font-bold leading-[24px] mb-4">
            {f.title}
          </h3>

          {/* Description */}
          <p className="font-['Inter'] text-[#8890A2] text-[16px] font-medium leading-[24px] max-w-[546px] text-center mb-6">
            {f.desc}
          </p>

          {/* Image */}
          <img
            src={f.img}
            alt={f.title}
            className="w-[583px] h-[340px] object-contain"
          />
        </div>
      ))}
    </section>
  );
};

export default Features;
