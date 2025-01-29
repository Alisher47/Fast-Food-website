import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct } from '../../../features/cartSlice';

const AddToCart = () => {
  const cartItems = useSelector((state) => state.cart.products); 
  const dispatch = useDispatch();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-inter font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid gap-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 border p-4 rounded-lg shadow-md">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <p className="font-bold text-black">Price: {item.price}</p>
                <button
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
                  onClick={() => dispatch(removeProduct(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddToCart;
