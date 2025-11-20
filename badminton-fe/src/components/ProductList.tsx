import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

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

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/api/products')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h2 style={{ 
        textAlign: 'center', 
        margin: '40px 0', 
        fontSize: '2rem', 
        color: '#1e293b',
        textTransform: 'uppercase' 
      }}>
        Sản Phẩm Mới Nhất
      </h2>

      {loading ? (
        <p style={{textAlign: 'center'}}>Đang tải dữ liệu...</p>
      ) : (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '30px' 
        }}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;