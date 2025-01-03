import { TiDelete } from "react-icons/ti";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, removeFromCart }) => {
  const navigate = useNavigate();

  return (
    <div className=" text-black relative">
      <div className="flex items-center md:w-3/5 m-auto pt-6 pb-6 px-2 gap-10 border-b-2 border-b-neutral">
        <IoIosArrowBack
          className="text-2xl cursor-pointer"
          onClick={() => navigate("/DashBoard")}
        />
        <p className="font-bold text-3xl text-secondary ">Your Cart</p>
      </div>
      {cart.length === 0 ? (
        <p className="text-center mt-10">Your cart is empty.</p>
      ) : (
        <ul className="mt-6 md:w-3/5 m-auto text-black rounded-lg p-4 relative">
          {cart.map((item, index) => (
            <li
              key={index}
              className=" justify-between items-center mb-4 rounded-md p-4 shadow-md relative"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full max-h-96 object-cover rounded-md "
                />
              </div>
              <div className="absolute top-64 left-9  md:left-12 lg:left-20 bg-gradient-to-b from-neutral to-darkgold p-6 py-4 rounded-md flex justify-between w-4/5">
                <p className="font-bold text-1x">{item.name}</p>
                <div className="">
                  <p className="font-bold">Price</p>
                  <div className="flex gap-4 items-center text-center">
                    <p className="font-bold">${item.price / 1}k</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 text-white px-1 py-1 rounded-full mt-2 font-bold"
                    >
                      <TiDelete />
                    </button>
                  </div>
                </div>
              </div>
            
          <div>
            <div className="px-5 py-2 mt-5 text-lg bg-secondary rounded-2xl w-1/2 md:w-1/4 text-center">
              <p className="text-white font-bold">Features</p>
            </div>
            <li className="list-disc ml-5 font-bold pt-1">
              Lorem ipsum dolor sit
            </li>
            <li className="list-disc ml-5 font-bold pt-1">
              amet consectetur adipisicing elit.
            </li>
            <li className="list-disc ml-5 font-bold pt-1">
              Pariatur et veniam iure asperiores delectus.{" "}
            </li>
            <li className="list-disc ml-5 font-bold pt-1">
              Natus, possimus eveniet explicabo{" "}
            </li>
            <li className="list-disc ml-5 font-bold pt-1">
              atque sed magni dolor odio quaerat facilis
            </li>
            <li className="list-disc ml-5 font-bold pt-1">
              repellendus quidem ab voluptatem tenetur!
            </li>
            <li className="list-disc ml-5 font-bold pt-1">
              {" "}
              quidem ab voluptatem tenetur!
            </li>
          </div>
          </li>
          ))}
          <div className="relative">
              <input
                type="text"
                placeholder="Enter promo code"
                className="realative w-full px-3 py-5 mt-5 rounded-xl border-2 border-black bg-transparent placeholder:text-neutral font-bold text-neutral"
              />
              <p className=" absolute top-11 right-3 font-bold">Apply code</p>
            </div>
            <button
              onClick={() => navigate("/Checkout")}
              className="bg-secondary w-full py-4 text-center mt-7 text-white font-bold text-2xl rounded-xl cursor-pointer"
            >
              Buy now
            </button>
        </ul>
      )}
    </div>
  );
};

export default Cart;
