import React, { useState } from "react";
import { toast } from "react-toastify";

const BookMeForm = ({ bookFor }) => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
    budget: "",
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
    console.log("Booking Submitted:", formData);
    toast.success("Booking request sent successfully!");
  };

  return (
    <section className="py-20 bg-base-200" id="book">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{bookFor}</h2>
          <p className="text-base-content/70">
            Ready to start your project? Fill out the form below and let’s make
            it happen.
          </p>
        </div>

        {/* Form Card */}
        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="grid gap-6">
              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input input-bordered w-full"
                value={formData.name}
                onChange={handleChange}
                required
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="input input-bordered w-full"
                value={formData.email}
                onChange={handleChange}
                required
              />

              {/* Service */}
              <select
                name="service"
                className="select select-bordered w-full"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">--Select Service--</option>
                <option value={"Web Development"}>Web Development</option>
                <option value={"UI/UX Dsign"}>UI/UX Design</option>
                <option value={"Mobile developmment"}>Mobile Development</option>
              </select>

              {/* Date */}
              <input
                type="date"
                name="date"
                className="input input-bordered w-full"
                value={formData.date}
                onChange={handleChange}
              />

              {/* Budget */}
              <input
                type="number"
                name="budget"
                placeholder="Estimated Budget ($)"
                className="input input-bordered w-full"
                value={formData.budget}
                onChange={handleChange}
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                className="textarea textarea-bordered w-full h-32"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-full">
                Submit Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookMeForm;
