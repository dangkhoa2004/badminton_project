import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../components/error_Page/NotFound";
import ProductFeaturePage from "../pages/feature/ProductFeaturePage";
// KHÔI PHỤC IMPORT CHO ROUTES CON
import { productRoutes } from "./productRoutes";

// Component HomePage giả định đã bị xóa vì không còn cần thiết.

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Layout chính (Header/Footer)
    errorElement: <NotFound />,
    children: [
      {
        // ROUTE TRANG CHỦ GỐC (index: true)
        index: true,
        // THAY ĐỔI: Trang chủ giờ là Trang Giới thiệu Sản phẩm mới
        element: <ProductFeaturePage />,
      },

      // Khôi phục việc nhúng các router con từ file productRoutes.js/ts
      ...productRoutes,

      {
        path: "new-arrival",
        element: <ProductFeaturePage />, // Trang giới thiệu sản phẩm mới (Có thể giữ lại hoặc đổi thành một trang khác nếu trùng lặp)
      },
      {
        path: "about",
        element: <div>Về chúng tôi (About Page)</div>,
      },

      // ROUTE 404 (Catch-all)
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
