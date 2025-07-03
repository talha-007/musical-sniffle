import axios from "axios";

export const API_URL =
  "https://test.studentcheatsheet.com/garbage-backend-laravel/public/";
export const IMAGE_BASEURL =
  "https://test.studentcheatsheet.com/garbage-backend-laravel/public/";
// export const API_URL = "http://127.0.0.1:8000/";
// export const IMAGE_BASEURL = "http://127.0.0.1:8000";

export const callAPi = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export const callAPiMultiPart = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "multipart/form-data",
  },
});

callAPiMultiPart.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token && token !== undefined) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

callAPi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token && token !== undefined) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor for error handling
callAPi.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorMessage =
      error.response?.data?.message || error.message || "An error occurred";
    console.error("API Error:", error);
    return Promise.reject({
      message: errorMessage,
      status: error.response?.status,
      data: error.response?.data,
    });
  }
);

callAPiMultiPart.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorMessage =
      error.response?.data?.message || error.message || "An error occurred";
    console.error("API Error:", error);
    return Promise.reject({
      message: errorMessage,
      status: error.response?.status,
      data: error.response?.data,
    });
  }
);
