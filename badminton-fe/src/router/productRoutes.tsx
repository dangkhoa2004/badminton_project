import type { RouteObject } from "react-router-dom";
// Import các trang tương ứng
import ProductList from "../pages/products/ProductList"; // hoặc path file của bạn
// import ProductDetail from "../pages/products/ProductDetail"; // Ví dụ

export const productRoutes: RouteObject[] = [
  {
    path: "products", // Đường dẫn: /products
    element: <ProductList />,
  },
  {
    path: "products/:id", // Đường dẫn: /products/123
    // element: <ProductDetail />,
    element: <div>Trang chi tiết sản phẩm (Demo)</div>,
  },
];