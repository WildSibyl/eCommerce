const API_URL = import.meta.env.VITE_APP_ECOMMERCE_API_URL;

if (!API_URL) {
  throw new Error("API URL is required, are you missing a .env file?");
}

const baseUrl = `${API_URL}/ping`;

export const ping = async () => {
  const res = await fetch(baseUrl);

  if (!res.ok) {
    throw new Error(`Ping failed: ${res.status} ${res.statusText}`);
  }

  //const data = await res.text();
  //return console.log(data);
};
