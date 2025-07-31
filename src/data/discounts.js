const API_URL = import.meta.env.VITE_APP_ECOMMERCE_API_URL;

if (!API_URL) {
  throw new Error("API URL is required, are you missing a .env file?");
}

const baseUrl = `${API_URL}/discount`;

export const applyDiscount = async (code) => {
  try {
    const response = await fetch(`${baseUrl}`, {
      method: "POST",
      credentials: "include", // Sends cookies for authentication
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to apply discount");
    }

    const discountData = await response.json();
    //console.log("Discount applied:", discountData);

    // For example: subtract from order total
    return discountData;
  } catch (err) {
    console.error("Error applying discount:", err.message);
    throw new Error(`Failed to apply discount: ${err.message}`);
  }
};
