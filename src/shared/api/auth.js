import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://goose-track-backend-fpo9.onrender.com/',
});

function setToken(token) {
  if (token) {
    return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.authorization = '';
}




export async function register(data) {
  const { data: result } = await instance.post('/users/register', data);
  // localStorage.setItem('refreshToken', result.token);
  setToken(result.token);
  return result;
}

export async function login(data) {
  const { data: result } = await instance.post('/users/login', data);
  setToken(result.token);
  // localStorage.setItem('refreshToken', result.token);
  return result;
}

export async function logout() {
  const { data } = await instance.post('/users/logout');
  // localStorage.setItem('refreshToken', '');
  setToken();
  return data;
}

// export async function getCurrent() {
//   try {
//     const refreshToken = localStorage.getItem('refreshToken');
//     setToken(refreshToken);
//     const result = await instance.get('/users/current');
//     return result;
//   } catch (error) {
//     setToken();
//     localStorage.setItem('refreshToken', '');
//     throw error;
//   }
// }
export const getCurrent = async (token)=> {
    try {
      setToken(token);
        const result = await instance.get("/users/current");
        return result;
    }
    catch(error) {
        setToken();
        throw error;
    }
}

export default instance;