import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { auth, db } from "../FirebaseAuth/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [fname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(""); // Password visibility

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible); // handles the visibility of the passowrd
  };

  const handleRegister = async (e) => {
    // controls the registered signup user
    e.preventDefault();
    if (password!== confirmPassword) {   // Handles the confirm passowrd 
      toast.error("Passwords do not match", {
        position: "top-center",
        autoClose: 5000,
      });
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          fullName: fname,
        });
      }
      console.log("User Registered Successfully");
      window.location.href = "/SignIn";  // takes me to the signin page
      toast.success("User Registered Successfully!!", {  // pop-up message if the user signup successfully
        position: "top-center",
        autoClose: 5000,
      });
    } catch (error) {
      console.error("Registration Error", error.message);  //// pop-up message if the user signup unsuccessfully
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="bg-primary pb-8">
      <form
        onSubmit={handleRegister}
        className="sm:5/6 md:w-4/6 lg:w-1/3 h-screen m-auto p-4 focus:outline-none"
      >
        <div className="flex items-center  m-auto pt-6 pb-6 px-2 gap-10 border-b-2 border-b-neutral">
        <IoIosArrowBack
          className="text-2xl cursor-pointer"
          onClick={() => navigate("/")}
        />
        <p className="font-bold text-2xl text-secondary ">Create your free account.</p>
      </div>

        {/* Name */}
        <div className="mt-7">
          <label className="text-1xl font-bold">Name:</label>
          <input
            type="text"
            className="block mt-3 w-full p-2 bg-white text-black text-lg font-semibold rounded-md border-neutral border-2"
            onChange={(e) => setName(e.target.value)}
            required
          />
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

        {/* Confirm Password */}
        <div className="mt-5">
          <label className="text-1xl font-bold">Confirm password:</label>
          <div className="flex relative">
            <input
              type={isPasswordVisible ? "text" : "password"}
              value={confirmPassword}
              className="block mt-3 w-full p-2 bg-white text-black text-lg font-semibold rounded-md border-neutral border-2"
              onChange={(e) => setConfirmPassword(e.target.value)}
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
            Create account
          </button>
        </div>
        <p className="flex justify-between mt-3 text-1xl font-semibold">
          Already have an account?
          <a href="/SignIn" className=" font-extrabold">
            Sign in
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

export default SignUp;
