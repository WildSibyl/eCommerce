import { useState, useEffect } from "react";

export const useAddToCart = () => {
  const [cart, setCart] = useState(() => {
    // Ensure we always get an array, even if localStorage is empty
    const savedCart = JSON.parse(localStorage.getItem("cartProducts")) || [];
    return savedCart;
  });

  console.log(`cartProducts array created: ${cart}`);

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cart));
  }, [cart]);

  const addProduct = (product) => {
    let updatedCart = [...cart];

    const cartProductData = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      description: product.description,
      brand: product.brand,
      model: product.model,
      color: product.color,
      category: product.category,
      popular: product.popular,
      discount: product.discount,
      // rating: product.rating,
      quantity: 1,
    };

    console.log("pokemonData Fav:", cartProductData);

    // Check if product already exists in cart
    const exists = updatedCart.some((item) => item.id === product.id);
    if (exists) {
      // If it exists, increase the quantity
      updatedCart = updatedCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      // If it doesn't exist, add it to the cart
      updatedCart.push(cartProductData);
    }

    // Update local storage
    localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
    setCart(updatedCart); // Update state of the cart

    console.log("cartProducts array updated: ", updatedCart);
  };

  const decreaseQuantity = (productId) => {
    let updatedCart = cart.map((item) =>
      item.id === productId
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    );

    localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const removeProduct = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
    setCart(updatedCart); // Update state of the cart
  };

  // Calculate total number of items in cart
  const cartItems = cart.reduce((acc, product) => acc + product.quantity, 0);

  return { cart, addProduct, decreaseQuantity, removeProduct, cartItems };
};
