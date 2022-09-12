const useExtractErrorMessage = () => {
  const extractMessage = (err: any) => {
    if (typeof err === "string") return err;

    // axios received  an error string from backend"
    if (typeof err.response?.data === "string") return err.response.data;

    // axios received  an error array from backend"
    if (Array.isArray(err.response?.data)) return err.response.data[0];

    // front throw "blah..."
    if (typeof err.message === "string") return err.message;

    console.dir(err); // if non of the above is right
    return "Some error occured, please try again";
  };

  return { extractMessage };
};

export default useExtractErrorMessage;
