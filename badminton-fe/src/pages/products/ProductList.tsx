import { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import api from "../../api/index";

// --- 1. Định nghĩa Interface chung ---
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  player_level?: string;
  play_style?: string;
  weight?: string;
}

// --- 2. Component con: ProductCard ---
// (Trước đây là file ProductCard.tsx riêng biệt)
const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="card">
      <div className="card-img-box">
        <img src={product.image} alt={product.name} />
      </div>
      
      <div className="card-info">
        <h3 title={product.name}>{product.name}</h3>
        <span className="price">
          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
        </span>

        {/* Hiển thị thông số dạng Badge */}
        <div className="specs-row">
          {product.play_style && <span className="badge">{product.play_style}</span>}
          {product.weight && <span className="badge">{product.weight}</span>}
          {product.player_level && <span className="badge">Trình độ: {product.player_level}</span>}
        </div>

        <button className="btn-card">
          <FaCartPlus /> THÊM VÀO GIỎ
        </button>
      </div>
    </div>
  );
};

// --- 3. Component chính: ProductList ---
const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Lỗi tải danh sách sản phẩm:", err));
  }, []);

  return (
    <div className="container" style={{ marginTop: "40px" }}>
      <div className="section-header">
        <h2 className="section-title">KHÁM PHÁ BỘ SƯU TẬP</h2>
        <p className="section-subtitle">Những sản phẩm được yêu thích nhất</p>
      </div>

      <div className="grid-layout">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;