import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Paypal from "../../assets/paypal.png";
import Visa from "../../assets/Visa.png";
import masterCard from "../../assets/mastercard.png";
import americanExpress from "../../assets/american-express.png";
import verve from "../../assets/verve.png";
import { PaystackButton } from "react-paystack";

const Payment = () => {
  const navigate = useNavigate();

  const publicKey = "pk_test_36392ac91d06328fb900642898a0c5079de2b1c4";

  const [email, setEmail] = useState();
  const [amount, setAmount] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();

  const componentProps = {
    email,
    amount: amount * 100,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>{navigate("/dashBoard"), alert("Success🎉!!")} ,
    onClose: () => alert("Are you sue you want to close?"),
  };

  const style = {
    input:
      "w-full px-4 py-3 mb-6 rounded-xl border border-neutral focus:outline-none font-bold",
    button:
      "block w-full px-4 py-3 rounded-md bg-secondary text-white font-bold text-2xl cursor-pointer rounded-xl",
  };

  return (
    <div className="relative">
      <div className="flex items-center md:w-3/5 m-auto pt-6 pb-6 px-2 gap-10 border-b-2 border-b-neutral">
        <IoIosArrowBack
          className="text-2xl cursor-pointer"
          onClick={() => navigate("/Checkout")}
        />
        <p className="font-bold text-3xl text-secondary ">Payment Method</p>
      </div>
      <div className="md:w-3/5 m-auto mt-5 mb-4 pb-3 pl-4 border-neutral border-b-2">
        <img src={Paypal} alt="Paypal" className="w-1/6 " />
      </div>
      <div className="md:w-3/5 m-auto flex gap-3 pl-4">
        <img src={Visa} alt="" />
        <img src={masterCard} alt="" />
        <img src={americanExpress} alt="" />
        <img src={verve} alt="" />
      </div>
      <div className="md:w-3/5 m-auto mt-7 ">
        <input
          type="text"
          value={name}
          placeholder="Full name"
          className={style.input}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          value={email}
          placeholder="Email Address"
          className={style.input}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="number"
          value={phone}
          placeholder="Phone Number"
          className={style.input}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="number"
          value={amount}
          placeholder="Amount"
          className={style.input}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <PaystackButton
          type="button"
          className={style.button}
          {...componentProps}
        />
      </div>
    </div>
  );
};

export default Payment;
