import axios from 'axios';

const API_URL = 'https://destinasi-wisata.herokuapp.com/api/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        console.log(response);
        if(response?.data?.token){
          localStorage.setItem('token', response.data.token);
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'register', {
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();