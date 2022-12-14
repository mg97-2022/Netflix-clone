import { useCallback, useState } from "react";

const useHttp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(async (requiredInfo) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(requiredInfo.url, {
        method: requiredInfo.method ? requiredInfo.method : "GET",
        body: requiredInfo.body ? JSON.stringify(requiredInfo.body) : null,
        headers: requiredInfo.headers ? requiredInfo.headers : {},
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error.message);
      }
      setIsLoading(false);
      return data;
    } catch (error) {
      setError(error.message || "Something went wrong!!");
    }
  }, []);
  return {
    sendRequest,
    error,
    isLoading,
  };
};

export default useHttp;
