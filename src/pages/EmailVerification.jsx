import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmailVerification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [errors, setErrors] = useState({
    otp: "",
    general: ""
  });
  const [isVerified, setIsVerified] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const [email, setEmail] = useState("user@example.com"); // This would typically come from props or context

  const inputRefs = useRef([]);
  const navigate = useNavigate();

  // Focus management for OTP inputs
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  // Countdown timer for resend OTP
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleChange = (index, value) => {
    // Only allow numbers
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }

    // Clear errors when user types
    if (errors.otp) {
      setErrors(prev => ({ ...prev, otp: "" }));
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text");
    const pastedNumbers = pastedData.replace(/\D/g, "").slice(0, 4).split("");

    if (pastedNumbers.length === 4) {
      const newOtp = [...otp];
      pastedNumbers.forEach((num, index) => {
        newOtp[index] = num;
      });
      setOtp(newOtp);
      inputRefs.current[3].focus();
    }
  };

  const validateOtp = () => {
    const otpString = otp.join("");
    
    if (otpString.length !== 4) {
      return "Please enter all 4 digits";
    }

    if (!/^\d{4}$/.test(otpString)) {
      return "Please enter a valid 4-digit code";
    }

    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const otpError = validateOtp();
    
    if (otpError) {
      setErrors(prev => ({ ...prev, otp: otpError }));
      return;
    }

    // Simulate OTP verification
    const otpString = otp.join("");
    
    // In real app, this would be an API call
    console.log("Verifying OTP:", otpString);
    
    // Mock verification - in real app, check against server
    if (otpString === "1234") { // Default test OTP
      setIsVerified(true);
      setErrors({ otp: "", general: "" });
      
      // Redirect after success
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      setErrors(prev => ({ 
        ...prev, 
        general: "Invalid verification code. Please try again." 
      }));
    }
  };

  const handleResendOtp = () => {
    if (countdown > 0) return;

    setIsResending(true);
    
    // Simulate API call to resend OTP
    setTimeout(() => {
      setOtp(["", "", "", ""]);
      setCountdown(30);
      setIsResending(false);
      setErrors({ otp: "", general: "" });
      
      // Focus first input after resend
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
      
      console.log("OTP resent to:", email);
    }, 1000);
  };

  const allFieldsFilled = otp.every(digit => digit !== "");

  if (isVerified) {
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
                Email Verified!
              </h2>
              <p className="text-gray-300 mb-6">
                Your email has been successfully verified.
              </p>
              <p className="text-sm text-gray-400 mb-6">
                Redirecting to login page...
              </p>
            </div>

            {/* Redirect to Login */}
            <Link
              to="/login"
              className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-semibold py-2 px-4 rounded-md transition inline-block text-center"
            >
              Continue to Login
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
        <h2 className="text-center mt-24 text-white text-2xl font-semibold mb-2">
          Verify Your Email
        </h2>
        <p className="text-center text-gray-300 text-sm mb-2">
          We sent a 4-digit code to
        </p>
        <p className="text-center text-blue-400 font-medium mb-6">
          {email}
        </p>

        {/* General Error Message */}
        {errors.general && (
          <div className="mb-4 p-3 bg-red-900/50 border border-red-500 rounded-md">
            <p className="text-red-200 text-sm text-center">{errors.general}</p>
          </div>
        )}

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          {/* OTP Inputs */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3 text-center">
              Enter Verification Code
            </label>
            <div className="flex justify-center space-x-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={el => inputRefs.current[index] = el}
                  type="text"
                  inputMode="numeric"
                  maxLength="1"
                  className={`w-14 h-14 bg-transparent border ${
                    errors.otp ? "border-red-500" : "border-gray-500"
                  } rounded-md text-white text-center text-xl font-semibold focus:outline-none focus:border-blue-400 transition-colors`}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={index === 0 ? handlePaste : undefined}
                />
              ))}
            </div>
            {errors.otp && (
              <p className="mt-2 text-sm text-red-400 text-center">{errors.otp}</p>
            )}
          </div>

          {/* Verify button */}
          <button
            type="submit"
            className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-semibold py-2 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!allFieldsFilled}
          >
            Verify Email
          </button>

          {/* Resend OTP */}
          <div className="text-center">
            <p className="text-sm text-gray-300 mb-2">
              Didn't receive the code?
            </p>
            <button
              type="button"
              onClick={handleResendOtp}
              disabled={countdown > 0 || isResending}
              className="text-[#0EA5E9] font-medium hover:text-blue-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isResending ? "Sending..." : 
               countdown > 0 ? `Resend in ${countdown}s` : "Resend Code"}
            </button>
          </div>

          {/* Back to Signup */}
          <div className="text-center mt-4">
            <Link
              to="/signup"
              className="text-sm text-gray-300 hover:text-white transition-colors inline-flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Signup
            </Link>
          </div>
        </form>

        {/* Help Text */}
        <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700 rounded-md">
          <h3 className="text-sm font-medium text-blue-300 mb-2">Need help?</h3>
          <ul className="text-xs text-blue-300 space-y-1">
            <li>• Check your spam folder if you don't see the email</li>
            <li>• Make sure you entered the correct email address</li>
            <li>• The code will expire in 10 minutes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;