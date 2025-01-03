import LocationIcon from "../../assets/location-icon.png";
import SearchIcon from "../../assets/search-icon2.png";
import Avatar from "../../assets/avatar.jpg";
import Machine1 from "../../assets/machine1.jpg";
import Machine2 from "../../assets/machine2.jpg";
import Machine4 from "../../assets/machine4.png";
import Machine6 from "../../assets/machine6.png";
import Machine7 from "../../assets/machine7.png";
import ProfileIcon from "../../assets/profile-icon.png";
import CartIcon from "../../assets/cart-icon.png";
import CardIcon from "../../assets/card-icon.png";
import SettingIcon from "../../assets/setting-icon.png";
import { useState, useEffect } from "react";
import { auth, db } from "../FirebaseAuth/firebase"; // Firebase imports
import { getDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
const DashBoard = ({ setCart }) => {
  const navigate = useNavigate();

  // State for profile dropdown and user details
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [userDetails, setUserDetails] = useState({ name: "", email: "" });

  // State for search input and filtered items
  const [searchInput, setSearchInput] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  // Function to toggle the dropdown visibility
  const toggleProfileMenu = () => {
    setShowProfileMenu((prev) => !prev);
  };

  // Fetch user details from Firebase Firestore
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "Users", user.uid); // Reference to Firestore document
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setUserDetails({ name: data.fname, email: data.email }); // Update state with user details
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user data: ", error);
        }
      }
    });
  };

  useEffect(() => {
    fetchUserData();
    setFilteredItems(storeItems); // Initialize filteredItems with storeItems
  }, []);

  //  data for store items
  const storeItems = [
    { id: 1, name: "Machine 4", price: 20000, image: Machine4 },
    { id: 2, name: "Machine 6", price: 22000, image: Machine6 },
    { id: 3, name: "Machine 7", price: 24000, image: Machine7 },
    { id: 4, name: "Machine 4", price: 20000, image: Machine7 },
    { id: 5, name: "Machine 6", price: 22000, image: Machine4 },
    { id: 6, name: "Machine 7", price: 24000, image: Machine6 },
    { id: 1, name: "Machine 4", price: 20000, image: Machine4 },
    { id: 2, name: "Machine 6", price: 22000, image: Machine6 },
    { id: 3, name: "Machine 7", price: 24000, image: Machine7 },
  ];

  // Function to handle adding an item to the cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  //Function to handle Filter items based on search input
  const handleSearchInputChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    const filtered = storeItems.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filtered);
  };
  // const handleSearch = (e) => {
  //   const searchQuery = e.target.value.toLowerCase();
  //   const filteredItems = storeItems.filter((item) =>
  //     item.name.toLowerCase().includes(searchQuery)
  //   );
  //   setFilteredItems(filteredItems);
  //   setSearchInput(e.target.value);
  // };

  return (
    <div className="bg-primary h-full pb-4">
      <div className="flex justify-between items-center md:w-4/5 pt-8 p-2 m-auto">
        <div onClick={() => navigate("/Location")}>
          <img
            src={LocationIcon}
            alt="Location Icon"
            className="cursor-pointer"
          />
        </div>

        {/* input field */}
        <div className="relative md:w-3/6 ">
          <input
            type="text"
            placeholder="Search for products"
            onChange={handleSearchInputChange}
            value={searchInput}
            className=" w-11/12 lg:w-full ml-2 py-3 pl-16 md:pl-16 sm:pl-14 rounded-3xl focus:outline-none text-secondary font-bold placeholder:text-secondary border-2 border-neutral"
          />
          <button className="absolute top-4 left-0 pl-7 w-12">
            <img src={SearchIcon} alt="" className="" />
          </button>
        </div>

        {/* profile */}
        <button
          onClick={toggleProfileMenu}
          className="rounded-full border-2 border-neutral w-12 h-12 cursor-pointer"
        >
          <img src={Avatar} alt="Avatar" className="rounded-full" />
        </button>
      </div>

      {/* Dropdown Menu */}
      {showProfileMenu && (
        <div className="absolute top-20 right-2 bg-neutral shadow-lg rounded-lg w-56 z-50">
          <div className="p-4 border-b text-sm font-medium text-gray-700">
            <p>Name: {userDetails.name || "Loading..."}</p>
            <p>Email: {userDetails.email || "Loading..."}</p>
          </div>
          <ul className="p-2 font-bold">
            <li
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
              onClick={() => navigate("/Location")}
            >
              Location
            </li>
            <li
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
              onClick={() => navigate("/forgotPassword")}
            >
              Settings
            </li>
            <li
              className="py-2 px-4 text-red-500 hover:bg-gray-100 cursor-pointer"
              onClick={async () => {
                await auth.signOut();
                navigate("/SignIn"); // Log out and redirect
              }}
            >
              Logout
            </li>
          </ul>
        </div>
      )}

      <div className="border-b-2 border-b-neutral mt-6"></div>
      {/* Top categories */}
      <div className="flex justify-between items-center m-auto mt-8 w-11/12">
        <div className="bg-secondary p-3 px-8 text-white font-bold rounded-3xl cursor-pointer">
          Top Categories
        </div>
        <div className="text-gray-300 text-2xl cursor-pointer">All</div>
      </div>

      <div className="scroll overflow-x-auto whitespace-nowrap scrollabar-hide flex gap-5 mt-5 px-8 h-1/5">
        <div className="inline-flex gap-5">
          <div className="w-2/4 md:w-4/12 h-5/6 flex-shrink-0">
            <img
              src={Machine1}
              alt="Machine"
              className="w-full rounded-3xl h-full object-cover"
            />
          </div>
          <div className="w-2/4 md:w-4/12 h-5/6 flex-shrink-0">
            <img
              src={Machine2}
              alt="Machine"
              className="w-full rounded-3xl h-full object-cover"
            />
          </div>
          <div className="w-2/4 md:w-4/12 h-5/6  flex-shrink-0">
            <img
              src={Machine1}
              alt="Machine"
              className="w-full h-full rounded-3xl object-cover"
            />
          </div>
          <div className="w-2/4 md:w-4/12 h-5/6  flex-shrink-0">
            <img
              src={Machine2}
              alt="Machine"
              className="w-full h-full  rounded-3xl object-cover"
            />
          </div>
          <div className="w-2/4 md:w-4/12 h-5/6 flex-shrink-0">
            <img
              src={Machine1}
              alt="Machine"
              className="w-full rounded-3xl h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Stores */}
      <div>
        <div className="flex justify-between items-center m-auto mt-8 w-11/12">
          <div className="flex items-center  bg-secondary w-15 mt-5 p-3 px-5 text-white font-bold rounded-3xl cursor-pointer">
            <p>Stores</p>
            <RiArrowDropDownLine className="w-8 h-6" />
          </div>

          {/* Cart image */}
          <button onClick={() => navigate("/Cart")} className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 w-6 inline-block text-gray-900 dark:text-gray-400  "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <div className="w-3 h-3 bg-red-500 text-white rounded-full absolute top-0 right-3 flex items-center justify-center text-xs"></div>
          </button>
        </div>

        {/* Stores list */}
        <div className="flex flex-wrap gap-4 justify-between w-11/12 mt-5 mx-auto">
          {storeItems.map((item) => (
            <div
              key={item.id}
              className="relative w-5/12 sm:w-1/4 md:w-1/4 rounded-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full object-cover rounded-xl"
              />
              <div className="absolute bottom-0 flex justify-between bg-secondary w-full p-3 rounded-b-2xl">
                <p className="text-white font-bold">${item.price / 1000}k</p>
                <button
                  onClick={() => addToCart(item)}
                  className="font-bold text-white"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* patner with us */}
        <div className="flex justify-between items-center bg-white w-11/12 m-auto px-5">
          <div>
            <p className="font-bold text-pretty ">
              {" "}
              Looking to <br /> partner with us?
            </p>
            <p className="text-neutral pt-3 cursor-pointer">Click here</p>
          </div>
          <div>
            <p className="font-bold">Or</p>
          </div>
          <div>
            <p className="font-bold">
              Are you a <br /> professional rider?
            </p>
            <p className="text-neutral pt-3 cursor-pointer">Click here</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-11/12 m-auto mt-12 ">
        <button onClick={toggleProfileMenu}>
          <img src={ProfileIcon} alt="" className="cursor-pointer" />
        </button>
        <button onClick={() => navigate("/Cart")}>
          <img src={CartIcon} alt="" className="cursor-pointer" />
        </button>
        <button onClick={() => navigate("/Payment")}>
          <img src={CardIcon} alt="" className="cursor-pointer" />
        </button>
        <button onClick={() => navigate("/forgotPassword")}>
          <img src={SettingIcon} alt="" className="cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default DashBoard;
