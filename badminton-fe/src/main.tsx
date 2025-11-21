// src/main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom' // 1. Import thư viện
import { router } from './router' // 2. Import file router cấu hình lúc nãy

// import App from './App.tsx' <-- 3. Bỏ dòng này đi, không dùng trực tiếp nữa

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 4. Thay App bằng RouterProvider */}
    <RouterProvider router={router} />
  </StrictMode>,
)