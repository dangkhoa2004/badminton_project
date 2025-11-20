import { FaCartPlus } from "react-icons/fa";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  player_level?: string;
  play_style?: string;
  weight?: string;
}

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

export default ProductCard;