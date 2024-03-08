"use client"
import { useState, useEffect } from "react";
import { client } from "@/app/lib/sanity"; // Import the Sanity client
import Image from "next/image";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from Sanity
        const data = await getData();
        setCartItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getData = async () => {
    // Construct your query to fetch product data from Sanity
    const fullQuery = `*[_type == 'product']`;
    // Fetch data using the Sanity client
    const data = await client.fetch(fullQuery);
    return data;
  };

  const addToCart = (product) => {
    setCart([...cart, product]); // Add the selected product to the cart
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
      {cartItems.map((item) => (
        <div
          key={item._id}
          className="flex items-center justify-between border-b border-gray-200 py-4"
        >
          <div className="flex items-center">
            <Image
              src={urlFor(item.images[0]).url()}
              width={100}
              height={100}
              alt={item.name}
              className="w-16 h-16 mr-4"
            />
            <div>
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">${item.price}</p>
            </div>
          </div>
          {/* Add to Cart button */}
          <button
            onClick={() => addToCart(item)}
            className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      ))}
      <h2 className="text-2xl font-semibold mt-8">Cart Items</h2>
      {cart.map((item) => (
        <div
          key={item._id}
          className="flex items-center justify-between border-b border-gray-200 py-4"
        >
          <div className="flex items-center">
            <Image
              src={urlFor(item.images[0]).url()}
              width={100}
              height={100}
              alt={item.name}
              className="w-16 h-16 mr-4"
            />
            <div>
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">${item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
