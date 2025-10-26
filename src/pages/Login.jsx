import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: ""
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false
  });

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

      case "password":
        if (!value) {
          error = "Password is required";
        } else if (value.length < 6) {
          error = "Password must be at least 6 characters";
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

    // Validate the field
    const error = validateField(name, formData[name]);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      email: true,
      password: true
    });

    // Validate all fields
    const emailError = validateField("email", formData.email);
    const passwordError = validateField("password", formData.password);

    const newErrors = {
      email: emailError,
      password: passwordError,
      general: ""
    };

    setErrors(newErrors);

    // If no errors, proceed with login
    if (!emailError && !passwordError) {
      // Your login logic here
      console.log("Login successful", formData);
      // You can add your API call here
    } else {
      setErrors(prev => ({
        ...prev,
        general: "Please fix the errors above to continue"
      }));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0A144A] to-[#000000] px-4">
      <div className="w-full max-w-sm bg-transparent">
    
        {/* Title */}
        <h2 className="text-center text-white text-2xl font-semibold mb-6">
          Welcome Back !
        </h2>

        {/* General Error Message */}
        {errors.general && (
          <div className="mb-4 p-3 bg-red-900/50 border border-red-500 rounded-md">
            <p className="text-red-200 text-sm text-center">{errors.general}</p>
          </div>
        )}

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          {/* Email Field */}
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

          {/* Password Field */}
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

          {/* Remember me */}
          <div className="flex items-center justify-between text-sm text-gray-300">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input 
                type="checkbox" 
                name="rememberMe"
                className="accent-blue-500" 
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <span>Remember Me</span>
            </label>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-semibold py-2 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!!errors.email || !!errors.password}
          >
            LogIn
          </button>

          {/* Forgot password */}
          <div className="text-center mt-3">
            <Link
              to="/forgot-password"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Forgot your password?
            </Link>
          </div>

          <hr className="my-4 border-gray-600" />

          {/* Signup link */}
          <div className="text-center text-sm text-gray-300">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#0EA5E9] font-medium hover:underline">
              Signup
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;