import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../FirebaseAuth/firebase"; // Ensure Firebase is correctly initialized
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter a valid email address.", {
        position: "top-center",
        autoClose: 5000,
      });
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      window.location.href = "/SignIn"; // Redirect to signin page after successful reset email sent
      toast.success("Password reset email sent successfully!", {
        position: "top-center",
        autoClose: 5000,
      });
    } catch (error) {
      console.error("Error resetting password:", error.message);
      if (error.code === "auth/user-not-found") {
        toast.error("User not found. Please check the email entered.", {
          position: "top-center",
          autoClose: 5000,
        });
      } else {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 5000,
        });
      }
    }
  };

  return (
    <div className="bg-primary">
      <form
        onSubmit={handlePasswordReset}
        className="sm:5/6 md:w-4/6 lg:w-1/3 h-screen m-auto p-4"
      >
        <div className="flex items-center  m-auto pt-6 pb-6 px-2 gap-10 border-b-2 border-b-neutral">
          <IoIosArrowBack
            className="text-2xl cursor-pointer"
            onClick={() => navigate("/SignIn")}
          />
          <p className="font-bold text-2xl text-secondary ">Reset Password</p>
        </div>

        {/* Email Input */}
        <div className="mt-5">
          <label className="text-1xl font-bold">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block mt-3 w-full p-2 bg-white text-black text-lg font-semibold rounded-md border-neutral border-2"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="bg-secondary mt-5 p-2 rounded-lg text-center text-2xl text-neutral hover:text-red-200 cursor-pointer">
          <button type="submit" className="w-full">
            Send Reset Email
          </button>
        </div>
      </form>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        style={{ width: "300px" }}
      />
    </div>
  );
};

export default ForgotPassword;
