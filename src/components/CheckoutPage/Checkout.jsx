// import React from 'react'
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";


const Checkout = ({ cart }) => {
  const navigate = useNavigate();

 

  // Initialize the quantities state with the count of each item in the cart
  const [quantities, setQuantities] = useState(cart.map(() => 1));

  const increase = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const decrease = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
    }
    setQuantities(newQuantities);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item, index) => {
      return total + item.price * quantities[index];
    }, 0);
  };

  return (
    <div className="bg-primary w-screen h-screen relative">
      <div className="flex items-center md:w-3/5 m-auto pt-6 pb-6 px-2 gap-10 border-b-2 border-b-neutral">
        <IoIosArrowBack
          className="text-2xl cursor-pointer"
          onClick={() => navigate("/Cart")}
        />
        <p className="font-bold text-3xl text-secondary ">Order Summary</p>
      </div>

      {cart.length === 0 ? (
        <p className="text-center mt-10">Your cart is empty.</p>
      ) : (
        <ul className="mt-6 md:w-3/5 m-auto text-black rounded-lg p-2 relative">
          {cart.map((item, index) => (
            <li
              key={index}
              className="flex justify-between mb-4 rounded-md p-4 shadow-md relative"
            >
              <div className="relative flex gap-8">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-max-h-96 object-cover rounded-md "
                />
                <div className="">
                  <p className="font-bold text-black text-base md:text-xl">
                    Storm Sewing
                  </p>
                  <p className="font-bold text-base md:text-xl pt-3  text-secondary">
                    {item.name}
                  </p>
                  <div className="flex bg-secondary items-center justify-between p-2 rounded-2xl text-white font-bold text-xl mt-16">
                    <button onClick={() => decrease(index)}>-</button>
                    <h3>{quantities[index]} </h3>
                    <button onClick={() => increase(index)}>+</button>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="">
                  <div className="flex gap-4 items-center text-center">
                    <p className="font-bold  text-secondary text-base md:text-xl">
                      ${(item.price * quantities[index]) / 1000}k
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
          <div className="flex justify-between w-full mb-5 ">
            <p className="font-bold text-xl">Subtotal</p>
            <p className="font-bold text-xl">${calculateTotal() / 1000}k</p>
          </div>
          <div className="flex justify-between w-full mb-5 ">
            <p className="font-bold text-xl">Shipping</p>
            <p className="font-bold text-xl">${calculateTotal() / 1000}k</p>
          </div>
          <div className="flex justify-between w-full ">
            <p className="font-bold text-xl">Grand Total</p>
            <p className="font-bold text-xl">${calculateTotal() / 1000}k</p>
          </div>

          <div>
            <button
              onClick={() => navigate("/Payment")}
              className="bg-secondary w-full py-4 text-center mt-7 text-white font-bold text-2xl rounded-xl cursor-pointer"
            >
              Checkout
            </button>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Checkout;
