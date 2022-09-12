import { useCallback, useState } from "react";

export interface FetchParamsModel {
  url: string;
  method: string;
  body?: object;
}

const useFetch = () => {
  const token = localStorage.getItem("token");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);

  const sendRequest = useCallback(
    async (params: FetchParamsModel, applyData: Function) => {
      setLoading(true);
      setResponse(false);
      setError("");
      try {
        const response = await fetch(params.url, {
          body: JSON.stringify(params.body),
          method: params.method,
          headers: { token, "Content-Type": "application/json" },
          // params.method === "PUT" || "POST"
          //   ? {
          //       token,
          //       "Content-Type": "application/json",
          //     }
          //   : { token },
        });

        if (!response.ok) {
          setLoading(false);
          const err = await response.json();

          throw new Error(err.message);
        }

        if (response.ok) {
          setLoading(false);
          const data = await response.json();

          applyData(data);
        }
      } catch (e: any) {
        setError(e);
        setLoading(false);
      }
    },
    [token]
  );

  return {
    error,
    loading,
    response,
    sendRequest,
  };
};

export default useFetch;
