import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const totalQuantity = cart.reduce((acc, curr) => acc + curr.qty, 0);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[30vh] h-full p-5 bg-white ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-2xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>

        {cart.length > 0 ? (
          cart.map((food) => {
            return (
              <CartItems
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="text-center text-xl font-bold text-gray-800 mt-10">
            Your cart is empty
          </h2>
        )}

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items : {totalQuantity}</h3>
          <h3 className="font-semibold text-gray-800">Total Amount : {totalPrice}</h3>
          <hr className="w-[90vw] lg:w-[14vw] my-2" />
          <button onClick={() => navigate('/success')} className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[14vw] mb-6">
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-10 right-5 ${totalQuantity > 0 && 'animate-bounce delay-500 transition-all'}`}
      />
    </>
  );
};

export default Cart;
