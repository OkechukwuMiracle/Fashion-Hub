// // import React from 'react'
// import { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ForgotPassword = () => {

//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [isPasswordVisible, setIsPasswordVisible] = useState(""); // Password visibility

//   const handlePasswordVisibility = () => {
//     setIsPasswordVisible(!isPasswordVisible); // handles visibility of the pasord
//   };


//   const validatePassword = () => {
//     // Check if passwords match
//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match!", { position: "top-center" });
//       return false;
//     }

//     //  Check password strength
//     const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
//     if (!passwordRegex.test(password)) {
//       toast.error(
//         "Password must be at least 8 characters long and include uppercase, lowercase, and a number.",
//         { position: "top-center" }
//       );
//       return false;
//     }

//     return true;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate password
//     if (!validatePassword()) return;
//     window.location.href = "/ChangePassword"

//     // Simulate success response (replace this with your API call)
//     toast.success("Password reset successfully!", { position: "top-center" });
//   };

//   return (
//     <div className="bg-primary">
//         <form onSubmit={handleSubmit}  className="sm:5/6 md:w-4/6 lg:w-1/3 h-screen m-auto p-4 ">
//         <h1 className="text-center text-3xl font-bold">
//           Reset Password.
//         </h1>

//         {/* Password */}
//         <div className="mt-5">
//           <label className="text-1xl font-bold">Password:</label>
//           <div className="flex relative">
//             <input
//               type={isPasswordVisible ? "text" : "password"}
//               value={password}
//               className="block mt-3 w-full p-2 bg-white text-black text-lg font-semibold rounded-md border-neutral border-2"
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <div className="absolute right-3 top-7">
//               <button type="button" onClick={handlePasswordVisibility}>
//                 {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Confirm Password */}
//         <div className="mt-5">
//           <label className="text-1xl font-bold">Confirm password:</label>
//           <div className="flex relative">
//             <input
//               type={isPasswordVisible ? "text" : "password"}
//               value={confirmPassword}
//               className="block mt-3 w-full p-2 bg-white text-black text-lg font-semibold rounded-md border-neutral border-2"
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//             <div className="absolute right-3 top-7">
//               <button type="button" onClick={handlePasswordVisibility}>
//                 {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div className="bg-secondary mt-5 p-2 rounded-lg text-center text-2xl text-neutral hover:text-red-200 cursor-pointer">
//           <button type="submit" className="">
//            Reset Password
//           </button>
//         </div>

//       </form>

//       <ToastContainer
//         position="top-center"
//         autoClose={5000}
//         hideProgressBar={false}
//         closeOnClick
//         pauseOnHover
//         draggable
//         style={{ width: "300px" }}
//       />
//     </div>
//   )
// }

// export default ForgotPassword





import  { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../FirebaseAuth/firebase"; // Ensure Firebase is correctly initialized
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
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
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="bg-primary">
      <form
        onSubmit={handlePasswordReset}
        className="sm:5/6 md:w-4/6 lg:w-1/3 h-screen m-auto p-4"
      >
        <h1 className="text-center text-3xl font-bold">Reset Password</h1>

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
