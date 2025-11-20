// Định nghĩa lại interface ở đây hoặc import từ file types chung
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  player_level?: string;
  racket_length?: string;
  play_style?: string;
  shaft_stiffness?: string;
  balance_point?: string;
  game_format?: string;
  weight?: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">
          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
        </p>
        
        {/* Bảng thông số rút gọn */}
        {product.player_level && (
          <table className="specs-table">
            <tbody>
              <tr>
                <td><b>Lối chơi:</b></td>
                <td>{product.play_style}</td>
              </tr>
              <tr>
                <td><b>Độ cứng:</b></td>
                <td>{product.shaft_stiffness}</td>
              </tr>
               <tr>
                <td><b>Trọng lượng:</b></td>
                <td>{product.weight}</td>
              </tr>
            </tbody>
          </table>
        )}

        <div style={{marginTop: 'auto'}}>
           <button className="btn-primary" style={{width: '100%', borderRadius: '8px'}}>
             THÊM VÀO GIỎ
           </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;