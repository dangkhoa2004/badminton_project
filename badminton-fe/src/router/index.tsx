import { createBrowserRouter } from "react-router-dom";
import App from "../App"; // Layout chính (chứa Outlet)
import NotFound from "../components/error_Page/NotFound"; // Trang 404 nếu có

// Import các router con
import { productRoutes } from "./productRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Đây là Layout chính (Header/Footer)
    errorElement: <NotFound />,
    // "Trang chính là không có gì" -> nghĩa là nó chỉ là cái vỏ (Wrapper)
    // Các nội dung bên trong sẽ được nạp từ children
    children: [
      // 1. Router cho trang chủ (nếu muốn dashboard mặc định)
      {
        index: true, 
        element: <div>Chào mừng đến với Dashboard (Trang chủ)</div> 
      },
      ...productRoutes,
      {
        path: "about",
        element: <div>Về chúng tôi</div>
      }
    ],
  },
]);