import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const responseSuccessHandler = (response) => {
  return response;
};

const responseErrorHandler = (error) => {
  if (error.response.status === 401) {
    localStorage.clear();
    window.location.href = `/login`;
  }

  return Promise.reject(error);
};

api.interceptors.response.use(
  (response) => responseSuccessHandler(response),
  (error) => responseErrorHandler(error)
);

export default api;
