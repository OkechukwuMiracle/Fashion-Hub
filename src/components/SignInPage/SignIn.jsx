import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { auth } from "../FirebaseAuth/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(""); // Password visibility

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User Logged In Successfully");
      window.location.href = "/Dashboard"
      toast.success("User Logged In Successfully!!", {
        position: "top-center",
        autoClose: 5000,
      });
    } catch (error) {
      console.error("Error Logging In", error.message);
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="bg-primary">
      <form
        onSubmit= {handleSubmit}
        className="sm:5/6 md:w-4/6 lg:w-1/3 h-screen m-auto p-4 focus:outline-none"
      >
        <div className="flex items-center  m-auto pt-6 pb-6 px-2 gap-10 border-b-2 border-b-neutral">
        <IoIosArrowBack
          className="text-2xl cursor-pointer"
          onClick={() => navigate("/SignUp")}
        />
        <p className="font-bold text-2xl text-secondary ">Sign into your account.</p>
      </div>

        {/* Email */}
        <div className="mt-5">
          <label className="text-1xl font-bold">Email:</label>
          <input
            type="email"
            className="block mt-3 w-full p-2 bg-white text-black text-lg font-semibold rounded-md border-neutral border-2"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="mt-5">
          <label className="text-1xl font-bold">Password:</label>
          <div className="flex relative">
            <input
              type={isPasswordVisible ? "text" : "password"}
              value={password}
              className="block mt-3 w-full p-2 bg-white text-black text-lg font-semibold rounded-md border-neutral border-2"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="absolute right-3 top-7">
              <button type="button" onClick={handlePasswordVisibility}>
                {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="bg-secondary mt-5 p-2 rounded-lg text-center text-2xl text-neutral hover:text-red-200 cursor-pointer">
          <button type="submit" className="w-full">
            Sign In
          </button>
        </div>
        <p className="flex justify-between mt-3 text-1xl font-semibold">
          <a href="/forgotPassword" className=" font-extrabold">
            Forget Password
          </a>
        </p>
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

export default SignIn;
