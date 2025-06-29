import { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart context not available, itmust be used within an CartContextProvider"
    );
  }
  //console.log("useCart context:", context);
  return context;
};
