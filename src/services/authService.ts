import API from "../repositories/APINoAuth";
import userPayload from "../types/user.type";

const resource = 'account';

const login = (userData:userPayload) => {
  return API.post(`/login/`, userData).then((response) => {    
    return response.data;
  });
};

const authService = {
    login
  };
  
  export default authService;