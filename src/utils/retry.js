const retry = async (fn, retries = 3, delay = 500) => {
  let lastError;
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      if (i < retries - 1) {
        await new Promise((res) => setTimeout(res, delay));
      }
      console.error(`Attempt ${i + 1} failed:`, err);
    }
  }
  throw lastError;
};

export default retry;
