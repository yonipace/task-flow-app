import { useCallback, useState } from "react";
import CredentialsModel from "../Model/CredentialsModel";
import appConfig from "../Util/Config";

const useLogin = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);

  const sendRequest = useCallback(
    async (credentials: CredentialsModel, applyData: Function) => {
      setLoading(true);
      setResponse(false);
      setError("");
      try {
        const response = await fetch(appConfig.baseUrl + "login", {
          body: JSON.stringify(credentials),
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          setLoading(false);
          const err = await response.json();

          throw new Error(err.message);
        }

        if (response.ok) {
          setLoading(false);
          const token = await response.text();
          applyData(token);
        }
      } catch (e: any) {
        setError(e);
        setLoading(false);
      }
    },
    []
  );

  return {
    error,
    loading,
    response,
    sendRequest,
  };
};

export default useLogin;
