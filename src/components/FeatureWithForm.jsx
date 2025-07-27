import React, { useState } from "react";
import axios from "axios";

const FeatureWithForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    state: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [modal, setModal] = useState({
    show: false,
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const closeModal = () => {
    setModal({ show: false, type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const apiURL = "http://localhost:5000/api/leads";

    try {
      await axios.post(apiURL, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setModal({
        show: true,
        type: "success",
        message: "Your lead has been submitted successfully!",
      });
      setFormData({ name: "", mobile: "", email: "", state: "" });
    } catch (error) {
      setModal({
        show: true,
        type: "error",
        message:
          error.response?.data?.message ||
          "Something went wrong. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="form" className="bg-white pt-12 pb-10 overflow-hidden font-inter">
      {/* ✅ Responsive Heading */}
      <h2 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[40px] xl:text-[48px] font-medium text-black text-center mb-12 px-4 max-w-[90%] sm:max-w-[500px] md:max-w-[800px] lg:max-w-full mx-auto leading-tight whitespace-normal lg:whitespace-nowrap">
        We’re with you – from the first question to the first success
      </h2>

      {/* ✅ Layout Container */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 md:px-8">
        {/* ✅ Image */}
        <div className="w-full md:w-1/2 flex justify-center lg:justify-start mt-10 md:mt-0">
          <img
            src="/images/feature-full.png"
            alt="Feature visual"
            className="w-full max-w-[320px] md:max-w-[500px] lg:max-w-[679px] h-auto object-contain"
          />
        </div>

        {/* ✅ Form */}
        <div className="w-full md:w-1/2 flex justify-end mt-10 md:mt-0">
          <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
            {["name", "mobile", "email", "state"].map((field) => (
              <div className="flex flex-col" key={field}>
                <label className="mb-2 text-[14px] font-normal text-gray-700 capitalize">
                  {field}*
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full h-[38px] px-[13px] py-[9px] border border-gray-300 rounded-[6px] text-black bg-white"
                />
              </div>
            ))}

            {/* ✅ Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={submitting}
                className="bg-[#D48A45] text-white font-bold text-[14px] h-[37px] w-[114.22px] rounded-[8px] hover:brightness-110 transition-all duration-300"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ✅ Modal */}
      {modal.show && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40 transition-opacity duration-300">
          <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 relative animate-fadeIn">
            <div className="flex items-start gap-3">
              <div
                className={`rounded-full p-2 ${
                  modal.type === "success"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {modal.type === "success" ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {modal.type === "success"
                    ? "Submission Successful"
                    : "Submission Failed"}
                </h3>
                <p className="text-sm text-gray-600">{modal.message}</p>
              </div>
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={closeModal}
                className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-all duration-200 text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeatureWithForm;
