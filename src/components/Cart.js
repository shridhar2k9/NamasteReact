import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeCart } from "../utils/Store/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.item);
  const removecartDispatch = useDispatch();

  // Calculate subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleRemoveCart = (item) =>{
    removecartDispatch(removeCart(item))
  }

  return (
    <div className="max-w-5xl mx-auto px-8 py-10 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 bg-white rounded-lg shadow-md p-6"
            >
              {/* Thumbnail */}
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-md border"
              />

              {/* Item Info */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.brand}</p>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="text-sm text-gray-700 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Price & Actions */}
              <div className="text-right">
                <p className="text-lg font-bold text-green-600">
                  ${item.price.toFixed(2)}
                </p>
                <p className="text-sm text-gray-500">
                  {item.availabilityStatus}
                </p>
                <button className="mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors" onClick={()=>handleRemoveCart(item)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Cart Summary */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Subtotal</span>
              <span className="font-bold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Shipping</span>
              <span className="font-bold">Free</span>
            </div>
            <div className="flex justify-between text-gray-800 text-lg font-bold border-t pt-4">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
