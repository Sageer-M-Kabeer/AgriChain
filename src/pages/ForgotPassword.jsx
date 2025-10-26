import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    role: "farmer"
  });

  const [errors, setErrors] = useState({
    email: "",
    general: ""
  });

  const [touched, setTouched] = useState({
    email: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email address";
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate field if it's been touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;

    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    const error = validateField(name, formData[name]);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark field as touched
    setTouched({
      email: true
    });

    // Validate field
    const emailError = validateField("email", formData.email);

    const newErrors = {
      email: emailError,
      general: ""
    };

    setErrors(newErrors);

    // If no errors, proceed with password reset
    if (!emailError) {
      // Your password reset logic here
      console.log("Password reset requested for:", formData);
      setIsSubmitted(true);
      
      // Simulate API call
      setTimeout(() => {
        // This is where you would handle the actual password reset
      }, 2000);
    } else {
      setErrors(prev => ({
        ...prev,
        general: "Please fix the error above to continue"
      }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0A144A] to-[#000000] px-4">
        <div className="w-full max-w-sm bg-transparent">
          

          {/* Success Message */}
          <div className="text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 className="text-white text-2xl font-semibold mb-2">
                Check Your Email
              </h2>
              <p className="text-gray-300 mb-6">
                We've sent a password reset link to<br />
                <span className="text-blue-400 font-medium">{formData.email}</span>
              </p>
              <p className="text-sm text-gray-400 mb-6">
                If you don't see the email, check your spam folder or try again.
              </p>
            </div>

            {/* Back to Login */}
            <Link
              to="/login"
              className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-semibold py-2 px-4 rounded-md transition inline-block text-center"
            >
              Back to Login
            </Link>

            {/* Resend Link */}
            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full mt-3 text-gray-300 hover:text-white font-medium py-2 rounded-md transition"
            >
              Didn't receive the link? Resend
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0A144A] to-[#000000] px-4">
      <div className="w-full max-w-sm bg-transparent">
  

        {/* Title */}
        <h2 className="text-center text-white text-2xl font-semibold mt-16 mb-2">
          Forgot Password?
        </h2>
        <p className="text-center text-gray-300 text-sm mb-6">
          Enter your email and we'll send you a reset link
        </p>

        {/* General Error Message */}
        {errors.general && (
          <div className="mb-4 p-3 bg-red-900/50 border border-red-500 rounded-md">
            <p className="text-red-200 text-sm text-center">{errors.general}</p>
          </div>
        )}

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          {/* Role Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Account Type
            </label>
            <select
              name="role"
              className="w-full bg-transparent border border-gray-500 rounded-md px-3 py-2 text-white focus:outline-none focus:border-blue-400 transition-colors"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="farmer" className="bg-gray-800">Farmer</option>
              <option value="organization" className="bg-gray-800">Organization</option>
            </select>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className={`w-full bg-transparent border ${
                errors.email ? "border-red-500" : "border-gray-500"
              } rounded-md px-3 py-2 text-white focus:outline-none focus:border-blue-400 placeholder-gray-400 transition-colors`}
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email}</p>
            )}
          </div>

          {/* Reset Password button */}
          <button
            type="submit"
            className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-semibold py-2 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!!errors.email}
          >
            Send Reset Link
          </button>

          {/* Back to Login */}
          <div className="text-center mt-4">
            <Link
              to="/login"
              className="text-sm text-gray-300 hover:text-white transition-colors inline-flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Login
            </Link>
          </div>
        </form>

        {/* Help Text */}
        <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700 rounded-md">
          <p className="text-sm text-blue-300 text-center">
            <strong>Note:</strong> The reset link will be sent to the email associated with your {formData.role} account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;