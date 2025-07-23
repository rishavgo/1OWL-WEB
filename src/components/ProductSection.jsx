const ProductSection = () => {
  return (
    <>
      {/* Spacer between Form and Product */}
      <div className="bg-[#0B1320] h-12 w-full"></div>

      <section
        id="product" // 👈 ADD THIS
        className="bg-gray-50 py-12 flex justify-center"
      >
        <div className="bg-[#C4D68F] bg-opacity-70 rounded-[16px] shadow p-10 max-w-2xl w-full text-center">
          <h2 className="text-[36px] md:text-[48px] font-semibold text-[#0F172A] mb-4">
            Product
          </h2>
          <p className="text-[20px] text-[#555E70]">Coming Soon...</p>
        </div>
      </section>

    </>
  );
};

export default ProductSection;
