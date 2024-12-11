// // import React from 'react'
// import { useState } from "react";

// const ChangePassword = () => {

//     const [email, setEmail] = useState("");


//   return (
//     <div className="bg-primary">
//       <form
//         onSubmit={changePassword}
//         className="sm:5/6 md:w-4/6 lg:w-1/3 h-screen m-auto p-4 "
//       >
//         <h1 className="text-center text-3xl font-bold">
//           Create your free account.
//         </h1>

//         {/* Email */}
//         <div className="mt-5">
//           <label className="text-1xl font-bold">Email:</label>
//           <input
//             type="email"
//             className="block mt-3 w-full p-2 bg-white text-black text-lg font-semibold rounded-md border-neutral border-2"
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="bg-secondary mt-5 p-2 rounded-lg text-center text-2xl text-neutral hover:text-red-200 cursor-pointer">
//           <button type="submit" className="w-full">
//             Create account
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

// export default ChangePassword





// import  { useState } from "react";
// import { sendPasswordResetEmail } from "firebase/auth";
// import { auth } from "../FirebaseAuth/firebase"; // Ensure Firebase is correctly initialized
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ChangePassword= () => {
//   const [email, setEmail] = useState("");

//   const handlePasswordReset = async (e) => {
//     e.preventDefault();

//     if (!email) {
//       toast.error("Please enter a valid email address.", {
//         position: "top-center",
//         autoClose: 5000,
//       });
//       return;
//     }

//     try {
//       await sendPasswordResetEmail(auth, email);
//       toast.success("Password reset email sent successfully!", {
//         position: "top-center",
//         autoClose: 5000,
//       });
//     } catch (error) {
//       console.error("Error resetting password:", error.message);
//       toast.error(error.message, {
//         position: "top-center",
//         autoClose: 5000,
//       });
//     }
//   };

//   return (
//     <div className="bg-primary">
//       <form
//         onSubmit={handlePasswordReset}
//         className="sm:5/6 md:w-4/6 lg:w-1/3 h-screen m-auto p-4"
//       >
//         <h1 className="text-center text-3xl font-bold">Change Password</h1>

//         {/* Email Input */}
//         <div className="mt-5">
//           <label className="text-1xl font-bold">Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="block mt-3 w-full p-2 bg-white text-black text-lg font-semibold rounded-md border-neutral border-2"
//             placeholder="Enter your email"
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="bg-secondary mt-5 p-2 rounded-lg text-center text-2xl text-neutral hover:text-red-200 cursor-pointer">
//           <button type="submit" className="w-full">
//             Send Reset Email
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
//   );
// };

// export default ChangePassword;
