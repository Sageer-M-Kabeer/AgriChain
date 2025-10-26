import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
    general: ""
  });

  const [touched, setTouched] = useState({
    password: false,
    confirmPassword: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "password":
        if (!value) {
          error = "Password is required";
        } else if (value.length < 6) {
          error = "Password must be at least 6 characters";
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
          error = "Password must contain uppercase, lowercase and numbers";
        }
        break;

      case "confirmPassword":
        if (!value) {
          error = "Please confirm your password";
        } else if (value !== formData.password) {
          error = "Passwords do not match";
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

    // Mark all fields as touched
    setTouched({
      password: true,
      confirmPassword: true
    });

    // Validate all fields
    const passwordError = validateField("password", formData.password);
    const confirmPasswordError = validateField("confirmPassword", formData.confirmPassword);

    const newErrors = {
      password: passwordError,
      confirmPassword: confirmPasswordError,
      general: ""
    };

    setErrors(newErrors);

    // If no errors, proceed with password reset
    if (!passwordError && !confirmPasswordError) {
      // Your password reset logic here
      console.log("Password reset successful", formData);
      setIsSubmitted(true);
      
      // Simulate API call and redirect after success
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      setErrors(prev => ({
        ...prev,
        general: "Please fix the errors above to continue"
      }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0A144A] to-[#000000] px-4">
        <div className="w-full max-w-sm bg-transparent">
          {/* Logo */}
          <div className="flex flex-col items-center mb-6">
            <img
              src="https://via.placeholder.com/80"
              alt="Logo"
              className="w-16 mb-2"
            />
            <h1 className="text-2xl font-bold text-white">ASDTS-BDAG</h1>
            <p className="text-sm text-gray-300 -mt-1">
              Secure Your Data, Secure Yourself
            </p>
          </div>

          {/* Success Message */}
          <div className="text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 className="text-white text-2xl font-semibold mb-2">
                Password Reset!
              </h2>
              <p className="text-gray-300 mb-6">
                Your password has been successfully reset.
              </p>
              <p className="text-sm text-gray-400 mb-6">
                Redirecting you to login page...
              </p>
            </div>

            {/* Redirect to Login */}
            <Link
              to="/login"
              className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-semibold py-2 px-4 rounded-md transition inline-block text-center"
            >
              Go to Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0A144A] to-[#000000] px-4">
      <div className="w-full max-w-sm bg-transparent">


        {/* Title */}
        <h2 className="text-center text-white mt-24 text-2xl font-semibold mb-2">
          Reset Password
        </h2>
        <p className="text-center text-gray-300 text-sm mb-6">
          Create your new password
        </p>

        {/* General Error Message */}
        {errors.general && (
          <div className="mb-4 p-3 bg-red-900/50 border border-red-500 rounded-md">
            <p className="text-red-200 text-sm text-center">{errors.general}</p>
          </div>
        )}

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              New Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter new password"
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
            <div className="mt-2 text-xs text-gray-400">
              <p>Password must contain:</p>
              <ul className="list-disc list-inside ml-2 space-y-1">
                <li className={formData.password.length >= 6 ? "text-green-400" : ""}>
                  At least 6 characters
                </li>
                <li className={/(?=.*[a-z])/.test(formData.password) ? "text-green-400" : ""}>
                  One lowercase letter
                </li>
                <li className={/(?=.*[A-Z])/.test(formData.password) ? "text-green-400" : ""}>
                  One uppercase letter
                </li>
                <li className={/(?=.*\d)/.test(formData.password) ? "text-green-400" : ""}>
                  One number
                </li>
              </ul>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm new password"
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
            {formData.confirmPassword && formData.password === formData.confirmPassword && (
              <p className="mt-1 text-sm text-green-400">✓ Passwords match</p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-semibold py-2 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!!errors.password || !!errors.confirmPassword}
          >
            Reset Password
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

        {/* Security Tips */}
        <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700 rounded-md">
          <h3 className="text-sm font-medium text-blue-300 mb-2">Security Tips:</h3>
          <ul className="text-xs text-blue-300 space-y-1">
            <li>• Use a unique password you haven't used elsewhere</li>
            <li>• Avoid common words and personal information</li>
            <li>• Consider using a password manager</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;