import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Date is required"),
  budget: z.string().min(1, "Budget is required").or(z.number().positive("Budget must be positive")),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const BookMeForm = ({ bookFor }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (formData) => {
    try {
      console.log("Booking Submitted:", formData);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      toast.success("Booking request sent successfully!");
      reset();
      throw new Error("Simulated submission error"); // Simulate an error for testing
    } catch (error) {
      toast.error("Failed to send booking request. Please try again.");
    }
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
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
              {/* Name */}
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className={`input input-bordered w-full ${
                    errors.name ? "input-error" : ""
                  }`}
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-error text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className={`input input-bordered w-full ${
                    errors.email ? "input-error" : ""
                  }`}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-error text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Service */}
              <div>
                <select
                  className={`select select-bordered w-full ${
                    errors.service ? "select-error" : ""
                  }`}
                  {...register("service")}
                >
                  <option value="">--Select Service--</option>
                  <option value="Web Development">Web Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Mobile Development">Mobile Development</option>
                </select>
                {errors.service && (
                  <p className="text-error text-sm mt-1">{errors.service.message}</p>
                )}
              </div>

              {/* Date */}
              <div>
                <input
                  type="date"
                  className={`input input-bordered w-full ${
                    errors.date ? "input-error" : ""
                  }`}
                  {...register("date")}
                />
                {errors.date && (
                  <p className="text-error text-sm mt-1">{errors.date.message}</p>
                )}
              </div>

              {/* Budget */}
              <div>
                <input
                  type="number"
                  placeholder="Estimated Budget ($)"
                  className={`input input-bordered w-full ${
                    errors.budget ? "input-error" : ""
                  }`}
                  {...register("budget")}
                />
                {errors.budget && (
                  <p className="text-error text-sm mt-1">{errors.budget.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  placeholder="Tell me about your project..."
                  className={`textarea textarea-bordered w-full h-32 ${
                    errors.message ? "textarea-error" : ""
                  }`}
                  {...register("message")}
                ></textarea>
                {errors.message && (
                  <p className="text-error text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Booking"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookMeForm;
