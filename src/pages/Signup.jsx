import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    role: "farmer",
    cacNumber: "",
    organizationName: "",
    organizationEmail: "",
    agreedToTerms: false
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    cacNumber: "",
    organizationName: "",
    organizationEmail: "",
    agreedToTerms: "",
    general: ""
  });

  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    phoneNumber: false,
    password: false,
    confirmPassword: false,
    cacNumber: false,
    organizationName: false,
    organizationEmail: false,
    agreedToTerms: false
  });

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "fullName":
        if (!value.trim()) {
          error = "Full name is required";
        } else if (value.trim().length < 2) {
          error = "Full name must be at least 2 characters";
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email address";
        }
        break;

      case "phoneNumber":
        if (!value.trim()) {
          error = "Phone number is required";
        } else if (!/^\+?[\d\s-()]{10,}$/.test(value)) {
          error = "Please enter a valid phone number";
        }
        break;

      case "password":
        if (!value) {
          error = "Password is required";
        } else if (value.length < 6) {
          error = "Password must be at least 6 characters";
        }
        break;

      case "confirmPassword":
        if (!value) {
          error = "Please confirm your password";
        } else if (value !== formData.password) {
          error = "Passwords do not match";
        }
        break;

      case "cacNumber":
        if (formData.role === "organization" && !value.trim()) {
          error = "CAC number is required for organizations";
        }
        break;

      case "organizationName":
        if (formData.role === "organization" && !value.trim()) {
          error = "Organization name is required";
        }
        break;

      case "organizationEmail":
        if (formData.role === "organization") {
          if (!value.trim()) {
            error = "Organization email is required";
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            error = "Please enter a valid organization email";
          }
        }
        break;

      case "agreedToTerms":
        if (!value) {
          error = "You must agree to the terms and conditions";
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData(prev => ({
      ...prev,
      [name]: fieldValue
    }));

    // Re-validate confirm password when password changes
    if (name === "password") {
      const confirmPasswordError = validateField("confirmPassword", formData.confirmPassword);
      setErrors(prev => ({
        ...prev,
        confirmPassword: confirmPasswordError
      }));
    }

    // Validate field if it's been touched
    if (touched[name]) {
      const error = validateField(name, fieldValue);
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

    // Mark all relevant fields as touched
    const fieldsToTouch = {
      fullName: true,
      email: true,
      phoneNumber: true,
      password: true,
      confirmPassword: true,
      agreedToTerms: true
    };

    if (formData.role === "organization") {
      fieldsToTouch.cacNumber = true;
      fieldsToTouch.organizationName = true;
      fieldsToTouch.organizationEmail = true;
    }

    setTouched(fieldsToTouch);

    // Validate all fields
    const newErrors = {
      fullName: validateField("fullName", formData.fullName),
      email: validateField("email", formData.email),
      phoneNumber: validateField("phoneNumber", formData.phoneNumber),
      password: validateField("password", formData.password),
      confirmPassword: validateField("confirmPassword", formData.confirmPassword),
      cacNumber: validateField("cacNumber", formData.cacNumber),
      organizationName: validateField("organizationName", formData.organizationName),
      organizationEmail: validateField("organizationEmail", formData.organizationEmail),
      agreedToTerms: validateField("agreedToTerms", formData.agreedToTerms),
      general: ""
    };

    setErrors(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(error => error !== "");
    
    if (!hasErrors) {
      // Submit form logic here
      console.log("Signup successful", formData);
      // Add your API call here
    } else {
      setErrors(prev => ({
        ...prev,
        general: "Please fix the errors above to continue"
      }));
    }
  };

  const isOrganization = formData.role === "organization";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0A144A] to-[#000000] px-4 py-8">
      <div className="w-full max-w-md bg-transparent">
        {/* Title */}
        <div className="text-center mb-8">
          {/* <h1 className="text-2xl font-bold text-white">ASDTS-BDAG</h1> */}
          {/* <p className="text-sm text-gray-300 mt-1">
            Secure Your Data, Secure Yourself
          </p> */}
          <h2 className="text-white text-2xl font-semibold mt-16">
            Create Your Account
          </h2>
        </div>

        {/* General Error Message */}
        {errors.general && (
          <div className="mb-4 p-3 bg-red-900/50 border border-red-500 rounded-md">
            <p className="text-red-200 text-sm text-center">{errors.general}</p>
          </div>
        )}

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          {/* Full Name */}
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className={`w-full bg-transparent border ${
                errors.fullName ? "border-red-500" : "border-gray-500"
              } rounded-md px-3 py-2 text-white focus:outline-none focus:border-blue-400 placeholder-gray-400 transition-colors`}
              value={formData.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
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

          {/* Phone Number */}
          <div>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              className={`w-full bg-transparent border ${
                errors.phoneNumber ? "border-red-500" : "border-gray-500"
              } rounded-md px-3 py-2 text-white focus:outline-none focus:border-blue-400 placeholder-gray-400 transition-colors`}
              value={formData.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.phoneNumber && (
              <p className="mt-1 text-sm text-red-400">{errors.phoneNumber}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={`w-full bg-transparent border ${
                errors.password ? "border-red-500" : "border-gray-500"
              } rounded-md px-3 py-2 text-white focus:outline-none focus:border-blue-400 placeholder-gray-400 transition-colors`}
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-400">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className={`w-full bg-transparent border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-500"
              } rounded-md px-3 py-2 text-white focus:outline-none focus:border-blue-400 placeholder-gray-400 transition-colors`}
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-400">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Role Dropdown */}
          <div>
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

          {/* Organization Fields - Conditionally Rendered */}
          {isOrganization && (
            <>
              {/* CAC Number */}
              <div>
                <input
                  type="text"
                  name="cacNumber"
                  placeholder="CAC Number"
                  className={`w-full bg-transparent border ${
                    errors.cacNumber ? "border-red-500" : "border-gray-500"
                  } rounded-md px-3 py-2 text-white focus:outline-none focus:border-blue-400 placeholder-gray-400 transition-colors`}
                  value={formData.cacNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.cacNumber && (
                  <p className="mt-1 text-sm text-red-400">{errors.cacNumber}</p>
                )}
              </div>

              {/* Organization Name */}
              <div>
                <input
                  type="text"
                  name="organizationName"
                  placeholder="Organization Name"
                  className={`w-full bg-transparent border ${
                    errors.organizationName ? "border-red-500" : "border-gray-500"
                  } rounded-md px-3 py-2 text-white focus:outline-none focus:border-blue-400 placeholder-gray-400 transition-colors`}
                  value={formData.organizationName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.organizationName && (
                  <p className="mt-1 text-sm text-red-400">{errors.organizationName}</p>
                )}
              </div>

              {/* Organization Email */}
              <div>
                <input
                  type="email"
                  name="organizationEmail"
                  placeholder="Organization Email"
                  className={`w-full bg-transparent border ${
                    errors.organizationEmail ? "border-red-500" : "border-gray-500"
                  } rounded-md px-3 py-2 text-white focus:outline-none focus:border-blue-400 placeholder-gray-400 transition-colors`}
                  value={formData.organizationEmail}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.organizationEmail && (
                  <p className="mt-1 text-sm text-red-400">{errors.organizationEmail}</p>
                )}
              </div>
            </>
          )}

          {/* Terms and Conditions */}
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              name="agreedToTerms"
              id="agreedToTerms"
              className="mt-1 accent-blue-500"
              checked={formData.agreedToTerms}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="agreedToTerms" className="text-sm text-gray-300 flex-1">
              I agree to the Terms and Conditions
            </label>
          </div>
          {errors.agreedToTerms && (
            <p className="text-sm text-red-400">{errors.agreedToTerms}</p>
          )}

          {/* Sign Up button */}
          <button
            type="submit"
            className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-semibold py-2 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Sign Up
          </button>

          {/* Login link */}
          <div className="text-center text-sm text-gray-300">
            Already have an account?{" "}
            <Link to="/login" className="text-[#0EA5E9] font-medium hover:underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;