import API from "../repositories/APINoAuth";
import userPayload from "../types/user.type";
import userStore from "../types/userstore.type";
import errorResponse from "../types/errorResponse.type";

const resource = 'account';


const login = (userData:userPayload) => {

  //For Api Call
  // return API.post(`/login/`, userData).then((response) => {    
  //   return response.data;
  // });

  // For Mock Data
  return new Promise<userStore>((resolve, reject) => {
    setTimeout(() => {
      if( userData.username === 'test' && userData.password === 'test') {
          resolve({
            name: 'test',
            mobile: 'test',
            token: 'test'
          })
      } else {
        reject({
          message: 'Invalid password'
        })
      }
    },1000)
  })
};


const logout = () => {
  //For Api Call
  // return API.post(`/logout/`, userData).then((response) => {    
  //   return response.data;
  // });

  // For Mock Data
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        message: 'User Logged Out Successfull'
      })
    },1000)
  })
};

const authService = {
    login,
    logout
  };
  
  export default authService;