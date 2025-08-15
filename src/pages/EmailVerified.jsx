import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import email from "../assets/images/email.png";

const EmailVerified = () => {
  const navigate = useNavigate();

  // Redirect to home page after 1 minute (60 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 60000); // 60,000 ms = 1 minute
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [navigate]);

  return (
    <section className="bg-[#1D1751] min-h-screen flex justify-center items-center p-5">
      <div className="flex flex-col items-center text-white rounded-2xl shadow-2xl shadow-[#B6E63A33] p-6 md:p-8 space-y-6">
        {/* Email Icon */}
        <img src={email} alt="Email verification" className="w-24 h-24" />

        {/* Title */}
        <h1 className="font-semibold text-2xl md:text-3xl">Email Verified</h1>

        {/* Success Message */}
        <div className="bg-[#67F88BAB] text-white flex items-center space-x-4 p-4 md:p-6 rounded-2xl">
          <IoMdCheckmarkCircleOutline className="text-4xl md:text-5xl" />
          <span className="text-sm md:text-base">
            Your account has been verified, you can now access Ascendix earn...
          </span>
        </div>

        {/* Redirect Notice */}
        <p className="text-sm md:text-base text-[#FFFFFF]">
          Redirecting you to the home page in 1 min...
        </p>
      </div>
    </section>
  );
};

export default EmailVerified;
