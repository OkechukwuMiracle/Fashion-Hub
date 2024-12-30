import { useEffect, useState } from "react";
import { auth, db } from "../FirebaseAuth/firebase";
import { getDoc, doc } from "firebase/firestore";
// import { ToastContainer, toast } from "react-toastify";

const profile = () => {
  const [userDetails, setUserDetails] = useState("");
  const fetchUserData = async ()=> {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User not logged in")
      };
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    await auth.signOut();

  }

  return (
    <div>
      {userDetails ? (
        <div>
          <h1>Welcome {userDetails.fname} </h1>
          <div>
            <p>Email: {userDetails.email}</p>
            <p>FullName: {userDetails.fname} </p>
          </div>
          <button onClick={handleLogout}>Log out</button>
        </div>
      ) : (
        <p className="">Loading...</p>
      )}
    </div>
  );
};

export default profile;
