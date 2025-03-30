import { useState } from "react";

const Counter = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <button onClick={() => setQuantity((prev) => prev - 1)}>-</button>
      {quantity}
      <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
    </>
  );
};

export default Counter;
