// src/api/index.tsx
import axios from 'axios';

// Khai báo đường dẫn của Backend (Node.js đang chạy)
// Ví dụ: Node.js chạy ở cổng 3000
const BASE_URL = 'http://localhost:3000/api'; 

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // Hủy request nếu chờ quá 10s
  headers: {
    'Content-Type': 'application/json',
  },
});

// (Tùy chọn) Cấu hình Interceptors để xử lý Token đăng nhập tự động
api.interceptors.request.use(
  (config) => {
    // Lấy token từ localStorage nếu có
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;