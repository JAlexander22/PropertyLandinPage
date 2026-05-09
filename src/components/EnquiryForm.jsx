import React, { useState } from "react";
import { trackEvent } from "../analytics";

const EnquiryForm = ({ selectedProperty }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyInterest: selectedProperty?.title || "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     trackEvent(
        "form_submitted",
        "Lead",
        formData.propertyInterest
        );
    console.log("New lead captured:", formData);
   
    alert("Thank you. Your enquiry has been submitted.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      propertyInterest: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-16 px-6 bg-gray-100">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Make an Enquiry
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full border p-3 rounded-lg"
          />

          <input
            name="propertyInterest"
            autoComplete="off"
            value={formData.propertyInterest}
            onChange={handleChange}
            placeholder="Property Interested In"
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm;