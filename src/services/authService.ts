import API from "../repositories/APINoAuth";
import userPayload from "../types/user.type";

const resource = 'account';

const login = (userData:userPayload) => {

  //For Api Call
  // return API.post(`/login/`, userData).then((response) => {    
  //   return response.data;
  // });

  // For Mock Data
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if( userData.username === 'text' && userData.password === 'test') {
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

const authService = {
    login
  };
  
  export default authService;