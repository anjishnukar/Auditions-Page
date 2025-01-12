import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_APP_ENV === 'production' ? "http://13.233.12.242:800" : 'http://localhost:8000';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL, 
  timeout: 10000, // Optional: Set a timeout for requests
});

// Add a request interceptor to include the token
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken'); // Retrieve token from localStorage (or cookies)
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`; // Attach token
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Handle responses and errors globally
axiosInstance.interceptors.response.use(
  (response) => {
    return response; // Return successful response
  },
  (error) => {
    // Optionally, handle token expiration or other errors globally
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized! Redirecting to login...');
      // Add logic to log out the user or redirect to login
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
