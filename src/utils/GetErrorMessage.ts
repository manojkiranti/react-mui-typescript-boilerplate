
export const GetErrorMessage = (error:any) => {
    const message =
      (error.response && error.response.data && error.response.data) ||
      error.message ||
      error.toString();
    
    if (typeof message === "string") {
      if(error?.response?.status === 500) {
        return {
          error: {
            message: "Internal Server Error",
          },
        };
      } else {
        
        return {
          error: {
            message: error.message ? error.message:"Something went wrong",
          }
        }
      }
    }
    
    return message;
  };
  