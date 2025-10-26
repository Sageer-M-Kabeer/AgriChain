import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import EmailVerification from "./pages/EmailVerification";
import Dashboard from './pages/Dashboard'
import OrganizationDashboard from "./pages/OrganisationDashboard";
import bg from './assets/logo.png';

// Logo component for consistent placement
const Logo = () => (
  <div className="absolute top-4 left-4 z-20">
    <div className="flex items-center">
     <img src={bg} alt="" />
    </div>
  </div>
);

function App() {
  return (
    <div>
      {/* Logo positioned at top left */}
      <Logo />
      
      {/* Main content container */}
      <div className="relative z-10 min-h-screen">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/org-dashboard" element={<OrganizationDashboard />} />
        </Routes>
      </div>
    </div>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;